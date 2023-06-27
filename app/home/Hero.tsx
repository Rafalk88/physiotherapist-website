'use client';

import React from 'react';

import Button from '../components/Button';

const Hero = () => {
  const handleClick = () => {};

  return (
    <section>
      <h2>Centrum fizjoterapii,treningu personalnego i masażu</h2>
      <p>Lorem ipsum dolor si amet</p>
      <Button
        className="w-[164px] h-[42px]"
        data-name="Umów wizytę"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Umów wizytę
      </Button>
    </section>
  );
};

export default Hero;
