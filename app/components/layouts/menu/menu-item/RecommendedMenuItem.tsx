// components/MenuItem.tsx
import React from 'react';
import Image from 'next/image';
import type { FC } from 'react';
import Space from '../../../elements/Space';

interface RecommendedMenuItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string[];
  price: number;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  layout?: 'horizontal' | 'vertical';
}

const RecommendedMenuItem: FC<RecommendedMenuItemProps> = ({
  imageSrc,
  imageAlt,
  title,
  price,
  calories,
  protein,
  fat,
  carbohydrates,
  layout,
}) => {
  return (
    <div className="relative list-none place-items-center md:m-auto md:grid md:grid-cols-2 lg:translate-x-6">
      <div className="relative right-[6px] z-10 mx-auto flex w-[97%] justify-center md:right-2 min-[768px]:min-w-[320px] min-[820px]:right-6 min-[820px]:min-w-[340px] lg:min-w-[404px] xl:min-w-[450px] lg:-top-1 lg:right-12">
        <Image
          alt={imageAlt}
          className="h-full w-full rounded-full"
          src={imageSrc}
          width={315}
          height={315}
        />
      </div>
      <div className="relative mx-3 -mt-10 bg-main p-[10px] text-dark xs:mx-0 md:absolute md:left-[calc(50%+120px)] md:mt-0 md:w-[390px] md:-translate-x-1/2 lg:left-[calc(50%+130px)] lg:mt-4 lg:w-[440px] xl:w-[592px] xl:left-[calc(50%+152px)] xl:p-3">
        <div className="border border-dark p-[10px] pb-8 lg:pb-[34px]">
          <div className="relative -top-[21px] flex justify-center xl:-top-[23px]">
            <div className="height-fit w-[81.467181%] bg-accent pb-4 pt-7 text-center text-lg leading-7 text-white md:w-[251px] md:pt-0 lg:pt-1 lg:text-xl xl:text-2xl xl:pt-0 xl:pb-[14px]">
              <span className="font-satisfy-font text-xs lg:text-sm xl:inline-block xl:-translate-y-1 xl:leading-2 xl:tracking-wide">
                Recommendation
              </span>
              <br />
              <span className='xl:inline-block xl:leading-1'>店長おすすめ</span>
            </div>
          </div>
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-widest lg:mt-[6px] lg:text-[28px] xl:text-3xl xl:mt-5 xl:leading-10">
            {title[0]}
            <br />
            {title[1]}
            <br />
            <div className="mt-3 lg:mt-5">
              <span className="font-english-font text-base lg:text-2xl">¥</span>
              <span className="font-english-font text-3xl tracking-widest lg:text-[34px] xl:text-[40px]">
                {price.toLocaleString()}
              </span>
              <span className="text-xs font-normal lg:text-lg">(税込)</span>
            </div>
          </h2>
          <p className="mt-[18px] text-center text-sm lg:mt-5 lg:text-[20px] xl:text-2xl xl:mt-7 xl:tracking-wider">
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

export default RecommendedMenuItem;
