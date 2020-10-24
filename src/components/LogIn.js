import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";

function LogIn() {
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = async () => {
      const token = await movieAPI.requestToken();
      setToken(token.request_token);
    };
    getToken();
  }, []);

  return (
    <div>
      <a
        href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}
      >
        Log in
      </a>
    </div>
  );
}

export default LogIn;
