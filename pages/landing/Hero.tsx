import React from 'react';
import { useRouter } from 'next/router';

import Typography from '../../components/Typography';

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/first-visit');
  };

  return (
    <div className="w-full h-[854px]">
      <div
        className="absolute top-[105px] left-0 bg-hero bg-center w-full h-[854px] z-[-1]"
        aria-label="background image"
      />
      <Typography
        className="text-white pt-24 pb-6"
        variant="h1"
        as="h1"
      >
        Centrum fizjoterapii,
        {' '}
        treningu personalnego
        {' '}
        i masazu
      </Typography>
      <Typography
        className="text-white pb-11"
        variant="body"
        as="p"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <button
        className="bg-dark-brown w-[164px] h-[42px] rounded-full hover:bg-light-brown
        text-white font-bold hover:text-dark-brown transform duration-500 ease-in-out"
        type="button"
        onClick={handleClick}
      >
        <Typography
          variant="body-small"
          as="span"
        >
          Umów wizytę
        </Typography>
      </button>
    </div>
  );
};

export default Hero;
