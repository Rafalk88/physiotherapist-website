'use client';

import React from 'react';

type Props = {
  className?: string
  variant: React.ReactNode
  color: React.ReactNode
  children: React.ReactNode
  onClick: () => void
};

const variantClasses = {
  contained: 'rounded-full',
  outlined: 'rounded-full border',
  text: 'underline',
};

const colorClasses = {
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
}: Props) => {
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
