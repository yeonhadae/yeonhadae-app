// imports

import { loginApi, endPoints } from '../../constants/apis';

// Actions

// Action Creators

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
      .then(response => console.log(response.data));
  };
}

// Initial State

const initialState = {
  isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Reducer Functions

// Exports

const actionCreators = {
  login
};

export { actionCreators };

// Default Reducer export

export default reducer;
