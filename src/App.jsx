import './App.css';
import { Movies } from "./components/Movies.jsx";
import { useMovie, useSearch } from './hooks';

function App() {
    const { search, setSearch, error } = useSearch();
    const { movies, getMovies, loading } = useMovie({ search });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        getMovies();
    }

    const handleOnInupt = ( event ) => {
        setSearch(event.target.value);
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
