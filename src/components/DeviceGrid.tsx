import { DeviceCard } from "./DeviceCard";

// Dummy Data
const mockDevices = [
    {
      "device_name": "POCO F6",
      "codename": "peridot",
      "maintainer": "Drenzzz.",
      "support_group": "https://t.me/drenzzzdiscuzz",
      "image_url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6.jpg"
    },
    {
      "device_name": "POCO F6 PRO",
      "codename": "vermeer",
      "maintainer": "Lunark",
      "support_group": "https://t.me/PocoF6ProSupport",
      "image_url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg"
    },
    {
      "device_name": "POCO X3 NFC",
      "codename": "surya",
      "maintainer": "Skyy丨アラタ",
      "support_group": "https://t.me/ArataXDummy",
      "image_url": "https://i01.appmifile.com/webfile/globalimg/products/pc/poco-x3-nfc/specs-header.png"
    }
];


export function DeviceGrid() {
  const devices = mockDevices;
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {devices.map((device) => (
        <DeviceCard
          key={device.codename}
          deviceName={device.device_name}
          codename={device.codename}
          maintainer={device.maintainer}
          imageUrl={device.image_url}
        />
      ))}
    </div>
  );
}
