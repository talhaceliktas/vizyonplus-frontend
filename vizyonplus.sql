CREATE TABLE public.bolumler (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  icerik_id bigint NOT NULL,
  sezon_numarasi integer NOT NULL,
  bolum_numarasi integer NOT NULL,
  baslik character varying NOT NULL,
  aciklama text NOT NULL,
  sure integer NOT NULL,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  yayin_tarihi timestamp with time zone,
  CONSTRAINT bolumler_pkey PRIMARY KEY (id),
  CONSTRAINT bolumler_sezon_numarasi_icerik_id_fkey FOREIGN KEY (icerik_id) REFERENCES public.dizi(icerik_id),
  CONSTRAINT bolumler_sezon_numarasi_icerik_id_fkey FOREIGN KEY (icerik_id) REFERENCES public.dizi(sezon_numarasi),
  CONSTRAINT bolumler_sezon_numarasi_icerik_id_fkey FOREIGN KEY (sezon_numarasi) REFERENCES public.dizi(icerik_id),
  CONSTRAINT bolumler_sezon_numarasi_icerik_id_fkey FOREIGN KEY (sezon_numarasi) REFERENCES public.dizi(sezon_numarasi)
);
CREATE TABLE public.daha_sonra_izle (
  kullanici_id uuid NOT NULL DEFAULT auth.uid(),
  icerikler_id bigint NOT NULL,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT daha_sonra_izle_pkey PRIMARY KEY (kullanici_id, icerikler_id),
  CONSTRAINT daha_sonra_izle_icerikler_id_fkey FOREIGN KEY (icerikler_id) REFERENCES public.icerikler(id)
);
CREATE TABLE public.dizi (
  icerik_id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  sezon_numarasi integer NOT NULL,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT dizi_pkey PRIMARY KEY (icerik_id, sezon_numarasi),
  CONSTRAINT dizi_icerik_id_fkey FOREIGN KEY (icerik_id) REFERENCES public.icerikler(id)
);
CREATE TABLE public.favoriler (
  kullanici_id uuid NOT NULL DEFAULT auth.uid(),
  icerikler_id bigint NOT NULL,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT favoriler_pkey PRIMARY KEY (kullanici_id, icerikler_id),
  CONSTRAINT favoriler_icerikler_id_fkey FOREIGN KEY (icerikler_id) REFERENCES public.icerikler(id)
);
CREATE TABLE public.film_ucretleri (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  icerikler_id bigint NOT NULL,
  satin_alma_ucreti real NOT NULL,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  indirim_orani smallint,
  ogrenci_indirim_orani smallint,
  CONSTRAINT film_ucretleri_pkey PRIMARY KEY (id),
  CONSTRAINT film_ucretleri_icerikler_id_fkey FOREIGN KEY (icerikler_id) REFERENCES public.icerikler(id)
);
CREATE TABLE public.icerikler (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  isim character varying NOT NULL,
  aciklama text,
  yayinlanma_tarihi date NOT NULL,
  tur text NOT NULL,
  sure integer NOT NULL,
  fotograf text NOT NULL,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  turler ARRAY,
  yonetmen text,
  CONSTRAINT icerikler_pkey PRIMARY KEY (id)
);
CREATE TABLE public.profiller (
  id uuid NOT NULL,
  profil_fotografi text,
  olusturulma_zamani timestamp without time zone DEFAULT now(),
  cinsiyet text,
  isim text,
  CONSTRAINT profiller_pkey PRIMARY KEY (id),
  CONSTRAINT profiller_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.yorumlar (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  kullanici_id uuid DEFAULT auth.uid(),
  icerik_id bigint,
  yorum text CHECK (length(yorum) > 3),
  spoiler_mi boolean,
  olusturulma_zamani timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT yorumlar_pkey PRIMARY KEY (id),
  CONSTRAINT yorumlar_icerik_id_fkey FOREIGN KEY (icerik_id) REFERENCES public.icerikler(id),
  CONSTRAINT yorumlar_kullanici_id_fkey FOREIGN KEY (kullanici_id) REFERENCES public.profiller(id)
);