import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const mockFilters = ["All", "Google", "Xiaomi", "Poco", "Samsung"];

export function DeviceFilters() {
  return (
    <div className="mb-10">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <Input
            type="text"
            placeholder="Find your device..."
            className="w-full pl-10 h-12 rounded-full bg-neutral-800 border-neutral-700 focus:ring-green-400"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2">
        {mockFilters.map((filter, index) => (
          <Button
            key={filter}
            variant={index === 0 ? "default" : "secondary"}
            className={
              index === 0
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
