import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Response === "True") setMovies(data.Search);
      else {
        setMovies([]);
        alert("No movies found ❌");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openDetails = async (imdbID) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
      const data = await res.json();

      if (data.Response === "True") setSelectedMovie(data);
      else alert("Unable to load movie details ❌");
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => setSelectedMovie(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🎬 Movie Search App</h1>

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={searchMovies}
          loading={loading}
        />

        <MovieGrid movies={movies} onMovieClick={openDetails} />

        {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
      </div>
    </div>
  );
}

export default App;
