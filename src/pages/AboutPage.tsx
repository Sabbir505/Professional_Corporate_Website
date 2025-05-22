import { motion } from 'framer-motion';
import { Award, Users, History, Target } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { teamMembers, timelineEvents, awards } from '../data';

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AcmeCorp</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Since 2010, we've been at the forefront of business innovation, helping companies transform their operations and achieve sustainable growth through strategic consulting and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with innovative solutions and strategic guidance, enabling them to thrive in an ever-evolving market landscape while maintaining sustainable growth and operational excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading catalyst for business transformation, recognized globally for our commitment to excellence, innovation, and the measurable success we bring to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-muted">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Leadership"
          >
            <p>Our experienced team of professionals is dedicated to your success.</p>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover>
                  <Card.Image
                    src={member.image}
                    alt={member.name}
                    className="aspect-square object-cover"
                  />
                  <Card.Header>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </Card.Header>
                  <Card.Content>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </Card.Content>
                  <Card.Footer className="flex justify-center space-x-4">
                    {Object.entries(member.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </Card.Footer>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Timeline"
          >
            <p>A history of growth, innovation, and success.</p>
          </SectionHeading>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <History className="w-4 h-4" />
                  </div>
                  <div className="flex-1 w-0.5 bg-primary/20"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-xl font-bold text-primary mb-2">{event.year}</div>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <SectionHeading 
            title="Recognition & Awards" 
            subtitle="Achievements"
          >
            <p>Our commitment to excellence has been recognized across the industry.</p>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <Card.Header>
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{award.title}</h3>
                        <p className="text-sm text-muted-foreground">{award.year} - {award.issuer}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{award.description}</p>
                  </Card.Header>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}