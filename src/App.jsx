import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";
import SplitText from "./components/SplitText";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "897afa6a"; 

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await res.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  const openDetails = async (id) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
      );
      const data = await res.json();
      setSelectedMovie(data);
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  const closeModal = () => setSelectedMovie(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
       <div className="max-w-6xl mx-auto bg-gray-900/70 backdrop-blur-sm text-white rounded-xl shadow-lg p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-400 text-center mb-6">
        <SplitText
          text="🎬 Movie Search App"
          splitBy="lines"     
          delay={50}         
          direction="left"       
          initialOpacity={0}   
          duration={0.6}      
          easing="ease-in"
        />
      </h1>

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={searchMovies}
          loading={loading}
        />

        <MovieGrid movies={movies} onMovieClick={openDetails} />

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}
