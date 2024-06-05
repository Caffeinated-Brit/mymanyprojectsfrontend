import axios from 'axios';

const AXIOS_BASE_URL='http://localhost:3500'

export const instance = axios.create({
    baseURL: AXIOS_BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: AXIOS_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

