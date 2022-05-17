import mongoose from 'mongoose';

const moviesSchema = mongoose.Schema({
    title: String,
    description: String,
    director: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    releaseDate: {
        type: Date,
        default: new Date()
    },
});

const MoviesDescription = mongoose.model('MoviesDescription', moviesSchema);

export default MoviesDescription;