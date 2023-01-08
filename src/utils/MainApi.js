class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, {
      headers: this._injectBearerToken(this.headers)
    })
      .then(this._checkResponse);
  }

  postMovie(data) {
    return fetch(`${this.baseUrl}`, {
      method: 'POST',
      headers: this._injectBearerToken(this.headers),
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  deleteMovie(cardId) {
    return fetch(`${this.baseUrl}/${cardId}`, {
      method: 'DELETE',
      headers: this._injectBearerToken(this.headers)
    })
      .then(this._checkResponse);
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this._injectBearerToken(this.headers)
    })
      .then(this._checkResponse);
  }

  editUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._injectBearerToken(this.headers)
    })
      .then(this._checkResponse);
  }

  _injectBearerToken(headers) {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return headers;
    }
    return { ...headers, Authorization: `Bearer ${token}` }
  }
}

export const MainAPI = new MainApi({
  baseUrl: 'https://api.movies.aloe.nomoredomains.club',
  headers: {
    'Content-type': 'application/json'
  }
});