// import styles from './Concept.module.css';
import React from 'react';

interface TextParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const TextParagraph: React.FC<TextParagraphProps> = ({
  children,
  className,
}) => (
  <p className={`mb-6 text-center text-base tracking-wide ${className}`}>
    {children}
  </p>
);

export const Concept: React.FC = () => {
  return (
    <div className="text-light-text relative p-9 md:overflow-hidden lg:p-12 xl:p-20 xl:pb-[91px]">
      <div className="absolute -bottom-[18px] left-0 overflow-hidden font-english-font text-[106px] leading-[110px] tracking-wider text-[#6767674D] md:-bottom-[7px] md:-translate-x-6 md:whitespace-nowrap md:text-[150px] md:leading-[122px] lg:text-[200px] lg:leading-[158px] xl:leading-[215px] xl:text-[280px] xl:-translate-x-10 xl:tracking-normal">
        <p className="absolute left-0 top-6 md:static md:top-0 md:inline-block">
          Garden
        </p>{' '}
        <br className="md:hidden" />
        <p className="relative left-2 w-[100vw] text-right md:static md:inline">
          Salad
        </p>
      </div>
      <div className="relative z-10">
        <h3 className="mb-6 ml-4 mt-5 text-center text-xl font-bold leading-8 tracking-wider xs:mt-20 sm:mt-36 md:mt-16 lg:mt-48 lg:text-[28px] xl:mt-[338px] xl:tracking-widest">
          毎日食べるからこそ、
          <br className="md:hidden" />
          おいしいものを。
        </h3>
        <TextParagraph className="mt-6 lg:mt-10 lg:text-[18px] xl:mt-14">
          ヘルシーで栄養豊富なサラダは、健康のために
          <br className="hidden xs:block" />
          毎日食べようと思っている人は多いはず。
        </TextParagraph>
        <TextParagraph className="lg:mt-8 lg:text-[18px]">
          毎日食べるからこそ品質の良い、飽きのこない、
          <br className="hidden xs:block" />
          おいしいものを楽しんでいただきたい。
        </TextParagraph>
        <TextParagraph className="lg:mt-8 lg:text-[18px]">
          そんな想いからできた「おいしいから食べたい」サラダを
          <br className="hidden xs:block" />
          あなたにお届けいたします。
        </TextParagraph>
      </div>
    </div>
  );
};

export default Concept;
