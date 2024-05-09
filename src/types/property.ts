export type CreatePropertyBody = {
  name: string;
  address: string;
  title: string;
  advertiseType: string;
  description: string;
  area: number;
  amenities: string[];
  numRooms: number;
  numBathrooms: number;
  images: string[];
  price: number;
};

export type Property = {
  id: string;
  ownerId: string;
} & CreatePropertyBody;
