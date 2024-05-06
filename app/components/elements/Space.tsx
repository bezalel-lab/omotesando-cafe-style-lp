// components/Space.tsx
import React from 'react';

interface SpaceProps {
  width?: string;
  leading?: string;
  className?: string;
}

const Space: React.FC<SpaceProps> = ({ width = 'w-4', leading = 'leading-normal', className = '' }) => {
  return <span className={`inline-block ${width} ${leading} ${className}`} />;
};

export default Space;
