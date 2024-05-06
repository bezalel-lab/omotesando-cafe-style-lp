import InstagramImage from './instagram-image/InstagramImage';
import Button from '../../../elements/Button';
import Image from 'next/image';

interface MenuInstagramProps {
  images: string[];
}

export function MenuInstagram({ images = [] }: MenuInstagramProps) {
  return (
    <div className="mt-12 max-w-2xl border bg-main p-[10px] text-dark xs:mx-auto xs:max-w-[440px] sm:mt-14 md:mt-16 md:w-full md:max-w-none lg:mt-20 xs:mt-16">
      <div className="border border-dark px-[10px]">
        <div className="relative -top-3 mx-auto flex h-[50px] w-[71.984436%] items-center justify-center bg-accent tracking-wider lg:h-[73px]">
          <h2 className="-mt-1 text-center font-english-font text-2xl font-bold text-white lg:text-3xl">
            Instagram
          </h2>
        </div>
        <p className="relative mx-auto mt-3 w-[90.769231%] text-center tracking-wide md:w-fit md:before:border-l md:before:border-dark md:before:h-[35.81px]
        md:before:inline-block
        md:before:-rotate-45
        md:before:absolute
        md:before:-left-7
        md:before:-top-1
        md:after:border-r
        md:after:border-dark 
        md:after:h-[35.81px]
        md:after:inline-block
        md:after:rotate-45
        md:after:absolute
        md:after:-right-7
        md:after:-top-1
        ">
          Instagramにはさらに詳しいメニュー内容などを載せています<span className='md:hidden'>！</span>
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
          {images.map((image, index) => (
            <InstagramImage
              key={index}
              src={image}
              alt={`Instagram image ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-2 mt-3 font-medium">
            ID :{' '}
            <a
              href="https://www.instagram.com/gardensalad"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-tight"
            >
              tf_gardensalad
            </a>
          </p>
          <Button className="relative mb-6 mt-3 flex h-14 w-full items-center justify-center rounded-none border border-dark font-bold sm:max-w-[300px]">
            <span className="mr-2 tracking-wide">もっとメニューを見る</span>
            <Image
              src="/images/arrow.png"
              alt="Arrow"
              width={19}
              height={19}
              className="absolute right-3 translate-y-[1px]"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MenuInstagram;
