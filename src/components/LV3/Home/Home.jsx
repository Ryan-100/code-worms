import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "styled-components";
import { Image as Icon, Text } from "@/components/LV1";
import { Button } from "@/components/LV2/Button";
import MovieFolder from "./MovieFolder";
import {
  useGetEntitiesQuery,
  useGetLatestQuery,
} from "@/store/modules/videos/videoModule";
import { setEntities, setLatest } from "@/store/modules/videos/video-slice";
import { useDispatch, useSelector } from "react-redux";
import Section from "./section-container/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

const Home = () => {
  const { entities, latest_movies, video_info } = useSelector(
    (state) => state.videos
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const { data: entities_data, isLoading } = useGetEntitiesQuery();
  const { data: latest } = useGetLatestQuery();
  useEffect(() => {
    dispatch(setEntities(entities_data));
    dispatch(setLatest(latest));
  }, [dispatch, entities_data, latest]);
  // console.log(entities, "latest redux");
  const theme = useTheme();
  if (isLoading) return <div>Loading</div>;
  return (
    <div style={{ color: theme.font }} className={`w-full `}>
      <div className="lg:flex lg:flex-row-reverse justify-around mx-4">
        <div className="flex items-center justify-center">
          <Image
            unoptimized
            src={`http://localhost/CW_Streaming_Serivce_Backend/${latest_movies?.cover}`}
            width={672}
            height={346}
            alt={latest_movies?.title}
          />
        </div>
        <div className="flex flex-col space-y-4 max-w-[360px]">
          <Text size="xl" weight="lg">
            {latest_movies?.title}
          </Text>
          <Text weight="lg">{latest_movies?.description}</Text>
          <div className="flex items-center space-x-20">
            <div className="flex items-center space-x-2">
              <Icon imageType="clock" width="20" />
              <Text>{latest_movies?.runtime} min</Text>
            </div>
            <div className="flex items-center space-x-2">
              <Icon imageType="calander" width="20" />
              <Text>{latest_movies?.release_year}</Text>
            </div>
          </div>
          <div className="flex self-start ">
            <Button
              startIcon={<Icon imageType="watch" width="20" />}
              href={`/watch/${latest_movies?.id}`}
            >
              Watch now
            </Button>
          </div>
        </div>
      </div>
      {video_info?.length > 0 && (
        <Section title="Your search is here">
          {/* <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 place-content-center gap-6"> */}
          <div className="w-screen overflow-hidden">
            <Swiper slidesPerView={1} className="swiper-container">
              {video_info?.map((el, index) => (
                <SwiperSlide
                  onClick={() => router.push(`/watch/${el.id}`)}
                  key={index}
                  className="swiper-slide lg:max-w-[169.83px] max-w-[100px] lg:col-span-2"
                >
                  <div
                    className="flex flex-col items-center justify-center w-full space-y-2"
                    key={index}
                  >
                    <div className="w-full flex justify-center items-center">
                      <Image
                        src={`http://localhost/CW_Streaming_Serivce_Backend/${el.cover}`}
                        width={170}
                        height={254}
                        unoptimized
                        alt={el.title}
                      />
                    </div>

                    <Text color="font">{el.title}</Text>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Section>
      )}
      {entities?.length > 0 &&
        entities.map((entity) => (
          <MovieFolder entity={entity} key={entity?.id} />
        ))}
    </div>
  );
};

export default Home;
