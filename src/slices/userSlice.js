import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }
        },
        removeCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: null
            }
        }
    }
})

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
export const { removeCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state) => {
    return state.user.currentUser
}
export const selectUserForRemoval = (state) => {
    return state.user.currentUser
}
