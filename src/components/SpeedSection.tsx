import { Button } from './ui/button';
import { ScrollAnimation } from './ScrollAnimation';

export function SpeedSection() {
  return (
    <ScrollAnimation>
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Less ◌ ◌ ◌
              <br />
              <span className="text-green-300">More Speed.</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-6">
              Your android should work as fast as you do. AxionOS runs lightning quick and doesn't slow down over time. Apps open fast, so you can spend more time being productive.
            </p>
            <a href="/about">
              <Button variant="outline">Learn more about us</Button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/img/screenshot10.png" alt="AxionOS speed" className="max-h-[500px]" />
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}
