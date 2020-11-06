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
      <button className="rating-btn" onClick={() => rateValue(1)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(2)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(3)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(4)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(5)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(6)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(7)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(8)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(9)}>
        X
      </button>
      <button className="rating-btn" onClick={() => rateValue(10)}>
        X
      </button>
    </div>
  );
}

export default RateMovie;
