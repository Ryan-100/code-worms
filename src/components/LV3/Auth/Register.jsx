import React from "react";
import * as yup from "yup";
import AuthForm from "@/components/LV2/Auth/AuthForm";

const signUpSchema = yup.object().shape({
  email: yup.string().required("Enter your email").email("Not a proper email!"),
  name: yup.string().required("Enter your name"),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long!"),
});

const Register = () => {
  return <AuthForm type="register" schemaName={signUpSchema} />;
};

export default Register;
