import Image from 'next/image';

function InstagramImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={125}
      height={125}
      className="h-full w-full"
      style={{
        objectFit: 'cover',
      }}
    />
  );
}

export default InstagramImage;