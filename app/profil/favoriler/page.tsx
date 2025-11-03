import { Suspense } from "react";
import Favoriler from "../../_components/profil/Favoriler";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";
import Yukleniyor from "../../_components/ui/Yukleniyor";

const Page = () => {
  return (
    <div className="flex w-full flex-col gap-x-10 gap-y-10 lg:flex-row">
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
