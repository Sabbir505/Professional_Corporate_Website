import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      content: '(415) 555-0123',
      link: 'tel:+14155550123'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      content: 'info@acmecorp.com',
      link: 'mailto:info@acmecorp.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      content: '123 Business Avenue, San Francisco',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Contact Us"
        >
          <p>Have questions or ready to start a project? Reach out to us today.</p>
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <Card.Header>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </Card.Header>
                <Card.Footer className="bg-transparent">
                  <a 
                    href={item.link} 
                    className="text-primary hover:text-primary-dark transition-colors"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.title === 'Visit Us' ? 'Get Directions' : 'Contact Now'}
                  </a>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button href="/contact" size="lg">
            Contact Us For a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}