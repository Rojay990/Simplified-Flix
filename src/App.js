import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [search, setSearch] = useState("Avengers");
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout setSearch={setSearch}>
                <Home
                  search={search}
                  setSearch={setSearch}
                  movies={movies}
                  setMovies={setMovies}
                  originalMovies={originalMovies}
                  setOriginalMovies={setOriginalMovies}
                />
              </Layout>
            }
          />
          <Route
            path=":imdbID"
            element={
              <Layout setSearch={setSearch}>
                <MovieDetails />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
