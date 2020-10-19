import React, { useState, useEffect } from "react";
import movieAPI from "../services/movieAPI";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await movieAPI.getMovies(1);
      setMovies(movies.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
