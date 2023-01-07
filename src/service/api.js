import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/adduser`, data);
  } catch (error) {
    console.log("Error while calling add user API ", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/allusers`);
  } catch (error) {
    console.log("Error while calling getuser API ", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUser API ", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUser API ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteUser API ", error);
  }
};
