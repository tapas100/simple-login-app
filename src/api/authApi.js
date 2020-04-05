// import axios from 'axios';
import authData from "../data/auth.json";

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === authData.username && password === authData.password) {
      resolve({
        message: "Logged In Successfully",
        token: "12327487471841araiyriaary"
      });
    } else {
      reject({ message: "Invalid Credentials" });
    }
  });
};

const logout = () => {
  return new Promise((resolve, reject) => {
    localStorage.clear();
    resolve({ message: "Logged Out Successfully" });
  });
};

export const AuthApi = {
  login,
  logout
};
