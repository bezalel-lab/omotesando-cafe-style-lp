'use client';

import Image from 'next/image';
import React from 'react';
import Wrapper from '../../elements/Wrapper';
import Heading from '../../elements/Heading';
import InputField from './inputField/InputField';
import TextAreaField from './text-area-field/TextAreaField';
import PrivacyPolicyAgreement from './privacy-policy/PrivacyPolicyAgreement';

const Concept: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative py-16 lg:py-20">
      <Wrapper>
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/contact_bg.png"
            alt="Vegetables"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <form onSubmit={handleSubmit} className="md:max-w-[800px] md:m-auto">
          <div className="bg-main px-4 sm:px-10 py-16 md:px-20">
            <Heading
              text="Contact"
              underlineColor="bg-accent"
              level={3}
              furigana="お問い合わせ"
            />
            <p className="mx-auto mb-8 mt-14 w-fit text-dark">
              ご質問などは、下記のフォームよりお問い合わせください。
            </p>
            <div className="space-y-8 md:max-w-[520px] mx-auto">
              <InputField
                label="お名前"
                type="text"
                id="name"
                placeholder="例 ) 山田　花子"
                isRequired={true}
              />
              <InputField
                label="メールアドレス"
                type="email"
                id="email"
                placeholder="例 ) hanako-yamada@example.com"
                isRequired={true}
              />
              <InputField
                label="電話番号"
                type="tel"
                id="phoneNumber"
                placeholder="例 ) 090-0000-0000"
              />
              <TextAreaField
                label="お問い合わせ内容"
                id="inquiry"
                placeholder="例 ) ご質問やお問い合わせ内容をご記入ください。"
                rows={6}
                isRequired={true}
              />
            </div>
            <PrivacyPolicyAgreement />
            <div className="flex justify-center">
              <button
                type="submit"
                className=" focus:shadow-outline mt-8 h-14 w-[300px] bg-accent px-6 py-3 font-bold tracking-widest text-white hover:opacity-70 focus:outline-none"
              >
                送信
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

export default Concept;
