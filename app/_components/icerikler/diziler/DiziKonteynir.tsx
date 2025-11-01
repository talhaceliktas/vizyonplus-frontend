"use client";

import { useSearchParams } from "next/navigation";
import { FilmDetay } from "../../../types";
import Film from "../filmler/Film";
import { useEffect, useState } from "react";
import filmleriSiralaVeFiltrele from "../../../_helper/filmleriSiralaVeFiltrele";

const DiziKonteynir = ({ diziler }: { diziler: FilmDetay[] }) => {
  const [filtreler, setFiltreler] = useState<string[]>([]);
  const [siralama, setSiralama] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const turParams = searchParams.get("tur");
    const siralamaParam = searchParams.get("siralama");
    let turler: string[] = [];

    if (turParams) {
      turler = turParams.split(",");
    }

    setFiltreler(turler);
    setSiralama(siralamaParam || "alfabetikAZ");
  }, [searchParams]);

  const gosterilecekFilmler = filmleriSiralaVeFiltrele(
    filtreler,
    diziler,
    siralama,
  );

  return (
    <div className="bg-primary-700/15 grid grid-cols-3 gap-x-10 gap-y-20 p-10">
      {gosterilecekFilmler.map((film: FilmDetay) => (
        <Film film={film} key={film.id} />
      ))}
    </div>
  );
};

export default DiziKonteynir;
