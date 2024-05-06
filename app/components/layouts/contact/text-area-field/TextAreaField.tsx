'use client';

import React from 'react';

interface TextAreaFieldProps {
  label: string;
  id: string;
  placeholder: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  placeholder,
  value,
  isRequired = false,
  onChange,
  rows = 4,
}) => (
  <div>
    <label htmlFor={id} className="relative block text-dark w-fit">
      {label}
      {isRequired && (
        <span className="absolute left-[calc(100%+10px)] top-0 flex h-[21px] w-[39px] items-center justify-center rounded-[6px] bg-accent text-xs text-white">
          必須
        </span>
      )}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className="focus:shadow-outline mt-[5px] h-[160px] w-full appearance-none border border-baseColor px-4 py-4 leading-tight text-dark placeholder-[#BDBDBD] shadow focus:outline-none focus:border-accent focus:shadow-accent-glow hover:border-accent hover:shadow-accent-glow transition duration-200"
    />
  </div>
);

export default TextAreaField;
