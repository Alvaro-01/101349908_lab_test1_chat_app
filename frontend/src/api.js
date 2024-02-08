// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081', // API server
  timeout: 5000, // Timeout in milliseconds
});

export default instance;
