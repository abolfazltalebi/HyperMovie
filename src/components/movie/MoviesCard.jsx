import { IoIosStar } from "react-icons/io";
export default function MoviesCard({ bgSlider }) {
  return (
    <div className="group">
      <div className="bg-gray-300 aspect-[2/3] flex flex-col justify-end rounded-xl relative ">
        <div>
          <img src={bgSlider} alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="absolute flex flex-col justify-end cursor-pointer opacity-0 group-hover:opacity-100  transition-all duration-300 rounded-xl px-4 py-2 w-full h-full bg-gradient-to-b from-slate-500/50 to-slate-900/50">
          <h3>Die Hard</h3>
          <div className="flex items-center gap-2 ">
            <span>7.4 / 10</span>
            <IoIosStar className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
