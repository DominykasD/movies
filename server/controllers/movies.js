import MovieDescription from '../models/movieDescription.js';

export const getMovies = async (req, res) => {
    try {
        const movieDescriptions = await MovieDescription.find();

        res.status(200).json(movieDescriptions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addMovies = async (req, res) => {
    const movie = req.body;
    
    const newMovie = new MovieDescription(movie);

    try {
        await newMovie.save();

        res.status(201).json(newMovie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}