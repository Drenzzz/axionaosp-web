import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, HardDrive, Calendar, Users, FileText, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://axionaosp.vercel.app';
  
  const detailsRes = await fetch(`${baseUrl}/api/devices/${codename}`, { next: { revalidate: 3600 } });
  if (!detailsRes.ok) notFound();
  const details: DeviceDetails = await detailsRes.json();

  const allDevicesRes = await fetch(`${baseUrl}/api/devices`, { next: { revalidate: 3600 } });
  const allDevices: DeviceInfo[] = await allDevicesRes.json();
  const info = allDevices.find(device => device.codename === codename);

  return { details, info };
}


export default async function DevicePage({ params }: { params: Promise<{ codename: string }> }) {
  const awaitedParams = await params;
  const { details, info } = await getDeviceData(awaitedParams.codename);

  if (!info) {
    notFound();
  }
  
  const avatarUrl = `https://github.com/${info.github_username}.png`;
  const githubUrl = `https://github.com/${info.github_username}`;

  const BuildCard = ({ type, build }: { type: 'GApps' | 'Vanilla', build: Build }) => {
    const sizeMB = (build.size / 1024 / 1024).toFixed(1);
    const buildDate = new Date(build.datetime * 1000).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
  
    return (
      <div className="bg-neutral-800/60 border border-neutral-700 rounded-xl p-5 transition-all duration-300 hover:border-green-400/50 hover:bg-neutral-800 hover:shadow-lg hover:shadow-green-500/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold text-white">{type === 'GApps' ? 'AxionOS - GApps' : 'AxionOS - Vanilla'}</h3>
            <div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-400'>
              <p className="flex items-center gap-2"><HardDrive className="w-4 h-4 text-green-400"/> v{build.version}</p>
              <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-green-400"/> {buildDate}</p>
            </div>
          </div>
          <a href={build.url} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-green-400 text-black font-bold hover:bg-green-500 transition-colors shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/30 button-glow-effect">
              <Download className="mr-2 h-4 w-4" /> Download ({sizeMB} MB)
            </Button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-36 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">
        
        <Button asChild variant="outline" className="backdrop-blur-sm hover:bg-neutral-800 text-neutral-400 hover:text-white px-4 py-2 h-auto button-glow-effect">
            <Link href="/downloads">
                <ChevronLeft className="w-5 h-5 mr-2"/>
                Back to All Devices
            </Link>
        </Button>

        <header className="relative flex flex-col items-center justify-center text-center py-4">
          <img src={info.image_url} alt={info.device_name} className="w-auto h-52 object-contain drop-shadow-2xl mb-4"/>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{info.device_name}</h1>
          <p className="text-lg text-neutral-400 font-mono mt-2">{info.codename}</p>
        </header>

        <Card className="bg-neutral-800/50 backdrop-blur-sm border-neutral-700/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                <img src={avatarUrl} alt={info.maintainer} className="w-14 h-14 rounded-full border-2 border-neutral-600 group-hover:border-green-400 transition-all"/>
                <div>
                    <p className="text-sm text-neutral-400">Maintained by</p>
                    <p className="font-bold text-white text-xl group-hover:underline">{info.maintainer}</p>
                </div>
            </Link>
            {info.support_group && (
                <a href={info.support_group} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-shrink-0">
                    <Button variant="outline" className="w-full bg-transparent hover:bg-neutral-700/80 border-neutral-700 text-base py-6 transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 button-glow-effect">
                        <Users className="mr-2 h-5 w-5 text-green-400" /> Support Group
                    </Button>
                </a>
            )}
        </Card>
        
        <div className="backdrop-blur-sm space-y-4">
            <h2 className="text-2xl font-bold text-white">Available Builds</h2>
            {details.gms && <BuildCard type="GApps" build={details.gms} />}
            {details.vanilla && <BuildCard type="Vanilla" build={details.vanilla} />}
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
                            <pre className="text-sm bg-neutral-900/50 p-4 rounded-lg text-neutral-300 whitespace-pre-wrap font-sans max-h-80 overflow-y-auto custom-scrollbar">
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://axionaosp.vercel.app';
  const res = await fetch(`${baseUrl}/api/devices`);
  const devices: DeviceInfo[] = await res.json();
 
  return devices.map((device) => ({
    codename: device.codename,
  }));
}