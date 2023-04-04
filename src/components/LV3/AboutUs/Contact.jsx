import { Button } from "@/components/LV2/Button";
import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-5 mx-10">
      <HeadText>Name</HeadText>
      <StyledInput placeholder="Enter your name." />
      <HeadText>Email</HeadText>
      <StyledInput placeholder="Enter your email." />
      <HeadText>Mssage</HeadText>
      <StyledInput placeholder="Enter your message." height={80} />
      <div className="rounded-full overflow-x-hidden">
        <Button fullWidth>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;

const HeightInput = styled.input`
  height: ${(props) => props.height && props.height}px !important;
`;

const StyledInput = tw(HeightInput)`
form-control  block  w-full  px-3  py-2.5  text-base font-normal  text-white bg-[#192026]  bg-clip-padding     transition  ease-in-out  m-0  focus:text-white  focus:outline-none border border-white focus:border-l-trasparent focus:border-r-trasparent focus:border-t-trasparent lg:text-[14px] text-xs rounded-full
`;

const StyledText = styled.p`
  color: ${(props) => props.theme.font};
`;

const HeadText = tw(StyledText)`
  lg:text-lg
  text-[14px]
`;
