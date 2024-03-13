import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import CatModel from '../models/cat';

export const collections: { cats?: mongoDB.Collection<CatModel> } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.ATLAS_URI || ''
  );

  await client.connect();

  const petsDB: mongoDB.Db = client.db(process.env.DB_NAME);

  const catsCollection = petsDB.collection<CatModel>(
    process.env.CATS_COLLECTION_NAME || ''
  );

  collections.cats = catsCollection;

  console.log(
    `Successfully connected to db: ${petsDB.databaseName} and collection: ${catsCollection.collectionName}`
  );
}
