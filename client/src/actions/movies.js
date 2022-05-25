import * as api from '../api';

// Action Creators
export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();

        dispatch({ type: 'FETCH_ALL', payload: data });        
    } catch (error) {
        console.log(error.message);
    }
    
    // const action = { type: 'FETCH_ALL', payload: [] }

    // dispatch(action);
}

export const addMovie = (movie) => async (dispatch) => {
    try {
        const { data } = await api.addMovie(movie);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

// export const updateMovie = (id, movie) => async (dispatch) => {
//     try {
//         const { data } = await api.updateMovie(id, movie);

//         dispatch({ type: 'UPDATE', payload: data})
//     } catch (error) {
//         console.log(error);
//     }
// }