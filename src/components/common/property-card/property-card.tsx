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

export function PropertyCard({
  address,
  area,
  bathrooms,
  bedrooms,
  image,
  price,
  title
}: PropertyCardProps) {
  return (
    <div
      className={clsx(
        'cursor-pointer border border-border p-4 w-full shadow-lg rounded-card flex flex-col',
        'md:p-4'
      )}
    >
      <PropertyCardImage image={image} />

      <PropertyCardPrice price={price} />

      <h1
        title="Property Title"
        className={clsx('text-base font-bold mt-4', 'md:text-lg')}
      >
        {title}
      </h1>

      <p
        title="Property Address"
        className={clsx('mt-4 font-medium text-sm', 'md:text-base')}
      >
        {address}
      </p>

      <PropertyCardAmenities
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        area={area}
        className="mt-4"
      />
    </div>
  );
}
