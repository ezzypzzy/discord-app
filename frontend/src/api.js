import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: `http://localhost:5002/api`,
});

// Writing axios interceptors, so that that logic is executed before every request.
apiClient.interceptors.request.use((config) => { // <-- config is the request object
  // Getting the token from the localStorage of the browser.
  const userDetails = localStorage.getItem("user");

  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (err) => {
  return Promise.reject(err);
});


// Public Routes --> Accesible from the outside (No token required)
export const login = async (data) => {
  try {
    const response = await apiClient.post("/auth/login", data);
    return response;
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response;
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// Secure Routes --> Accessible only with a valid token


const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};