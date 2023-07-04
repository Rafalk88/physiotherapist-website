'use client';

import React from 'react';

import Button from '../components/Button';
import Typography from '../lib/Typography';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Hero = () => {
  const isAboveMediumScreen:boolean = useMediaQuery('(min-width: 1024px)');
  const handleClick = () => {};

  return (
    <section className="pt-4 ml-4 md:pt-[100px] md:ml-[63px] md:h-[853px]">
      <Typography
        className="text-white pb-6"
        variant="h1"
      >
        Centrum fizjoterapii,
        {' '}
        {isAboveMediumScreen && <br />}
        {' '}
        treningu personalnego
        {' '}
        {isAboveMediumScreen && <br />}
        {' '}
        i masażu
      </Typography>
      <Typography className="text-white pb-11" variant="body">Lorem ipsum dolor si amet</Typography>
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
