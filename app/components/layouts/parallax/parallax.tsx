'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ParallaxProps {
  imageSrc: string;
  imageSrcWide?: string;
  alt?: string;
  speed?: number;
  scale?: number;
  top?: string;
  height?: string;
}

const Parallax: React.FC<ParallaxProps> = ({
  imageSrc,
  imageSrcWide,
  alt = 'Parallax Image',
  speed = 0.1,
  scale = 1.3,
  top = 'top-0',
  height = 'h-[350px] lg:h-[450px]',
}) => {
  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        const parallaxTop = parallaxRef.current.offsetTop;
        const parallaxHeight = parallaxRef.current.offsetHeight;
        const scrollPercent = (scrollPosition - parallaxTop) / parallaxHeight;
        setOffset(scrollPercent * speed * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={parallaxRef}
      className={`relative overflow-hidden ${height} ${top}`}
    >
      <div className="absolute inset-0 min-[480px]:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `auto ${scale * 100}%`,
            backgroundPosition: `center ${-offset}%`,
            backgroundRepeat: 'repeat-y',
          }}
        />
      </div>
      <div className="absolute inset-0 hidden xs:block 3xl:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageSrcWide || imageSrc})`,
            backgroundSize: `auto ${scale * 100}%`,
            backgroundPosition: `center ${-offset}%`,
            backgroundRepeat: 'repeat-y',
          }}
        />
      </div>
      <div className="absolute inset-0 hidden min-[1860px]:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageSrcWide || imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </div>
  );
};

export default Parallax;
