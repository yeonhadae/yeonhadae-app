// imports

import api, { loginApi, endPoints } from '../../constants/apis';
import { AsyncStorage } from 'react-native';
// Actions

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const SET_PROFILE = 'SET_PROFILE';

// Action Creators

function setLogin(token) {
  return {
    type: LOGIN,
    token
  };
}

function setLogout() {
  return { type: LOGOUT };
}

function setUser(account) {
  return {
    type: SET_USER,
    account
  };
}

function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile
  };
}

// API Actions

function signup(form) {
  return dispatch =>
    loginApi
      .post(endPoints.signup, { ...form })
      .then(response => response.data);
}

function createProfile(form) {
  return (dispatch, getState) => {
    const {
      user: {
        token,
        account: { id }
      }
    } = getState();
    api(token)
      .post(endPoints.createProfile(id), { ...form })
      .then(response => {
        dispatch(setProfile(response.data));
      });
  };
}

function login(username, password) {
  return dispatch =>
    loginApi
      .post(endPoints.login, { username, password })
      .then(response => {
        const { access: token, account } = response.data;
        if (token && account) {
          account.password = password;
          dispatch(setUser(account));
          dispatch(setLogin(token));
          return true;
        } else {
          console.log('access 또는 account가 제공되지 않았음');
          return false;
        }
      })
      .catch(e => {
        console.log(e);
        return false;
      });
}

// Initial State

const initialState = {
  isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return applyLogin(state, action);
    case LOGOUT:
      return applyLogout();
    case SET_USER:
      return applySetUser(state, action);
    case SET_PROFILE:
      return applySetProfile(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applyLogin(state, action) {
  const { access } = action;
  return {
    ...state,
    isLoggedIn: true,
    access
  };
}

function applyLogout(state) {
  AsyncStorage.clear();
  console.log(state);
  return {
    ...state,
    isLoggedIn: false,
    access: ''
  };
}

function applySetUser(state, action) {
  const { account } = action;
  return {
    ...state,
    account
  };
}

function applySetProfile(state, action) {
  const { profile } = action;
  return {
    ...state,
    profile
  };
}

// Export

const actionCreators = {
  login,
  setLogout,
  signup,
  createProfile
};

export { actionCreators };

// Default Reducer export

export default reducer;
