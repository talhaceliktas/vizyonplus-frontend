import { icerikleriGetir } from "../../../_lib/data-service-server";
import { DiziDetay } from "../../../types";
import DiziKonteynir from "./DiziKonteynir";

const Diziler = async () => {
  const diziler: DiziDetay[] = await icerikleriGetir("dizi");

  return <DiziKonteynir diziler={diziler} />;
};

export default Diziler;
