"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, HardDrive, Calendar, FileText, ClipboardCopy, Check } from 'lucide-react';

function formatBytes(bytes: number, decimals = 1) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatDate(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface Build {
  version: string;
  datetime: number;
  filename: string;
  size: number;
  url: string;
  id: string;
  romtype: string;
}

interface BuildCardProps {
    type: 'GApps' | 'Vanilla';
    build: Build;
}

export function BuildCardClient({ type, build }: BuildCardProps) {
  const sizeFormatted = formatBytes(build.size);
  const buildDate = formatDate(build.datetime);
  const [copied, setCopied] = useState(false);

  const copyMd5 = async () => {
    try {
      await navigator.clipboard.writeText(build.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy MD5: ', err);
      alert('Failed to copy MD5.');
    }
  };

  return (
     <div className="bg-neutral-800/60 border border-neutral-700 rounded-xl p-5 transition-all duration-300 hover:border-green-400/50 hover:bg-neutral-800 hover:shadow-lg hover:shadow-green-500/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {type === 'GApps' ? 'GApps' : 'Vanilla'}
            <span className="text-sm font-normal bg-green-500/10 text-green-300 px-2 py-0.5 rounded">v{build.version}</span>
            </h3>
            <p className="flex items-center gap-2 text-sm text-neutral-400"><Calendar className="w-4 h-4 text-green-400"/> {buildDate}</p>
        </div>

        <div className='space-y-2 text-sm text-neutral-400'>
            <p className="flex items-start gap-2 break-all"><FileText className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /> Filename: <span className="text-neutral-300">{build.filename}</span></p>
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-2"><HardDrive className="w-4 h-4 text-green-400"/> MD5:</span>
                <span className="font-mono text-xs text-neutral-300 truncate flex-1">{build.id}</span>
                <Button
                    variant="ghost"
                    size="sm"
                    className="p-1 h-auto text-neutral-400 hover:text-white hover:bg-neutral-700 relative" // Tambah relative
                    onClick={copyMd5}
                    title="Copy MD5"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <ClipboardCopy className="w-4 h-4" />}
                </Button>
            </div>
        </div>

        <a href={build.url} target="_blank" rel="noopener noreferrer" className="block pt-2">
            <Button className="w-full bg-green-400 text-black font-bold hover:bg-green-500 transition-colors shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/30 button-glow-effect">
            <Download className="mr-2 h-4 w-4" /> Download ({sizeFormatted})
            </Button>
        </a>
     </div>
  );
}
