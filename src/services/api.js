import axios from 'axios';

const apiWeb = axios.create({
  baseURL: 'http://localhost:3333/api/web',
});

const apiAdmin = axios.create({
  baseURL: 'http://localhost:3333/api/admin',
});

export default {
  web: apiWeb,
  admin: apiAdmin,
};
