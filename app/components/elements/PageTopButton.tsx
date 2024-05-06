'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

const PageTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={cn(
        'fixed bottom-5 right-5 z-10 transition-opacity duration-300 md:bottom-16 md:right-8',
        {
          'opacity-100': isVisible,
          'opacity-0': !isVisible,
        },
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <Image
        src="/images/pagetop.png"
        alt="Page Top"
        width={70}
        height={70}
        className="md:hidden"
      />
      <Image
        src="/images/pagetop_pc.png"
        alt="Page Top"
        width={120}
        height={120}
        className="hidden md:block"
      />
    </button>
  );
};

export default PageTopButton;
