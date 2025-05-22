import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: ReactNode;
  loading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  icon, 
  loading,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-sm",
    secondary: "bg-secondary hover:bg-secondary-dark text-white shadow-sm",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10"
  };
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const buttonContent = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Use motion.button for animation effects
  const MotionButton = motion.button;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={classes}
        >
          {buttonContent}
        </a>
      );
    } else {
      return (
        <Link to={href} className={classes}>
          {buttonContent}
        </Link>
      );
    }
  }

  return (
    <MotionButton
      whileTap={{ scale: 0.98 }}
      className={classes}
      disabled={loading}
      {...props}
    >
      {buttonContent}
    </MotionButton>
  );
}