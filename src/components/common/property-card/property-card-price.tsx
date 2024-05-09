import { Button, ButtonProps } from '@/components/ui';
import { formatAmount } from '@/lib/utils';
import clsx from 'clsx';
import { Heart, Share } from 'lucide-react';
import { useLocale } from 'next-intl';
import { ReactNode } from 'react';

interface CardActionButton extends ButtonProps {
  icon: ReactNode;
}

const CardActionButton = ({ icon, ...props }: CardActionButton) => {
  return (
    <Button
      size={'icon'}
      className="place-content-center bg-primary/5 rounded-full hover:[&>svg]:text-white"
      {...props}
    >
      {icon}
    </Button>
  );
};

interface PropertyCardPriceProps {
  price: number;
}
export function PropertyCardPrice({ price }: PropertyCardPriceProps) {
  const locale = useLocale();
  return (
    <div
      className={clsx(
        'mt-4 flex flex-col gap-2',
        'md:flex-row md:items-center md:justify-between'
      )}
    >
      <p
        className={clsx(
          'text-base text-primary font-bold',
          'sm:text-lg',
          'md:text-xl'
        )}
      >
        {formatAmount(price, locale, 'EGP')}
      </p>

      <div className="hidden md:block space-x-4">
        <CardActionButton icon={<Heart className="text-primary" />} />
        <CardActionButton icon={<Share className="text-primary" />} />
      </div>
    </div>
  );
}
