import React from "react";
import "./movie-cards.styles.scss";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, overview, vote_average } = movie;
  return (
    <div className="movie-container">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt=""
      />

      <div className="movie-body-container">
        <h2>{title}</h2>
        <p>overview</p>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default MovieCard;
