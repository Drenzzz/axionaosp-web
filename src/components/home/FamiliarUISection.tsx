"use client";

import { ScreenshotCarousel } from "../ScreenshotCarousel";

export function FamiliarUISection() {
  return (
    <section id="screenshots" className="py-20 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
          A familiar UI
          <br />
          <span className="text-green-300">
            you already know
            <br />
            how to use.
          </span>
        </h2>
        <ScreenshotCarousel />
      </div>
    </section>
  );
}
