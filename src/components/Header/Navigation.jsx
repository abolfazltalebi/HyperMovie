import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-4 md:container md:bg-transparent overflow-hidden bg-slate-900 px-4 ">
        <div className="flex items-center gap-12">
          <div>
            {/* <img src={logoHeader} alt="" /> */}
            <h1 className="font-bold text-3xl text-rose-500">Hyper Movies</h1>
          </div>
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Tv Shows</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-4">
            <li className="transition-all hover:scale-110">
              <a
                href=""
                className="bg-rose-600 text-white px-8 py-2 rounded-full  uppercase"
              >
                Login
              </a>
            </li>
            <li className="transition-all hover:scale-110">
              <a
                href=""
                className="bg-rose-500 text-white px-8 py-2 rounded-full  uppercase"
              >
                Join
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <FaBars className=" scale-125" />
          </button>
        </div>
      </nav>
      <div
        className={`${
          isOpenMenu
            ? "bg-slate-900 text-center border-t-2 border-slate-500 transition-all duration-300 h-full opacity-100"
            : "h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div>
    </>
  );
}
