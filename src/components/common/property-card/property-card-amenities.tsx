import clsx from 'clsx';
import { AreaChart, BedSingleIcon, ShowerHeadIcon } from 'lucide-react';

interface PropertyCardAmenitiesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bedrooms: number;
  bathrooms: number;
  area: number;
}

export function PropertyCardAmenities({
  bedrooms,
  bathrooms,
  area,
  className
}: PropertyCardAmenitiesProps) {
  const amenityClassName = clsx('col-span-1 flex items-center space-x-1');
  const amenityIconClassName = clsx('w-4 h-4');
  const amenityTextClassName = clsx('text-base font-medium');

  return (
    <div
      className={clsx(
        'w-full grid grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        className
      )}
    >
      <div className={amenityClassName}>
        <BedSingleIcon className={amenityIconClassName} />
        <p className={amenityTextClassName}>{bedrooms} Bedrooms</p>
      </div>
      <div className={amenityClassName}>
        <ShowerHeadIcon className={amenityIconClassName} />
        <p className={amenityTextClassName}>{bathrooms} Bathrooms</p>
      </div>
      <div className={amenityClassName}>
        <AreaChart className={amenityIconClassName} />
        <p className={amenityTextClassName}>{area} sqft</p>
      </div>
    </div>
  );
}
