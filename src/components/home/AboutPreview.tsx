import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export function AboutPreview() {
  const features = [
    'Experienced team of industry experts',
    'Tailored solutions for your business needs',
    'Proven track record of client success',
    'Commitment to excellence and innovation'
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-elevated">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-elevated hidden md:block">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              title="About Our Company" 
              subtitle="Our Story"
              align="left"
            />
            
            <p className="text-muted-foreground mb-6">
              Founded in 2010, AcmeCorp has been at the forefront of providing innovative business solutions to clients across various industries. Our team of experienced professionals is dedicated to helping businesses achieve sustainable growth and success.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3 text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/about">
                Learn More About Us
              </Button>
              <Button href="/testimonials" variant="outline">
                Client Testimonials
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}