import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import AsyncStorag from '@react-native-async-storage/async-storage';

const API_URL =
  ' http://ec2-23-22-198-28.compute-1.amazonaws.com:3003/api/auth/';

// Register user
const register = async userData => {
  const response = await axios.post (API_URL, userData);

  if (response.data) {
    AsyncStorage.setItem ('user', JSON.stringify (response.data));
    // AsyncStorage.setItem ('token', JSON.stringify (response.data.token));
    // if (response.data.result.role === 'ADMIN') {
    //   AsyncStorage.setItem ('isAdmin', true);
    // }
    // if (response.data.result.role === 'USER') {
    //   AsyncStorage.setItem ('isUser', true);
    // }
  }

  return response.data;
};

// const verifyPassword = async () => {
//   const dataas = {
//     data,
//     user
//   }
//   const response= await axios.post(API_URL + 'verifyPassword',)
// }

// Login user
const login = async userData => {
  const response = await axios.post (API_URL + 'login', userData);

  if (response.data) {
    AsyncStorage.setItem ('user', JSON.stringify (response.data));
    AsyncStorage.setItem ('token', JSON.stringify (response.data.token));
  }

  return response.data;
};

// Logout user
const logout = () => {
  AsyncStorage.removeItem ('user');
  AsyncStorage.removeItem ('token');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
