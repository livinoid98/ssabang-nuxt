import axios from "axios";

export default axios.create({
  baseURL: "http://3.34.3.158:8080",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
