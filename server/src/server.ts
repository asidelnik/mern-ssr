import express from 'express';
import cors from 'cors';
import catsRouter from './routes/cat';
import { connectToDatabase } from './services/database.service';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase()
  .then(() => {
    // Add the catsRouter as a middleware to the app for path /cats
    app.use('/cats', catsRouter);

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });
