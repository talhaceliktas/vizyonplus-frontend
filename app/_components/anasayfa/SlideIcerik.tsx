"use client";

import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GirisProps } from "../../types"; // Ana tipten sadece bir slide'ı alacağız

// Tip olarak tüm array yerine array'in bir elemanını alalım
type Slide = GirisProps["tanitimVerileri"][0];

interface SlideIcerikProps {
  slide: Slide;
}

const SlideIcerik = ({ slide }: SlideIcerikProps) => {
  return (
    <div className="dark:bg-primary-900/5 bg-primary-900/40 absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-2xl border border-white/10 p-4 shadow-xl backdrop-blur-[0.3rem] duration-500 hover:scale-105 md:left-24 md:p-6 lg:left-40 dark:shadow-black/50">
      <div className="flex flex-col items-start gap-x-5 gap-y-2 text-sm md:flex-row md:items-center md:gap-y-0 md:text-base">
        <h3 className="text-primary-100 text-3xl duration-100">{slide.isim}</h3>

        <div className="text-primary-300 flex gap-x-5 duration-100">
          <p className="flex items-center gap-x-2 font-bold">
            <MdOutlineDateRange />
            {slide.kategoriler}
          </p>
          <p className="flex items-center gap-x-2 font-bold">
            <FaRegClock />
            {slide.sure}
          </p>
        </div>
      </div>

      <hr className="border-primary-50 my-3 duration-100" />

      {/* Genişliği daha esnek hale getirdik */}
      <p className="text-primary-50 max-w-xs px-1 duration-100 md:max-w-md lg:max-w-lg">
        {slide.aciklama}
      </p>

      <Link
        className="mt-4 flex items-center justify-end gap-x-2 pr-2 duration-300 hover:scale-x-[1.05] hover:scale-y-[1.15] hover:gap-x-4"
        href={slide.link}
      >
        <p className="dark:from-secondary-1 dark:via-secondary-2 dark:to-secondary-1 from-secondary-3 via-secondary-2 to-secondary-3 bg-gradient-to-l bg-clip-text font-bold text-transparent duration-100">
          Filme Git
        </p>
        <HiArrowNarrowRight className="fill-secondary-2 text-2xl" />
      </Link>
    </div>
  );
};

export default SlideIcerik;
