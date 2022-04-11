const API_URL = 'http://localhost:4000';

export const getAllUsers = () => {
  return httpGet(`${API_URL}/users`);
}

export const createUser = (user) => {
  return httpPost(`${API_URL}/users`, user);
}

export const editUser = (user) => {
  return httpPut(`${API_URL}/users/${user.id}`, user);
}

export const deleteUser = (id) => {
  return httpDelete(`${API_URL}/users/${id}`);
}

function httpGet(url) {
  return fetch(url).then(res => res.json());
}

function httpPost(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function httpPut(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function httpDelete(url) {
  return fetch(url, {
    method: 'DELETE'
  }).then(res => res.json());
}