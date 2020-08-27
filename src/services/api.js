import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.25.50:4444",
});

export default api;
