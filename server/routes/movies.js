import express from 'express';

import { getMovies, addMovies } from '../controllers/movies.js';

const router = express.Router();

// http://localhost:3000/movies

router.get('/', getMovies);
router.post('/', addMovies)

export default router;