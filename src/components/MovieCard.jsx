import React from "react";

export default function MovieCard({ movie, onClick }) {
  const poster = movie.Poster !== "N/A"
    ? movie.Poster
    : "https://via.placeholder.com/150";

  return (
    <div
      className="bg-gray-50 border rounded-lg shadow p-2 text-center cursor-pointer transform transition duration-300 hover:shadow-2xl hover:scale-105"
      onClick={onClick}
    >
      <img src={poster} alt={movie.Title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
      <p className="text-gray-600">{movie.Year}</p>
    </div>
  );
}
