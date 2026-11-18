import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import axios from "axios";
import Content from "../ui/Content";
import MovieDetailsSkeleton from "../ui/MovieDetailsSkeleton";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function imdbInfo() {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=e9e36ef2`,
      );

      if (data.Response === "False") {
        throw new Error(data.Error || "Movie not found");
      }

      setMovieInfo(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load movie details.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    imdbInfo();
  }, []);
  return (
    <div className="main">
      <div className="movie-details__container">
        <div className="movie-details__back">
          <Link to="/" className="movie-details__back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </Link>
        </div>
        {isLoading ? (
          <MovieDetailsSkeleton />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Content movieInfo={movieInfo} />
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
