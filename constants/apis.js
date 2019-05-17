import axios from 'axios';

const API_URL = 'http://localhost:8000/';

export const endPoints = {
  login: '/auth/token/',
  signup: 'auth/signup/'
};

export const loginApi = axios.create({
  baseURL: API_URL
});

export default axios.create({
  baseURL: API_URL
});
