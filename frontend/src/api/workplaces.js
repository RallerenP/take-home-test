import { httpGet, httpPost, httpPut, httpDelete, API_URL } from './http.js';

export const getAllWorkplaces = async () => {
  return httpGet(`${API_URL}/workplaces`);
}