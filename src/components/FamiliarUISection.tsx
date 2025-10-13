"use client";

import { ScreenshotCarousel } from './ScreenshotCarousel';

export function FamiliarUISection() {
  return (
      <section id="screenshots" className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">
          A familiar UI
          <br />
          <span className="text-green-300">
            you already know
            <br />
            how to use.
          </span>
        </h2>
        <ScreenshotCarousel />
      </section>
  );
}
