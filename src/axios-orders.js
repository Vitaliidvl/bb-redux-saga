import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-burg-default-rtdb.firebaseio.com/',
});

export default instance;
