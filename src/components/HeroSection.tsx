import { Button } from "./ui/button";

export function HeroSection() {
  const animatedWords = ["better.", "faster.", "powerful.", "reliable.", "axion."];

  return (
    <section className="h-screen flex items-center justify-center text-center bg-neutral-900 overflow-hidden">
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Make your android
          <br />
          <span className="inline-block overflow-hidden h-[1.2em] align-bottom">
            <span className="inline-block animate-roll">
              {animatedWords.map((word) => (
                <span key={word} className="block text-green-300">
                  {word}
                </span>
              ))}
              <span className="block text-green-300" aria-hidden="true">{animatedWords[0]}</span>
            </span>
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-neutral-300">
          AxionOS is the alternative to manufacturer android skins designed to make your device faster, more powerful and reliable.
        </p>
        <a href="/downloads">
          <Button size="lg" className="mt-8 bg-green-300 hover:bg-green-400 text-black font-bold text-lg px-8 py-6 rounded-full">
            Download AxionOS
          </Button>
        </a>
      </div>
    </section>
  );
}
