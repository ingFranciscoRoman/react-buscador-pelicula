import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from '../services/movies.js';

export function useMovie ({ search, sort }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    const getMovies = useCallback( async ({ search }) => {
        if (search === previousSearch.current) return;

        try {
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            const newMovies = await searchMovies({ search });
            setMovies(newMovies);
        }catch (e){
            setError(e.message);
        }finally {
            // Este se ejecutaria tanto en el try como en el catch
            setLoading(false);
        }
    } , []);

    const sordMovie = useMemo(() => {  
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies]);

    return {
        movies: sordMovie,
        getMovies,
        loading
    }
}
