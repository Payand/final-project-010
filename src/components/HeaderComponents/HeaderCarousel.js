import { Swiper, SwiperSlide } from "swiper/react";
import HeaderButtons from "./HeaderButtons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper";

const HeaderCarousel = ({ carousel }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        speed={1000}
        effect={"fade"}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        {carousel.map((car) => {
          return (
            <>
              <SwiperSlide key={car.id}>
                <img src={car.image} alt={car.image} />
                <div className="nav-text-box">
                  <div className="container">
                    <h1>{car.head}</h1>

                    <ul>
                      <li>{car.quality}</li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        {car.rate}
                      </li>
                      <li>{car.duration} min</li>
                      <li>
                        <span>{car.genre[0]}</span>
                        <span>/{car.genre[1]}</span>
                      </li>
                    </ul>
                    <HeaderButtons />
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeaderCarousel;
