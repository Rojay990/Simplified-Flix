import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  return (
    <>
    
      <div className="movie-card" onClick={() => navigate(`/${movie.imdbID}`)}>
        {movie.Poster === "N/A" || imageError ? (
        <div className="movie-card__poster-placeholder">
          Movie Poster
          <br />
          Not Available
        </div>
      ) : (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-card__img"
          onError={() => setImageError(true)}
        />
      )}

        <h2 className="movie-card__title">{movie.Title}</h2>
        <p className="movie-card__year">{movie.Year}</p>
      </div>
    </>
  );
};

export default MovieCard;
