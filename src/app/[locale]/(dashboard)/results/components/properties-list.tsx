import { PropertyCard } from '@/components/common/property-card/property-card';
import { Property } from '@/types';

interface PropertiesListProps {
  properties: Property[];
}

export async function PropertiesList({ properties }: PropertiesListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 md:grid-cols-3">
      {properties?.map((property) => (
        <div key={property.id} className="col-span-1">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
}
