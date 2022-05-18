import React from 'react';
import Movie from './Movie/Movie.js'

import useStyles from './styles';

const Movies = () => {
    const classes = useStyles();
    
    return (
        <>
            <h1>MOVIES</h1>
            <Movie />
            <Movie />
        </>
    );
}

export default Movies;