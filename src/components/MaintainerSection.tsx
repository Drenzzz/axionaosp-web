"use client";

import { Button } from './ui/button';

export function MaintainerSection() {
  return (
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Interested in <span className="text-green-300">Joining Us?</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
            Become an official maintainer for AxionOS, bring official support for your device, and be a part of our growing community.
          </p>
          <a href="/apply">
            <Button variant="outline">Learn More & Apply</Button>
          </a>
        </div>
      </section>
  );
}
