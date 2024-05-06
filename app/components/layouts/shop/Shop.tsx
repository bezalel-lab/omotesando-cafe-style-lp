import Image from 'next/image';
import React from 'react';
import Heading from '../../elements/Heading';

const Shop: React.FC = () => {
  return (
    <section className="bg-main py-10 pt-16 text-dark md:py-16 lg:py-20">
      <Heading
        text="Shop"
        underlineColor="bg-accent"
        level={3}
        furigana="店舗情報"
      />
      <div className="relative pt-16">
        <Image
          src="/images/map.png"
          alt="Map"
          layout="contain"
          objectFit="cover"
          width={375}
          height={250}
          className="h-auto w-full md:hidden"
        />
        <Image
          src="/images/map_wide.png"
          alt="Map"
          layout="contain"
          objectFit="cover"
          width={1440}
          height={465}
          className="hidden h-auto w-full md:block"
        />
      </div>
      <div className="mt-5 px-4 md:px-7 sm:flex sm:items-center sm:gap-6 sm:px-0 md:pl-9 md:pr-0">
        <div className="py-7 pl-3 sm:pl-7 sm:flex-1 lg:translate-x-[10%] xl:translate-x-[20%]">
          <h1 className="text-center font-english-font text-[32px] font-bold sm:text-left">
            <div>
              <span className="text-lg">TF</span>{' '}
              <span className="tracking-wide">Garden Salad</span>
            </div>
            <p className="ml-2 -translate-y-[6px] text-base font-normal tracking-wide">
              （ ガーデンサラダ ）
            </p>
          </h1>
          <div className="mt-5 w-fit text-base tracking-tighter min-[1240px]:text-lg">
            <p className="leading-relaxed">
              〒150 - 0000 <br />
              東京都渋谷区神宮前 10 - 20 - 20 <br />
              Tel. 090 - 1234 - 8899
            </p>
            <table className="w-full md:w-[95%] lg:w-full">
              <tbody className="">
                <tr>
                  <td className="w-[76px] pt-1">営業時間</td>
                  <td className="pt-1">11 : 00 - 20 : 00</td>
                </tr>
                <tr>
                  <td className="w-[76px] pt-1">定休日</td>
                  <td className="pt-1 tracking-wide">日曜</td>
                </tr>
                <tr>
                  <td className="w-[76px] pt-1 align-top">アクセス</td>
                  <td className="pt-1 leading-relaxed tracking-wide">
                    東京メトロ千代田線「明治神宮前駅」<br className='hidden lg:block' />5番出口から徒歩5分 <br />
                    JR「原宿駅」東口から徒歩10分
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="sm:flex sm:flex-1 sm:justify-end">
          <div className="relative mt-3 sm:w-full">
            <Image
              src="/images/shop_appearance.png"
              alt="Storefront"
              layout="responsive"
              className='lg:hidden'
              width={343}
              height={298}
            />
            <Image
              src="/images/shop_appearance_wide.png"
              alt="Storefront"
              layout="responsive"
              className='hidden lg:block'
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="relative mt-14 sm:px-6 md:px-2">
        <Image
          src="/images/postcard.png"
          alt="postcard"
          objectFit="cover"
          className="h-full w-full md:hidden"
          width={375}
          height={965}
        />
        <Image
          src="/images/postcard_wide.png"
          alt="postcard"
          objectFit="cover"
          className="hidden h-full w-full md:block"
          width={1243}
          height={739}
        />
      </div>
    </section>
  );
};

export default Shop;
