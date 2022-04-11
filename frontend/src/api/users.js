const API_URL = 'http://localhost:4000';

export const getAllUsers = () => {
  return get(`${API_URL}/users`);
}

function get(url) {
  return fetch(url).then(res => res.json());
}