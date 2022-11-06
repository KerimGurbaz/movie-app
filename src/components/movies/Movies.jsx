import React from "react";
import MovieCard from "../movie-card/MovieCard";
import "./movies.styles.scss";

const Movies = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
