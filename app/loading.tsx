import Image from "next/image";
import { SyncLoader } from "react-spinners";
import vizyonPlusLogo from "../public/logo.png";

const Loading = () => {
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center">
      <div className="flex w-32 flex-col items-center gap-y-6">
        <div className="relative aspect-[803/310] w-20 md:w-40">
          <Image
            src={vizyonPlusLogo}
            alt="Vizyon PlusLogo"
            fill
            sizes="10rem, 15rem"
          />
        </div>
        <SyncLoader size={22} color="var(--color-secondary-2)" />
      </div>
    </div>
  );
};

export default Loading;
