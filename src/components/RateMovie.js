import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";

function RateMovie(props) {
  const [token, setToken] = useState();
  const [session, setSession] = useState();

  useEffect(() => {
    const getToken = async () => {
      const token = await movieAPI.requestToken();
      setToken(token.request_token);
    };
    getToken();
  }, []);

  useEffect(() => {
    const getSessionId = async () => {
      const session = await movieAPI.getSession(token);
      setSession(session.session_id);
    };
    getSessionId();
  }, []);

  return (
    <div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
      <div>X</div>
    </div>
  );
}

export default RateMovie;
