"use client";

import Image from "next/image";
import { type Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { GirisProps } from "../../types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ThumbSliderProps {
  data: GirisProps["tanitimVerileri"];
  onSwiper: (swiper: SwiperCore) => void;
}

const ThumbSlider = ({ data, onSwiper }: ThumbSliderProps) => {
  return (
    <div className="absolute right-6 bottom-6 z-20 hidden w-full max-w-sm md:block lg:max-w-md xl:right-40 xl:max-w-lg">
      <Swiper
        onSwiper={onSwiper}
        modules={[Thumbs, Navigation]}
        watchSlidesProgress={true}
        className="thumb-swiper"
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        loop={false}
        slideToClickedSlide={true}
      >
        {data.map((tanitim) => (
          <SwiperSlide
            key={tanitim.id}
            className="relative aspect-[16/10] cursor-pointer"
          >
            <Image
              src={tanitim.poster}
              fill
              alt={`${tanitim.isim} posteri`}
              className="rounded-md object-cover"
              sizes="150px"
            />
            <div className="absolute bottom-0 left-0 w-full truncate bg-black/70 p-1 text-center text-xs font-semibold text-white">
              {tanitim.isim}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
