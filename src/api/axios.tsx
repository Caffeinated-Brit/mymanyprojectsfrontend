import axios from 'axios';

//TODO: add this to the .env file
const BASE_URL = 'http://localhost:3500'

export const instance = axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

