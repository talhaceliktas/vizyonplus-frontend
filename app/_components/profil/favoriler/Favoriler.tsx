import { favorileriGetir } from "../../../_lib/data-service-server";
import Favori from "./Favori";

const Favoriler = async () => {
  const favoriler = await favorileriGetir();

  return (
    <div className="grid h-full w-full grid-cols-2 gap-x-10 gap-y-16">
      {favoriler.map((favori) => (
        <Favori key={favori.icerikler_id} icerik_id={favori.icerikler_id} />
      ))}
    </div>
  );
};

export default Favoriler;
