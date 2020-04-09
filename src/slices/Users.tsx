import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from "redux";

export const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
};

// https://www.taniarascia.com/redux-react-guide/#slices
// no longer returning entire state, just mutating (but still immutable under hood)
// can still return whole state as an object if preferable
// A slide for users with our three reducers
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: state => {
      state.loading = true
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

// Three actions generated from the slide
export const { getUsers, getUsersSuccess, getUsersFailure } = usersSlice.actions;

// A selector
export const usersSelector = (state: any) => state.users;

// The reducer
export default usersSlice.reducer;

// Async thunk action todo function or const?
export function fetchUsers() {
  return async (dispatch: Dispatch) => {
    dispatch(getUsers());

    try {
      const response = await fetch('https://qzt55zlbuf.execute-api.eu-west-2.amazonaws.com/dev/candidates');
      const data = await response.json();

      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  }
}
