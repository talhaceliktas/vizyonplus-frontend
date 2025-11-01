import BegenilenIcerikler from "./begenilenler/BegenilenIcerikler";
import Diziler from "./diziler/Diziler";
import Filmler from "./filmler/Filmler";
import YakindakiFilmler from "./yakindakiler/YakindakiFilmler";

const KategoriIcerik = ({ katalog }: { katalog: string }) => {
  return (
    <div>
      {katalog === "diziler" && <Diziler />}
      {katalog === "filmler" && <Filmler />}
      {katalog === "yakindakiler" && <YakindakiFilmler />}
      {katalog === "begenilenler" && <BegenilenIcerikler />}
    </div>
  );
};

export default KategoriIcerik;
