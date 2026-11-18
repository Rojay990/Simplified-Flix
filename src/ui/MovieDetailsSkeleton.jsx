import React from "react";

const MovieDetailsSkeleton = () => {
  return (
    <div className="movie-details__content" aria-hidden="true">
      <div className="movie-details__poster--wrapper">
        <div className="movie-details__poster--skeleton"></div>

        <div className="movie-details__info--skeleton">
          <div className="movie-details__title--skeleton"></div>

          {Array.from({ length: 3 }, (_, index) => (
            <div
              className="movie-details__info-line--skeleton"
              key={index}
            ></div>
          ))}
        </div>
      </div>

      <div className="movie-details__text--wrapper">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="movie-details__detail--skeleton" key={index}>
            <div className="movie-details__detail-title--skeleton"></div>

            <div className="movie-details__detail-text--skeleton"></div>
            <div className="movie-details__detail-text--skeleton"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
