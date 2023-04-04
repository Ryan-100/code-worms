import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { Text } from "@/components/LV1";
import { Swiper } from "@/components/LV2/Swiper";
import Section from "./section-container/Section";
import { useRouter } from "next/router";

const AllMoviesFolder = ({ entity }) => {
  const router = useRouter();
  // w-[65px] sm:w-[80px] md:w-[110px] lg:w-[135px] h-[65px] xs:h-[80px] sm:h-[103px]
  return (
    <Section title={entity?.name}>
      {/* <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 place-content-center gap-6"> */}
      <div className="w-screen overflow-hidden">
        <Swiper slidesPerView={5} className="swiper-container">
          {entity?.movies?.length > 0 &&
            entity.movies.map((el, index) => (
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
                      width={170}unoptimized
                      height={254}
                      alt={el.title}
                    />
                  </div>
                  {/* {console.log(el.cover)} */}

                  <Text color="font">{el.title}</Text>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default AllMoviesFolder;
