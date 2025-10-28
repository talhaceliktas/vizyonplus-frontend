"use client";

import { useSearchParams } from "next/navigation";
import { FilmDetay } from "../../types";
import Film from "./Film";
import { useEffect, useState } from "react";

const FilmKonteynir = ({ filmler }: { filmler: FilmDetay[] }) => {
  const [filtreler, setFiltreler] = useState([]);
  const [siralama, setSiralama] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const turParams = searchParams.get("tur");
    const siralamaParam = searchParams.get("siralama");
    let turler = [];

    if (turParams) {
      turler = turParams.split(",");
    }

    setFiltreler(turler);
    setSiralama(siralamaParam);
  }, [searchParams]);

  let ayarlanmisFilmler = filmler;

  if (filtreler && filtreler.length > 0) {
    ayarlanmisFilmler = filmler.filter((film: FilmDetay) =>
      film.turler.some((filmTuru) => filtreler.includes(filmTuru)),
    );
  }

  if (siralama === "alfabetikAZ") {
    ayarlanmisFilmler.sort((a, b) => a.isim.localeCompare(b.isim));
  } else if (siralama === "alfabetikZA") {
    ayarlanmisFilmler.sort((a, b) => b.isim.localeCompare(a.isim));
  } else if (siralama === "fiyataGoreArtan") {
    ayarlanmisFilmler.sort(
      (
        a,
        b, // 100  - 20
      ) =>
        (a.film_ucretleri[0].satin_alma_ucreti *
          (100 - a.film_ucretleri[0].indirim_orani)) /
          100 -
        (b.film_ucretleri[0].satin_alma_ucreti *
          (100 - b.film_ucretleri[0].indirim_orani)) /
          100,
    );
  } else if (siralama === "fiyataGoreAzalan") {
    ayarlanmisFilmler.sort(
      (a, b) =>
        (b.film_ucretleri[0].satin_alma_ucreti *
          (100 - b.film_ucretleri[0].indirim_orani)) /
          100 -
        (a.film_ucretleri[0].satin_alma_ucreti *
          (100 - a.film_ucretleri[0].indirim_orani)) /
          100,
    );
  }

  return (
    <div className="bg-primary-700/15 grid grid-cols-3 gap-x-10 gap-y-20 p-10">
      {ayarlanmisFilmler.map((film: FilmDetay) => (
        <Film film={film} key={film.id} />
      ))}
    </div>
  );
};

export default FilmKonteynir;
