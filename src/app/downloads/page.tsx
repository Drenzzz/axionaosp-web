// src/app/downloads/page.tsx
"use client";

import { DownloadsContent } from "@/components/DownloadsContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function DownloadsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="pt-28 pb-16 min-h-screen">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Find AxionOS for Your Device
            </h1>
            <p className="text-lg text-neutral-400 mt-4">
              Begin your journey with a cleaner, faster Android experience. Stable and secure builds for a wide range of devices.
            </p>
          </div>
          <DownloadsContent />
        </div>
      </section>
    </QueryClientProvider>
  );
}
