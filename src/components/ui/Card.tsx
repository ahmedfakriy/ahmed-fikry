import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
};

Card.Header = function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '' }: CardProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`px-6 py-4 border-t ${className}`}>
      {children}
    </div>
  );
};

export default Card;