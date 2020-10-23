import React from "react";

function getMovieYear(movieDate) {
  const year = new Date(movieDate);
  return year.getFullYear();
}

function MovieCard(props) {
  const movie = props.movie;
  return (
    <div onClick={props.onClick} className="movie-card">
      <h2 className="card-rating">{movie.vote_average}</h2>
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      />
      <p>
        {movie.title} ({getMovieYear(movie.release_date)})
      </p>
      <h4>Language: {movie.original_language}</h4>
    </div>
  );
}

export default MovieCard;
