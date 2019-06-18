import axios from 'axios';

const API_URL = 'http://a6b3c8df.ngrok.io';

export const endPoints = {
  login: '/auth/login/',
  signup: '/auth/signup/',
  validateToken: id => `/users/${id}/api/validate-token/`,
  createProfile: id => `/users/${id}/`,
  sendMailToken: id => `/users/${id}/token/`,
  emailVerification: id => `/users/${id}/verification/`,
  setNotificationToken: id => `/users/${id}/notification/`,
  followingList: `/users/following/list/`,
  followerList: `/users/follower/list`,
  followTarget: target_id => `/users/follow/${target_id}/`
};

export const loginApi = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const fileApi = token =>
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  });

export default token =>
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
