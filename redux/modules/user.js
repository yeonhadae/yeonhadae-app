// imports

import { loginApi, endPoints } from '../../constants/apis';
import { AsyncStorage } from 'react-native';
// Actions

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const SET_ACCOUNT = 'SET_ACCOUNT';

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

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function setAccount(username, password) {
  return {
    type: SET_ACCOUNT,
    account: {
      username,
      password
    }
  };
}

// API Actions

function login(username, password) {
  return dispatch => {
    loginApi
      .post(
        endPoints.login,
        {
          username,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        console.log(response.data);
        const {
          data: { access: token, user }
        } = response;
        if (token) {
          dispatch(setLogin(token));
        }
        if (user) {
          dispatch(setUser(user));
        }
      })
      .catch(e => console.error(e));
  };
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
    case SET_ACCOUNT:
      return applySetAccount(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applyLogin(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state) {
  AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
    token: ''
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  };
}

function applySetAccount(state, action) {
  const { account } = action;
  return {
    ...state,
    account
  };
}

// Export

const actionCreators = {
  login
};

export { actionCreators };

// Default Reducer export

export default reducer;
