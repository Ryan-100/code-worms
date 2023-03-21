import React from "react";
import { useTheme } from "styled-components";
import { Image, Text } from "../LV1";

const Footer = ({ fixed }) => {
  const theme = useTheme();
  // lg:fixed lg:bottom-0 lg:left-0 md:fixed md:bottom-0 md:left-0
  return (
    <footer
      className={`mt-auto lg:flex justify-around items-center py-4 px-4 space-y-6 w-full z-[9999]  
      ${fixed ? "" : "fixed left-0 bottom-0"}`}
      style={{ color: theme.font, backgroundColor: theme.footer }}
    >
      <div className="flex flex-col space-y-6 justify-center items-center lg:items-start">
        <Image imageType="logo" />
        <div className="flex space-x-6">
          <Text>FAQ</Text>
          <Text>Contact</Text>
          <Text>Terms of Service</Text>
        </div>
        <div className="flex space-x-6">
          <Text>Copy right &copy;</Text>
          <Text>Code-Worms. All rights reserved</Text>
        </div>
        <div className="flex">
          <Text>About us</Text>
        </div>
      </div>
      <div className="flex flex-col">
        <Text size="semixl" weight="lg" className="text-center">
          Join Us
        </Text>
        <div className="flex space-x-2 justify-center">
          <Image imageType="facebook" />
          <Image imageType="instagram" />
          <Image imageType="linkedin" />
          <Image imageType="twitter" />
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
