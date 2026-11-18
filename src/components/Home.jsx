import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

const Home = ({
  search,
  setSearch,
  movies,
  setMovies,
  originalMovies,
  setOriginalMovies,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  async function searchMovies() {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apikey=e9e36ef2`,
      );

      const searchMovies = data.Search || [];
      console.log(searchMovies);

      setMovies(searchMovies);
      setOriginalMovies(searchMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
      setOriginalMovies([]);
    } finally {
      setIsLoading(false);
    }
  }

  function movieFilter(movieList, filterValue) {
    if (filterValue === "a-z") {
      setMovies(
        movieList.slice().sort((a, b) => {
          if (a.Title < b.Title) return -1;
          if (a.Title > b.Title) return 1;
          return 0;
        }),
      );
    }

    if (filterValue === "z-a") {
      setMovies(
        movieList.slice().sort((a, b) => {
          if (a.Title > b.Title) return -1;
          if (a.Title < b.Title) return 1;
          return 0;
        }),
      );
    }

    if (filterValue === "newest") {
      setMovies(
        movieList
          .slice()
          .sort((a, b) => b.Year.slice(0, 4) - a.Year.slice(0, 4)),
      );
    }

    if (filterValue === "oldest") {
      setMovies(
        movieList
          .slice()
          .sort((a, b) => a.Year.slice(0, 4) - b.Year.slice(0, 4)),
      );
    }

    if (filterValue === "default") {
      setMovies(originalMovies);
    }
  }

  useEffect(() => {
    searchMovies();
  }, [search]);

  return (
    <>
      <div className="main">
        <div className="controls">
          <p id="resultsInfo" className="resultsInfo">
            {!search.trim()
              ? "Search for a movie"
              : isLoading
                ? `Searching for ${search}`
                : movies.length === 0
                  ? "Movie Not Found"
                  : `Search: ${search}`}
          </p>

          <div className="sort__container">
            <label htmlFor="sortSelect"> Sort</label>
            <select
              id="sortSelect"
              onChange={(event) =>
                movieFilter(originalMovies, event.target.value)
              }
            >
              <option value="default">Default</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="movies-grid" id="moviesGrid">
          {isLoading
            ? Array.from({ length: 10 }, (_, index) => (
                <div className="movie-card--skeleton" key={index}>
                  <div className="movie-card__img--skeleton"></div>
                  <div className="movie-card__title--skeleton"></div>
                  <div className="movie-card__year--skeleton"></div>
                </div>
              ))
            : movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
