import { Button } from './ui/button';
import { ScrollAnimation } from './ScrollAnimation';

export function FeaturesSection() {
  return (
    <ScrollAnimation>
      <section id="features" className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Discover 
              <span className="text-green-300"> Features</span>
            </h2>
            <p className="max-w-md mx-auto md:mx-0 text-lg text-neutral-300 mb-6">
              A collection of thoughtfully curated features designed for everyday use—simple, efficient, and never overwhelming. Just what you need, nothing more.
            </p>
            <a href="https://github.com/AxionAOSP/axion_features/blob/lineage-22.1/README.md" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Learn More</Button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/img/screenshot3.png" alt="AxionOS Features" className="max-h-[500px] w-auto" />
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
