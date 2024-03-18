import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import CatModel from '../models/cat';

// Create an instance of the express router.
const catsRouter = express.Router();

// GET - most liked cats
catsRouter.get('/most-liked', async (_req: Request, res: Response) => {
  try {
    if (!collections.cats) {
      res.status(500).json({ message: 'Error fetching data' });
    } else {
      const results = (await collections.cats
        .find()
        .sort({ likeCount: -1 })
        .limit(5)
        .toArray()) as CatModel[];
      res.status(200).json(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// GET - cats filtered by name
catsRouter.get('/search', async (_req: Request, res: Response) => {
  try {
    if (!collections.cats) {
      res.status(500).json({ message: 'Error fetching data - collections' });
    } else {
      const name = _req.query.name as string;
      const results = (await collections.cats
        .find({
          name: new RegExp(name, 'i'),
        })
        .limit(10)
        .toArray()) as CatModel[];
      res.status(200).json(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data - exception' });
  }
});

// GET - cat by id
catsRouter.get('/:id', async (_req: Request, res: Response) => {
  try {
    if (!collections.cats) {
      res.status(500).json({ message: 'Error fetching data' });
    } else {
      const id = _req.params.id;
      const query = { _id: new ObjectId(String(id)) };
      let cat = (await collections.cats.findOne(query)) as CatModel;
      if (!cat) {
        return res.status(404).json({ message: 'Cat not found' });
      }
      res.status(200).json(cat);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// PUT - add a like to a cat
catsRouter.put('/add-like/:id', async (_req: Request, res: Response) => {
  try {
    if (!collections.cats) {
      res.status(500).json({ message: 'Error fetching data' });
    } else {
      const id = _req.params.id;
      const query = { _id: new ObjectId(String(id)) };
      let cat = (await collections.cats.findOne(query)) as CatModel;
      if (!cat) {
        return res.status(404).json({ message: 'Cat not found' });
      }
      let updatedLikeCount = cat.likeCount + 1 || 0;
      const updates = {
        $set: {
          likeCount: updatedLikeCount,
        },
      };
      await collections.cats.updateOne(query, updates);
      res.status(200).json({ updatedLikeCount });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating document' });
  }
});

catsRouter.get('*', (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Cat resource not found' });
});

export default catsRouter;
