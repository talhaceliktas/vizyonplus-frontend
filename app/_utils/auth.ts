import supabase from "./supabase";

export async function signUp(gelenEmail: string, gelenSifre: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: gelenEmail,
      password: gelenSifre,
    });

    if (error) {
      console.log(error);
      throw new Error("Hata olustu!");
    }
  } catch (err) {
    console.log(err);

    throw new Error("Hata olustu!");
  }
}
