import React from "react";
import { LuTimer } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { FilmDetay } from "../../types";

const FilmIcerigi = ({ film }: { film: FilmDetay }) => {
  const { isim, yonetmen, yayinlanma_tarihi, turler, sure, aciklama } = film;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="flex flex-col text-2xl md:inline-block md:text-6xl">
          <span>{isim} </span>
          <span className="text-2xl italic opacity-50">/ {yonetmen}</span>
        </h1>
      </div>
      <div className="flex flex-col justify-between gap-y-2 text-sm opacity-75 sm:gap-y-5 md:text-lg lg:flex-row lg:items-center lg:gap-y-0">
        <div className="flex flex-col gap-x-4 gap-y-2 sm:gap-y-5 md:gap-x-10 lg:flex-row lg:items-center lg:gap-y-0">
          <h3 className="flex items-center gap-x-2">
            <MdDateRange className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]" />
            {yayinlanma_tarihi}
          </h3>
          <h3 className="flex items-center gap-x-2">
            <LuTimer className="h-[14px] w-[14px] md:h-[28px] md:w-[28px]" />
            {Math.floor(sure / 60) !== 0 && `${Math.floor(sure / 60)}s`}{" "}
            {sure % 60}dk
          </h3>
        </div>
        <h3>
          {turler.map((tur, index) => (
            <span key={tur}>
              {index !== 0 && "| "}
              {tur}{" "}
            </span>
          ))}
        </h3>
      </div>
      <p className="text-base md:text-lg">{aciklama}</p>
    </>
  );
};

export default FilmIcerigi;
