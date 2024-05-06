import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

interface AboutFeatureItemProps {
  index: string;
  children: React.ReactNode;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

const AboutFeatureItem: React.FC<AboutFeatureItemProps> = ({
  index,
  children,
  description,
  imageUrl,
  imageAlt = '',
  imagePosition = 'left',
}) => {
  const isImageOnRight = imagePosition === 'right';

  return (
    <div className={cn('max-w-[1024px] mx-auto', {
      'xl:-translate-x-7': imagePosition === 'left',
      'xl:translate-x-7': imagePosition === 'right',
    })}>
      <div
        className={cn(
          'flex flex-col items-center gap-2 space-y-2 text-center sm:relative sm:mt-10 sm:h-fit sm:flex-row sm:gap-6 sm:space-y-0 lg:gap-0 xl:gap-2',
          {
            'sm:flex-row-reverse': imagePosition === 'left',
          },
        )}
      >
        <div className={cn('relative h-full w-full lg:w-[44%] lg:pr-14 lg:mr-auto xl:w-[50%] xl:ml-16', {
          'xl:-translate-x-[120px] xl:-translate-y-4': imagePosition === 'right'
        })}>
          <h3 className="relative z-10 ml-2 mt-[70px] text-left text-2xl font-semibold tracking-wider sm:mt-0 md:text-2xl lg:ml-0 xl:text-3xl xl:first:mt-[22px] xl:leading-10">
            {children}
          </h3>
          <p className="relative z-10 mb-4 mt-4 ml-2 text-left text-base tracking-wide text-dark sm:mb-0 md:text-base lg:ml-0 xl:text-lg xl:mt-[26px] xl:tracking-wider xl:leading-normal xl:w-[90%]">
            {description}
          </p>
          <span
            className={cn(
              'absolute -bottom-9 right-0 h-fit w-fit font-english-font text-[166px] font-bold leading-none text-white opacity-80 sm:-bottom-5 md:text-[190px] xl:text-[274px]',
              'md:bottom-1/2 md:top-1/2 md:-translate-y-1/2 xl:translate-x-20',
            )}
            aria-hidden="true"
          >
            {index}
          </span>
        </div>
        <div className={cn("relative h-auto w-full lg:w-[450px] xl:w-[460px]", {
          "lg:mr-auto": imagePosition === "left",
          "lg:ml-auto": imagePosition === "right",
        })}>
          <div className="aspect-w-1 aspect-h-1 w-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="w-full"
              width={343}
              height={220}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatureItem;
