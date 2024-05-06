'use client';

import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  placeholder,
  value,
  isRequired = false,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="relative block w-fit text-dark">
      {label}
      {isRequired && (
        <span className="absolute left-[calc(100%+10px)] top-0 flex h-[21px] w-[39px] items-center justify-center rounded-[6px] bg-accent text-xs text-white">
          必須
        </span>
      )}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-[5px] h-14 w-full appearance-none border border-baseColor px-4 py-2 leading-tight text-dark placeholder-[#BDBDBD] shadow transition duration-200 hover:border-accent hover:shadow-accent-glow focus:border-accent focus:shadow-accent-glow focus:outline-none"
    />
  </div>
);

export default InputField;
