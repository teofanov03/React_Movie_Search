import React from "react";
import AnimatedContent from "./AnimatedContent";
export default function MovieCard({ movie, onClick }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/150";

  return (
    <AnimatedContent
      distance={80}          
      direction="vertical"   
      duration={0.8}        
      ease="ease-out"       
      initialOpacity={0}     
      animateOpacity         
      scale={1.05}           
      threshold={0.2}        
      triggerOnce={true}     
    >
      <div
        className="bg-white border border-gray-200 rounded-2xl shadow-md p-4 text-center cursor-pointer
                   transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onClick={onClick}
      >
        <img
          src={poster}
          alt={movie.Title}
          title={`Click to view more about ${movie.Title}`}
          className="w-full h-64 md:h-72 lg:h-80 object-contain rounded-xl mb-3 bg-gray-100"
        />
        <h2 className="text-lg font-bold text-gray-800 truncate">{movie.Title}</h2>
        <p className="text-gray-500">{movie.Year}</p>
      </div>
    </AnimatedContent>
  );
}
