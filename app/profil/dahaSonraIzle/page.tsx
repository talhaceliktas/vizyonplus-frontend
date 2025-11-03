import { Suspense } from "react";
import Izlenecekler from "../../_components/profil/Izlenecekler";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";
import Yukleniyor from "../../_components/ui/Yukleniyor";

const Page = () => {
  return (
    <div className="flex w-full flex-col gap-x-10 gap-y-10 lg:flex-row">
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
