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

/**
 * HATA 1 (Error 1) İÇİN DÜZELTME:
 * DiziDetay tipini, DiziSezon tipinin yapısıyla (ve muhtemelen API'den gelen gerçek veriyle)
 * eşleşecek şekilde güncelledim.
 *
 * 1. 'sezon_numarasi' tipi 'string' yerine 'number' olarak değiştirildi.
 * 2. 'bolumler' alanı dizi objesine eklendi.
 *
 * Bu, DiziIcerigi komponentine DiziSezon tipinde bir veri geçildiğinde oluşan
 * 'Type 'DiziSezon' is not assignable to type 'DiziDetay'' hatasını çözecektir.
 */
export type DiziDetay = IcerikTipi & {
  dizi: {
    sezon_numarasi: number; // string -> number olarak düzeltildi
    bolumler: Bolumler[]; // eksik alan eklendi
  }[];
};

// DiziSezon tipi artık DiziDetay ile (neredeyse) aynı.
// Muhtemelen bu tiplerden biri gereksiz veya farklı bir amaç içindi,
// ancak mevcut hatayı çözmek için ikisini de tutarlı hale getiriyorum.
export type DiziSezon = IcerikTipi & {
  dizi: {
    sezon_numarasi: number;
    bolumler: Bolumler[];
  }[];
};

export type Bolumler = {
  aciklama: string;
  baslik: string;
  bolum_numarasi: string;
  icerik_id: number;
  id: number;
  olusturulma_zamani: string;
  sezon_numarasi: number;
  sure: number;
  yayin_tarihi: string;
};

export type YorumTipi = {
  id: number;
  icerik_id: number;
  yorum: string;
  spoiler_mi: boolean;
  olusturulma_zamani: string;
  profiller: { profil_fotografi: string | null; isim: string };
};
