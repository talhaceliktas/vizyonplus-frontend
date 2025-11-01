import { icerikleriGetir } from "../../../_lib/data-service-server";
import FilmKonteynir from "./FilmKonteynir";

const Filmler = async () => {
  const filmler = await icerikleriGetir("film");

  return <FilmKonteynir filmler={filmler} />;
};

export default Filmler;
