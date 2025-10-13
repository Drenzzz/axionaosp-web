"use client";

import { useState } from 'react';
import { DeviceFilters } from './DeviceFilters';
import { DeviceGrid } from './DeviceGrid';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DeviceModalContent } from './DeviceModal';

export interface SelectedDevice {
  codename: string;
  name: string;
  maintainer: string;
  imageUrl: string;
  supportGroup: string;
}

export function DownloadsContent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDevice, setSelectedDevice] = useState<SelectedDevice | null>(null);

  return (
    <div>
      <DeviceFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <DeviceGrid 
        activeFilter={activeFilter} 
        searchQuery={searchQuery}
        onDeviceSelect={setSelectedDevice}
      />

    <Dialog open={!!selectedDevice} onOpenChange={(isOpen) => !isOpen && setSelectedDevice(null)}>
        <DialogContent className="bg-neutral-900/80 backdrop-blur-xl border-neutral-700 w-[95%] sm:w-full max-w-lg md:max-w-4xl">
            <DialogHeader>
            <DialogTitle className="sr-only">{selectedDevice?.name}</DialogTitle>
            </DialogHeader>
            {selectedDevice && (
            <DeviceModalContent 
                deviceInfo={selectedDevice}
                supportGroup={selectedDevice.supportGroup}
            />
            )}
            </DialogContent>
        </Dialog>
    </div>
  );
}
