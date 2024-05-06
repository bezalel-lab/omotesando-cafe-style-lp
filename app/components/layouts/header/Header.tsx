import Image from 'next/image';
import NavHeading from '../../elements/NavHeading';

const menuItems = [
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  return (
    <header className="flex h-[60px] items-center justify-between md:h-[70px] lg:h-[80px] xl:h-[90px]">
      <div className="ml-4 md:w-[8.1854%] mg:ml-6 lg:ml-8 max-w-[120px]">
        <Image
          src="/images/logo_header.png"
          alt="Garden Salad Logo"
          className='w-full'
          width={55}
          height={29.4}
        />
      </div>
      <nav>
        <ul className="mr-4 flex space-x-5 font-english-font text-sm md:space-x-6 md:mr-8 lg:space-x-8 lg:mr-14 xl:space-x-10 xl:mr-[70px]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavHeading
                href={item.href}
                text={item.label}
                textSize="sm:text-base md:text-lg"
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
