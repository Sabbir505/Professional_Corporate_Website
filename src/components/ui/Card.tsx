import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
}

export function Card({
  children,
  className = '',
  hover = false,
  as: Component = 'div',
}: CardProps) {
  const hoverClasses = hover
    ? 'hover:shadow-elevated hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-card transition-all duration-300 ${hoverClasses} ${className}`}
      as={Component}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

Card.Header = function CardHeader({
  children,
  className = '',
}: CardHeaderProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

Card.Content = function CardContent({
  children,
  className = '',
}: CardContentProps) {
  return (
    <div className={`px-6 pb-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

Card.Footer = function CardFooter({
  children,
  className = '',
}: CardFooterProps) {
  return (
    <div className={`px-6 py-4 bg-muted rounded-b-lg ${className}`}>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

Card.Image = function CardImage({
  src,
  alt,
  className = '',
}: CardImageProps) {
  return (
    <div className="overflow-hidden rounded-t-lg">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover ${className}`}
      />
    </div>
  );
};