"use client";

import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TeamMemberCard = ({ username, name, avatar, position }: { username: string, name: string, avatar: string, position: React.ReactNode }) => (
  <div className="group w-full h-full">
    <Card className="relative overflow-hidden bg-neutral-900/80 backdrop-blur-md border border-neutral-800 hover:border-green-400/40 p-6 flex flex-col items-center h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-400/10">      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-400/5"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      </div>

      <div className="relative mb-4 z-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/40 to-blue-400/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
        <div className="relative">
          <img 
            src={avatar} 
            alt={username} 
            className="w-20 h-20 rounded-full border-2 border-neutral-700 group-hover:border-green-400/60 object-cover transition-all duration-500 relative z-10" 
            onError={(e) => { e.currentTarget.src = '/img/fallback.png'; }}
          />
        </div>
      </div>

      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-300 transition-colors duration-300 z-10 text-center">
        {name}
      </h4>
      
      <div className="flex-grow w-full mt-3 flex flex-col justify-start items-center z-10 min-h-[60px] max-h-20 overflow-y-auto custom-scrollbar pr-2">
        {typeof position === 'string' ? (
          <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors duration-300 text-center leading-relaxed">{position}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-1.5 max-w-full">
            {position}
          </div>
        )}
      </div>

      <a 
        href={`https://github.com/${username}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 p-2.5 rounded-full bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 z-10 group/icon"
        onClick={(e) => e.stopPropagation()} 
      >
        <Github size={18} className="group-hover/icon:scale-110 transition-transform duration-300" />
      </a>

      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-green-400/0 group-hover:border-green-400/30 transition-all duration-500 rounded-tl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-green-400/0 group-hover:border-green-400/30 transition-all duration-500 rounded-br-2xl"></div>
    </Card>
  </div>
);
