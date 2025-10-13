"use client";

import { useState } from 'react';
import { DeviceFilters } from './DeviceFilters';
import { DeviceCard } from './DeviceCard';
import { motion } from 'framer-motion';

const dummyDevices = [
  {
    device_name: "POCO F6",
    codename: "peridot",
    maintainer: "Drenzzz.",
    image_url: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6.jpg",
  },
  {
    device_name: "POCO F6 PRO",
    codename: "vermeer",
    maintainer: "Lunark",
    image_url: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg",
  },
  {
    device_name: "POCO X3 NFC",
    codename: "surya",
    maintainer: "Skyy丨アラタ",
    image_url: "https://i01.appmifile.com/webfile/globalimg/products/pc/poco-x3-nfc/specs-header.png",
  }
];

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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {dummyDevices.map((device) => (
          <motion.div key={device.codename} variants={itemVariants}>
            <DeviceCard
              deviceName={device.device_name}
              codename={device.codename}
              maintainer={device.maintainer}
              imageUrl={device.image_url}
              onClick={() => alert(`Clicked on ${device.device_name}`)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
