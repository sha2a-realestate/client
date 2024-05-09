import { Property } from '@/types';
import clsx from 'clsx';
import { PropertyCardAmenities } from './property-card-amenities';
import { PropertyCardImage } from './property-card-image';
import { PropertyCardPrice } from './property-card-price';

interface PropertyCardProps extends Property {}

export function PropertyCard({
  address,
  area,
  numBathrooms,
  numRooms,
  images,
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
      <PropertyCardImage image={images[0]} />
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
        bedrooms={numRooms}
        bathrooms={numBathrooms}
        area={area}
        className="mt-4"
      />
    </div>
  );
}
