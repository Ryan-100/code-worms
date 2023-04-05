import React, { useRef, useState } from "react";
import { SearchInput } from "@/components/Layout/Header";
import { useRouter } from "next/router";
import {
  useGetWatchlistsQuery,
  useSearchMoviesQuery,
} from "@/store/modules/videos/videoModule";
import Section from "../Home/section-container/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Text } from "@/components/LV1";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const { video_info } = useSelector((state) => state.videos);
  const [searchParams, setSearchParams] = useState(null);
  const inputRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchParams(event.target.value);
      console.log(event.target.value);
    }
  };
  const router = useRouter();
  const { data } = useSearchMoviesQuery(searchParams);
  const { data: watchlist } = useGetWatchlistsQuery();
  return (
    <div className="w-full">
      <div className="md:hidden">
        <SearchInput
          ref={inputRef}
          onKeyDown={handleKeyDown}
          placeholder="Search Movies and shows here!"
          width={370}
        />
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
                        unoptimized
                        height={254}
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
      {data?.length > 0 && (
        <Section title="Your search is here">
          {/* <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 place-content-center gap-6"> */}
          <div className="w-screen overflow-hidden">
            <Swiper slidesPerView={1} className="swiper-container">
              {data?.map((el, index) => (
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
      {watchlist?.length > 0 ? (
        <Section title="Your Watchlist">
          {/* <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 place-content-center gap-6"> */}
          <div className="w-screen overflow-hidden">
            <Swiper slidesPerView={1} className="swiper-container">
              {watchlist?.map((el, index) => (
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
      ) : (
        <Text size="xl" color="font">
          No Saved Movies!
        </Text>
      )}
    </div>
  );
};

export default Watchlist;
