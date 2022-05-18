import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
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

const MovieDescription = mongoose.model('MovieDescription', movieSchema);

export default MovieDescription;