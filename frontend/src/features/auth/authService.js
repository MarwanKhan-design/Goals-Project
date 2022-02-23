import axios from "axios";

const API_URL = "/api/users";

export const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
export const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  console.log(response.data);
  if (response) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
