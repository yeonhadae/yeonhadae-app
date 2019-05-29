import axios from 'axios';

const API_URL = 'http://e1bc1abe.ngrok.io';

export const endPoints = {
  login: '/accounts/login/',
  signup: '/accounts/signup/',
  checkToken: '/accounts/checkToken/',
  createProfile: id => `/users/${id}/`,
  sendMailToken: id => `/users/${id}/token/`,
  emailVerification: id => `/users/${id}/verification/`
};

export const loginApi = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

export default token =>
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
