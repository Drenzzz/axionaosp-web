"use client";

import { useState } from 'react';
import { DeviceFilters } from './DeviceFilters';
import { DeviceGrid } from './DeviceGrid';

export function DownloadsContent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
      />

    </div>
  );
}
