import React from "react";
import { Text } from "@/components/LV1";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Button } from "@/components/LV2/Button";
import MovieFolder from "../Home/MovieFolder";

const WatchMovie = () => {
  return (
    <div className="">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
      />
      <div className="w-full flex items-center justify-center lg:space-x-10 space-x-6 py-4 h-[50%]">
        <Image src={"/images/poster.svg"} width={184} height={285} />
        <div className="flex flex-col space-y-6">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-4">
            <Text color="primary" size="lg" weight="lg">
              {"Title"}
            </Text>
            <Button>Add to Watchlist</Button>
          </div>
          <Text color="font">{"description"}</Text>
          <Text color="font">Runtime : {"86 min"}</Text>
          <Text color="font" className="inline-flex">
            Rating :&nbsp;{<Text color="primary">{"4.5"}</Text>}
          </Text>
          <Text color="font">Genre : {"Adventure/Comedy"}</Text>
        </div>
      </div>
      <MovieFolder />
      <MovieFolder />
    </div>
  );
};

export default WatchMovie;
