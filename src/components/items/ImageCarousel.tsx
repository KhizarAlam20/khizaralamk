import { useState, useEffect, useRef } from 'react';

export default function ImageCarousel() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [shadowColor, setShadowColor] = useState<string>("#f2f2f2");
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef(0);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Real Pexels images
  const websites = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=600&h=400&fit=crop",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&h=400&fit=crop",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&w=600&h=400&fit=crop",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&w=600&h=400&fit=crop",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=600&h=400&fit=crop",
    },
  ];
  
  // Duplicate websites to create seamless loop effect
  const allWebsites = [...websites, ...websites, ...websites];
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    let animationId: number;
    
    const animate = () => {
      // Speed control - slower when hovered
      const speed = isHovered !== null ? 0.8 : 1.5;
      
      positionRef.current += speed;
      
      // Reset position when first set of images is scrolled past
      // but maintain the visual continuity
      if (positionRef.current >= websites.length * 340) {
        positionRef.current = 0;
      }
      
      carousel.style.transform = `translateX(-${positionRef.current}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, websites.length]);
  
  // Extract average color from image
  const handleMouseEnter = (idx: number) => {
    setIsHovered(idx);
    const img = imgRefs.current[idx];
    if (!img) return;
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let r = 0, g = 0, b = 0, count = 0;
    for (let i = 0; i < data.length; i += 4 * 100) { // sample every 100th pixel
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
    r = Math.round(r / count);
    g = Math.round(g / count);
    b = Math.round(b / count);
    setShadowColor(`rgba(${r},${g},${b},0.45)`);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(null);
    setShadowColor("rgba(0,0,0,0.2)");
  };
  
  return (
    <div className="w-full mt-[-60px] rounded-lg  z-999 hide-scrollbar">
      <div 
        className="relative w-full"
      >
        <div 
          ref={carouselRef} 
          className="flex"
          style={{ willChange: 'transform' }}
        >
          {allWebsites.map((site, index) => (
            <div 
              key={`${site.id}-${index}`} 
              className="p-4 relative flex-shrink-0 w-80"
              style={{ aspectRatio: '4/3', background: 'transparent' }}
            >
              <img
                ref={el => { imgRefs.current[index] = el; }}
                src={site.src}
                alt={`Project ${index % websites.length + 1}`}
                className="object-cover w-full h-full transition-all duration-1000 rounded-xl shadow-xl grayscale-[50] hover:grayscale-0"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
              <div className="absolute px-3 py-1 text-base  text-white rounded bottom-4 left-4  font-body">
                Project {index % websites.length + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}