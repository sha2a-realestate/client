import { PropertyCard } from '@/components/common/property-card/property-card';
import prisma from '@/db';
import { Property } from '@/types';

interface PropertiesListProps {
}

export async function PropertiesList({}: PropertiesListProps) {

  const properties = (await prisma.property.findMany()) as Property[];

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
