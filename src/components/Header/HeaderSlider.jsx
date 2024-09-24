import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import pic1 from "../../../public/images/pic-1.webp";
import pic2 from "../../../public/images/pic-2.webp";
import pic3 from "../../../public/images/pic-3.webp";
import pic4 from "../../../public/images/pic-4.webp";
import MoviesCard from "../movie/MoviesCard";
export default function HeaderSlider({ onImageHover }) {
  const images = [
    { id: 1, src: pic1 },
    { id: 2, src: pic2 },
    { id: 3, src: pic3 },
    { id: 4, src: pic4 },
    { id: 5, src: pic3 },
    { id: 6, src: pic1 },
    { id: 7, src: pic3 },
    { id: 7, src: pic1 },
    { id: 8, src: pic3 },
    { id: 9, src: pic1 },
  ];
  return (
    <div className="mt-8 ">
      <Swiper
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((itemImage) => {
          return (
            <SwiperSlide key={itemImage.id}>
              <div>
                <MoviesCard bgSlider={itemImage.src} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
