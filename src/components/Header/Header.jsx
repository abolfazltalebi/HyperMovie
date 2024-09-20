import Navigation from "./Navigation";
import Search from "./Search";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
export default function Header() {
  return (
    <header className="container">
      <Navigation />
      <Search />
      <FollowUs />
      <HeaderSlider />
    </header>
  );
}
