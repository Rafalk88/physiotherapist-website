'use client';

import React from 'react';

type Props = {
  className?: string
  children: React.ReactNode
  onClick: () => void
};

const Button = ({
  className = '', children, onClick, ...props
}: Props) => (
  <button type="button" className={className} onClick={onClick} {...props}>
    {children}
  </button>
);

export default Button;
