import { useState } from 'react';
import { DeviceFilters } from './DeviceFilters';
import { DeviceGrid } from './DeviceGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DeviceModalContent } from './DeviceModal';

const queryClient = new QueryClient();

export function DownloadsContent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

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
          <DialogContent className="bg-neutral-900 border-neutral-700">
            <DialogHeader>
              <DialogTitle className="text-green-300">Available Downloads for <span className="font-mono">{selectedDevice}</span></DialogTitle>
            </DialogHeader>
            {selectedDevice && <DeviceModalContent codename={selectedDevice} />}
          </DialogContent>
        </Dialog>
      </div>
    </QueryClientProvider>
  );
}
