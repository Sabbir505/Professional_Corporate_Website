import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  children 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="inline-block text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {children && <div className="text-muted-foreground">{children}</div>}
      </motion.div>
    </div>
  );
}