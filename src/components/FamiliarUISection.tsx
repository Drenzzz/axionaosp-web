import { ScrollAnimation } from './ScrollAnimation';
import { ScreenshotCarousel } from './ScreenshotCarousel';

export function FamiliarUISection() {
  return (
    <ScrollAnimation>
      <section id="screenshots" className="py-20 px-4 text-center">
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
    </ScrollAnimation>
  );
}
