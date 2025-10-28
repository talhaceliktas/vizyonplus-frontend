"use client";

import { useSearchParams } from "next/navigation";
import { FilmTipi } from "../../types";
import Film from "./Film";
import { useEffect, useState } from "react";

const FilmKonteynir = ({ filmler }) => {
  const [filtreler, setFiltreler] = useState([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const turParams = searchParams.get("tur");
    let turler = [];

    if (turParams) {
      turler = turParams.split(",");
    }

    setFiltreler(turler);
  }, [searchParams]);

  return (
    <div className="bg-primary-700/15 grid grid-cols-3 gap-x-10 gap-y-20 p-10">
      {filmler.map((film: FilmTipi) =>
        !filtreler.length ||
        film.turler.some((filmTuru) => filtreler.includes(filmTuru)) ? (
          <Film film={film} key={film.id} />
        ) : null,
      )}
    </div>
  );
};

export default FilmKonteynir;
