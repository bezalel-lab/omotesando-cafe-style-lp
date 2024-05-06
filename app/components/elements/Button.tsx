// components/Button.tsx
import React from 'react';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  children,
  className,
  ...rest
}) => {
  const buttonClasses = cn(
    'px-4 py-2 rounded font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300',
    {
      'bg-button text-dark hover:bg-main': type === 'button' && !disabled,
      'bg-submit text-light hover:bg-opacity-70': type === 'submit' && !disabled,
      'bg-disabled text-gray-400 cursor-not-allowed': disabled,
    },
    className
  );
  

  return (
    <button type={type} className={buttonClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
