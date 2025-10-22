"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, } from 'lucide-react';

interface MaintainerCardProps {
  maintainerName: string;
  githubUsername: string;
  avatarUrl: string;
  githubUrl: string;
  supportGroupUrl?: string | null;
}

export function MaintainerCardClient({
  maintainerName,
  githubUsername,
  avatarUrl,
  githubUrl,
  supportGroupUrl,
}: MaintainerCardProps) {

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      (e.target as HTMLImageElement).src = '/img/fallback.png';
  };

  return (
    <Card className="bg-neutral-800/50 backdrop-blur-sm border-neutral-700/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10">
      <div className="flex items-center gap-4 group w-fit">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <img
            src={avatarUrl}
            alt={maintainerName}
            className="w-14 h-14 rounded-full border-2 border-neutral-600 group-hover:border-green-400 transition-all transform group-hover:scale-105"
            onError={handleImageError}
          />
        </a>
        <div>
          <p className="text-sm text-neutral-400">Maintained by</p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white text-xl group-hover:underline">
            {maintainerName}
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
        {supportGroupUrl && (
          <a href={supportGroupUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full bg-transparent hover:bg-neutral-700/80 border-neutral-700 text-base py-6 transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 button-glow-effect">
              <Users className="mr-2 h-5 w-5 text-green-400" /> Support Group
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
}
