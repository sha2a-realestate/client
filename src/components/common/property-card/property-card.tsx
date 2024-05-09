import clsx from 'clsx';
import { PropertyCardAmenities } from './property-card-amenities';
import { PropertyCardImage } from './property-card-image';
import { PropertyCardPrice } from './property-card-price';

interface PropertyCardProps {
  image: string;
  price: number;
  title: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

export function PropertyCard({}: PropertyCardProps) {
  return (
    <div
      className={clsx(
        'cursor-pointer border border-border p-4 w-full shadow-lg rounded-card flex flex-col',
        'md:p-4'
      )}
    >
      <PropertyCardImage icon="" />

      <PropertyCardPrice price={250000} />

      <h1
        title="Property Title"
        className={clsx('text-base font-bold mt-4', 'md:text-lg')}
      >
        New vintage apartment on the Green Avenue
      </h1>

      <p
        title="Property Address"
        className={clsx('mt-4 font-medium text-sm', 'md:text-base')}
      >
        329 Ambarukmo St, Brooklyn, NY
      </p>

      <PropertyCardAmenities
        bedrooms={4}
        bathrooms={2}
        area={120}
        className="mt-4"
      />
    </div>
  );
}
