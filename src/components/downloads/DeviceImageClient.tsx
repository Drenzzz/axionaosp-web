"use client";

import React from 'react';
import Image from 'next/image';

interface DeviceImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function DeviceImageClient({ src, alt }: DeviceImageProps) {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (e.target as HTMLImageElement).src = '/img/fallback.png';
    };

    return (
        <Image
            src={src}
            alt={alt}
            width={180}
            height={208}
            className="object-contain drop-shadow-2xl flex-shrink-0"
            onError={handleImageError}
            unoptimized
        />
    );
}
