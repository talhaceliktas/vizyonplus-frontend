"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DiziBolumleri = ({ diziSezonBilgileri }: { diziSezonBilgileri }) => {
  const searchParams = useSearchParams();
  const [sezon, setSezon] = useState<number>(1);

  useEffect(() => {
    const sezonParam = searchParams.get("sezon");
    if (sezonParam) {
      setSezon(parseInt(sezonParam, 10));
    } else {
      setSezon(1);
    }
  }, [searchParams]);

  const seciliSezon = diziSezonBilgileri?.find(
    (s) => s.sezon_numarasi === sezon,
  );

  return (
    <div className="flex flex-1 flex-col px-8 py-2">
      <table className="table-auto border-separate border-spacing-y-4">
        <thead>
          {seciliSezon.bolumler.map((bolum) => (
            <tr key={bolum.id}>
              <td className="text-primary-400">Bölüm {bolum.bolum_numarasi}</td>
              <td>{bolum.baslik}</td>
              <td className="text-primary-400 text-end">
                {new Date(bolum.olusturulma_zamani).toLocaleDateString(
                  "tr-TR",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default DiziBolumleri;
