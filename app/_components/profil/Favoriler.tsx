import { favorileriGetir } from "../../_lib/data-service-server";
import KayitliFilm from "./KayitliFilm";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const Favoriler = async () => {
  const favoriler = await favorileriGetir();

  if (!favoriler || favoriler.length === 0) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-4 text-center">
        <Link
          href="/icerikler"
          className="flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-pink-200 p-6"
        >
          <FaHeart className="text-4xl text-pink-500" />
        </Link>

        <h2 className="text-secondary-1-2 text-xl font-semibold">
          Henüz favori bir filmin yok
        </h2>
        <p className="text-secondary-3 max-w-sm text-sm">
          Beğendiğin filmleri kalp ikonuna tıklayarak buraya ekleyebilirsin.
        </p>
      </div>
    );
  }

  return (
    <div className="grid h-full w-full gap-x-10 gap-y-16 md:grid-cols-2">
      {favoriler.map((favori) => (
        <KayitliFilm
          key={favori.icerikler_id}
          icerik_id={favori.icerikler_id}
          kayitTuru="favori"
        />
      ))}
    </div>
  );
};

export default Favoriler;
