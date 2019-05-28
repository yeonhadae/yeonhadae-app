import axios from 'axios';

const API_URL = 'http://e1bc1abe.ngrok.io';

export const endPoints = {
  login: '/accounts/login/',
  signup: '/accounts/signup/',
  checkToken: '/accounts/checkToken/'
};

export const loginApi = axios.create({
  baseURL: API_URL
});

export default axios.create({
  baseURL: API_URL
});
