"use client";

export function DeviceModalContent({ deviceInfo, supportGroup }: { deviceInfo: any; supportGroup: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{deviceInfo.name}</h2>
      <p>Details for {deviceInfo.codename} will be implemented in the next step.</p>
    </div>
  );
}
