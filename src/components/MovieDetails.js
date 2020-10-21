import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";

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
  return <div>{id.title}</div>;
}

export default MovieDetails;
