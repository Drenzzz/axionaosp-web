// src/components/HomePage.tsx
"use client";

import { HeroSection } from "./HeroSection";
import { CommunitySection } from "./CommunitySection";
import { FaqSection } from "./FaqSection";
import { SecondLifeSection } from "./SecondLifeSection";
import { SpeedSection } from "./SpeedSection";
import { GamingSection } from "./GamingSection";
import { FamiliarUISection } from "./FamiliarUISection";
import { FeaturesSection } from "./FeaturesSection";
import { MaintainerSection } from './MaintainerSection'; 
import { ScrollAnimation } from "./ScrollAnimation";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollAnimation>
        <SecondLifeSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <SpeedSection />
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
        <MaintainerSection />
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
