"use client";

import { HeroSection } from "./HeroSection";
import { ScrollAnimation } from "./ScrollAnimation";
import { Suspense, lazy } from "react";

const WhyAxionOSSection = lazy(() => import("./WhyAxionOSSection").then(m => ({ default: m.WhyAxionOSSection })));
const PerformanceSection = lazy(() => import("./PerformanceSection").then(m => ({ default: m.PerformanceSection })));
const FamiliarUISection = lazy(() => import("./FamiliarUISection").then(m => ({ default: m.FamiliarUISection })));
const FeaturesSection = lazy(() => import("./FeaturesSection").then(m => ({ default: m.FeaturesSection })));
const GamingSection = lazy(() => import("./GamingSection").then(m => ({ default: m.GamingSection })));
const CommunitySection = lazy(() => import("./CommunitySection").then(m => ({ default: m.CommunitySection })));
const FaqSection = lazy(() => import("./FaqSection").then(m => ({ default: m.FaqSection })));

const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="animate-pulse">
        <div className="h-8 bg-neutral-700 rounded mb-4 max-w-md mx-auto"></div>
        <div className="h-4 bg-neutral-800 rounded mb-6 max-w-2xl mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-neutral-800 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export function HomePage() {
  return (
    <>
      <HeroSection />

      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <WhyAxionOSSection />
        </ScrollAnimation>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <PerformanceSection />
        </ScrollAnimation>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <FamiliarUISection />
        </ScrollAnimation>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <FeaturesSection />
        </ScrollAnimation>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <GamingSection />
        </ScrollAnimation>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <CommunitySection />
        </ScrollAnimation>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimation>
          <FaqSection />
        </ScrollAnimation>
      </Suspense>
    </>
  );
}
