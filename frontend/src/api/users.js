const API_URL = 'http://localhost:4000';

export const getAllUsers = () => {
  return get(`${API_URL}/users`);
}

export const createUser = (user) => {
  return post(`${API_URL}/users`, user);
}

function get(url) {
  return fetch(url).then(res => res.json());
}

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}