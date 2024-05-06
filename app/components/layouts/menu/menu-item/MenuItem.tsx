// components/MenuItem.tsx
import React from 'react';
import Image from 'next/image';
import type { FC } from 'react';
import Space from '../../../elements/Space';

interface MenuItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string[];
  price: number;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  layout?: 'horizontal' | 'vertical';
  marginTop?: string;
}

const MenuItem: FC<MenuItemProps> = ({
  imageSrc,
  imageAlt,
  title,
  price,
  calories,
  protein,
  fat,
  carbohydrates,
  layout,
  marginTop = 'mt-2',
}) => {
  return (
    <div className={`list-none lg:px-0 ${marginTop}`}>
      <div className="relative right-1 z-10 flex justify-center px-2 md:px-0 md:min-w-0 lg:w-[394px] w-full md:right-[6px] lg:-right-2 min-[1170px]:-right-7">
        <Image
          alt={imageAlt}
          className="rounded-full w-full h-full"
          src={imageSrc}
          width={315}
          height={315}
        />
      </div>
      <div className="relative mx-3 -mt-14 bg-main p-[10px] text-dark xs:mx-0">
        <div className="border border-dark p-[10px] pb-8 lg:pb-[34px]">
          <h2 className="mt-9 text-center text-2xl font-bold leading-9 tracking-widest lg:text-[28px] lg:mt-10 xl:text-3xl">
            {title[0]}
            {title[1] && (
              <>
                <br />
                {title[1]}
              </>
            )}
            <br />
            <div className="mt-3 lg:mt-5">
              <span className="font-english-font text-base lg:text-2xl">¥</span>
              <span className="font-english-font text-3xl tracking-widest lg:text-[34px] xl:text-[40px]">
                {price.toLocaleString()}
              </span>
              <span className="text-xs font-normal lg:text-lg">(税込)</span>
            </div>
          </h2>
          <p className="mt-[18px] text-center text-sm lg:text-lg lg:mt-5 xl:text-2xl">
            {calories}kcal
            <Space width="w-2" />P<Space width="w-[3px]" />:
            <Space width="w-[3px]" />
            {protein}g<Space width="w-2" />F<Space width="w-[3px]" />:
            <Space width="w-[3px]" />
            {fat}g<Space width="w-2" />C<Space width="w-[3px]" />:
            <Space width="w-[3px]" />
            {carbohydrates}g
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
