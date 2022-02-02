import { Notyf } from "notyf";
import { date, string, number, mixed } from "yup";

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
      background: "#F97316",
      icon: false,
    },
    {
      type: "purp",
      background: "#7557D3",
      icon: false,
    },
  ],
});

export const validators = {
  email: string()
    .required("Provide an email address")
    .email("Provide a valid email address"),
  password: string().required("Enter password").min(8),
  nameR: string().required("Fill this field").min(2),
  name: string().min(2),
  gpa: number().required("Fill this field").positive(),
  dob: date().required("Birth date is required").max(new Date()),
  image: mixed()
    .test("fileSize", "The file is too large", (value) => {
      if (!value) return true; // attachment is optional
      return value[0].size <= 500000;
    })
    .test("filetype", "File must be jpg, jpeg or png", (value) => {
      if (!value) return true;
      return ["application/pdf", "image/jpeg", "image/png"].includes(
        value[0].type
      );
    }),
};

export const results = [
  {
    name: "Ify Chinke",
    email: "ify@enyata.com",
    dob: "12/09/19 - 22",
    address: "3 Sabo Ave, Yaba, Lagos",
    university: "University of Nigeria",
    cgpa: "5.0",
    testScore: "15",
    batch: "Batch 3",
  },
];
