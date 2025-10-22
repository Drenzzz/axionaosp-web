import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { CodenamePill } from '@/components/CodenamePill';
import { BuildCardClient } from '@/components/BuildCardClient';
import { DeviceImageClient } from '@/components/DeviceImageClient';
import { MaintainerCardClient } from '@/components/MaintainerCardClient';

interface Build {
  version: string;
  datetime: number;
  filename: string;
  size: number;
  url: string;
  id: string;
  romtype: string;
}
interface DeviceDetails {
  gms: Build | null;
  vanilla: Build | null;
  changelog: string | null;
}
interface DeviceInfo {
  device_name: string;
  codename: string;
  maintainer: string;
  image_url: string;
  support_group: string;
  github_username: string;
}

async function getDeviceData(codename: string): Promise<{ details: DeviceDetails; info: DeviceInfo | undefined }> {
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
     try {
        const detailsRes = await fetch(`${baseUrl}/api/devices/${codename}`, { next: { revalidate: 3600 } });
        if (!detailsRes.ok) throw new Error(`Failed to fetch details for ${codename}`);
        const detailsData = await detailsRes.json();
        const details: DeviceDetails = {
            gms: detailsData.gms,
            vanilla: detailsData.vanilla,
            changelog: detailsData.changelog
        };

        const allDevicesRes = await fetch(`${baseUrl}/api/devices`, { next: { revalidate: 3600 } });
        if (!allDevicesRes.ok) throw new Error('Failed to fetch all devices');
        const allDevices: DeviceInfo[] = await allDevicesRes.json();
        const info = allDevices.find(device => device.codename === codename);

        return { details, info };

    } catch (error) {
        console.error("Error fetching device data:", error);
        const allDevicesResSafe = await fetch(`${baseUrl}/api/devices`, { next: { revalidate: 3600 } }).catch(() => null);
        const allDevicesSafe = allDevicesResSafe && allDevicesResSafe.ok ? await allDevicesResSafe.json() : [];
        const infoSafe = allDevicesSafe.find((device: DeviceInfo) => device.codename === codename);
        return { details: { gms: null, vanilla: null, changelog: null }, info: infoSafe };
    }
}

export default async function DevicePage({  params,}: {  params: Promise<{ codename: string }>;}) {
  const { codename } = await params;
  const { details, info } = await getDeviceData(codename);

if (!info) {
    notFound();
  }

  const avatarUrl = `https://github.com/${info.github_username}.png`;
  const githubUrl = `https://github.com/${info.github_username}`;

  return (
    <div className="pt-36 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">

        <Button asChild variant="outline" className="backdrop-blur-sm hover:bg-neutral-800 text-neutral-400 hover:text-white px-4 py-2 h-auto button-glow-effect">
            <Link href="/downloads">
                <ChevronLeft className="w-5 h-5 mr-2"/>
                Back to All Devices
            </Link>
        </Button>

        <header className="relative flex flex-col items-center justify-center text-center gap-4 py-8">
          <DeviceImageClient
              src={info.image_url}
              alt={info.device_name}
              className="w-auto h-60 md:h-72 object-contain drop-shadow-2xl" 
          />
          <div className="flex flex-col items-center mt-8">
             <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">{info.device_name}</h1>
             <CodenamePill codename={info.codename} />
          </div>
        </header>

        <MaintainerCardClient
            maintainerName={info.maintainer}
            githubUsername={info.github_username}
            avatarUrl={avatarUrl}
            githubUrl={githubUrl}
            supportGroupUrl={info.support_group}
        />

        <div className="backdrop-blur-sm space-y-6">
            <h2 className="text-2xl font-bold text-white">Available Builds</h2>
            {details.gms && <BuildCardClient type="GApps" build={details.gms} />}
            {details.vanilla && <BuildCardClient type="Vanilla" build={details.vanilla} />}
            {!details.gms && !details.vanilla && (
                <div className="text-center text-neutral-400 py-8 bg-neutral-800/50 rounded-lg border border-neutral-700">No official builds found for this device yet.</div>
            )}
        </div>

        {details.changelog && (
             <div className='space-y-4'>
                <h2 className="text-2xl font-bold text-white">Device Changelog</h2>
                <Card className="bg-neutral-800/50 backdrop-blur-sm border-neutral-700/80 transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 py-2">
                    <Accordion type="single" collapsible className="w-full px-2">
                        <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-4 text-lg text-white">
                                <div className="flex items-center px-4">
                                    <FileText className="mr-3 h-5 w-5 text-green-400" /> View Changelog
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4">
                                <pre className="text-sm bg-neutral-900/50 p-4 rounded-lg text-neutral-300 whitespace-pre-wrap font-sans max-h-80 overflow-y-auto custom-scrollbar border border-neutral-700">
                                    {details.changelog}
                                </pre>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
             </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
  try {
    const res = await fetch(`${baseUrl}/api/devices`, { next: { revalidate: 3600 } });
    if (!res.ok) {
        console.error("Failed to fetch devices for static params generation, returning empty array.");
        return [];
    }
    const devices: DeviceInfo[] = await res.json();
    return devices.map((device) => ({
        codename: device.codename,
    }));
  } catch (error) {
    console.error("Error fetching devices for static params generation:", error);
    return [];
  }
}
