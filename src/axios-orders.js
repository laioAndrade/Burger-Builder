import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a4edd.firebaseio.com/'
});

export default instance;