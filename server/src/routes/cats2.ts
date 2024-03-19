import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import CatModel from '../models/cat';
import CatSmallCard from '../models/cat-small-card';

// Create an instance of the express router.
const catsRouterV2 = express.Router();
// GET - most liked cats
catsRouterV2.get('/top-rated', async (_req: Request, res: Response) => {
  try {
    if (!collections.cats) {
      res.status(500).json({ message: 'Error fetching data' });
    } else {
      const results = (await collections.cats
        .find()
        .sort({ likeCount: -1 })
        .limit(5)
        .project<CatSmallCard>({
          id: 1,
          name: 1,
          age: 1,
          weightG: 1,
          image: 1,
          likeCount: 1,
          breed: 1,
        })
        .toArray()) as CatSmallCard[];
      res.status(200).json(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// GET - cats filtered by name
catsRouterV2.get('/search', async (_req: Request, res: Response) => {
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
        .project<CatSmallCard>({
          id: 1,
          name: 1,
          age: 1,
          weightG: 1,
          image: 1,
          likeCount: 1,
          breed: 1,
        })
        .toArray()) as CatSmallCard[];
      res.status(200).json(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data - exception' });
  }
});

// GET - cat by id
catsRouterV2.get('/:id', async (_req: Request, res: Response) => {
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
catsRouterV2.put('/add-like/:id', async (_req: Request, res: Response) => {
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

catsRouterV2.get('*', (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Cat resource not found' });
});

export default catsRouterV2;
