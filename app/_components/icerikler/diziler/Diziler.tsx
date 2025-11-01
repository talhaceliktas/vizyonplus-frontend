import { icerikleriGetir } from "../../../_lib/data-service-server";
import DiziKonteynir from "./DiziKonteynir";

const Diziler = async () => {
  const diziler = await icerikleriGetir("dizi");

  console.log(diziler);
  return null;
  // return <DiziKonteynir diziler={diziler} />;
};

export default Diziler;
