'use client';

import React from 'react';

type ButtonProps = {
  className?: string;
  variant: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  onClick: () => void;
};

const variantClasses: { [key in ButtonProps['variant']]: string } = {
  contained: 'rounded-full',
  outlined: 'rounded-full border',
  text: 'underline',
};

const colorClasses: { [key in ButtonProps['color']]: string } = {
  primary: 'bg-orange text-dark-blue',
  secondary: 'border-orange text-dark-blue',
  link: '',
};

const Button = ({
  className = '',
  variant,
  color,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const variantStyles = variantClasses[variant];
  const colorStyles = colorClasses[color];

  return (
    <button
      className={`${variantStyles} ${colorStyles} ${className}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
