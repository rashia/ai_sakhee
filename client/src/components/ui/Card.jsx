import React from 'react';

export const Card = ({ 
  children, 
  hover = false, 
  gradient = false,
  onClick,
  className = '' 
}) => {
  const baseStyles = 'bg-white rounded-2xl p-6 border border-gray-100';
  const hoverStyles = hover 
    ? 'shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:border-primary-200' 
    : 'shadow-card';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-purple-50 to-pink-50' : '';
  
  return (
    <div 
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
    >
      {children}
    </div>
  );
};