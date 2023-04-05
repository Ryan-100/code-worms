import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Image, Text } from "../LV1";
import { Button } from "../LV2/Button";
import styled, { useTheme } from "styled-components";
import { getToken } from "@/service";
import { useRef } from "react";
import tw from "tailwind-styled-components";
import { useSearchMoviesQuery } from "@/store/modules/videos/videoModule";
import { useDispatch } from "react-redux";
import { setVideoInfo } from "@/store/modules/videos/video-slice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const inputRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = router.pathname;
  useEffect(() => {
    if (window) {
      const token = getToken();
      setIsLoggedIn(token);
    }
  }, [pathname]);
  const handleClick = () => {
    setOpen((p) => !p);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchParams(event.target.value);
      // console.log(event.target.value);
    }
  };
  const { data } = useSearchMoviesQuery(searchParams);
  useEffect(() => {
    dispatch(setVideoInfo(data));
  }, [data]);
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
              href="/tvshows"
              style={{ color: theme.font }}
              className="pl-8 lg:text-[20px] md:text-[18px] text[14px]"
            >
              TV SHOW
            </Link>
            <Link
              href="/movies"
              style={{ color: theme.font }}
              className=" lg:text-[20px] md:text-[18px] text[14px]"
            >
              MOVIE
            </Link>
            <div
              className="sm:block hidden cursor-pointer"
              onClick={() => router.push("/saved")}
            >
              <Image imageType="saved" width="25" height="25" />
            </div>
          </>
        )}
      </div>
      {isLoggedIn && (
        <>
          <div className="md:flex hidden items-center space-x-2">
            <SearchInput
              ref={inputRef}
              onKeyDown={handleKeyDown}
              placeholder="Search Movies and shows here!"
              width={370}
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
                    router.push("/saved");
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
          <Button style={{ width: "72px", height: "30px" }} href="/login">
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

export const SearchInput = tw.input`
form-control  block  w-full  px-3  py-2.5  text-base font-normal  text-white bg-gray-900  bg-clip-padding   order-solid   transition  ease-in-out  m-0  focus:text-white focus:border-blue-600 focus:outline-none 
lg:text-[14px] text-xs rounded-full 
`;
