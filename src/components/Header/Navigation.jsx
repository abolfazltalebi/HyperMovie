import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuItem = [
    { id: 1, patch: "/movies", text: "movies" },
    { id: 2, patch: "/tv", text: "tv" },
    { id: 3, patch: "/people", text: "people" },
    { id: 4, patch: "/Tv-Shows", text: "Tv Shows" },
    { id: 5, patch: "/more", text: "more" },
  ];
  function activeClass({ isActive }) {
    return isActive ? "text-rose-600" : "hover:text-white";
  }
  return (
    <>
      <nav className="flex items-center justify-between py-4 md:container md:bg-transparent overflow-hidden bg-slate-900 px-4 ">
        <div className="flex items-center gap-12">
          <div>
            <Link to="/">
              <h1 className="font-bold text-3xl text-rose-500">Hyper Movies</h1>
            </Link>
          </div>
          <ul className="hidden md:flex items-center gap-6">
            {menuItem.map((mItem) => {
              return (
                <li key={mItem.id}>
                  <NavLink to={mItem.patch} className={activeClass}>{mItem.text.toUpperCase()}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-4">
            <li className="transition-all hover:scale-110">
              <NavLink
                to=""
                className="bg-rose-600 text-white px-8 py-2 rounded-full  uppercase"
              >
                Login
              </NavLink>
            </li>
            <li className="transition-all hover:scale-110">
              <NavLink
                to=""
                className="bg-rose-500 text-white px-8 py-2 rounded-full  uppercase"
              >
                Join
              </NavLink>
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
          {menuItem.map((mItem) => {
            return (
              <li key={mItem.id}>
                <NavLink to={mItem.patch} className={activeClass}>
                  {mItem.text.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
