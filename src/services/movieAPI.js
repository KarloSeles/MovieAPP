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
}

export default new MovieAPI();
