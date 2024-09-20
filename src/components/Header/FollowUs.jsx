import { FaTelegram, FaYoutube, FaGoogle, FaTwitter } from "react-icons/fa";
export default function FollowUs() {
  return (
    <section className="">
      <div className="flex items-center gap-2 justify-end mt-5">
        <h2 className="text-white text-md font-bold">Follow Us:</h2>
        <ul className="flex gap-x-4">
          <li>
            <a href="#">
              <FaTelegram className="size-4 transition-all hover:text-rose-500 " />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube className="size-4" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGoogle className="size-4" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter className="size-4" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
