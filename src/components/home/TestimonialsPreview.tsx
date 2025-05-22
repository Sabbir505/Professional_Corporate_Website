import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { testimonials } from '../../data';

export function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="section bg-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container-custom relative">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Testimonials"
        >
          <p>Discover why businesses trust us with their most important challenges.</p>
        </SectionHeading>
        
        <div 
          className="max-w-4xl mx-auto relative py-12 px-6 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large quote icon */}
          <div className="absolute top-0 left-0 text-primary/10">
            <Quote className="w-24 h-24" />
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative h-[280px] md:h-[220px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.5 }}
                className="absolute w-full"
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button href="/testimonials">View All Testimonials</Button>
        </div>
      </div>
    </section>
  );
}