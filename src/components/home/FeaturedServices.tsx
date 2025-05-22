import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Target, BarChart, DollarSign } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { services } from '../../data';

export function FeaturedServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Get only the first 4 services
  const featuredServices = services.slice(0, 4);
  
  // Map service icons to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    'briefcase': <Briefcase className="h-6 w-6" />,
    'target': <Target className="h-6 w-6" />,
    'bar-chart': <BarChart className="h-6 w-6" />,
    'dollar-sign': <DollarSign className="h-6 w-6" />
  };

  return (
    <section className="section bg-muted">
      <div className="container-custom">
        <SectionHeading 
          title="Our Services" 
          subtitle="What We Offer"
        >
          <p>We provide comprehensive business solutions tailored to your specific needs. Our expertise spans across multiple domains to help your business thrive.</p>
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card hover className="h-full">
                <Card.Header>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                      {iconMap[service.icon] || <Briefcase className="h-6 w-6" />}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card.Header>
                <Card.Footer className="bg-transparent">
                  <AnimatePresence>
                    {hoveredCard === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          href={`/services`}
                          variant="ghost"
                          className="w-full justify-center mt-2"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}