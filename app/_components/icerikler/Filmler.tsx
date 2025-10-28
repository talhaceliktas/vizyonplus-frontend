import { filmleriGetir } from "../../_lib/data-service-server";
import FilmKonteynir from "./FilmKonteynir";

const Filmler = async () => {
  const filmler = await filmleriGetir();

  return <FilmKonteynir filmler={filmler} />;
};

export default Filmler;
