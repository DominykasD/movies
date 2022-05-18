import React from 'react';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie.js'
import useStyles from './styles';

const Movies = () => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();
    
console.log(movies);

    return (
        <>
            <h1>MOVIES</h1>
            <Movie />
            <Movie />
        </>
    );
}

export default Movies;