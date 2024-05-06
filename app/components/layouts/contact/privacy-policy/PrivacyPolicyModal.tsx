'use client';

import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PrivacyPolicyText from './PrivacyPolicyText';
import Heading from '../../../elements/Heading';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-3xl p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
            <Heading text="Privacy Policy" furigana="プライバシーポリシー" level={2} />
              <div className="mt-6 text-base leading-6 text-dark max-h-[600px] overflow-y-auto">
                <PrivacyPolicyText />
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-accent border border-transparent rounded-md hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  onClick={onClose}
                >
                  閉じる
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PrivacyPolicyModal;
