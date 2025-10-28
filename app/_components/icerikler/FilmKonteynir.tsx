"use client";

import { useSearchParams } from "next/navigation";
import { FilmTipi } from "../../types";
import Film from "./Film";
import { useEffect, useState } from "react";

const FilmKonteynir = ({ filmler }: { filmler: FilmTipi[] }) => {
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
    ayarlanmisFilmler = filmler.filter((film: FilmTipi) =>
      film.turler.some((filmTuru) => filtreler.includes(filmTuru)),
    );
  }

  if (siralama === "alfabetikAZ") {
    ayarlanmisFilmler.sort((a, b) => a.isim.localeCompare(b.isim));
  } else if (siralama === "alfabetikZA") {
    ayarlanmisFilmler.sort((a, b) => b.isim.localeCompare(a.isim));
  }

  return (
    <div className="bg-primary-700/15 grid grid-cols-3 gap-x-10 gap-y-20 p-10">
      {ayarlanmisFilmler.map((film: FilmTipi) => (
        <Film film={film} key={film.id} />
      ))}
    </div>
  );
};

export default FilmKonteynir;
