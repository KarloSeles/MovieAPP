import React, { useState, useEffect } from "react";
import movieAPI from "../services/movieAPI";

function RandomMovie(props) {
  const [genre, setGenre] = useState(null);
  const [idGenre, setIdGenre] = useState();

  useEffect(() => {
    const getByGenre = async () => {
      const details = await movieAPI.getMovieByGenre(genre);
      const response = details.results.map((id) => {
        return id.id;
      });
      const random = Math.floor(Math.random() * response.length);

      setIdGenre(response[random]);
    };
    getByGenre();
  }, [genre]);

  function rollDetails() {
    props.onSubmit(idGenre);
  }

  return (
    <div className={props.className}>
      <nav>
        <h2>Movie Roulette</h2>
        <button onClick={props.onClick}>X</button>
      </nav>
      <h3>Select Genre:</h3>
      <div className="modal-btns">
        <input
          type="radio"
          id="genre1"
          name="genre"
          value="drama"
          onClick={() => setGenre(18)}
        />
        <label htmlFor="genre1">Drama</label>
      </div>
      <div className="modal-btns">
        <input
          type="radio"
          id="genre2"
          name="genre"
          value="comedy"
          onClick={() => setGenre(35)}
        />
        <label htmlFor="genre2">Comedy</label>
      </div>

      <div className="modal-btns">
        <input
          type="radio"
          id="genre3"
          name="genre"
          value="thriller"
          onClick={() => setGenre(53)}
        />
        <label htmlFor="genre3">Thriller</label>
      </div>

      <div className="modal-btns">
        <input
          type="radio"
          id="genre4"
          name="genre"
          value="action"
          onClick={() => setGenre(28)}
        />
        <label htmlFor="genre4">Action</label>
      </div>

      <div className="modal-submit">
        <input type="button" value="Roll" onClick={rollDetails} />
      </div>
    </div>
  );
}

export default RandomMovie;
