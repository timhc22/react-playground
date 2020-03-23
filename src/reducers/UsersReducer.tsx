import * as actions from '../actions/usersActions';

const initialState = {
    users: [],
    loading: false,
    hasErrors: false,
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case actions.GET_USERS:
            return { ...state, loading: true };
        case actions.GET_USERS_SUCCESS:
            return { users: action.payload, loading: false, hasErrors: false };
        case actions.GET_USERS_FAILURE:
            return { ...state, loading: false, hasErrors: true };
        default:
            return state;
    }
}
