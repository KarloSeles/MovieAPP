class HttpClient {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async post(url, body) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return data;
  }
}

export default new HttpClient();
