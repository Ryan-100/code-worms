import React, { useRef } from "react";
import { InputText } from "@/components/LV2/Inputs";
import { useForm } from "react-hook-form";
import MovieFolder from "../Home/MovieFolder";
import { SearchInput } from "@/components/Layout/Header";
import { useSearchMoviesQuery } from "@/store/modules/videos/videoModule";
import { useState } from "react";
import Section from "../Home/section-container/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Text } from "@/components/LV1";
import { useRouter } from "next/router";

const Main = ({ videos }) => {
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchParams(event.target.value);
      console.log(event.target.value);
    }
  };
  const router = useRouter();
  const { data } = useSearchMoviesQuery(searchParams);
  console.log(data, "searched data");
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

      {videos?.length > 0 &&
        videos.map((video) => <MovieFolder entity={video} key={video?.id} />)}
    </div>
  );
};

export default Main;
