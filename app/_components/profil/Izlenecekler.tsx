import Link from "next/link";
import { dahaSonraIzlenecekleriGetir } from "../../_lib/data-service-server";
import KayitliFilm from "./KayitliFilm";
import { FaRegBookmark } from "react-icons/fa6";

const Izlenecekler = async () => {
  const izlenecekler = await dahaSonraIzlenecekleriGetir();

  if (!izlenecekler || izlenecekler.length === 0) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-4 text-center">
        <Link
          href="/icerikler"
          className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-6"
        >
          <FaRegBookmark className="text-4xl text-blue-500" />
        </Link>

        <h2 className="text-secondary-1-2 text-xl font-semibold">
          Daha Sonra İzle listende henüz film yok
        </h2>
        <p className="text-secondary-3 flex items-center justify-center gap-1 text-sm">
          İzlemek istediğin filmleri <FaRegBookmark className="text-xl" />{" "}
          ikonuna tıklayarak buraya ekleyebilirsin.
        </p>
      </div>
    );
  }

  return (
    <div className="grid h-full w-full gap-x-10 gap-y-16 lg:grid-cols-2">
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
