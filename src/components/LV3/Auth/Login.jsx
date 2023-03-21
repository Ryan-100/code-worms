import AuthForm from "@/components/LV2/Auth/AuthForm";
import React from "react";

import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required("Enter your email"),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long!"),
});

const Login = () => {
  return <AuthForm type="login" schemaName={loginSchema} />;
};

export default Login;
