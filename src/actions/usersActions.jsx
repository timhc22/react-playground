// redux action types
export const GET_USERS = 'GET_USERS'; // begin telling Redux we will fetch from api
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; // pass poss to Redux on successful api call
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'; // inform Redux that an error was encountered during Redux on failed api call

// action creators
export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = () => ({
  type: GET_USERS_FAILURE,
});

// combine into async thunk
export const fetchUsers = () => {
  return async dispatch => {
    dispatch(getUsers())

    try {
      const response = await fetch('https://qzt55zlbuf.execute-api.eu-west-2.amazonaws.com/dev/candidates');
      const data = await response.json();

      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  }
}
