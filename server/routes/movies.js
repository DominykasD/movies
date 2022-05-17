import express from 'express';

import { getMovies } from '../controllers/movies.js';

const router = express.Router();

// http://localhost:3000/movies

router.get('/', getMovies);

export default router;