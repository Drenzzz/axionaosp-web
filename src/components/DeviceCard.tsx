"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface DeviceCardProps {
  imageUrl: string;
  deviceName: string;
  codename: string;
  maintainer: string;
  onClick: () => void;
}

export function DeviceCard({ imageUrl, deviceName, codename, maintainer, onClick }: DeviceCardProps) {
  return (
    <button onClick={onClick} className="group w-full text-left rounded-2xl">
      <Card className="bg-neutral-800/50 border-neutral-700/80 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:border-green-400/80 group-hover:scale-[1.02] group-hover:bg-neutral-800">
        <CardHeader className="p-0 overflow-hidden aspect-[4/3]">
          <img
            src={imageUrl}
            alt={deviceName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-bold">{deviceName}</CardTitle>
          <p className="text-sm text-neutral-400 font-mono">{codename}</p>
          <p className="text-sm text-neutral-300 mt-2">
            Maintained by <span className="font-semibold text-green-300">{maintainer}</span>
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="w-full text-green-300 flex items-center justify-end text-sm font-semibold">
            View Builds
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </button>
  );
}
