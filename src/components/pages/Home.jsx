import MoviesListSlider from "../main/MoviesListSlider";

export default function Home() {
  const movie = [
    "/pic1.webp",
    "/pic2.webp",
    "/pic3.webp",
    "/pic4.webp",
    "/pic2.webp",
    "/pic1.webp",
    "/pic3.webp",
    "/pic4.webp",
  ];
  return (
    <div className="container">
      <div className="py-8 ">
        <div className="md:flex md:justify-between items-center">
          <h2 className="text-slate-300 text-2xl">Whats Popular</h2>
          <ul className="my-6 flex flex-col gap-4 text-yellow-500 md:flex-row font-bold">
            <li>Streaming</li>
            <li>On Tv</li>
            <li>For Rent</li>
            <li>In Theaters</li>
          </ul>
        </div>
        <MoviesListSlider movies={movie} />
      </div>
      <div className="py-8 ">
        <div className="md:flex md:justify-between items-center">
          <h2 className="text-slate-300 text-2xl">Free to Watch</h2>
          <ul className="my-6 flex flex-col gap-4 text-yellow-500 md:flex-row font-bold">
            <li>Movie</li>
            <li>Tv</li>
          </ul>
        </div>
        <MoviesListSlider movies={movie} />
      </div>
    </div>
  );
}
