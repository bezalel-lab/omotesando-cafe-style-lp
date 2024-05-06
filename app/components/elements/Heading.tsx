import React from 'react';
import cn from 'classnames';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  furiganaColor?: string;
  underlineColor?: string;
  furigana?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  level = 2,
  color = 'text-dark',
  furiganaColor = 'text-accent',
  underlineColor = 'bg-accent',
  furigana,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className="flex flex-col items-center">
      {furigana && (
        <span className={cn('mb-1 text-sm font-bold tracking-normal lg:text-base xl:text-lg lg:mb-2 xl:mb-[14px]', furiganaColor)}>
          {furigana}
        </span>
      )}
      <Tag className={cn('relative font-english-font text-[32px] font-normal tracking-wider lg:text-[40px] xl:text-5xl', color)}>
        {text}
        <div
          className={cn(
            'absolute -bottom-2 left-1/2 mt-2 h-[2px] w-12 -translate-x-1/2 lg:-bottom-4 xl:-bottom-6',
            underlineColor,
          )}
        />
      </Tag>
    </div>
  );
};

export default Heading;
