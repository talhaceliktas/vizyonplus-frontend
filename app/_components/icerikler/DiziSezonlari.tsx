"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DiziSezonlari = ({ diziSezonBilgileri, diziId }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [seciliSezon, setSeciliSezon] = useState<number>(0);

  useEffect(() => {
    const sezonParam = searchParams.get("sezon");
    if (sezonParam) {
      setSeciliSezon(parseInt(sezonParam, 10));
    } else {
      setSeciliSezon(1);
    }
  }, [searchParams]);

  if (!diziSezonBilgileri || diziSezonBilgileri.length === 0) return null;

  const handleClick = (sezon_numarasi: number) => {
    router.push(`./${diziId}?sezon=${sezon_numarasi}`);
  };

  return (
    <div className="flex flex-col gap-y-4">
      {diziSezonBilgileri.map((sezon) => (
        <button
          key={sezon.sezon_numarasi}
          onClick={() => handleClick(sezon.sezon_numarasi)}
          className={`hover:bg-primary-600 cursor-pointer px-4 py-2 text-left text-lg duration-300 ${sezon.sezon_numarasi === seciliSezon ? "opacity-100" : "opacity-65"}`}
        >
          SEZON {sezon.sezon_numarasi}
        </button>
      ))}
    </div>
  );
};

export default DiziSezonlari;
