import React, { useState, useEffect } from "react";
import movieAPI from "../services/movieAPI";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import LogIn from "./LogIn";
import RandomMovie from "./RandomMovie";
import { FaRandom } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [id, setId] = useState(null);
  const [modalOpen, setModalOpen] = useState("closed");

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
      <div className={id || modalOpen == "open" ? "detailsOpen" : null}>
        <div>
          <LogIn />
        </div>

        <div className="movie-card-container">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onClick={() => setId(movie.id)}
            />
          ))}
        </div>

        <div className="btn-container">
          <button onClick={loadMoreBtn} type="button" className="load-more-btn">
            <FaSyncAlt />
          </button>
          <button onClick={() => setModalOpen("open")} className="random-btn">
            <FaRandom />
          </button>
        </div>
      </div>
      <div className={id ? "modal-closed" : ""}>
        <RandomMovie
          className={"modal-" + modalOpen}
          onClick={() => setModalOpen("closed")}
          onSubmit={(idGenre) => setId(idGenre)}
        />
      </div>

      <div className={id || modalOpen == "open" ? "movie-details-show" : null}>
        {id ? <MovieDetails id={id} onClick={() => setId(null)} /> : null}
      </div>
    </div>
  );
}

export default MovieList;
