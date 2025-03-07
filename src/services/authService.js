import axios from "axios";

// Set base URL
const API_URL = "/api/auth";

// Set token in headers
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// Register user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);

    if (response.data.token) {
      setAuthToken(response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);

    if (response.data.token) {
      setAuthToken(response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Logout user
export const logout = async () => {
  try {
    await axios.get(`${API_URL}/logout`);
    setAuthToken(null);
  } catch (error) {
    throw error.response.data;
  }
};

// Get current user
export const getUser = async () => {
  try {
    setAuthToken(localStorage.getItem("token"));
    const response = await axios.get(`${API_URL}/me`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
