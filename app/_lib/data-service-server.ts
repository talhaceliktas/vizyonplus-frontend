"use server";

import supabaseServer from "./supabase/server";

export async function icerikleriGetir(tur: string) {
  const supabase = await supabaseServer();

  const selectQuery =
    tur === "film"
      ? "isim, fotograf, turler, id, film_ucretleri(satin_alma_ucreti, indirim_orani, ogrenci_indirim_orani)"
      : "isim, fotograf, turler, id, dizi(sezon_numarasi)";

  const { data: icerikler, error } = await supabase
    .from("icerikler")
    .select(selectQuery)
    .eq("tur", tur);

  if (error) {
    // not-found sayfasi eklenecek
    console.log(error);
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return icerikler as any;
}

export async function filmiGetir(filmId: number) {
  const supabase = await supabaseServer();

  const { data: filmler, error } = await supabase
    .from("icerikler")
    .select("*")
    .eq("id", filmId)
    .single();

  if (error) {
    // not-found sayfasi eklenecek
    console.log(error);
    return {};
  }

  return filmler;
}

export async function diziyiGetir(diziId: number) {
  const supabase = await supabaseServer();

  const { data: filmler, error } = await supabase
    .from("icerikler")
    .select("*, dizi(sezon_numarasi)")
    .eq("id", diziId)
    .single();

  if (error) {
    // not-found sayfasi eklenecek
    console.log(error);
    return {};
  }

  return filmler;
}

export async function favorileriGetir() {
  const supabase = await supabaseServer();

  // Kullanıcıyı al
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  // Favorileri getir
  const { data: favoriler, error } = await supabase
    .from("favoriler")
    .select("*")
    .eq("kullanici_id", user.id);

  if (error) {
    console.error(error);
    return [];
  }

  return favoriler || [];
}

export async function dahaSonraIzlenecekleriGetir() {
  const supabase = await supabaseServer();

  // Kullanıcıyı al
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  // Favorileri getir
  const { data: dahaSonraIzlenecekler, error } = await supabase
    .from("daha_sonra_izle")
    .select("*")
    .eq("kullanici_id", user.id);

  if (error) {
    console.error(error);
    return [];
  }

  return dahaSonraIzlenecekler || [];
}

export async function icerikYorumlariniGetir(icerikId: number) {
  const supabase = await supabaseServer();

  const { data: yorumlar, error } = await supabase
    .from("yorumlar")
    .select(
      `
      *,
      profiller(profil_fotografi, isim)
    `,
    )
    .eq("icerik_id", icerikId);

  if (error) {
    console.error(error);
    return [];
  }

  return yorumlar || [];
}

export async function profilFotografiniGetir(kullaniciId: string) {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("profiller")
    .select("profil_fotografi")
    .eq("id", kullaniciId)
    .single();

  if (error) {
    return "";
  }

  // data null olursa boş string döndür
  return data?.profil_fotografi ?? "";
}
