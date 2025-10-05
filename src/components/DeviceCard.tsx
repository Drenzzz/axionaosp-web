import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface DeviceCardProps {
  imageUrl: string;
  deviceName: string;
  codename: string;
  maintainer: string;
}

export function DeviceCard({ imageUrl, deviceName, codename, maintainer }: DeviceCardProps) {
  return (
    <Card className="bg-neutral-800 border-neutral-700 overflow-hidden hover:border-green-400 transition-colors">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <img
          src={imageUrl}
          alt={deviceName}
          className="h-24 w-auto object-contain"
        />
        <div className="flex-grow">
          <CardTitle className="text-lg">{deviceName}</CardTitle>
          <CardDescription>
            {codename} by <span className="font-semibold text-green-300">{maintainer}</span>
          </CardDescription>
        </div>
        <Button variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Button>
      </CardHeader>
    </Card>
  );
}
