"use client";

import { Button } from './ui/button';
import Link from 'next/link';

export function PerformanceSection() {
  return (
    <section id="performance" className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        <div className="md:w-1/2 text-center md:text-left">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Optimized for Speed,
              <br />
              <span className="text-green-300">Built to Last.</span>
           </h2>
           <p className="text-lg text-neutral-300 mb-4">
            AxionOS runs lightning quick without slowing down over time. It&apos;s optimized to run seamlessly even on <strong className="text-green-300 font-semibold">older devices</strong>, helping you extend their lifespan and reduce e-waste.
           </p>
           <p className="text-lg text-neutral-300 mb-8">
             Apps open fast, so you can spend more time being productive or enjoying your device.
           </p>
          <Link href="/about">
            <Button variant="outline" className="backdrop-blur-sm button-glow-effect px-8 py-6 rounded-full ">Learn more about our vision</Button>
          </Link>
        </div>

        <div className="px-24 flex justify-center">
          <img src="/img/screenshot10.png" alt="AxionOS speed and optimization" className="max-h-[500px] w-auto rounded-3xl shadow-xl" />
        </div>
      </div>
    </section>
  );
}
