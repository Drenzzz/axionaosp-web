import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Screenshot in `public/img/`
const screenshotFiles = [
  'screenshot1.png', 'screenshot2.png', 'screenshot3.png',
  'screenshot4.png', 'screenshot5.png', 'screenshot6.png',
  'screenshot7.png', 'screenshot8.png', 'screenshot9.png',
  'screenshot10.png', 'screenshot11.png'
];

export function ScreenshotCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="overflow-hidden w-[300px] md:w-[350px] mx-auto" ref={emblaRef}>
      <div className="flex">
        {screenshotFiles.map((fileName, index) => (
          <div className="relative flex-[0_0_100%] min-w-0" key={index}>
            <img 
              src={`/img/${fileName}`} 
              alt={`AxionOS Screenshot ${index + 1}`}
              className="block w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
