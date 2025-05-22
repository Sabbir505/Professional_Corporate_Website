import { Hero } from '../components/home/Hero';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { AboutPreview } from '../components/home/AboutPreview';
import { TestimonialsPreview } from '../components/home/TestimonialsPreview';
import { CTASection } from '../components/home/CTASection';
import { ContactSection } from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <TestimonialsPreview />
      <CTASection />
      <ContactSection />
    </>
  );
}