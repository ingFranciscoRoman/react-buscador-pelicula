import whitError from '../mocks/with-error.json';

export function ListOfMovies ({ movies }) {
    return(
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesResult ({error}) {
    return(
        <p>{error}</p>
    )
}

export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0;
    const hasError = whitError.Error;

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult error={hasError} />
    )
}
