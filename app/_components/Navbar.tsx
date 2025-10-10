import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-primary-900/30 fixed z-10 w-full">
      <div className="flex items-center justify-between p-4 md:justify-around">
        <h1 className="text-4xl font-bold">Biletcim</h1>
        <div className="hidden items-center gap-x-5 font-semibold md:flex">
          <Link href="/filmler">Filmler</Link>
          <Link href="/etkinlikler">Etkinlikler</Link>
          <Link href="/kampanyalar">Kampanyalar</Link>
          <input
            type="text"
            className="bg-primary-50 placeholder:text-primary-500 text-primary-900 w-[15rem] rounded-full p-1 pl-3 duration-300 focus:w-[20rem]"
            placeholder="Ara..."
          />
        </div>
        <FaCircleUser className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
