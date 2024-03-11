import { ObjectId } from 'mongodb';

export default class CatModel {
  constructor(
    public name: string,
    public birthday: string, // ISODate format
    public age: number,
    public address: Address,
    public favoriteFood: string,
    public colors: string[],
    public heightCM: number,
    public weightG: number,
    public image: string,
    public likeCount: number,
    public breed: string,
    public id?: ObjectId
  ) {}
}

class Address {
  constructor(
    public street: string,
    public city: string,
    public country: string,
    public zipCode: string
  ) {}
}
