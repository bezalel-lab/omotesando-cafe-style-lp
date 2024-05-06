import React from 'react';
import cn from 'classnames';

interface WrapperProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, padding = 'px-4 sm:py-2 sm:px-8 md:px-10', className = '' }) => {
  return (
    <section className={cn('mx-auto', padding, className)}>
      {children}
    </section>
  );
};

export default Wrapper;