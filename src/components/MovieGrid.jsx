import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, onMovieClick }) {
  if (!movies || movies.length === 0) {
    return <p className="text-center mt-6 text-gray-500">No movies to display.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie.imdbID)}
        />
      ))}
    </div>
  );
}
