import React from 'react';
// import Slider from 'react-slick';

import OpinionItem from './OpinionItem';

const OpinionList = () =>
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div className="flex gap-12 mt-16 mb-24">
      <OpinionItem
        fullName="Kamila Kowalska"
        rating={3.5}
        opinionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec metus convallis lectus vulputate imperdiet eget sit amet nibh. Sed metus nisl, rhoncus a nibh eget, suscipit consequat arcu."
      />
      <OpinionItem
        fullName="Kamila Kowalska"
        rating={1.7}
        opinionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec metus convallis lectus vulputate imperdiet eget sit amet nibh. Sed metus nisl, rhoncus a nibh eget, suscipit consequat arcu."
      />
      <OpinionItem
        fullName="Kamila Kowalska"
        rating={4.9}
        opinionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec metus convallis lectus vulputate imperdiet eget sit amet nibh. Sed metus nisl, rhoncus a nibh eget, suscipit consequat arcu."
      />
    </div>
  );
export default OpinionList;
