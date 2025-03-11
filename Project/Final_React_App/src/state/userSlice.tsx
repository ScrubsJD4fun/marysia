import { createSlice } from "@reduxjs/toolkit";

export interface userState {
    userIsLogined: null | boolean
    openModal: boolean 
    openTrailer: boolean
    openSearch: boolean
    firstLogin: boolean
}

const initialState: userState = {
    userIsLogined: null,
    openModal: false,
    openTrailer: false,
    openSearch: false,
    firstLogin: false
}

const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        logIn: (state) => {
            state.userIsLogined = true
        },
        logOut: (state) => {
            state.userIsLogined = false
        },
        openModal: (state) => {
            state.openModal = true
        },
        closeModal: (state) => {
            state.openModal = false
        },
        openTrailer: (state) => {
            state.openTrailer = true
        },
        closeTrailer: (state) => {
            state.openTrailer = false
        },
        openSearch: (state) => {
            state.openSearch = true
        },
        closeSearch: (state) => {
            state.openSearch = false
        },
        setFirstLogin: (state) => {
            state.firstLogin = true
        },
        unsetFirstLogin: (state) => {
            state.firstLogin = false
        },
    },
    
})


export const { logIn, logOut, openModal, closeModal, openTrailer, closeTrailer, openSearch, closeSearch, setFirstLogin, unsetFirstLogin } = userSlice.actions;

export default userSlice.reducer;