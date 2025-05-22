import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Business team working together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/50"></div>
      </div>
      
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/20 text-secondary rounded-full mb-4">
              Innovative Business Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Businesses for{' '}
            <span className="text-secondary">Tomorrow's Success</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-slate-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help businesses optimize their operations, develop strategic plans, and achieve sustainable growth through innovative solutions and expert guidance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="/contact" size="lg">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="bg-white hover:bg-white/90">
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}