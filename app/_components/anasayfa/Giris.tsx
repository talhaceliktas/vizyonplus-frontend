"use client";

import { useState } from "react";
import Image from "next/image";
import MouseKaydir from "../ui/MouseKaydir";

import { type Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import SlideIcerik from "./SlideIcerik";
import ThumbSlider from "./ThumbSlider";
import { GirisProps } from "../../types";

const Giris = ({ tanitimVerileri }: GirisProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="main-swiper h-full w-full"
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {tanitimVerileri.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-screen w-full">
            <div className="absolute inset-0 z-10 bg-black/40" />

            <Image
              src={slide.poster}
              fill
              alt={slide.isim}
              className="object-cover duration-1000"
              sizes="100vw"
              priority={index === 0}
            />

            <SlideIcerik slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ThumbSlider data={tanitimVerileri} onSwiper={setThumbsSwiper} />

      <div className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 md:hidden">
        <MouseKaydir />
      </div>
    </div>
  );
};

export default Giris;
