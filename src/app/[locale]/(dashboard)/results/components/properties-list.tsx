import { PropertyCard } from '@/components/common/property-card/property-card';
import { Property } from '@/types';
import axios from 'axios';

interface PropertiesListProps {}

export async function PropertiesList({}: PropertiesListProps) {
  const result = await axios.get('/api/property');
  const properties = result.data as Property[];

  return (
    <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {properties?.map((property) => (
        <div key={property.id} className="col-span-1">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
}
