import { Collection, Db, MongoClient } from 'mongodb';
import Cat from '../models/cat';

const uri = process.env.ATLAS_URI || '';

const client: MongoClient = new MongoClient(uri);

async function run() {
  try {
    // Connect to the Atlas cluster
    await client.connect();

    // Get the database and collection on which to run the operation
    const db: Db = client.db('pets');
    const col: Collection = db.collection('cats');

    // Create new documents
    const catDocuments: Array<Cat> = [
      {
        name: 'Patch',
        birthday: '2021-09-21T00:00:00.000Z',
        age: 2,
        address: {
          street: '789 Maple Ave',
          city: 'Sunville',
          country: 'France',
          zipCode: '75000',
        },
        favoriteFood: 'Chicken',
        colors: ['Brown', 'Tabby'],
        heightCM: 35,
        weightG: 5000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/e/ed/GC_Yatfung%27s_Brown_Cobra.jpg',
        likeCount: 23,
        breed: 'Maine Coon',
      },
    ];

    // Insert the documents into the specified collection
    await col.insertMany(catDocuments);

    // Find the document
    const filter = { name: 'Whiskers' };
    const document = await col.findOne(filter);

    // Print results
    console.log('Document found:\n' + JSON.stringify(document));
  } catch (err: unknown) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
