import axios from "axios";

const api = axios.create({
  baseURL: "https://project-i8u3.onrender.com/api",
});

export const getUsers = () => {
  return api.get("/users").then((response) => {
    return response.data;
  });
};
