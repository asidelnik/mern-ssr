import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import CatModel from '../models/cat';

// Create a collections object
export const collections: { cats?: mongoDB.Collection<CatModel> } = {};


/** Connect to MongoDB and create a reference to its collections */
export async function connectToDatabase() {
  // Load environment variables from .env file to process.env
  dotenv.config();

  // Create a MongoDB client with Atlas sconnection string
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.ATLAS_URI || ''
  );

  // Connect to MongoDB
  await client.connect();

  // Create a DB instance
  const petsDB: mongoDB.Db = client.db(process.env.DB_NAME);

  // Create a collection reference
  const catsCollection = petsDB.collection<CatModel>(
    process.env.CATS_COLLECTION_NAME || ''
  );

  // Assign the collection reference to the collections object
  collections.cats = catsCollection;

  console.log(
    `Successfully connected to db: ${petsDB.databaseName} and collection: ${catsCollection.collectionName}`
  );
}
