import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { testimonials } from '../data';

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover why businesses trust us with their most important challenges and how we've helped them achieve remarkable success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <Card.Header>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                      <blockquote className="text-lg italic mb-6 pl-6">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </Card.Header>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Happy Clients', value: '500+' },
              { label: 'Projects Completed', value: '1000+' },
              { label: 'Years of Experience', value: '15+' },
              { label: 'Team Members', value: '50+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Story</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
            </p>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}