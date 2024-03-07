export default interface Cat {
  name: string;
  birthday: string; // ISODate format
  age: number;
  address: Address;
  favoriteFood: string;
  colors: string[];
  heightCM: number;
  weightG: number;
  image: string;
  likeCount: number;
  breed: string;
}

// Interface for nested address object
interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}
