import { ObjectId } from 'mongodb';
import CatSmallCard from './cat-small-card';

class Address {
  constructor(
    public street: string,
    public city: string,
    public country: string,
    public zipCode: string
  ) {}
}

export default class CatModel extends CatSmallCard {
  constructor(
    name: string,
    age: number,
    weightG: number,
    image: string,
    likeCount: number,
    breed: string,
    id: ObjectId | undefined,
    public birthday: string, // ISODate format
    public address: Address,
    public favoriteFood: string,
    public colors: string[],
    public heightCM: number
  ) {
    super(name, age, weightG, image, likeCount, breed, id);
  }
}

  