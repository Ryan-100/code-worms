// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

/**
 * @param slidesPerView
 * @param spaceBetween
 * @param className
 */

const SwiperBase = ({ children, slidesPerView, spaceBetween, className }) => {
  return (
    <div className="w-full h-full grid sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-12">
      <Swiper
        // centeredSlides={true}
        // slidesPerView={2}
        spaceBetween={spaceBetween || 50}
        grabCursor={true}
        breakpoints={{
          // when window width is >= 320px
          400: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // when window width is >= 480px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          880: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1180: {
            slidesPerView: slidesPerView || 4,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className={`col-start-1 col-end-12 mySwiper ` + className}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperBase;
