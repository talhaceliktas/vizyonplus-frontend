import { dahaSonraIzlenecekleriGetir } from "../../_lib/data-service-server";
import KayitliFilm from "./KayitliFilm";

const Izlenecekler = async () => {
  const izlenecekler = await dahaSonraIzlenecekleriGetir();

  return (
    <div className="grid h-full w-full grid-cols-2 gap-x-10 gap-y-16">
      {izlenecekler.map((izlenecek) => (
        <KayitliFilm
          key={izlenecek.icerikler_id}
          icerik_id={izlenecek.icerikler_id}
          kayitTuru="dahaSonra"
        />
      ))}
    </div>
  );
};

export default Izlenecekler;
