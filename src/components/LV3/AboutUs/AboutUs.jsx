import React from "react";
import { Image, Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";
import styled, { useTheme } from "styled-components";
import tw from "tailwind-styled-components";

const AboutUs = () => {
  const theme = useTheme();
  return (
    <div className="w-full" style={{ color: theme.font }}>
      <HeadText
        color="primary"
        size="xl"
        weight="lg"
        className="text-center lg:pb-4"
      >
        Choose the plan that’s right for you
      </HeadText>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:-space-x-3 space-y-4 py-6">
        <div className="bg-opacity-30 bg-black rounded-xl flex flex-col items-center px-4 pt-2 lg:min-w-[320px] min-w-[320px] max-w-[320px] space-y-6 lg:pb-8 pb-6">
          <Text size="xl" weight="lg">
            Basic
          </Text>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="computer" />
            <StyledText>All Devices</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="video" />
            <StyledText>Good</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="zoom" />
            <StyledText>720p</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="coin" />
            <StyledText>$ 5 /month</StyledText>
          </div>
          <Button>Subscribe</Button>
        </div>
        <div className="bg-opacity-30 bg-black rounded-xl flex flex-col items-center px-4 pt-2 lg:min-w-[320px] min-w-[320px] max-w-[320px] space-y-6 lg:pb-14 pb-6">
          <HeadText size="xl" weight="lg">
            Standard
          </HeadText>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="computer" />
            <StyledText>All Devices</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="video" />
            <StyledText>Better</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="zoom" />
            <StyledText>1080p</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="coin" />
            <StyledText>$ 10 /month</StyledText>
          </div>
          <Button>Subscribe</Button>
        </div>
        <div className="bg-opacity-30 bg-black rounded-xl flex flex-col items-center px-4 pt-2 lg:min-w-[320px] min-w-[320px] max-w-[320px] space-y-6 lg:pb-8 pb-6">
          <HeadText size="xl" weight="lg">
            Premium
          </HeadText>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="computer" />
            <StyledText>All Devices</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="video" />
            <StyledText>Best</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="zoom" />
            <StyledText>4K + HDR</StyledText>
          </div>
          <div className="flex space-x-3 items-center self-start pl-10">
            <Image imageType="coin" />
            <StyledText>$ 15 /month</StyledText>
          </div>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const StyledText = styled(Text)`
  font-size: 14px;
`;

const HeadText = tw(Text)`
  lg:text-[28px]
  text-[20px]
`;
