import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";

function getMovieYear(movieDate) {
  const year = new Date(movieDate);
  return year.getFullYear();
}

function MovieDetails(props) {
  const [id, setId] = useState(null);

  useEffect(() => {
    const getId = async () => {
      const details = await movieAPI.getMovieDetails(props.id);
      setId(details);
    };
    getId();
  }, []);

  if (!id) {
    return <div>loading...</div>;
  }
  return (
    <div className="details-container">
      <button onClick={props.onClick} className="close-btn">
        X
      </button>
      <p className="details-name">
        {id.title} ({getMovieYear(id.release_date)})
      </p>
      <img
        className="details-img"
        src={`https://image.tmdb.org/t/p/original${id.backdrop_path}`}
      />
      <h4 className="details-overview">{id.overview}</h4>
      <h3 className="detail-rating">Rating: {id.vote_average}</h3>
      <h3 className="detail-popularity">Popularity: {id.vote_count}</h3>
      <h3 className="detail-language">Language: {id.original_language}</h3>
      <h3 className="detail-production">Production companies:</h3>
    </div>
  );
}

export default MovieDetails;
