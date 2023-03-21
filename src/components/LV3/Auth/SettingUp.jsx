import React from "react";
import { Image, Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";

const SettingUp = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <Image imageType="exit" width="80" height="101.67" />
      <Text as="div" size="xl" weight="lg" color="font" className="inline-flex">
        Finish setting up your account
        <Image imageType="correct" />
      </Text>
      <Text size="lg" weight="lg" color="font" className="max-w-[434px]">
        Code Worms is personalized for you. You can watch on any device at any
        time.
      </Text>
      <Button href="/">Continue</Button>
      <Text color="font">Proceed to home page</Text>
    </div>
  );
};

export default SettingUp;
