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

export const questions = [
  {
    number: 1,
    question: "Hi Everyone, this is",
    options: [
      {
        opt: "A",
        value: "Mark",
      },
      {
        opt: "B",
        value: "Daverose",
      },
      {
        opt: "C",
        value: "David",
      },
      {
        opt: "D",
        value: "Papa",
      },
    ],
  },
  {
    number: 2,
    question: "What is HTTPS",
    options: [
      {
        opt: "A",
        value: "A programming language",
      },
      {
        opt: "B",
        value: "Encrypted HTTP",
      },
      {
        opt: "C",
        value: "A type of RAM",
      },
      {
        opt: "D",
        value: "None of the above",
      },
    ],
  },
  {
    number: 3,
    question: "How many bits make up a byte",
    options: [
      {
        opt: "A",
        value: "24",
      },
      {
        opt: "B",
        value: "8",
      },
      {
        opt: "C",
        value: "64",
      },
      {
        opt: "D",
        value: "32",
      },
    ],
  },
];
