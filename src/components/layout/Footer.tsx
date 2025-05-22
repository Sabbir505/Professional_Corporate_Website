import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-secondary">Acme</span>
              <span>Corp</span>
            </h3>
            <p className="text-slate-300 mb-4">
              Providing innovative solutions for businesses since 2010. 
              Excellence in service is our commitment to every client.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-300 hover:text-secondary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-slate-300 hover:text-secondary transition-colors">Business Consulting</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-secondary transition-colors">Strategic Planning</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-secondary transition-colors">Market Analysis</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-secondary transition-colors">Financial Advisory</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-secondary transition-colors">Process Optimization</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0 mt-1" />
                <span className="text-slate-300">
                  123 Business Avenue, Suite 200<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <a href="tel:+14155550123" className="text-slate-300 hover:text-secondary transition-colors">
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <a href="mailto:info@acmecorp.com" className="text-slate-300 hover:text-secondary transition-colors">
                  info@acmecorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AcmeCorp. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-slate-400 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-slate-400 hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}