import axios from "axios";

export default axios.create({
  baseURL: "http://13.209.10.149:8080",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
