export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Villa = 'Villa',
  Land = 'Land',
  Other = 'Other'
}

export const PropertyTypeList: { value: string; label: PropertyType }[] = [
  { value: PropertyType.House.toLowerCase(), label: PropertyType.House },
  { value: PropertyType.Apartment.toLowerCase(), label: PropertyType.Apartment },
  { value: PropertyType.Villa.toLowerCase(), label: PropertyType.Villa },
  { value: PropertyType.Land.toLowerCase(), label: PropertyType.Land },
  { value: PropertyType.Other.toLowerCase(), label: PropertyType.Other }
];

export const PropertyRoomList: { value: string; label: string }[] = [
  { value: '1', label: '1 Room (Studio)' },
  { value: '2', label: '2 Rooms' },
  { value: '3', label: '3 Rooms' }
];
