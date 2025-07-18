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

export default API;