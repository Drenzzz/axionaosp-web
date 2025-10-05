import { useState } from 'react';
import { DeviceFilters } from './DeviceFilters';
import { DeviceGrid } from './DeviceGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Buat instance client langsung di sini
const queryClient = new QueryClient();

export function DownloadsContent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
        />
      </div>
    </QueryClientProvider>
  );
}
