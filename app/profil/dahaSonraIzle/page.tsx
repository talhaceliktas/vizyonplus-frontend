import { Suspense } from "react";
import Izlenecekler from "../../_components/profil/Izlenecekler";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";
import Yukleniyor from "../../_components/icerikler/Yukleniyor";

const Page = () => {
  return (
    <div className="flex w-full gap-x-10">
      <ProfilYanMenu routeHref="/profil/dahaSonraIzle" />
      <div className="flex-1">
        <Suspense fallback={<Yukleniyor />}>
          <Izlenecekler />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
