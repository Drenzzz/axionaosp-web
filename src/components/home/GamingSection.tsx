export function GamingSection() {
  return (
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-8 border-8 border-black rounded-3xl shadow-lg inline-block">
            <video autoPlay muted loop playsInline className="rounded-2xl">
              <source src="/videos/gameplay.webm" type="video/webm" />
            </video>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Ready. Set. <span className="text-green-300">Game!</span>
          </h2>
          <p className="text-lg text-neutral-300">
            Experience gaming like never before! AxionOS Performance Mode optimizes your device by fine-tuning schedulers and virtual memory, delivering smoother gameplay and faster response times.
          </p>
        </div>
      </section>
  );
}
