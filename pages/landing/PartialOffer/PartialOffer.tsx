import React from 'react';
import Link from 'next/link';

import Typography from '@/components/Typography';
import RectangleItemImage from '@/public/assets/RectangleItem.png';
import Item from './Item';

const textColor = 'text-dark-brown';
const items = [
  {
    image: RectangleItemImage, title: 'Tytuł1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec metus convallis lectus vulputate imperdiet eget sit amet nibh. Sed metus nisl, rhoncus a nibh eget, suscipit consequat arcu. Aliquam interdum congue lectus, vitae consequat nibh pellentesque vitae. ', link: '/', newOffer: true,
  },
  {
    image: RectangleItemImage, title: 'Tytuł2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec metus convallis lectus vulputate imperdiet eget sit amet nibh. Aliquam interdum congue lectus, vitae consequat nibh pellentesque vitae. Aenean sagittis tortor quis mauris pharetra finibus.', link: '/',
  },
  {
    image: RectangleItemImage, title: 'Tytuł3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec metus convallis lectus vulputate imperdiet eget sit amet nibh. Sed metus nisl, rhoncus a nibh eget, suscipit consequat arcu.', link: '/',
  },
];

const PartialOffer = () => (
  <div className="pt-14">
    <Typography
      className={`${textColor} pb-8 text-center`}
      variant="h2"
      as="h2"
    >
      Zobacz czym się zajmujemy
    </Typography>
    <Link
      className="text-center"
      href="/offer"
      passHref
    >
      <Typography
        className={`${textColor} underline pb-16`}
        variant="h5"
        as="h5"
      >
        Pełna oferta
      </Typography>
    </Link>

    <div className="flex gap-3.5 pb-16">
      {
        items.map((item) => {
          if (item.image) {
            return <Item key={item.title} item={item} />;
          }
          return null;
        })
      }
    </div>
  </div>
);

export default PartialOffer;
