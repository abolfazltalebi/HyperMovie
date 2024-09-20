export default function Navigation() {
  return (
    <nav className=" flex items-center justify-between py-4">
      <div className="flex items-center gap-12">
        <div>
          {/* <img src={logoHeader} alt="" /> */}
          <h1 className="font-bold text-3xl text-rose-500">Hyper Movies</h1>
        </div>
        <ul className="flex items-center gap-6">
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
        <ul className="flex items-center gap-4">
          <li className="transition-all hover:scale-110">
            <a href="" className="bg-rose-600 text-white px-8 py-2 rounded-full  uppercase">Login</a>
          </li>
          <li className="transition-all hover:scale-110">
            <a href="" className="bg-rose-500 text-white px-8 py-2 rounded-full  uppercase">Join</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
