class MovieAPI {
  baseURL = process.env.REACT_APP_API_KEY_BASE_URL;
  apiKey = process.env.REACT_APP_API_KEY;

  getMovies(page) {
    return `${this.baseURL}/movie/popular?api_key=${this.apiKey}&page=${page}`;
  }

  getMovieDetails(id) {
    return `${this.baseURL}/movie/${id}?api_key=${this.apiKey}`;
  }

  requestToken() {
    return ` ${this.baseURL}/authentication/token/new?api_key=${this.apiKey}`;
  }

  getSession() {
    return `
      ${this.baseURL}/authentication/session/new?api_key=${this.apiKey}`;
  }

  rateMovie(id, session) {
    return `
        ${this.baseURL}/movie/${id}/rating?api_key=${this.apiKey}&session_id=${session}`;
  }

  getUserRating(id, session) {
    return `
        ${this.baseURL}/movie/${id}/account_states?api_key=${this.apiKey}&session_id=${session}`;
  }

  getMovieByGenre(genre) {
    const randomPage = Math.floor(Math.random() * 500) + 1;

    return `
        ${this.baseURL}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&page=${randomPage}&with_genres=${genre}`;
  }
}

export default new MovieAPI();
