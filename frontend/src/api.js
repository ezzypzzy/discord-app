import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5002/api`,
});

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
