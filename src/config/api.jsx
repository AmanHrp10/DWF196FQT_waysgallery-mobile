import axios from 'axios';

export const API = axios.create({
  baseURL: `http://192.168.43.50:8000/api/v1`,
});

export const setToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};
