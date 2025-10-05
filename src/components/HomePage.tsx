import { HeroSection } from "./HeroSection";
import { CommunitySection } from "./CommunitySection";
import { FaqSection } from "./FaqSection";
import { ScrollAnimation } from "./ScrollAnimation";

export function HomePage() {
  return (
    <>
      <HeroSection />

      <ScrollAnimation>
        <CommunitySection />
      </ScrollAnimation>

      <ScrollAnimation>
        <FaqSection />
      </ScrollAnimation>
      
      {/* <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation> 
      */}
    </>
  );
}
