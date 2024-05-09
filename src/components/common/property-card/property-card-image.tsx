import clsx from 'clsx';
import Image from 'next/image';

interface PropertyCardImageProps {
  image: string;
}

export function PropertyCardImage({ image, ...props }: PropertyCardImageProps) {
  return (
    <Image
      src={image}
      className={clsx(
        'rounded-card bg-primary/20 object-contain w-full h-full max-h-[250px]',
        'md:max-h-[350px]'
      )}
      width={600}
      height={600}
      alt="property-title"
      {...props}
    />
  );
}
