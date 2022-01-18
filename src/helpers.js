import axios from "axios";
import { Notyf } from "notyf";

export const instance = axios.create({
  baseURL: "http://localhost:3009/api",
  timeout: 1000,
  headers: { Authorization: "foobar" },
});

export const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
});
