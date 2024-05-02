import axios from "axios";
import { base_url, config } from "../../utils/constants";

const register = async (userData) => {
  const response = await axios.post(`${base_url}auth/register`, userData, {
    headers: {
      "Content-Type": "Application/json",
    },
    withCredentials: true,
  });

  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}auth/login`, userData, {
    headers: {
      "Content-Type": "Application/json",
    },
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
};

const logout = async () => {
  await axios.get(`${base_url}auth/logout`, {
    headers: {
      "Content-Type": "Application/json",
    },
    withCredentials: true,
  });
};

const editProfile = async (userData) => {
  try {
    const res = await axios.put(
      `${base_url}auth/edit-profile`,
      userData,
      config
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const uploading = async (data) => {
  try {
    const res = await axios.post(`${base_url}auth/upload-image`, data, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const authService = {
  register,
  login,
  logout,
  editProfile,
  uploading,
};
