import axios from "axios";
import { Notyf } from "notyf";
import { date, string, number } from "yup";

export const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
  ripple: true,
  types: [
    {
      type: "info",
      background: "#7557D3",
      icon: false,
    },
  ],
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
export const validators = {
  email: string().required().email("Provide a valid email"),
  password: string().required().min(8),
  nameR: string().required().min(2),
  name: string().min(2),
  gpa: number().required().positive(),
  dob: date().required("Birth date is required").max(new Date()),
};

export const applications = [
  {
    firstName: "Daverose",
    lastName: "Tholley",
    dob: "1999-05-08",
    address: "Ashaley Botwe",
    university: "Lancaster Unversity",
    gpa: "3.5",
    age: 23,
    email: "daverosetholley@gmail.com",
    course: "Computer Science",
  },
  {
    firstName: "Papa Yaw",
    lastName: "Agyekum Addo",
    dob: "1997-02-18",
    address: "Tema",
    university: "University of Ghana",
    gpa: "1.5",
    email: "pyaaddo@gmail.com",
    age: 25,
    course: "Drugs",
  },
  {
    firstName: "Mark",
    lastName: "Amoah",
    dob: "1998-02-18",
    address: "Madina",
    university: "University of Ghana",
    gpa: "3.5",
    age: 24,
    email: "maampeaw@gmail.com",
    course: "Agriculture",
  },
  {
    firstName: "David",
    lastName: "Glover",
    dob: "1997-02-18",
    address: "Ablekuma",
    university: "University of Ghana",
    gpa: "3.5",
    age: 25,
    email: "dtglover@gmail.com",
    course: "Physics",
  },
];
