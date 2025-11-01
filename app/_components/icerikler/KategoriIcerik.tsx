import Diziler from "./diziler/Diziler";
import Filmler from "./filmler/Filmler";
import YakindakiFilmler from "./yakindakiler/YakindakiFilmler";

const KategoriIcerik = ({ katalog }: { katalog: string }) => {
  return (
    <div>
      {katalog === "diziler" && <Diziler />}
      {katalog === "filmler" && <Filmler />}
      {katalog === "yakindakiler" && <YakindakiFilmler />}
    </div>
  );
};

export default KategoriIcerik;
