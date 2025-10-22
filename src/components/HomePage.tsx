"use client";

import { HeroSection } from "./HeroSection";
import { WhyAxionOSSection } from "./WhyAxionOSSection";
import { PerformanceSection } from "./PerformanceSection";
import { FamiliarUISection } from "./FamiliarUISection";
import { FeaturesSection } from "./FeaturesSection";
import { GamingSection } from "./GamingSection";
import { CommunitySection } from "./CommunitySection";
import { FaqSection } from "./FaqSection";
import { ScrollAnimation } from "./ScrollAnimation";

export function HomePage() {
  return (
    <>
      <HeroSection />

      <ScrollAnimation>
        <WhyAxionOSSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <PerformanceSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <FamiliarUISection />
      </ScrollAnimation>
      <ScrollAnimation>
        <FeaturesSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <GamingSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <CommunitySection />
      </ScrollAnimation>
      <ScrollAnimation>
        <FaqSection />
      </ScrollAnimation>
    </>
  );
}
