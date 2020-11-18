import httpClient from "./httpClient";
import movieAPIRoutes from "./movieAPIRoutes";

class MovieAPI {
  getMovies(page) {
    return httpClient.get(movieAPIRoutes.getMovies(page));
  }

  getMovieDetails(id) {
    return httpClient.get(movieAPIRoutes.getMovieDetails(id));
  }

  requestToken() {
    return httpClient.get(movieAPIRoutes.requestToken());
  }

  getSession(token) {
    return httpClient.post(movieAPIRoutes.getSession(token), {
      request_token: token,
    });
  }

  rateMovie(id, session, value) {
    return httpClient.post(movieAPIRoutes.rateMovie(id, session, value), {
      value: value,
    });
  }

  getUserRating(id, session) {
    return httpClient.get(movieAPIRoutes.getUserRating(id, session));
  }

  getMovieByGenre(genre) {
    return httpClient.get(movieAPIRoutes.getMovieByGenre(genre));
  }
}

export default new MovieAPI();
