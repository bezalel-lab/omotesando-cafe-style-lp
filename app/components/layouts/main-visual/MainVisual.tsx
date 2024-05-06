import React from 'react';
import Image from 'next/image';

const MainVisual: React.FC = () => {
  return (
    <div className="relative h-[234px] bg-baseColor md:h-[360px]">
      <div className="absolute inset-0 ml-auto h-[243px] w-[82%] xs:h-[306px] sm:h-[360px] md:h-[400px] md:w-[72.2222%] lg:h-[520px] xl:h-[650px]">
        <div className="scale-80 relative h-full w-full origin-center transform">
          <div className="hidden md:block">
            <Image
              src="/images/img_mv_pc.png"
              alt="Main visual"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>

          {/* mdサイズ未満の場合 */}
          <div className="md:hidden">
            <Image
              src="/images/img_mv.png"
              alt="Main visual"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex w-full flex-col justify-center">
        <main className="ml-5 text-white min-[540px]:-ml-3 sm:ml-5">
          <div className="md:ml-10 xl:ml-20">
            <h2 className="sm:mt-15 mt-8 font-english-font text-4xl font-bold leading-[1.03] xs:mt-14 sm:text-5xl md:mt-16 md:text-6xl lg:mt-24 lg:text-7xl xl:mt-20 xl:leading-[1.06] xl:text-[100px]">
              Let&apos;s eat
              <br />
              delicious
              <br />
              <span className="inline-block text-accent xl:-translate-y-1">salad</span>.
            </h2>
            <p className="ml-1 mt-3 text-sm leading-8 tracking-wider sm:mt-4 sm:text-base sm:leading-9 md:mt-6 md:text-base md:leading-10 lg:mt-9 lg:text-2xl lg:leading-[2.75rem] xl:leading-[4.1rem] xl:mt-8 xl:text-4xl xl:tracking-tighter xl:ml-4">
              思わず笑顔になる、
              <br />
              <span className="relative -ml-2 inline-block pr-2 after:absolute after:inset-0 after:left-1 after:z-[-1] after:w-[calc(100%-6px)] after:bg-accent lg:mt-2 xl:-ml-5">
                「おいしいから食べたい」サラダ
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainVisual;
