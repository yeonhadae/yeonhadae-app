import axios from 'axios';

const API_URL = 'http://48149f69.ngrok.io';

export const endPoints = {
  login: '/accounts/login/',
  signup: '/accounts/signup/',
  validateToken: id => `/users/${id}/api/validate-token/`,
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
