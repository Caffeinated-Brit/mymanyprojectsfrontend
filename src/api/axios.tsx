import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

