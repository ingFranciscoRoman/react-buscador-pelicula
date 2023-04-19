import { useState } from "react";
import { serachMovies } from '../services/movies.js';

export function useMovie ({ search }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getMovies = async () => {
        try {
            setLoading(true);
            setError(null);
            const newMovies = await serachMovies({ search });
            setMovies(newMovies);
        }catch (e){
            setError(e.message);
        }finally {
            // Este se ejecutaria tanto en el try como en el catch
            setLoading(false);
        }
    }

    return {
        movies,
        getMovies,
        loading
    }
}
