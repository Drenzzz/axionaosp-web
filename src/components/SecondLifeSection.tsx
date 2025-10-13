"use client";

export function SecondLifeSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Give your old android
            <br />
            a <span className="text-green-300">second life</span>.
          </h2>
          <p className="text-lg text-neutral-300">
            <span className="text-green-300">AxionOS</span> is <span className="text-green-300">optimized</span> to run seamlessly on <span className="text-green-300">older android devices</span>, helping you extend their lifespan.
            <span className="text-green-300">Save money</span> on upgrades while contributing to a <span className="text-green-300">greener</span> planet by <span className="text-green-300">reducing e-waste</span>.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/img/screenshot2.png" alt="AxionOS on an older device" className="max-h-[500px]" />
        </div>
      </div>
    </section>
  );
}
