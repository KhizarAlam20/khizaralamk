import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const FullScreenCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  
  // Sample images - replace with your actual images
  const images = [
    "/api/placeholder/1200/800", // Replace with your actual image paths
    "/api/placeholder/1200/800",
    "/api/placeholder/1200/800",
    "/api/placeholder/1200/800",
    "/api/placeholder/1200/800"
  ];

  // Set up scroll animations
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end start"]
  });

  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-advance slides every 5 seconds when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const interval = setInterval(() => {
          if (entry.isIntersecting) {
            nextSlide();
          }
        }, 5000);
        
        return () => clearInterval(interval);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={carouselRef}
      style={{ opacity, scale }}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Images */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={image}
            alt={`Project ${index + 1}`}
            className="object-cover w-full h-full"
          />
          
          {/* Caption overlay */}
          <motion.div 
            className="absolute inset-0 flex items-end bg-black bg-opacity-40"
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: currentSlide === index ? 0 : 100,
              opacity: currentSlide === index ? 1 : 0 
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-4xl p-8 text-white md:p-16">
              <h3 className="mb-4 text-3xl md:text-5xl font-display text-yellowText">
                PROJECT {index + 1}
              </h3>
              <p className="mb-6 text-base text-gray-200 md:text-lg font-body">
                Showcase your amazing work with a captivating description. 
                This could be a brief explanation of the project, your role, 
                and the technology used.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 transition-all duration-300 border border-yellowText text-yellowText font-display hover:bg-yellowText hover:text-black"
              >
                VIEW PROJECT
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-8 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-yellowText w-8" : "bg-white/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30 hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30 hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </motion.button>
    </motion.div>
  );
};

export default FullScreenCarousel;