import React from "react";
import { useTheme } from "styled-components";
import { Image, Text } from "../LV1";
import { useRouter } from "next/router";

const Footer = ({ fixed }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <footer
      className={`mt-auto lg:flex justify-around items-center py-4 px-4 space-y-6 w-full z-[9999] ${
        fixed ? "" : "fixed bottom-0 left-0"
      }
      `}
      style={{ color: theme.font, backgroundColor: theme.footer }}
    >
      <div className="flex flex-col space-y-6 justify-center items-center lg:items-start">
        <Image
          imageType="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <div className="flex space-x-6">
          <Text
            className="cursor-pointer"
            onClick={() => router.push("/aboutUs")}
          >
            FAQ
          </Text>
          <Text
            className="cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Text>
          <Text
            className="cursor-pointer"
            onClick={() => router.push("/aboutUs")}
          >
            Terms of Service
          </Text>
        </div>
        <div className="flex space-x-6">
          <Text>Copy right &copy;</Text>
          <Text>Code-Worms. All rights reserved</Text>
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => router.push("/aboutUs")}
        >
          <Text>About us</Text>
        </div>
      </div>
      <div className="flex flex-col">
        <Text size="semixl" weight="lg" className="text-center">
          Join Us
        </Text>
        <div className="flex space-x-2 justify-center">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image imageType="facebook" className="cursor-pointer" />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image imageType="instagram" className="cursor-pointer" />
          </a>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image imageType="linkedin" className="cursor-pointer" />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image imageType="twitter" className="cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex lg:max-w-[25%] justify-center">
        <Text>
          This website is just for study purpose only. All the credits go to the
          rightful owner.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
