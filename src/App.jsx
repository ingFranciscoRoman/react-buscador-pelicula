import { useState } from 'react';
import './App.css';
import { Movies } from "./components/Movies.jsx";
import { useMovie, useSearch } from './hooks';

function App() {
    const [sort, setSort] = useState(false);

    const { search, setSearch, error } = useSearch();
    const { movies, getMovies, loading } = useMovie({ search, sort });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        getMovies(search);
    }

    const handleSort = () => {
        setSort(!sort);
    }

    const handleOnInupt = ( event ) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        getMovies({ search: newSearch });
    }

    return(
        <div className="page">
            <header>
                <h1>Buscador de peliculas</h1>
                <form className="form" onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Avengers, Matrix, Star Wars ..."
                        value={search}
                        onChange={handleOnInupt}
                    />
                    <input type='checkbox' onChange={handleSort} checked={sort} />
                    <button>Buscar</button>
                </form>
                { error && <p style={{color: "red"}}>{error}</p> }
            </header>
            <main>
                {
                    loading && <p>Cargando ...</p>
                }
                <Movies movies={movies} />
            </main>
        </div>
    )
}

export default App
