'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMediaQuery } from '../../hooks/useMediaQuery';

const Logo = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1024px)');
  const isSmall = useMediaQuery('(max-width: 1024px)');

  return (
    <Link
      href="/home"
      className="flex"
    >
      <Image
        className="md:mr-[25px]"
        src="/assets/logo.svg"
        alt="company icon"
        width={39}
        height={50}
      />
      {
        isAboveMediumScreen && (
          <Image
            src="/assets/FORWELL.svg"
            alt="company name"
            width={!isSmall ? 198 : 140}
            height={48}
          />
        )
      }
    </Link>
  );
};

export default Logo;
