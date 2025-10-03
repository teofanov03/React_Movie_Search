import React from "react";

export default function MovieModal({ movie, onClose }) {
  const poster = movie.Poster && movie.Poster !== "N/A"
    ? movie.Poster
    : "https://via.placeholder.com/300x445?text=No+Image";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4">
          <img src={poster} alt={movie.Title} className="w-40 h-60 object-cover rounded" />
          <div>
            <h2 className="text-2xl font-bold">{movie.Title} <span className="text-gray-500 text-lg">({movie.Year})</span></h2>
            <p className="text-sm text-gray-600 mt-1">{movie.Genre} • {movie.Runtime} • {movie.Language}</p>
            <p className="mt-4">{movie.Plot}</p>

            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  );
}
