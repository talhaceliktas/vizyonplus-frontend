import supabaseServer from "./supabase/server";

export async function filmleriGetir() {
  const supabase = await supabaseServer();

  const { data: filmler, error } = await supabase
    .from("icerikler")
    .select(
      "isim, fotograf, turler, id, film_ucretleri(satin_alma_ucreti, indirim_orani, ogrenci_indirim_orani)",
    )
    .eq("tur", "film");

  if (error) {
    // not-found sayfasi eklenecek
    console.log(error);
    return [];
  }

  return filmler;
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
