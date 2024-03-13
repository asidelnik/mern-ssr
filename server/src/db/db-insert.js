import { Collection, Db, MongoClient } from 'mongodb';

const uri = process.env.ATLAS_URI || '';
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the Atlas cluster
    await client.connect();

    // Get the database and collection on which to run the operation
    const db = client.db('pets');
    const col = db.collection('cats');

    // Create new documents
    const catDocuments = [
      // {
      //   name: "Charlie",
      //   birthday: "2022-03-11T00:00:00", // ISODate format
      //   age: 2,
      //   address: {
      //     street: "789 Main St",
      //     city: "Catortown",
      //     country: "USA",
      //     zipCode: "12345",
      //   },
      //   favoriteFood: "Chicken",
      //   colors: ["Brown", "Orange"],
      //   heightCM: 28,
      //   weightG: 3800,
      //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/839px-Gustav_chocolate.jpg',
      //   likeCount: 10,
      //   breed: "Abyssinian",
      // },
      // {
      //   name: "Buttercup",
      //   birthday: "2021-03-01T00:00:00",
      //   age: 3,
      //   address: {
      //     street: "123 Cat Street",
      //     city: "Cat City",
      //     country: "Cat Country",
      //     zipCode: "12345"
      //   },
      //   favoriteFood: "Fish",
      //   colors: ["Orange"],
      //   heightCM: 30,
      //   weightG: 5000,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg",
      //   likeCount: 100,
      //   breed: "Persian"
      // },
      // {
      //   name: "Pixie",
      //   birthday: "2023-03-11T00:00:00.000Z",
      //   age: 1,
      //   address: {
      //     street: "10 Love Lane",
      //     city: "Purrfectville",
      //     country: "UK",
      //     zipCode: "MEOW 123",
      //   },
      //   favoriteFood: "Shrimp",
      //   colors: ["Calico", "Black"],
      //   heightCM: 18,
      //   weightG: 2500,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Minskin_Kitten_Female_blue_tabby_color-pattern.jpg",
      //   likeCount: 50,
      //   breed: "Minskin",
      // },
      // {
      //   name: "Whiskers",
      //   birthday: "2022-05-15T00:00:00.000Z",
      //   age: 2,
      //   address: {
      //     street: "20 Furry Street",
      //     city: "Meowtown",
      //     country: "USA",
      //     zipCode: "CAT 456",
      //   },
      //   favoriteFood: "Tuna",
      //   colors: ["White", "Black"],
      //   heightCM: 25,
      //   weightG: 3000,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Kinkalow1.JPG",
      //   likeCount: 75,
      //   breed: "Kinkalow",
      // },
      // {
      //   name: "Shadow",
      //   birthday: "2021-01-01T00:00:00.000Z",
      //   age: 3,
      //   address: {
      //     street: "30 Shadow Lane",
      //     city: "Catville",
      //     country: "Canada",
      //     zipCode: "KIT 789",
      //   },
      //   favoriteFood: "Chicken",
      //   colors: ["Black"],
      //   heightCM: 30,
      //   weightG: 3500,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Bombay_femelle.JPG",
      //   likeCount: 100,
      //   breed: "Bombay",
      // },
      // {
      //   name: "Grazie",
      //   birthday: "2017-01-01T00:00:00.000Z",
      //   age: 7,
      //   address: {
      //     street: "30 Shadow Lane",
      //     city: "Catville",
      //     country: "Canada",
      //     zipCode: "KIT 789",
      //   },
      //   favoriteFood: "Beans",
      //   colors: ["Gray", "White"],
      //   heightCM: 30,
      //   weightG: 3500,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Gato_pelo_curto_brasileiro.JPG",
      //   likeCount: 100,
      //   breed: "Brazilian Shorthair",
      // },
      // {
      //   name: "Panther",
      //   birthday: "2017-01-01T00:00:00.000Z",
      //   age: 7,
      //   address: {
      //     street: "30 Shadow Lane",
      //     city: "Catville",
      //     country: "Canada",
      //     zipCode: "KIT 789",
      //   },
      //   favoriteFood: "Tomatoes",
      //   colors: ["Orange", "Black", "White"],
      //   heightCM: 30,
      //   weightG: 3500,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg",
      //   likeCount: 100,
      //   breed: "Bengal",
      // },
      // {
      //   name: "Whitie",
      //   birthday: "2018-01-01T00:00:00.000Z",
      //   age: 6,
      //   address: {
      //     street: "30 Shadow Lane",
      //     city: "Catville",
      //     country: "Canada",
      //     zipCode: "KIT 789",
      //   },
      //   favoriteFood: "Grapes",
      //   colors: ["White"],
      //   heightCM: 30,
      //   weightG: 3500,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tiffanie_at_cat_show.jpg",
      //   likeCount: 100,
      //   breed: "Asian Semi-longhair",
      // },
      // {
      //   name: "Aegi",
      //   birthday: "2023-01-01T00:00:00.000Z",
      //   age: 1,
      //   address: {
      //     street: "30 Shadow Lane",
      //     city: "Catville",
      //     country: "Canada",
      //     zipCode: "KIT 789",
      //   },
      //   favoriteFood: "Chips",
      //   colors: ["White", "Gray"],
      //   heightCM: 30,
      //   weightG: 3500,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Aegean_cat.jpg",
      //   likeCount: 100,
      //   breed: "Aegean",
      // },
      // {
      //   name: "Mittens",
      //   birthday: "2022-06-15T00:00:00.000Z",
      //   age: 1,
      //   address: {
      //     street: "456 Elm St",
      //     city: "Oakhaven",
      //     country: "Canada",
      //     zipCode: "A1B 2C3",
      //   },
      //   favoriteFood: "Salmon",
      //   colors: ["Orange", "White"],
      //   heightCM: 25,
      //   weightG: 3500,
      //   image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/GC_Yatfung%27s_Brown_Cobra.jpg',
      //   likeCount: 0,
      //   breed: "Siamese",
      // },
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
