import React from 'react';

import Hero from './Hero';
import PartialOffer from './PartialOffer/PartialOffer';
import Opinions from './Opinions/Opinions';

const Landing = () => (
  <section>
    <div
      className="w-full"
    >
      <section className="mx-auto w-5/6 max-w-[1200px] flex flex-col
          justify-between items-center xl:mb-20"
      >
        <Hero />
        <PartialOffer />
        <Opinions />
      </section>
    </div>
  </section>
);

export default Landing;
