'use client';

import React, { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const PrivacyPolicyAgreement: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="mt-7 flex items-center justify-center">
        <div className="relative">
          <input
            id="privacy-policy-consent"
            name="privacy-policy-consent"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="outline-none focus:shadow-accent-glow hover:shadow-accent-glow h-[30px] w-[30px] cursor-pointer appearance-none border border-dark text-accent transition duration-200 hover:border-accent focus:border-accent focus:ring-accent active:bg-accent active:bg-opacity-[15%]"
          />
          <svg
            className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${
              isChecked ? 'opacity-100' : 'opacity-0'
            } transition duration-200`}
            width="44"
            height="44"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14L13 19L21 8"
              stroke="#159741"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <label
          htmlFor="privacy-policy-consent"
          className="ml-3 tracking-wide text-dark"
        >
          <button
            type="button"
            onClick={openModal}
            className="text-accent underline hover:opacity-70 tracking-wider"
          >
            プライバシーポリシー
          </button>
          に同意する。
        </label>
      </div>

      <PrivacyPolicyModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default PrivacyPolicyAgreement;
