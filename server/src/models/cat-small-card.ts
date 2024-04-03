import { ObjectId } from 'mongodb';

export default class CatSmallCard {
  constructor(
    public name: string,
    public age: number,
    public weightG: number,
    public image: string,
    public likeCount: number,
    public breed: string,
    public id?: ObjectId
  ) {}
}
