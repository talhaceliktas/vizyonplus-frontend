import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // 1. Yanıtı en başta BİR KEZ oluşturun
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  console.log("Middleware girildi");

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // 'get' fonksiyonunuz zaten doğruydu
        get(name) {
          console.log(request.cookies.getAll());

          return request.cookies.get(name)?.value;
        },
        // 'set' fonksiyonu SADECE 'response' nesnesini değiştirmeli
        set(name, value, options) {
          console.log("Middleware SET çağrıldı:", name);
          response.cookies.set({ name, value, ...options });
        },
        // 'remove' fonksiyonu SADECE 'response' nesnesini değiştirmeli
        remove(name, options) {
          console.log("Middleware REMOVE çağrıldı:", name);
          response.cookies.set({ name, value: "", ...options });
        },
      },
    },
  );

  // Oturumu al (ve gerekirse yenile)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Yönlendirme mantığı (bu kısım doğruydu)
  if (!user && request.nextUrl.pathname.startsWith("/profil")) {
    console.log("Kullanıcı yok, /giris'e yönlendiriliyor.");
    return NextResponse.redirect(new URL("/giris", request.url));
  }

  if (user && request.nextUrl.pathname.startsWith("/giris")) {
    console.log("Kullanıcı var, /profil'e yönlendiriliyor.");
    return NextResponse.redirect(new URL("/profil", request.url));
  }

  // 4. Değiştirilmiş (veya değiştirilmemiş) yanıtı döndür
  return response;
}

export const config = {
  matcher: ["/profil", "/giris"],
};
