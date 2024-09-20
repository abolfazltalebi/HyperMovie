import { RiSearch2Line } from "react-icons/ri";
export default function Search() {
  return (
    <section className=" mt-12 text-slate-300">
      <div className="relative">
        <input
          type="text"
          className="w-full p-2.5 rounded-xl bg-slate-700 border-2 border-gray-400 text-white text-xl outline-none"
          placeholder="Search for a movie"
        />
        <RiSearch2Line className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 text-white" />
      </div>
    </section>
  );
}
