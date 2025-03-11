import axios from "axios"
import { validateResponse } from "./validateResponse"
import { type ProfileSchema, type UserLogin, type UserRegistration } from "../Interfaces/Auth"

const URL_AUTH = 'https://cinemaguide.skillbox.cc'



export function fetchLogin({email, password}: UserLogin): Promise<void> {
    return axios.post(`${URL_AUTH}/auth/login`, {
        email,
        password,
    }, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },    
    }).then(res => console.log(res.data.result)).then(() => undefined)
}

export function fetchRegistration({email, password, name, surname}: UserRegistration): Promise<void> {
    return axios.post(`${URL_AUTH}/user`, {
        email,
        password,
        name,
        surname
    }, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(validateResponse).then(() => undefined)
}


export function fetchProfile(): Promise<ProfileSchema> {
    return axios.get(`${URL_AUTH}/profile`,{withCredentials: true}).then(response => response.data)
}

export function fetchLogout(): Promise<void> {
    return axios.get(`${URL_AUTH}/auth/logout`,{withCredentials: true})
}