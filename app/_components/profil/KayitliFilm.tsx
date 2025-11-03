import Image from "next/image";
import { filmiGetir } from "../../_lib/data-service-server";
import { IcerikTipi } from "../../types";
import FavorilereEkleButton from "../ui/FavorilereEkleButton";
import Link from "next/link";
import DahaSonraIzleButton from "../ui/DahaSonraIzleButton";

const KayitliFilm = async ({
  icerik_id,
  kayitTuru,
}: {
  icerik_id: number;
  kayitTuru: string;
}) => {
  const film: IcerikTipi = await filmiGetir(icerik_id);

  const { id, isim, fotograf, tur, turler, aciklama } = film;

  const kesilecekKarakter = 100; // Mobilde daha iyi görünmesi için 100'e düşürüldü
  const aciklamaKesilmis =
    aciklama.length > kesilecekKarakter
      ? aciklama.slice(0, kesilecekKarakter)
      : aciklama;

  return (
    <Link
      className="dark:bg-primary-700 bg-primary-800/40 text-primary-50 relative flex w-full flex-col overflow-hidden rounded-xl duration-300 md:aspect-[16/9] md:flex-row md:gap-x-2"
      href={
        tur === "film" ? `/icerikler/filmler/${id}` : `/icerikler/diziler/${id}`
      }
    >
      <div className="relative aspect-[16/9] w-full md:aspect-[9/16] md:h-full md:w-auto">
        <Image
          alt={`${isim} filmi`}
          src={fotograf}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="relative flex flex-1 flex-col gap-y-1 p-4 pb-16 md:gap-y-2 md:pb-4">
        <h1 className="text-xl font-semibold md:text-2xl">{isim}</h1>

        <p className="text-xs opacity-70 md:text-sm">
          {turler.map((tur, index) => (
            <span key={tur}>
              {index !== 0 && " | "}
              {tur}
            </span>
          ))}
        </p>

        <p className="mt-2 text-sm md:mt-4 md:text-base">
          {aciklamaKesilmis}
          {aciklama.length > kesilecekKarakter && "..."}
        </p>

        <div className="absolute right-4 bottom-4 flex gap-x-2">
          {kayitTuru === "favori" ? (
            <FavorilereEkleButton icerik_id={id} />
          ) : (
            <DahaSonraIzleButton icerik_id={id} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default KayitliFilm;
