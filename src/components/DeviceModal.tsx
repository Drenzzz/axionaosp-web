import { useQuery } from '@tanstack/react-query';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { Download, HardDrive, Calendar, FileCode } from 'lucide-react';

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
}

const fetchDeviceDetails = async (codename: string): Promise<DeviceDetails> => {
  const res = await fetch(`http://localhost:3001/api/devices/${codename}`);
  if (!res.ok) {
    throw new Error('Failed to fetch device details');
  }
  return res.json();
};

const BuildCard = ({ type, build }: { type: 'GMS' | 'Vanilla', build: Build | null }) => {
  if (!build) return null;

  const sizeMB = (build.size / 1024 / 1024).toFixed(1);
  const buildDate = new Date(build.datetime * 1000).toLocaleDateString('en-CA');

  return (
    <Card className="bg-neutral-800 border-neutral-700">
      <CardHeader className="flex flex-row justify-between items-center pb-2">
        <CardTitle>{type}</CardTitle>
        <a href={build.url} target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-300 text-black hover:bg-green-400">
            <Download className="mr-2 h-4 w-4" /> {sizeMB} MB
          </Button>
        </a>
      </CardHeader>
      <CardContent className="text-sm text-neutral-400 space-y-1">
        <p className="flex items-center"><HardDrive className="mr-2 h-4 w-4" /> Version: {build.version}</p>
        <p className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Build Date: {buildDate}</p>
        <p className="flex items-center truncate"><FileCode className="mr-2 h-4 w-4 flex-shrink-0" /> {build.filename}</p>
      </CardContent>
    </Card>
  )
}

export function DeviceModalContent({ codename }: { codename: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['deviceDetails', codename],
    queryFn: () => fetchDeviceDetails(codename),
    enabled: !!codename, 
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-32 w-full bg-neutral-800" />
        <Skeleton className="h-32 w-full bg-neutral-800" />
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-500">Failed to load download links.</p>;
  }

  return (
    <div className="space-y-4">
      <BuildCard type="GMS" build={data?.gms || null} />
      <BuildCard type="Vanilla" build={data?.vanilla || null} />
      {!data?.gms && !data?.vanilla && <p>No builds found for this device yet.</p>}
    </div>
  )
}
