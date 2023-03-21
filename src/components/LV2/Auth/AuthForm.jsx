import React, { useState } from "react";
import { Text } from "@/components/LV1";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox, InputText } from "../Inputs";
import { Button } from "@/components/LV2/Button";
import Link from "next/link";
import { useTheme } from "styled-components";

const AuthForm = ({ type, schemaName }) => {
  const [showPass, setShowPass] = useState(false);

  const router = useRouter();
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaName),
  });

  const handleTogglePass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="flex lg:flex-row-reverse flex-col-reverse items-center justify-center lg:space-x-reverse lg:space-x-60 m-4">
      <div className="items-center justify-center space-x-5 hidden lg:flex">
        <Image src="/images/video.svg" alt="video" width={85.95} height={100} />
        <div
          className="h-[278.06px] w-[3px]"
          style={{ backgroundColor: theme.font }}
        />
        <div className="flex flex-col space-y-2">
          <p
            style={{ color: theme.neutral100 }}
            className="lg:text-[150px] text-[100px]"
          >
            CW
          </p>
          <Text color="neutral100">Welcome to Filmland!</Text>
        </div>
      </div>
      <form className="bg-black rounded-xl p-6 space-y-4 max-w-[401px]">
        <Text color="neutral100" size="lg" className="-my-2">
          {type === "login" ? "Sign In" : "Create Your account"}
        </Text>
        <Text color="primary">
          {type === "login"
            ? "Sign in to watch CW!!"
            : "Sign up for thousands of movies and TV shows!!"}
        </Text>
        {type === "register" && (
          <div className="flex flex-col space-y-5 pb-1">
            <div className="flex space-x-6">
              <InputText
                placeholder="First Name"
                control={control}
                name="first_name"
                error={errors?.first_name?.message}
              />
              <InputText
                placeholder="Last Name"
                control={control}
                name="last_name"
                error={errors?.last_name?.message}
              />
            </div>
            <div>
              <InputText
                placeholder="Username"
                control={control}
                name="username"
                error={errors?.username?.message}
              />
            </div>
          </div>
        )}
        <div className="items-center">
          <InputText
            placeholder="Enter Your Email Address"
            control={control}
            name="email"
            error={errors?.email?.message}
          />
        </div>
        <div className="items-center pt-1">
          <InputText
            placeholder="Password"
            control={control}
            name="password"
            error={errors?.password?.message}
            width="296px"
            type={showPass ? "text" : "password"}
            onClick={handleTogglePass}
            showPass={showPass}
          />
        </div>
        {type === "register" && (
          <div className="pt-1">
            <InputText
              placeholder="Rewrite Password"
              control={control}
              name="re_password"
              error={errors?.re_password?.message}
              width="296px"
              type={showPass ? "text" : "password"}
              onClick={handleTogglePass}
              showPass={showPass}
            />
          </div>
        )}
        {type === "login" && (
          <div className="space-y-6">
            <Button fullWidth>Sign In</Button>
            <div className="flex justify-between space-x-6">
              <CheckBox label="Remember Me" name="remember" control={control} />
              <Link
                href="/"
                style={{ color: theme.font }}
                className="text-xs lg:text-[14px]"
              >
                Forgot Password?
              </Link>
            </div>
            <Text size="md" color="font">
              New to Code Worm?&nbsp;
              <Link href="/register" className="cursor-pointer underline">
                Sign Up
              </Link>
              &nbsp;now
            </Text>
          </div>
        )}
        {type === "register" && (
          <div className="space-y-4 w-full">
            <div className="flex ">
              <CheckBox label="" name="terms" control={control} />
              <Text color="font" className="inline">
                You agree with our&nbsp;
                <Text
                  as="span"
                  color="primary"
                  className="underline inline-flex"
                >
                  Terms and Conditions
                </Text>
                &nbsp;and&nbsp;
                <Text
                  as="span"
                  color="primary"
                  className="underline inline-flex"
                >
                  Privacy Policy
                </Text>
              </Text>
            </div>
            <Button fullWidth>Submit</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
