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
      <div className={id ? "detailsOpen" : "movie-card-container"}>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            onClick={() => setId(movie.id)}
          />
        ))}
        <div className="btn-container">
          <button onClick={loadMoreBtn} type="button" className="load-more-btn">
            Load
          </button>
        </div>
      </div>

      <div className={"movie-details-show"}>
        {id ? <MovieDetails id={id} onClick={() => setId(null)} /> : null}
      </div>
    </div>
  );
}

export default MovieList;
