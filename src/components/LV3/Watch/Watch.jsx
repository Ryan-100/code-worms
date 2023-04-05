import React, { useEffect, useState } from "react";
import { Text } from "@/components/LV1";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Button } from "@/components/LV2/Button";
import { useGetVideoInfoQuery } from "@/store/modules/videos/videoModule";
import {
  useAdd_watchlistMutation,
  useCheck_watchlistQuery,
  useRemove_watchlistMutation,
} from "@/store/modules/activity/activityModule";

const WatchMovie = ({ id }) => {
  // const video = useSelector((state) => state.videos?.video_info);
  const [isInList, setIsInList] = useState(false);
  const { data: video } = useGetVideoInfoQuery(id);
  const video_info = video && video[0];

  const [add_watchlist] = useAdd_watchlistMutation();
  const [remove_watchlist] = useRemove_watchlistMutation();
  const { data: isWatchlist } = useCheck_watchlistQuery(id);

  useEffect(() => {
    if (isWatchlist?.is_in_watchlist) {
      setIsInList(true);
    } else {
      setIsInList(false);
    }
  }, [isWatchlist]);

  const addToWatchList = async (id) => {
    if (isInList) {
      const res = await remove_watchlist(id);
    } else {
      const res = await add_watchlist({ entity_ID: id });
      console.log(res, "added res");
    }
  };

  // console.log(video_info, "video_info");
  return (
    <div className="">
      <ReactPlayer url={video_info?.file_path} width="100%" controls={true} />
      <div className="w-full lg:flex items-center justify-center lg:space-x-10 space-x-6 py-4 h-[50%] mx-auto">
        <Image
          src={`http://localhost/CW_Streaming_Serivce_Backend/${video?.cover}`}
          width={184}
          height={285}
          unoptimized
          alt={video_info?.title}
          className="mx-auto"
        />
        <div className="flex flex-col space-y-6">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-4">
            <Text color="primary" size="lg" weight="lg">
              {video_info?.title}
            </Text>
            <Button onClick={() => addToWatchList(video_info?.entity_ID)}>
              {isInList ? "Remove from list" : "Add to Watchlist"}
            </Button>
          </div>
          <Text color="font">{video_info?.description}</Text>
          <Text color="font">Runtime : {video_info?.runtime} min</Text>
          <Text color="font" className="inline-flex">
            Rating :&nbsp;{<Text color="primary">{video_info?.rating}</Text>}
          </Text>
          <Text color="font">Genre : {video_info?.category_name}</Text>
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;
