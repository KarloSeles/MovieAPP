import React, { useEffect, useState } from "react";
import movieAPI from "../services/movieAPI";
import Cookies from "js-cookie";

function LogIn() {
  const [session, setSession] = useState(Cookies.get("session"));
  const [token, setToken] = useState(Cookies.get("token"));
  const [pendingToken, setPendingToken] = useState(null);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const checkToken = params.get("request_token");
    if (checkToken) {
      setToken(checkToken);
    }
  }, []);

  useEffect(() => {
    if (session) {
      Cookies.set("session", session, { expires: 7 });
    } else {
      Cookies.remove("session");
    }
  }, [session]);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
    } else {
      Cookies.remove("token");
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      const getToken = async () => {
        const response = await movieAPI.requestToken();
        setPendingToken(response.request_token);
      };
      getToken();
    }
  }, []);

  useEffect(() => {
    if (!session && token) {
      const getSession = async () => {
        const response = await movieAPI.getSession(token);
        setSession(response.session_id);
      };
      getSession();
    }
  }, [token]);

  function clearState() {
    setSession();
    setToken();
  }

  return (
    <div>
      <br />
      <a
        className={session ? "loggedOut" : "loggedIn"}
        href={`https://www.themoviedb.org/authenticate/${pendingToken}?redirect_to=http://localhost:3000//approved`}
      >
        Log In
      </a>

      <a
        className={session ? "loggedIn" : "loggedOut"}
        href="http://localhost:3000"
        onClick={clearState}
      >
        Log Out
      </a>
    </div>
  );
}

export default LogIn;
