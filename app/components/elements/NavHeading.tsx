// components/NavHeading.tsx
import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface NavHeadingProps {
  href: string;
  text: string;
  textColor?: string;
  textSize?: string;
}

const NavHeading: React.FC<NavHeadingProps> = ({
  href,
  text,
  textColor = 'text-white',
  textSize = 'text-sm',
}) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={cn(
          'group relative inline-block py-3 tracking-wide hover:opacity-70',
          textColor,
          textSize,
        )}
      >
        {text}
        <span className="absolute bottom-3 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>
    </Link>
  );
};

export default NavHeading;
