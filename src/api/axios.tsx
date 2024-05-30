import axios from 'axios';

const instance = axios.create({
    //TODO: add this to the .env file
    baseURL: 'http://localhost:3500'
});

export default instance;