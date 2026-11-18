import React from "react";
import Details from "./Details";

const Content = ({ movieInfo }) => {
  return (
    <div className="movie-details__content">
      <div className="movie-details__poster--wrapper">
        <img src={movieInfo.Poster} alt="" className="movie-details__poster" />
        <div className="movie-details__info">
          <h1 className="movie-details__title"> {movieInfo.Title}</h1>
          <p className="movie-details__year">
            <strong>Year: </strong>
            {movieInfo.Year}
          </p>
          <p className="movie-details__rating">
            <strong>Rating: </strong>
            {movieInfo.Ratings?.[0]?.Value}
          </p>
          <p className="movie-details__released">
            <strong>Released: </strong>
            {movieInfo.Released}
          </p>
        </div>
      </div>
      <div className="movie-details__text--wrapper">
        <Details header="Genre" text={movieInfo.Genre} />
        <Details header="Writer" text={movieInfo.Writer} />
        <Details header="Actors" text={movieInfo.Actors} />
        <Details header="Plot" text={movieInfo.Plot} />
        <Details header="Language" text={movieInfo.Language} />
        <Details header="Awards" text={movieInfo.Awards} />
      </div>
    </div>
  );
};

export default Content;
