"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { DeviceCard } from "./DeviceCard";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";

interface Device {
  device_name: string;
  codename: string;
  maintainer: string;
  image_url: string;
  support_group: string;
  github_username: string;
}

const fetchDevices = async (): Promise<Device[]> => {
  const res = await fetch(`/api/devices`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const getDeviceBrand = (deviceName: string): string => {
  const lowerCaseName = deviceName.toLowerCase();
  if (lowerCaseName.includes("pixel")) return "Google";
  if (lowerCaseName.includes("poco")) return "Poco";
  if (lowerCaseName.includes("xiaomi") || lowerCaseName.includes("redmi")) return "Xiaomi";
  if (lowerCaseName.includes("galaxy")) return "Samsung";
  if (lowerCaseName.includes("realme")) return "Realme";
  if (lowerCaseName.includes("moto")) return "Motorola";
  return "Other";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface DeviceGridProps {
  activeFilter: string;
  searchQuery: string;
}

export function DeviceGrid({ activeFilter, searchQuery }: DeviceGridProps) {
  const { data: devices, isLoading, isError } = useQuery({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });

  const filteredDevices = useMemo(() => {
    if (!devices) return [];
    
    return devices.filter(device => {
      const brand = getDeviceBrand(device.device_name);
      const searchLower = searchQuery.toLowerCase();

      const matchesFilter = activeFilter === 'All' || brand === activeFilter;
      const matchesSearch = 
        device.device_name.toLowerCase().includes(searchLower) ||
        device.codename.toLowerCase().includes(searchLower);

      return matchesFilter && matchesSearch;
    });
  }, [devices, activeFilter, searchQuery]);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[420px] rounded-2xl bg-neutral-800" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="col-span-full text-center text-red-500">Failed to load devices.</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {filteredDevices.length > 0 ? (
        filteredDevices.map((device) => (
          <motion.div key={device.codename} variants={itemVariants} className="h-full">
            <DeviceCard
              deviceName={device.device_name}
              codename={device.codename}
              maintainer={device.maintainer}
              imageUrl={device.image_url}
              github_username={device.github_username}
            />
          </motion.div>
        ))
      ) : (
        <p className="col-span-full text-center text-neutral-400">No devices found.</p>
      )}
    </motion.div>
  );
}
