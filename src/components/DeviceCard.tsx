"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

interface DeviceCardProps {
  imageUrl: string;
  deviceName: string;
  codename: string;
  maintainer: string;
  github_username: string;
  onClick: () => void;
}

export function DeviceCard({ 
  imageUrl, 
  deviceName, 
  codename, 
  maintainer, 
  github_username,
  onClick 
}: DeviceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const avatarUrl = `https://github.com/${github_username}.png`;

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group w-full h-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Card className="bg-neutral-800/50 border-neutral-700/80 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:border-green-400/80 group-hover:scale-[1.02] group-hover:bg-neutral-800">        
        <CardHeader className="p-0 relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onError={(e) => { e.currentTarget.style.backgroundImage = `url('/img/fallback.png')`; }}
          />
          <motion.img
            src={imageUrl}
            alt={deviceName}
            className="relative z-10 w-full h-full object-contain p-4"
            onError={(e) => { e.currentTarget.src = '/img/fallback.png'; }}
            animate={{ 
              y: isHovered ? -8 : 0,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-neutral-900/80 to-transparent" />
        </CardHeader>
        <CardContent className="p-6 flex-grow space-y-4">
          <div>
            <CardTitle className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
              {deviceName}
            </CardTitle>
            <p className="text-sm text-neutral-500 font-mono mt-1">
              {codename}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm pt-2">
            <img 
              src={avatarUrl} 
              alt={maintainer} 
              className="w-10 h-10 rounded-full border-2 border-neutral-700 group-hover:border-green-500/50 transition-colors"
            />
            <div>
              <p className="text-xs text-neutral-500">Maintained by</p>
              <p className="font-semibold text-green-400">{maintainer}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <motion.div 
            className="w-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-3 flex items-center justify-between transition-colors"
            whileHover={{ x: 4 }}
          >
            <span className="text-green-400 font-semibold text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              View Builds
            </span>
            <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </CardFooter>
      </Card>
    </motion.button>
  );
}
