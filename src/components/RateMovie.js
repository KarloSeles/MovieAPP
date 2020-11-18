import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";
import Cookies from "js-cookie";

function RateMovie(props) {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const sessionValue = Cookies.get("session");

  useEffect(() => {
    if (value && !loading) {
      const rate = async () => {
        await movieAPI.rateMovie(props.id, sessionValue, value);
      };

      rate();
    }
  }, [value]);

  useEffect(() => {
    async function getRating() {
      const response = await movieAPI.getUserRating(props.id, sessionValue);
      setValue(response.rated.value);
      setLoading(false);
    }
    if (sessionValue) {
      getRating();
    }
  }, []);

  function rateValue(ratingValue) {
    if (sessionValue) {
      setValue(ratingValue);
    }
  }

  return (
    <div className={"rating-" + value}>
      <div className="star-btns">
        <button className="rating-btn" onClick={() => rateValue(10)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(9)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(8)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(7)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(6)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(5)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(4)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(3)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(2)}>
          ☆
        </button>
        <button className="rating-btn" onClick={() => rateValue(1)}>
          ☆
        </button>
      </div>
    </div>
  );
}

export default RateMovie;
