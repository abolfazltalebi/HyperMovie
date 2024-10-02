import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MoviesCard from "../movie/MoviesCard";

export default function MoviesListSlider({ movies }) {

  return (
    <Swiper
      loop
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
       }}
    >
      {movies.map((movie, index) => {
        return (
          <SwiperSlide key={movie.id || index}>
            <MoviesCard bgSlider={movie.poster_path} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

