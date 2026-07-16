import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:3000',
  withCredentials: true, // sends cookies automatically
});

export default api;