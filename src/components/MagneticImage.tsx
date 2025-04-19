import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticImageProps {
  src: string;
  alt: string;
  className?: string;
  range?: number;
  strength?: number; // Optional prop to control the movement strength
}

const MagneticImage: React.FC<MagneticImageProps> = ({
  src,
  alt,
  className,
  range = 400,
  strength = 30, // Default strength
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const img = imageRef.current;
      if (!img) return;

      const { left, top, width, height } = img.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < range) {
        const rotateX = -(dy / range) * 10;
        const rotateY = (dx / range) * 10;
        const translateX = (dx / range) * strength;
        const translateY = (dy / range) * strength;
        const scale = 1.05;

        gsap.to(img, {
          x: translateX,
          y: translateY,
          rotateX,
          rotateY,
          scale,
          transformPerspective: 1000,
          transformOrigin: 'center',
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(img, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [range, strength]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
      style={{ willChange: 'transform' }}
    />
  );
};

export default MagneticImage;
