export const initialState = {
    users: [],
    loading: false,
    hasErrors: false,
};

export default function usersReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
