import { useState } from "react";
import { serachMovies } from '../services/movies.js';

export function useMovie ({ search }) {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const newMovies = await serachMovies({ search });
        setMovies(newMovies);
    }

    return {
        movies,
        getMovies
    }
}
