import clsx from 'clsx';
import Image from 'next/image';

interface PropertyCardImageProps {
  icon: string;
}

export function PropertyCardImage({ icon, ...props }: PropertyCardImageProps) {
  return (
    <Image
      src={
        icon ||
        'https://media.licdn.com/dms/image/D4D22AQEfV9f5ISyU2Q/feedshare-shrink_800/0/1715246310216?e=1718236800&v=beta&t=EcOMrwpA1cDAgYs-dzA8mog_O0cFnVwKQmtH1YMX7sU'
      }
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
