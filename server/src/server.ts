import express from 'express';
import cors from 'cors';
import catsRouterV1 from './routes/cats1';
import catsRouterV2 from './routes/cats2';
import { connectToDatabase } from './services/database.service';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase()
  .then(() => {
    let version = process.env.SERVER_VERSION || '2';

    if (version === '1') {
      // Add the catsRouter as a middleware to the app for path /cats
      app.use('/cats', catsRouterV1);
    } else if (version === '2') {
      // Add the catsRouter as a middleware to the app for path /cats
      app.use('/cats', catsRouterV2);
    }

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });
