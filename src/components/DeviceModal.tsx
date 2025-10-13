"use client";

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { Download, HardDrive, Calendar, FileCode, Users, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Build {
  version: string;
  datetime: number;
  filename: string;
  size: number;
  url: string;
}
interface DeviceDetails {
  gms: Build | null;
  vanilla: Build | null;
  changelog: string | null;
  support_group: string | null;
}
interface DeviceInfo {
  name: string;
  codename: string;
  maintainer: string;
  imageUrl: string;
}

const fetchDeviceDetails = async (codename: string, supportGroup: string): Promise<DeviceDetails> => {
  const res = await fetch(`/api/devices/${codename}?support_group=${encodeURIComponent(supportGroup)}`);
  if (!res.ok) throw new Error('Failed to fetch device details');
  return res.json();
};

const BuildCard = ({ type, build }: { type: 'GMS' | 'Vanilla', build: Build | null }) => {
  if (!build) return <p>No {type} build available.</p>;

  const sizeMB = (build.size / 1024 / 1024).toFixed(1);
  const buildDate = new Date(build.datetime * 1000).toLocaleDateString('en-CA');

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">{type} Build</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-neutral-300 space-y-2">
        <p className="flex items-center"><HardDrive className="mr-2 h-4 w-4 text-green-400" /> Version: {build.version}</p>
        <p className="flex items-center"><Calendar className="mr-2 h-4 w-4 text-green-400" /> Build Date: {buildDate}</p>
        <p className="flex items-center break-all"><FileCode className="mr-2 h-4 w-4 text-green-400 flex-shrink-0" /> {build.filename}</p>
        <a href={build.url} target="_blank" rel="noopener noreferrer" className="pt-2 block">
          <Button className="w-full bg-green-300 text-black hover:bg-green-400">
            <Download className="mr-2 h-4 w-4" /> Download ({sizeMB} MB)
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}

export function DeviceModalContent({ deviceInfo, supportGroup }: { deviceInfo: DeviceInfo, supportGroup: string }) {
  const [activeTab, setActiveTab] = useState<'gms' | 'vanilla' | undefined>(undefined);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['deviceDetails', deviceInfo.codename],
    queryFn: () => fetchDeviceDetails(deviceInfo.codename, supportGroup),
    enabled: !!deviceInfo.codename,
  });

  useEffect(() => {
    if (data) {
      if (data.gms) setActiveTab('gms');
      else if (data.vanilla) setActiveTab('vanilla');
      else setActiveTab(undefined);
    }
  }, [data]);

  const availableBuilds = (data?.gms ? 1 : 0) + (data?.vanilla ? 1 : 0);

  if (isLoading) {
    return <Skeleton className="h-96 w-full bg-white/10 rounded-lg" />;
  }
  if (isError) {
    return <p className="text-red-500 text-center py-8">Failed to load download details.</p>;
  }

  return (
    <div className="space-y-6 max-h-[85vh] overflow-y-auto custom-scrollbar p-1 pr-4">
      <img src={deviceInfo.imageUrl} alt={deviceInfo.name} className="mx-auto h-56 w-auto object-contain"/>

      <Card className="bg-white/5 border-white/10 text-center">
        <CardContent className="p-4">
          <h3 className="text-2xl font-bold">{deviceInfo.name}</h3>
          <p className="font-mono text-neutral-400">{deviceInfo.codename}</p>
          <p className="text-sm text-neutral-300 mt-1">Maintained by <span className="text-green-300">{deviceInfo.maintainer}</span></p>
        </CardContent>
      </Card>

      {availableBuilds > 0 ? (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'gms' | 'vanilla')} className="w-full">
          <TabsList className={`grid w-full ${availableBuilds === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {data?.gms && <TabsTrigger value="gms">GApps</TabsTrigger>}
            {data?.vanilla && <TabsTrigger value="vanilla">Vanilla</TabsTrigger>}
          </TabsList>
          {data?.gms && <TabsContent value="gms" className="mt-4"><BuildCard type="GMS" build={data.gms} /></TabsContent>}
          {data?.vanilla && <TabsContent value="vanilla" className="mt-4"><BuildCard type="Vanilla" build={data.vanilla} /></TabsContent>}
        </Tabs>
      ) : <p className="text-center text-neutral-400 py-8">No official builds found for this device yet.</p>}

      {data?.changelog && (
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-base flex items-center"><FileText className="mr-2 h-4 w-4" /> Device Changelog</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs text-neutral-300 whitespace-pre-wrap font-sans max-h-32 overflow-y-auto custom-scrollbar">{data.changelog}</pre>
          </CardContent>
        </Card>
      )}

      {data?.support_group && (
        <a href={data.support_group} target="_blank" rel="noopener noreferrer" className="pt-2 block">
          <Button variant="outline" className="w-full">
            <Users className="mr-2 h-4 w-4" /> Support Group
          </Button>
        </a>
      )}
    </div>
  );
}
