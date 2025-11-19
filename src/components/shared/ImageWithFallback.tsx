"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23999'%3EImage not found%3C/text%3E%3C/svg%3E",
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onError={() => {
          if (!error) {
            setError(true);
            setImgSrc(fallbackSrc);
          }
        }}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          <div className="text-center p-4">
            <p className="font-semibold">Image not found</p>
            <p className="text-xs mt-1">{alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
