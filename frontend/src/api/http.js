export const API_URL = 'http://localhost:4000';

export function httpGet(url) {
  return fetch(url).then(res => res.json());
}

export function httpPost(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function httpPut(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function httpDelete(url) {
  return fetch(url, {
    method: 'DELETE'
  }).then(res => res.json());
}