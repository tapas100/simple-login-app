// import axios from 'axios';
import usersData from "../data/users.json";

const getUsers = () => {
  return new Promise((resolve, reject) => {
      resolve(usersData.users)
  });
};


export const UsersApi = {
  getUsers
};
