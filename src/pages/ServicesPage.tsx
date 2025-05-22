import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { services } from '../data';

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive business solutions tailored to your needs. We provide expert guidance and innovative strategies to help your business thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <Card.Image
                    src={service.image}
                    alt={service.title}
                    className="aspect-video object-cover"
                  />
                  <Card.Header>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card.Header>
                  <Card.Footer className="bg-transparent">
                    <Button href="/contact" variant="ghost" className="w-full justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card.Footer>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="Our Advantage"
          >
            <p>Experience the difference of working with a team dedicated to your success.</p>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our team of seasoned professionals brings years of industry experience and expertise.',
              },
              {
                title: 'Tailored Solutions',
                description: 'We develop customized strategies that align with your specific business needs and goals.',
              },
              {
                title: 'Proven Results',
                description: 'Our track record shows consistent success in helping businesses achieve their objectives.',
              },
              {
                title: 'Innovation Focus',
                description: 'We stay ahead of industry trends to provide cutting-edge solutions.',
              },
              {
                title: 'Dedicated Support',
                description: '24/7 support and guidance throughout your business transformation journey.',
              },
              {
                title: 'Value-Driven',
                description: 'Competitive pricing and high ROI on all our services and solutions.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <Card.Header>
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                        <Check className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card.Header>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help your business reach its full potential.
            </p>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}