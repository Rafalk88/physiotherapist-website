import React from 'react';
import Image from 'next/image';
import Contact from '@/pages/contact/Contact';

import SecuredLetter from '@/public/assets/SecuredLetter.svg';
import CloseIcon from '@/public/assets/close-icon.svg';
import Typography from '../Typography';

const Anchor = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      {
        !isVisible ? (
          <section className="w-[80px] h-[80px] rounded-full flex justify-center
            items-center bg-light-brown fixed top-[85%] right-[1%] cursor-pointer
            drop-shadow-md hover:bg-blue/80 z-[1]"
          >
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              <Image
                src={SecuredLetter}
                alt="Contact-icon"
                width={46}
                height={46}
              />
            </button>
          </section>
        ) : null
      }

      {
        isVisible ? (
          <section className="fixed top-[32%] right-[5%] bg-white rounded-xl shadow-xl p-5 z-[25]">
            <div className="bg-blue h-12 mb-8 flex items-center justify-between px-3">
              <Typography
                className="text-white"
                variant="h5"
                as="h5"
              >
                Napisz do Nas!
              </Typography>

              <Image
                className="cursor-pointer"
                src={CloseIcon}
                alt="close-icon"
                onClick={() => setIsVisible((prev) => !prev)}
              />
            </div>
            <Contact
              main={false}
              setIsVisible={setIsVisible}
            />
          </section>
        ) : null
      }
    </>
  );
};

export default Anchor;
