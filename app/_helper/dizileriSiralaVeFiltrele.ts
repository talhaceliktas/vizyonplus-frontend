import { DiziDetay } from "../types";

export default function dizileriSiralaVeFiltrele(
  filtreler: string[],
  icerikler: DiziDetay[],
  siralama: string,
) {
  let ayarlanmisDiziler = [...icerikler];

  if (filtreler && filtreler.length > 0) {
    ayarlanmisDiziler = icerikler.filter((dizi: DiziDetay) =>
      dizi.turler.some((diziTuru) => filtreler.includes(diziTuru)),
    );
  }

  if (siralama === "alfabetikAZ") {
    ayarlanmisDiziler.sort((a, b) => a.isim.localeCompare(b.isim));
  } else if (siralama === "alfabetikZA") {
    ayarlanmisDiziler.sort((a, b) => b.isim.localeCompare(a.isim));
  }

  return ayarlanmisDiziler;
}
