import Footer from "./_components/Footer";
import Giris from "./_components/anasayfa/Giris";
import IcerikKutusu from "./_components/anasayfa/IcerikKutusu";
import MouseKaydir from "./_components/ui/MouseKaydir";
import { tanitimlariGetir } from "./_lib/data-service-server";

export default async function Home() {
  const tanitimVerileri = await tanitimlariGetir();

  return (
    <div>
      <div className="relative">
        <Giris tanitimVerileri={tanitimVerileri} />
        <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2">
          <MouseKaydir />
        </div>
      </div>
      <IcerikKutusu tur="film" kategori="Suç" />
      <IcerikKutusu tur="dizi" kategori="Drama" />
      <IcerikKutusu tur="film" kategori="Aksiyon" />
      <IcerikKutusu tur="dizi" kategori="Aksiyon" />
      <Footer />
    </div>
  );
}
