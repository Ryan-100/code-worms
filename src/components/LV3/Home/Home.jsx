import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "styled-components";
import { Image as Icon, Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";
import MovieFolder from "./MovieFolder";

const Home = () => {
  // const [footerHeight, setFooterHeight] = useState(0);

  // useEffect(() => {
  //   const footerRef = document.querySelector("footer");
  //   const height = footerRef.getBoundingClientRect().height;
  //   setFooterHeight(height);
  // }, [footerHeight]);
  // , paddingBottom: footerHeight
  const theme = useTheme();
  // console.log(footerHeight, "footerHeight");
  return (
    <div style={{ color: theme.font }} className={`w-full `}>
      <div className="lg:flex lg:flex-row-reverse justify-around mx-4">
        <div className="flex items-center justify-center">
          <Image
            src="/images/mario.svg"
            width={672}
            height={346}
            alt="heroImg"
          />
        </div>
        <div className="flex flex-col space-y-4 max-w-[360px]">
          <Text size="xl" weight="lg">
            Super Mario
          </Text>
          <Text weight="lg">
            A plumber named Mario travels through an underground labyrinth with
            his brother, Luigi, trying to save a captured princess
          </Text>
          <div className="flex items-center space-x-20">
            <div className="flex items-center space-x-2">
              <Icon imageType="clock" width="20" />
              <Text>86 min</Text>
            </div>
            <div className="flex items-center space-x-2">
              <Icon imageType="calander" width="20" />
              <Text>April 2023</Text>
            </div>
          </div>
          <div className="flex self-start ">
            <Button
              startIcon={<Icon imageType="watch" width="20" />}
              href={`/watch/${123}`}
            >
              Watch now
            </Button>
          </div>
        </div>
      </div>
      <MovieFolder />
      <MovieFolder />
    </div>
  );
};

export default Home;
