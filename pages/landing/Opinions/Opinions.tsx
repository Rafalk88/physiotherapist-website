import React from 'react';
import Link from 'next/link';

import Typography from '@/components/Typography';
import OpinionList from './OpinionList';

const Opinions = () => (
  <section className="text-center">
    <Typography
      className="mb-8"
      variant="h3"
    >
      Opinie o nas
    </Typography>
    <Typography
      className="mb-8"
      variant="body"
      as="p"
    >
      Poniżej prezentujemy opinie od naszych klientów.
      Zachęcamy również do podzielenie się swoją opinią.
    </Typography>
    <Link
      href="/"
      className="hover:underline"
    >
      <Typography
        className="font-bold"
        variant="body"
        as="span"
      >
        Wystaw opinię
      </Typography>
    </Link>
    <OpinionList />
  </section>
);

export default Opinions;
