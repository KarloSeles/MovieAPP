class MovieAPI {
  baseURL = "https://api.themoviedb.org/3/movie/";
  apiKey = "d2c77997d82f36d98cfeab0c8a259de7";

  async getMovies(page) {
    const response = await fetch(
      `${this.baseURL}popular?api_key=${this.apiKey}&page=${page}`
    );
    const data = await response.json();

    return data;
  }

  async getMovieDetails(id) {
    const response = await fetch(`${this.baseURL}${id}?api_key=${this.apiKey}`);
    const data = await response.json();

    return data;
  }

  async requestToken() {
    const response = await fetch(`
    https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`);
    const data = await response.json();

    return data;
  }

  async getSession(token) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request_token: token }),
    };
    const response = await fetch(
      `
    https://api.themoviedb.org/3/authentication/session/new?api_key=${this.apiKey}`,
      requestOptions
    );
    const data = await response.json();

    return data;
  }
}

export default new MovieAPI();
