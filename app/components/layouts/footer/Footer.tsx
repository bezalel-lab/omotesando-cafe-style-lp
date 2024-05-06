// Footer.tsx
import React from 'react';
import Image from 'next/image';
import NavHeading from '../../elements/NavHeading';
import PageTopButton from '../../elements/PageTopButton';

const menuItems = [
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-main pt-4 text-dark">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mt-8 flex space-x-10">
          <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-dark bg-dark text-3xl text-white duration-200 hover:bg-main hover:text-dark">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-dark bg-dark text-3xl text-white duration-200 hover:bg-main hover:text-dark">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-dark bg-dark text-3xl text-white duration-200 hover:bg-main hover:text-dark">
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>

        <div className="mt-7 flex space-x-8 font-english-font tracking-wide text-dark">
          {menuItems.map((item, index) => (
            <NavHeading
              key={index}
              href={item.href}
              text={item.label}
              textColor="dark"
              textSize="text-base"
            />
          ))}
        </div>

        <div className="mb-[10px] mt-1">
          <Image
            src="/images/logo_footer.png"
            alt="Logo"
            width={166.48}
            height={91.65}
            className="mx-auto mt-4"
          />

          <small className="mx-auto mt-6 flex w-fit items-center tracking-tighter">
            <span className="mr-1 text-lg">&copy;</span>
            <span>TF Garden Salad.</span>
          </small>
        </div>
      </div>
      <PageTopButton />
    </footer>
  );
};

export default Footer;
