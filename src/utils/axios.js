import axios from 'axios';

const url = (function () {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://some-address.com'
    default:
      return 'http://localhost:3001'
  }
})();

const instance = axios.create({
  baseURL: url,
  timeout: 3000
});

export default instance;
