import { useState } from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import bg from "../../../public/images/cinema.jpg";

export default function Header() {
  const [backgroundImage, setBackgroundImage] = useState(bg);
  const handleImageHover = (imageSrc) => {
    setBackgroundImage(imageSrc);
  };

  return (
    <header
      className=" transition-all bg-cover  bg-center pb-8 md:py-8"
      style={{
        backgroundImage: `linear-gradient(#ab534f30, #0f0f0f),url('${backgroundImage}')`,
      }}
    >
      <Navigation />
      <div className="container ">
        <Search />
        <FollowUs />
        <HeaderSlider onImageHover={handleImageHover} />
      </div>
    </header>
  );
}
