import axios from "axios";

const API = axios.create({
  baseURL: "https://prsnl-letter.onrender.com/api", // Make sure this is correct
  timeout: 10000,
});

// Add interceptors for debugging
API.interceptors.request.use((config) => {
  console.log('Making request to:', config.baseURL + config.url);
  return config;
});

API.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
export default API;
=======
export default API;
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
