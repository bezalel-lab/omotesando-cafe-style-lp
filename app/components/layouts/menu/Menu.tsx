// components/Menu.tsx
import type { FC } from 'react';
import Wrapper from '../../elements/Wrapper';
import Heading from '../../elements/Heading';
import MenuItem from './menu-item/MenuItem';
import RecommendedMenuItem from './menu-item/RecommendedMenuItem';
import MenuInstagram from './menu-instagram/MenuInstagram';

const instagramImages = [
  '/images/instagram_1.png',
  '/images/instagram_2.png',
  '/images/instagram_3.png',
  '/images/instagram_4.png',
];

const Menu: FC = () => {
  return (
    <section className="mt-4 py-6 xl:py-12 xl:px-8">
      <Wrapper>
        <div className="pd-4 border border-white py-8 sm:py-10 xl:border-2 xl:pt-20">
          <Heading
            text="Menu"
            level={3}
            furigana="メニュー"
            color="text-white"
            furiganaColor="text-white"
            underlineColor="bg-white"
          />
          <p className="mt-[60px] text-center tracking-wider xl:text-lg xl:mt-[56px]">
            P: タンパク質　F: 脂質　C: 糖質
          </p>
          <div className="mt-11 grid grid-cols-1 px-2 xs:px-6 xs:max-w-[512px] xs:mx-auto md:max-w-none sm:px-9 md:mt-14 md:px-6">
            <RecommendedMenuItem
              title={['カッテージチーズと', 'バジルのサラダ']}
              price={1100}
              calories={305}
              protein={16.2}
              fat={12.5}
              carbohydrates={13.3}
              imageSrc="/images/menu_basil_salad.png"
              imageAlt="カッテージチーズと
              バジルのサラダ"
              layout="horizontal"
            />
            <div className="grid gap-3 md:mx-auto w-full md:max-w-[690px] md:grid-cols-2 lg:w-full md:gap-[30px] md:justify-between lg:gap-8 lg:max-w-[896px] min-[1170px]:max-w-[980px]">
              <MenuItem
                title={['アボガドサラダ']}
                price={980}
                calories={425}
                protein={12.2}
                fat={15.3}
                carbohydrates={16.8}
                imageSrc="/images/menu_avocad_salad.png"
                imageAlt="アボガドサラダ"
                layout="vertical"
                marginTop="mt-12"
              />
              <div className="relative top-2 md:top-[9px] lg:top-[12px]">
                <MenuItem
                  title={['チキンサラダ']}
                  price={980}
                  calories={455}
                  protein={20.2}
                  fat={11.3}
                  carbohydrates={15.7}
                  imageSrc="/images/menu_chicken_salad.png"
                  imageAlt="チキンサラダ"
                  layout="horizontal"
                  marginTop="mt-12"
                />
              </div>
            </div>
          </div>
          <div className="px-5 md:mx-auto md:max-w-[730px] lg:max-w-[936px] min-[1170px]:max-w-[1020px]">
            <MenuInstagram images={instagramImages} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Menu;
