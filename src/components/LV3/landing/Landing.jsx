import React from "react";
import { Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";

const Landing = () => {
  return (
    <div
      className="-mt-[78px] flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/images/background.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "75vh",
        width: "100%",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-6 lg:w-[500px]">
        <Text color="neutral100" size="xl" wieght="lg">
          The ultimate destination for all your favorite movies and TV shows.
        </Text>
        <Text color="neutral100">
          “Discover new worlds and escape into your favorite stories."
        </Text>
        <Button className="lg:w-[247px] lg:h-[54px] w-[120px] h-[34px]">
          <p className="lg:text-[22px] text-[14px]">Get Started</p>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
