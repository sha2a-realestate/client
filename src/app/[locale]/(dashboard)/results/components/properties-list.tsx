import { PropertyCard } from '@/components/common/property-card/property-card';

interface PropertiesListProps {}

export function PropertiesList({}: PropertiesListProps) {
  return (
    <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="col-span-1">
        <PropertyCard  />
      </div>
      <div className="col-span-1">
        <PropertyCard />
      </div>
      <div className="col-span-1">
        <PropertyCard />
      </div>
      <div className="col-span-1">
        <PropertyCard />
      </div>
    </div>
  );
}
