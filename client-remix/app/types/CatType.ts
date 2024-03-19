export type CatType = {
  _id: string;
  name: string;
  birthday: string; // ISODate is not a valid TypeScript type, use string instead
  age: number;
  address: Address;
  favoriteFood: string;
  colors: string[];
  heightCM: number;
  weightG: number;
  image: string;
  likeCount: number;
  breed: string;
};

type Address = {
  street: string;
  city: string;
  country: string;
  zipCode: string;
};

export type CatCardProps = CatType & {
  loading?: 'eager' | 'lazy';
};