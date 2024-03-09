import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /cats.
const cats = express.Router();
const collectionName = "cats";

// GET - most liked
cats.get("/most-liked", async (req, res) => {
  try {
    let collection = await db.collection(collectionName);
    const results = await collection.find()
      .sort({ likeCount: -1 })
      .limit(5)
      .toArray();
    res.send(results).status(200);
    // res.json(mostLikedCats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// GET - cats filtered by name
cats.get('/search/:name', async (req, res) => {
  try {
    const name = req.params.name;
    let collection = await db.collection(collectionName);
    const results = await collection.find({
      name: { $regex: name, $options: 'i' } // Case-insensitive search
    })
      .limit(10)
      .toArray();
    res.send(results).status(200);
    // res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// GET - cat by id
cats.get("/:id", async (req, res) => {
  try {
    let collection = await db.collection(collectionName);
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) {
      res.send("Cat not found by id").status(404);
    } else {
      res.send(result).status(200);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

cats.put('/add-like/:id', async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        likeCount: likeCount + 1
      },
    };
    let collection = await db.collection(collectionName);
    let updatedDocument = await collection.updateOne(query, updates)
    res.json(updatedDocument);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating document' });
  }
});

cats.get('*', (req, res) => {
  res.status(404).json({ message: 'Cat resource not found' });
});


export default cats;

// cats.patch("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };
//     const updates = {
//       $set: {
//         name: req.body.name,
//         position: req.body.position,
//         level: req.body.level,
//       },
//     };

//     let collection = await db.collection(collectionName);
//     let result = await collection.updateOne(query, updates);
//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error updating record");
//   }
// });

// Validate the ID format (optional but recommended)
// if (!mongoose.Types.ObjectId.isValid(id)) {
//   return res.status(400).json({ message: 'Invalid document ID' });
// }

// const updatedDocument = await collection.findByIdAndUpdate(
//   id,
//   updateData,
//   { new: true } // Return the updated document
// );

// if (!updatedDocument) {
//   return res.status(404).json({ message: 'Document not found' });
// }


// This section will help you delete a record
// cats.delete("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };

//     const collection = db.collection(collectionName);
//     let result = await collection.deleteOne(query);

//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error deleting record");
//   }
// });
// // This section will help you create a new record.
// cats.post("/", async (req, res) => {
//   try {
//     let newDocument = {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level,
//     };
//     let collection = await db.collection(collectionName);
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(204);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding record");
//   }
// });