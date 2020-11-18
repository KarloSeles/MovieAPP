import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";
import RateMovie from "./RateMovie";

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
  const proComp = id.production_companies
    .map((name) => {
      return name.name;
    })
    .join(", ");

  return (
    <div className="details-container">
      <button onClick={props.onClick} className="close-btn">
        X
      </button>
      <p className="details-name">
        {id.title} ({getMovieYear(id.release_date)})
      </p>
      <div className="details-cover-container">
        <img
          className="details-img"
          src={`https://image.tmdb.org/t/p/original${id.backdrop_path}`}
        />
        <h4 className="details-overview">{id.overview}</h4>
      </div>
      <RateMovie id={id.id} />
      <h3 className="detail-rating">
        Rating: <p>{id.vote_average}</p>
      </h3>
      <h3 className="detail-popularity">
        Popularity: <p>{id.vote_count}</p>
      </h3>
      <h3 className="detail-language">
        Language: <p>{id.original_language}</p>
      </h3>
      <h3 className="detail-production">
        Production companies: <p>{proComp}</p>
      </h3>
    </div>
  );
}

export default MovieDetails;
