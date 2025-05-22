import { Testimonial, Service, TeamMember, TimelineEvent, Award } from '../types';

// Services Data
export const services: Service[] = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Comprehensive business consulting services to optimize your operations and maximize growth potential.',
    icon: 'briefcase',
    category: 'consulting',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Strategic Planning',
    description: 'Develop robust strategic plans aligned with your business goals to drive sustainable growth and competitive advantage.',
    icon: 'target',
    category: 'planning',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to identify opportunities, trends, and potential challenges.',
    icon: 'bar-chart',
    category: 'analysis',
    image: 'https://images.pexels.com/photos/7947757/pexels-photo-7947757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Financial Advisory',
    description: 'Expert financial guidance to improve fiscal health, optimize investments, and ensure sustainable growth.',
    icon: 'dollar-sign',
    category: 'financial',
    image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Process Optimization',
    description: 'Streamline business processes to improve efficiency, reduce costs, and enhance overall productivity.',
    icon: 'settings',
    category: 'operations',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Leadership Development',
    description: 'Comprehensive leadership training programs to develop effective management skills and build strong teams.',
    icon: 'users',
    category: 'development',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechInnovate Inc.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Working with AcmeCorp transformed our business approach. Their strategic insights and market analysis helped us increase revenue by 35% in just six months.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Quantum Solutions',
    image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The financial advisory services provided by AcmeCorp were instrumental in helping us secure funding for our expansion. Their expertise is unmatched in the industry.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'GreenPath Ventures',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'AcmeCorp\'s process optimization strategies helped us streamline operations and reduce overhead costs by 22%. Their team was professional and responsive throughout.',
    rating: 4
  },
  {
    id: 4,
    name: 'David Wilson',
    company: 'Global Finance Group',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The leadership development program designed by AcmeCorp has significantly improved our management team\'s performance. We\'ve seen improved employee satisfaction and retention.',
    rating: 5
  },
  {
    id: 5,
    name: 'Jessica Park',
    company: 'Innovate Retail',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'AcmeCorp\'s market analysis provided us with valuable insights that helped us identify new customer segments and tailor our offerings accordingly.',
    rating: 4
  }
];

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Robert Hayes',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Robert has over 20 years of experience in business consulting and leadership. He founded AcmeCorp with a vision to help businesses achieve their full potential through strategic planning and execution.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'robert.hayes@acmecorp.com'
    }
  },
  {
    id: 2,
    name: 'Lisa Morgan',
    role: 'Chief Strategy Officer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With a background in management consulting at top firms, Lisa brings deep expertise in strategic planning and market analysis to help clients navigate complex business challenges.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'lisa.morgan@acmecorp.com'
    }
  },
  {
    id: 3,
    name: 'Daniel Kim',
    role: 'Financial Director',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Daniel is a certified financial analyst with expertise in investment management and financial advisory. He helps clients optimize their financial strategies for sustainable growth.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'daniel.kim@acmecorp.com'
    }
  },
  {
    id: 4,
    name: 'Maria Sanchez',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Maria specializes in process optimization and operational efficiency. Her methodical approach helps clients streamline their business processes and reduce operational costs.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      email: 'maria.sanchez@acmecorp.com'
    }
  }
];

// Company Timeline
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2010',
    title: 'Company Founded',
    description: 'AcmeCorp was established with a mission to provide exceptional business consulting services to clients across various industries.'
  },
  {
    id: 2,
    year: '2012',
    title: 'Expansion of Services',
    description: 'Expanded service offerings to include financial advisory and strategic planning, meeting the growing needs of our client base.'
  },
  {
    id: 3,
    year: '2015',
    title: 'New Headquarters',
    description: 'Moved to a larger office space in downtown San Francisco to accommodate our growing team and client meetings.'
  },
  {
    id: 4,
    year: '2018',
    title: 'International Expansion',
    description: 'Opened our first international office in London, extending our services to clients across Europe.'
  },
  {
    id: 5,
    year: '2021',
    title: 'Digital Transformation',
    description: 'Launched our digital consulting practice to help clients navigate the rapidly evolving technological landscape.'
  },
  {
    id: 6,
    year: '2023',
    title: 'Industry Recognition',
    description: 'Received the prestigious Business Excellence Award for our outstanding consulting services and client satisfaction.'
  }
];

// Company Awards
export const awards: Award[] = [
  {
    id: 1,
    title: 'Business Excellence Award',
    year: '2023',
    issuer: 'National Business Association',
    description: 'Recognized for outstanding business consulting services and client satisfaction.'
  },
  {
    id: 2,
    title: 'Top 50 Consulting Firms',
    year: '2022',
    issuer: 'Business Insider Magazine',
    description: 'Named one of the top 50 consulting firms in North America based on client feedback and industry impact.'
  },
  {
    id: 3,
    title: 'Innovation in Business Solutions',
    year: '2021',
    issuer: 'Tech & Business Awards',
    description: 'Awarded for innovative approaches to solving complex business challenges through technology integration.'
  },
  {
    id: 4,
    title: 'Leadership Excellence',
    year: '2020',
    issuer: 'Leadership Council',
    description: 'Recognition of our leadership development programs and their impact on client organizations.'
  }
];