import { httpGet, httpPost, httpPut, httpDelete, API_URL } from './http.js';

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

