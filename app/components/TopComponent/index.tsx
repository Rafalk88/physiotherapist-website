import React from 'react';
import Link from 'next/link';

function TopComponent() {
  return (
    <Link className="cursor-pointer flex justify-end pt-6 pb-2" href="/">
      Zadzwoń lub napisz !
    </Link>
  );
}

export default TopComponent;
