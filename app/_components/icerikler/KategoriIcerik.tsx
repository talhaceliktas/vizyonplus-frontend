import BegenilenIcerikler from "./BegenilenIcerikler";
import Diziler from "./Diziler";
import Filmler from "./Filmler";
import YakindakiFilmler from "./YakindakiFilmler";

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
