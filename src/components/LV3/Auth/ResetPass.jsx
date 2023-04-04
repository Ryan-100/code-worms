import React, { useState } from "react";
import { Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";
import { InputText } from "@/components/LV2/Inputs";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import OtpInput from "react-otp-input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import {
  useGetOTPMutation,
  useResetPassMutation,
} from "@/store/modules/auth/authModule";
import { useUpdatePassMutation } from "@/store/modules/auth/authModule";

const forgetSchema = yup.object().shape({
  email: yup.string().required("Enter your email"),
});

const updateSchema = yup.object().shape({
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long!"),
  confirm_password: yup
    .string()
    .required("Enter the same password as above.")
    .min(6, "Password must be at least 6 characters long!"),
});

const OTPschema = yup.object().shape({
  email: yup.string().required("Enter your email"),
});

const ResetPass = () => {
  const [showPass, setShowPass] = useState(false);
  const [forgetStep, setForgetStep] = useState(true);
  const [OTPstep, setOTPstep] = useState(false);
  const [updateStep, setUpdateStep] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);

  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      forgetStep ? forgetSchema : updateStep ? updateSchema : OTPschema
    ),
  });

  const [resetPass] = useResetPassMutation();
  const [getOTP] = useGetOTPMutation();
  const [updatePass] = useUpdatePassMutation();

  const theme = useTheme();
  const handleTogglePass = () => {
    setShowPass(!showPass);
  };
  const onSubmit = async (data) => {
    if (forgetStep) {
      const res = await resetPass({ email: data.email });
      console.log(res, "res email");
      if (res?.error?.data === "Message has been sent") {
        setForgetStep(false);
        setOTPstep(true);
      }
    } else if (OTPstep) {
      const res = await getOTP({ email: data.email, otp });
      if (res?.data?.success) {
        setOTPstep(false);
        setUpdateStep(true);
      } else {
        setOtpError(true);
      }
      console.log(res, "otp res");
    } else if (updateStep) {
      if (data.password === data.confirm_password) {
        const res = await updatePass({
          email: data.email,
          password: data.password,
        });
        console.log(res, "update res");
        setUpdateStep(false);
        router.push("/");
      }
    }
    console.log(data);
  };
  const sendOTP = async () => {
    const res = await resetPass({ email: data.email });
  };
  return (
    <form
      className="flex flex-col items-center justify-center h-full space-y-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {forgetStep && (
        <div className=" bg-black rounded-lg  p-6">
          <div className="flex flex-col  space-y-6 px-4 pb-6">
            <Text size="lg" color="font" weight="lg">
              Forgot Password
            </Text>
            <Text color="primary">
              Email<span className="required">*</span>
            </Text>
            <InputText
              placeholder="Enter Your Email Address"
              control={control}
              name="email"
              error={errors?.email?.message}
              width="296px"
            />
            <Text color="primary" size="xs">
              We’ll send you instructions on how to reset your password
            </Text>
            <Button fullWidth>Submit</Button>
          </div>
        </div>
      )}
      {OTPstep && (
        <div
          className="p-6 rounded-lg px-10"
          style={{ backgroundColor: theme.primary }}
        >
          <Text size="lg">OTP Verification</Text>
          <div className="flex flex-col items-center space-y-6 mt-6">
            <div className="">
              <Text size="xs" weight="lg">
                Enter the OTP you received at{" "}
              </Text>
              <Text size="xs" weight="lg">
                example@gmail.com
              </Text>
            </div>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>&nbsp;&nbsp;</span>}
              inputStyle={{ width: 40, height: 40 }}
              renderInput={(props) => (
                <input {...props} className="rounded-md " />
              )}
            />
            {otpError && (
              <Text className="required">Something went wrong!</Text>
            )}
            <Button bgcolor={theme.footer} textcolor={theme.font} fullWidth>
              Submit
            </Button>
            <Text className="underline" onClick={() => sendOTP()}>
              Resend OTP
            </Text>
          </div>
        </div>
      )}
      {updateStep && (
        <div className="bg-black rounded-lg  p-6 space-y-6 px-8">
          <Text size="lg" color="font" weight="lg">
            Reset Password
          </Text>
          <div className="items-center">
            <Text color="primary">
              Password <span className="required">*</span>
            </Text>
            <InputText
              placeholder="Enter Your Password"
              control={control}
              name="password"
              error={errors?.password?.message}
              width="296px"
              type={showPass ? "text" : "password"}
              onClick={handleTogglePass}
              showPass={showPass}
            />
          </div>
          <div className="items-center">
            <Text color="primary">
              Confirm Password <span className="required">*</span>
            </Text>
            <InputText
              placeholder="Enter Your Password"
              control={control}
              name="confirm_password"
              error={errors?.confirm_password?.message}
              width="296px"
              type={showPass ? "text" : "password"}
              onClick={handleTogglePass}
              showPass={showPass}
            />
          </div>
          <Button fullWidth>Submit</Button>
        </div>
      )}
      <Text color="font" size="lg">
        New to Code Worm?{" "}
        <Link href="/login" className="underline">
          Sign Up
        </Link>{" "}
        now
      </Text>
    </form>
  );
};

export default ResetPass;
