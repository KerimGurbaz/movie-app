import React from "react";
import "./movie-cards.styles.scss";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, overview } = movie;
  return (
    <div className="movie-container">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt=""
      />

      <div className="movie-body-container">
        <h2>{title}</h2>
        <p>overview</p>
      </div>
    </div>
  );
};

export default MovieCard;
