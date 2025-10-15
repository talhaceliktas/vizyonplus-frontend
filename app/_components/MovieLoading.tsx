import { SyncLoader } from "react-spinners";
import biletcimLogo from "../../public/logo.png";
import Image from "next/image";

const MovieLoading = () => {
  return (
    <div className="mt-52 mb-80 flex justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <Image
          src={biletcimLogo}
          alt="Biletcim logosu"
          className="w-32 sm:w-44"
        />
        <SyncLoader size={30} color="var(--color-secondary-2)" />
      </div>
    </div>
  );
};

export default MovieLoading;
