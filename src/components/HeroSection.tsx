import { Button } from "./ui/button";

export function HeroSection() {
  const animatedWords = ["better.", "faster.", "powerful.", "reliable.", "axion."];
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-xl opacity-40">
        <source src="https://www.quantamagazine.org/wp-content/uploads/2020/03/Axion_Lede_1300wide.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>

      <div className="relative z-10 container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Make your android
              <br />
              <div className="inline-block overflow-hidden h-[1.2em] align-bottom">
                <div className="animate-roll">
                  {animatedWords.map((word) => (
                    <div key={word} className="block h-[1.2em] leading-[1.2em] text-green-300">
                      {word}
                    </div>
                  ))}
                  <div className="block h-[1.2em] leading-[1.2em] text-green-300" aria-hidden="true">
                    {animatedWords[0]}
                  </div>
                </div>
              </div>
            </h1>
            <p className="max-w-md mx-auto md:mx-0 mt-6 text-lg md:text-xl text-neutral-300">
              AxionOS is the alternative to manufacturer android skins
              designed to make your device faster, more powerful and reliable.
            </p>
            <a href="/downloads">
              <Button size="lg" className="mt-8 bg-green-300 hover:bg-green-400 text-black font-bold text-lg px-8 py-6 rounded-full">
                Download AxionOS
              </Button>
            </a>
          </div>

          <div className="hidden md:flex md:w-auto justify-center">
            <img 
              src="/img/home.png" 
              alt="AxionOS Home Screen" 
              className="max-h-[600px] w-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
