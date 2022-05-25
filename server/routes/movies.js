import express from 'express';

import { getMovies, addMovies, } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovies)
// router.patch('/:id', updateMovie)

export default router;