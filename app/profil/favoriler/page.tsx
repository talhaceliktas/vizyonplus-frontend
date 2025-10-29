import { Suspense } from "react";
import Favoriler from "../../_components/profil/Favoriler";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";
import Yukleniyor from "../../_components/icerikler/Yukleniyor";

const Page = () => {
  return (
    <div className="flex w-full gap-x-10">
      <ProfilYanMenu routeHref="/profil/favoriler" />
      <div className="flex-1">
        <Suspense fallback={<Yukleniyor />}>
          <Favoriler />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
