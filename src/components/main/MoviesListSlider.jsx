import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import pic1 from "../../../public/images/pic-1.webp";
import pic2 from "../../../public/images/pic-2.webp";
import pic3 from "../../../public/images/pic-3.webp";
import pic4 from "../../../public/images/pic-4.webp";
import MoviesCard from "../movie/MoviesCard";
export default function MoviesListSlider({ movies }) {
  const images = [
    { id: 1, src: pic1 },
    { id: 2, src: pic2 },
    { id: 3, src: pic3 },
    { id: 4, src: pic4 },
    { id: 5, src: pic3 },
    { id: 6, src: pic1 },
    { id: 6, src: pic1 },
    { id: 6, src: pic1 },
  ];
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
      {images.map((itemImage) => {
        return (
          <SwiperSlide key={itemImage.id}>
            <MoviesCard bgSlider={itemImage.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
