import { Collection, Db, MongoClient } from 'mongodb';

const uri = process.env.ATLAS_URI || '';
console.log(uri)
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the Atlas cluster
    console.log(client)
    await client.connect();

    // Get the database and collection on which to run the operation
    const db = client.db('pets');
    const col = db.collection('cats');

    // Create new documents
    const catDocuments = [
      {
        name: "Mittens",
        birthday: "2022-06-15T00:00:00.000Z",
        age: 1,
        address: {
          street: "456 Elm St",
          city: "Oakhaven",
          country: "Canada",
          zipCode: "A1B 2C3",
        },
        favoriteFood: "Salmon",
        colors: ["Orange", "White"],
        heightCM: 25,
        weightG: 3500,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/GC_Yatfung%27s_Brown_Cobra.jpg',
        likeCount: 0,
        breed: "Siamese",
      },
      // {
      //   name: 'Whiskers',
      //   birthday: '2023-01-22T00:00:00.000Z',
      //   age: 3,
      //   address: {
      //     street: '123 Main St',
      //     city: 'Anytown',
      //     country: 'US',
      //     zipCode: '12345',
      //   },
      //   favoriteFood: 'Tuna',
      //   colors: ['Black', 'White'],
      //   heightCM: 30,
      //   weightG: 4000,
      //   image:
      //     'https://upload.wikimedia.org/wikipedia/commons/e/ed/GC_Yatfung%27s_Brown_Cobra.jpg',
      //   likeCount: 0,
      //   breed: 'American Shorthair',
      // },
    ];

    // Insert the documents into the specified collection
    await col.insertMany(catDocuments);

    // Find the document
    const filter = { name: 'Whiskers' };
    const document = await col.findOne(filter);

    // Print results
    console.log('Document found:\n' + JSON.stringify(document));
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
