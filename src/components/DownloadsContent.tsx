import { useState } from 'react';
import { DeviceFilters } from './DeviceFilters';
import { DeviceGrid } from './DeviceGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DeviceModalContent } from './DeviceModal';

interface SelectedDevice {
  codename: string;
  name: string;
  maintainer: string;
  imageUrl: string;
  supportGroup: string;
}

const queryClient = new QueryClient();

export function DownloadsContent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDevice, setSelectedDevice] = useState<SelectedDevice | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
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

        {/* Render Dialog/Modal */}
        <Dialog open={!!selectedDevice} onOpenChange={(isOpen) => !isOpen && setSelectedDevice(null)}>
          <DialogContent className="bg-neutral-900/80 backdrop-blur-xl border-neutral-700 w-[95%] sm:w-full max-w-lg md:max-w-4xl">
            {selectedDevice && (
              <DeviceModalContent 
                deviceInfo={{
                  name: selectedDevice.name,
                  codename: selectedDevice.codename,
                  maintainer: selectedDevice.maintainer,
                  imageUrl: selectedDevice.imageUrl,
                }}
                supportGroup={selectedDevice.supportGroup}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </QueryClientProvider>
  );
}
