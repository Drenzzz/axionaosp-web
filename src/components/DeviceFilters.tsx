"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

const filterButtons = ["All", "Google", "Xiaomi", "Poco", "Samsung", "Realme", "Motorola"];

interface DeviceFiltersProps {
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export function DeviceFilters({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }: DeviceFiltersProps) {
  return (
    <div className="mb-10">
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <Input
            type="text"
            placeholder="Find your device by name or codename..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 h-12 rounded-full bg-neutral-800 border-neutral-700 focus:ring-green-400"
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2">
        {filterButtons.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "default" : "secondary"}
            className={
              activeFilter === filter
                ? "rounded-full bg-green-300 text-black hover:bg-green-400"
                : "rounded-full"
            }
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
}
