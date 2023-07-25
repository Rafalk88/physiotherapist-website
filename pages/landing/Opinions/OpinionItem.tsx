/* eslint-disable no-unused-vars */
import React from 'react';

import Typography from '@/components/Typography';
import { FaStar as StarIcon, FaStarHalfAlt as HalfStarIcon } from 'react-icons/fa';

const OpinionItem = ({
  fullName, rating, opinionText,
}: {
  fullName: string, rating: number, opinionText: string
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const maxStars = 5;

  const renderStars = () => {
    const stars = Array.from({
      length: fullStars < maxStars ? fullStars : maxStars,
    }, (_, index) => (
      <StarIcon key={`star-${index}`} className="text-gold" />
    ));

    if (hasHalfStar && fullStars < maxStars) {
      stars.push(<HalfStarIcon key="half-star" className="text-gold" />);
    }

    return stars;
  };

  return (
    <article className="p-5 border rounded-xl bg-white drop-shadow-md">
      <div className="flex items-center pb-5">
        <div
          className="h-[45px] w-[4px] bg-stone-500 inline-block mr-6"
        />
        <div>
          <Typography
            variant="h5"
            as="h4"
          >
            {fullName}
          </Typography>
          <div className="flex gap-0.5">
            {renderStars()}
          </div>
        </div>
      </div>
      <Typography
        className="text-left"
        variant="body-small"
        as="p"
      >
        {opinionText}
      </Typography>
    </article>
  );
};

export default OpinionItem;
