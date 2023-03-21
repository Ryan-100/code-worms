import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Image, Text } from "../LV1";
import { Button } from "../LV2/Button";
import styled, { useTheme } from "styled-components";
import { InputText } from "../LV2/Inputs";
import { useForm } from "react-hook-form";
import { Menu, MenuItem } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = (event) => {
    setOpen((p) => !p);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="flex justify-between lg:mx-6 mx-2 p-4">
      <div className="flex space-x-4 items-center">
        <Image
          imageType="logo"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        {isLoggedIn && (
          <>
            <Link
              href="/watch"
              style={{ color: theme.font }}
              className="pl-8 lg:text-[20px] md:text-[18px] text[14px]"
            >
              TV SHOW
            </Link>
            <Link
              href="/watch"
              style={{ color: theme.font }}
              className=" lg:text-[20px] md:text-[18px] text[14px]"
            >
              MOVIE
            </Link>
            <div className="sm:block hidden">
              <Image imageType="saved" width="25" height="25" />
            </div>
          </>
        )}
      </div>
      {isLoggedIn && (
        <>
          <div className="md:flex hidden items-center space-x-2">
            <InputText
              control={control}
              placeholder="Search Movies and shows here!"
              name="search"
              border
              width="370"
            />
            <Image
              imageType="user"
              width="25"
              height="25"
              className="cursor-pointer"
              onClick={() => router.push("/profile")}
            />
          </div>
          <div className="md:hidden">
            <Image
              imageType="menu"
              width="28"
              height="28"
              color={theme.font}
              className="cursor-pointer"
              onClick={handleClick}
            />
            {open && (
              <div className="flex flex-col p-3 bg-gray-800 absolute right-4 rounded-lg z-[9999]">
                <MenuText
                  onClick={() => {
                    router.push("/profile");
                    handleClose();
                  }}
                >
                  Profile
                </MenuText>
                <MenuText
                  onClick={() => {
                    router.push("/watch");
                    handleClose();
                  }}
                >
                  Search
                </MenuText>
                <MenuText
                  onClick={() => {
                    router.push("/watch");
                    handleClose();
                  }}
                >
                  Saved
                </MenuText>
              </div>
            )}
          </div>
        </>
      )}
      {!isLoggedIn && (
        <div className="flex space-x-4">
          <Button
            style={{ width: "72px", height: "30px" }}
            href="/login"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </Button>
          <Button variant="ghost" href="/aboutUs">
            About us
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;

const MenuText = styled(Text)`
  color: ${(props) => props.theme.font};
  padding: 4px 6px;
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;
