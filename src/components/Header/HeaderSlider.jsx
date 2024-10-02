import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MoviesCard from "../movie/MoviesCard";
import { useEffect, useState } from "react";

export default function HeaderSlider({ onImageHover }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reusable function to fetch movies from API
  async function fetchMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTBmMDRlMGI2ZTI3ZDYwOGRmZmQzYWVlYmFjZWRlYiIsIm5iZiI6MTcyNzc5NTg0OS42MjEyMDIsInN1YiI6IjY2ZjQxYWFkNGZkNGViZTIyNDBkZWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5k5IsYQY5sTEsBRk09NSeYQESG4KxBVCq2ebeAsHdr4",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results || []);
      setLoading(false);
    } catch (err) {
      setError("Failed to load movies", err);
      setLoading(false);
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="mt-8">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {loading ? (
          <SwiperSlide key="loading">
            <div>Loading movies...</div>
          </SwiperSlide>
        ) : error ? (
          <SwiperSlide key="error">
            <div>{error}</div>
          </SwiperSlide>
        ) : (
          movies.map((movie) => (
            <SwiperSlide key={`movie-${movie.id}`}>
              <div onMouseOver={() => onImageHover(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)}>
                <MoviesCard
                  bgSlider={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.original_title}
                  voteAverage={movie.vote_average}
                  overview={movie.overview}
                />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
