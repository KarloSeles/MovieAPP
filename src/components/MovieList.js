import React, { useState, useEffect } from "react";
import movieAPI from "../services/movieAPI";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const nextPage = page + 1;
      const movies = await movieAPI.getMovies(nextPage);
      setMovies(movies.results);
      setPage(nextPage);
    };
    fetchMovies();
  }, []);

  async function loadMoreBtn() {
    const nextPage = page + 1;
    setPage(nextPage);
    const moreMovies = await movieAPI.getMovies(nextPage);
    setMovies([...movies, ...moreMovies.results]);
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
          onClick={() => setId(movie.id)}
        />
      ))}

      <button onClick={loadMoreBtn} type="button">
        Load more
      </button>
      {id ? <MovieDetails id={id} /> : null}
    </div>
  );
}

export default MovieList;
