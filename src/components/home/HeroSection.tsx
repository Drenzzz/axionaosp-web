"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const animatedWords = ["better.", "faster.", "powerful.", "reliable.", "axion."];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-xl opacity-40"
          onError={() => setVideoError(true)}
        >
          <source 
            src="https://www.quantamagazine.org/wp-content/uploads/2020/03/Axion_Lede_1300wide.mp4" 
            type="video/mp4" 
          />
        </video>
      )}
      
      {videoError && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black z-0" />
      )}
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-[5] bg-gradient-to-t from-neutral-900 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Make your android
              <br />
              <div className="inline-block overflow-hidden h-[1.2em] align-bottom">
                <div className="animate-roll">
                  {animatedWords.map((word, index) => (
                    <div key={`${word}-${index}`} className="block h-[1.2em] leading-[1.2em] text-green-300">
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
              AxionOS is the alternative to manufacturer android skins designed to make your device faster, more powerful and reliable.
            </p>
            <Link href="/downloads">
              <Button 
                size="lg" 
                className="mt-8 bg-green-300 hover:bg-green-400 text-black font-bold text-lg px-8 py-6 rounded-full button-glow-effect"
              >
                Download AxionOS
              </Button>
            </Link>
          </div>
          
          <div className="hidden md:flex md:w-auto justify-center">
            <Image
              src="/img/home.png"
              alt="AxionOS Home Screen"
              width={300}
              height={600}
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain"
              style={{ 
                maxHeight: '600px', 
                width: 'auto',
                contentVisibility: 'auto',
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sz5ECaGHE4vwTBhB3HaGi+G9RFyI4HEfJKc2B1t5yF1nQ6s6kfzNaKwccAT6ADupSJ4dhqp2JJoBYhPdBIvoxthgaSSEdyPEdgUWo9B7h2zFMUdT1fF9OqJdbT5UbUk7KfgUrAAe7FhjrgGEEFRRR4kUtjPFJpn21wdNAn7l9LqRqoSG9dRUj3L3f6Hb7aFLcGwrD3QhbLN6HL7X8/Y6kJeaUv5/kUqkWTgk6sJD0FLgxhOxJCn3/Z5Mf3W7qL2LTwQQhvG2jkMrB0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
