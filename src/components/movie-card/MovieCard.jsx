import React from "react";
import { useNavigate } from "react-router-dom";
import "./movie-cards.styles.scss";
import currentUser from "../../context/AuthContext";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, overview, vote_average } = movie;
  const navigate = useNavigate();

  return (
    <div
      className="movie-container"
      onClick={() => {
        navigate("/details/" + id);
        !currentUser && alert("Please login to see detail");
      }}
    >
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
