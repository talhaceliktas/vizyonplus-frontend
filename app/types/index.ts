declare module "@supabase/supabase-js" {
  interface User {
    display_name?: string;
  }
}

export interface Movie {
  big_image: string;
  description: string;
  genre: string[];
  id: string;
  image: string;
  imdb_link: string;
  imdbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
}

export interface IcerikTipi {
  aciklama: string;
  fotograf: string;
  id: number;
  isim: string;
  tur: string;
  olusturulma_zamani: string;
  sure: number;
  turler: string[];
  yonetmen: string;
  yayinlanma_tarihi: string;
}

export interface FilmUcretleri {
  indirim_orani: number;
  ogrenci_indirim_orani: number;
  satin_alma_ucreti: number;
}

export type FilmDetay = IcerikTipi & {
  film_ucretleri: FilmUcretleri[];
};

export type DiziDetay = IcerikTipi & {
  dizi: { sezon_numarasi: string }[];
};

export type YorumTipi = {
  id: number;
  icerik_id: number;
  yorum: string;
  spoiler_mi: boolean;
  olusturulma_zamani: string;
  profiller: { profil_fotografi: string | null; isim: string };
};
