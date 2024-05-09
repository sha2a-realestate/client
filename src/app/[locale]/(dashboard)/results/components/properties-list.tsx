import { PropertyCard } from '@/components/common/property-card/property-card';

interface PropertiesListProps {}

export function PropertiesList({}: PropertiesListProps) {
  return (
    <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="col-span-1">
        <PropertyCard
          address="This is and address"
          area={120}
          bathrooms={2}
          bedrooms={3}
          price={120000}
          image="https://media.licdn.com/dms/image/D4D22AQEfV9f5ISyU2Q/feedshare-shrink_800/0/1715246310216?e=1718236800&v=beta&t=EcOMrwpA1cDAgYs-dzA8mog_O0cFnVwKQmtH1YMX7sU"
          title="This is a title"
        />
      </div>
      <div className="col-span-1">
        <PropertyCard
          address="This is and address"
          area={120}
          bathrooms={2}
          bedrooms={3}
          price={120000}
          image="https://media.licdn.com/dms/image/D4D22AQEfV9f5ISyU2Q/feedshare-shrink_800/0/1715246310216?e=1718236800&v=beta&t=EcOMrwpA1cDAgYs-dzA8mog_O0cFnVwKQmtH1YMX7sU"
          title="This is a title"
        />
      </div>
      <div className="col-span-1">
        <PropertyCard
          address="This is and address"
          area={120}
          bathrooms={2}
          bedrooms={3}
          price={120000}
          image="https://media.licdn.com/dms/image/D4D22AQEfV9f5ISyU2Q/feedshare-shrink_800/0/1715246310216?e=1718236800&v=beta&t=EcOMrwpA1cDAgYs-dzA8mog_O0cFnVwKQmtH1YMX7sU"
          title="This is a title"
        />
      </div>
      <div className="col-span-1">
        <PropertyCard
          address="This is and address"
          area={120}
          bathrooms={2}
          bedrooms={3}
          price={120000}
          image="https://media.licdn.com/dms/image/D4D22AQEfV9f5ISyU2Q/feedshare-shrink_800/0/1715246310216?e=1718236800&v=beta&t=EcOMrwpA1cDAgYs-dzA8mog_O0cFnVwKQmtH1YMX7sU"
          title="This is a title"
        />
      </div>
    </div>
  );
}
