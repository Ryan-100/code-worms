import { Text } from "@/components/LV1";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const AboutUsUI = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-3">
      <Text size="xl" weight="lg" color="primary">
        About us
      </Text>
      <Text size="lg" color="font" className="lg:w-[50%] text-center">
        Code worms is a movie streaming website project that everyone can watch
        or stream any kind of movies, series and anime. Our main purpose is to
        be convenient in streaming movies at anytime and anywhere.
      </Text>
      <Image src="/images/aboutus.svg" width={700} height={600} />
      <div className="space-y-4">
        <div className="self-start">
          <Text size="lg" color="primary" className="pb-4">
            The Aim of our project
          </Text>
          <StyledLI>
            To introduce users with a convenient and reliable platform.
          </StyledLI>
          <StyledLI>
            To purchase plans smoothly from movie streaming project.
          </StyledLI>
          <StyledLI>
            To build a system that gives information identifying specific video.
          </StyledLI>
          <StyledLI>
            To develop a web-based video streaming platform where everyone can
            watch easily.
          </StyledLI>
        </div>
        <div className="self-start">
          <Text size="lg" color="primary" className="pb-4">
            Meet Our Team
          </Text>
          <Text className="lg:w-[50%] pb-3" color="font" size="lg">
            Lastly, we want to introduce everyone with our amazing team members
            who make every effort in this project with their whole hearts. We
            want to announce every details how our members take their roles.
          </Text>
          <StyledLI>DCS-14 &#8680; Leader, Back-end developer </StyledLI>
          <StyledLI>DCS-9 &#8680; Leader, Documentation</StyledLI>
          <StyledLI>DCS-6 &#8680; UI/UX designer</StyledLI>
          <StyledLI>DCS-4 &#8680; Data collection, UI/UX designer</StyledLI>
          <StyledLI>DCS-22 &#8680; Front-end developer</StyledLI>
          <StyledLI>DCS-28 &#8680; Back-end developer</StyledLI>
          <StyledLI>DCS-29 &#8680; Data collection</StyledLI>
          <StyledLI>DCS-35 &#8680; Data collection</StyledLI>
          <StyledLI>DCS-37 &#8680; UI/UX designer</StyledLI>
          <StyledLI>DCS-38 &#8680; Documentation</StyledLI>
          <StyledLI>DCS-41 &#8680; Database administrator</StyledLI>
        </div>
      </div>
    </div>
  );
};

export default AboutUsUI;
const ColoredLi = styled.li`
  color: ${(props) => props.theme.font};
`;
const StyledLI = tw(ColoredLi)`
text-md lg:text-lg
`;
