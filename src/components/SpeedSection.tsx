"use client";

import { Button } from './ui/button';

export function SpeedSection() {
  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Less
            {/* Animasi Spinner Baru */}
            <div className="inline-block w-8 h-8 mx-2 border-4 border-dashed rounded-full animate-spin border-green-400"></div>
            <br />
            <span className="text-green-300">More Speed.</span>
          </h2>
          <p className="max-w-md mx-auto md:mx-0 text-lg text-neutral-300 mb-6">
            Your android should work as fast as you do. AxionOS runs lightning quick and doesn't slow down over time. Apps open fast, so you can spend more time being productive.
          </p>
          <a href="/about">
            <Button variant="outline">Learn more about us</Button>
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="/img/screenshot10.png" alt="AxionOS speed" className="max-h-[500px] w-auto" />
        </div>
      </div>
    </section>
  );
}
