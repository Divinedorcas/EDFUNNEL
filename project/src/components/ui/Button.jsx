import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent hover:bg-green-700 text-white focus:ring-accent",
    secondary: "bg-primary hover:bg-blue-900 text-white focus:ring-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
