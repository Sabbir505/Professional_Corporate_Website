import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="section py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward sustainable growth and operational excellence. 
              Our team of experts is ready to help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                href="/contact" 
                size="lg"
                variant="secondary"
                className="group"
              >
                Schedule a Consultation
                <PhoneCall className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              
              <Button 
                href="/services" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}