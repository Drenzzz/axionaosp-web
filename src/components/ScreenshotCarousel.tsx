"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshotFiles = [
  'screenshot1.png', 'screenshot10.png', 'screenshot2.png', 'screenshot3.png',
  'screenshot4.png', 'screenshot5.png', 'screenshot6.png',
  'screenshot7.png', 'screenshot8.png', 'screenshot9.png', 'screenshot11.png'
];

const emblaOptions: EmblaOptionsType = { 
  loop: true,
};

export function ScreenshotCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onInit);
    onInit();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onInit);
    };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {screenshotFiles.map((fileName, index) => (
            <div className="embla__slide" key={index}>
              <img 
                src={`/img/${fileName}`} 
                alt={`AxionOS Screenshot ${index + 1}`}
                className="w-full h-auto object-contain rounded-2xl shadow-2xl shadow-black/50"
                onError={(e) => { e.currentTarget.src = '/img/fallback.png'; }}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__button embla__button--prev" onClick={scrollPrev}>
        <ChevronLeft size={28} />
      </button>
      <button className="embla__button embla__button--next" onClick={scrollNext}>
        <ChevronRight size={28} />
      </button>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
