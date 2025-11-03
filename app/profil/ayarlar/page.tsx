import { Suspense } from "react";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";
import Yukleniyor from "../../_components/ui/Yukleniyor";
import Ayarlar from "../../_components/profil/Ayarlar";

const Page = () => {
  return (
    <div className="flex w-full flex-col gap-x-10 gap-y-10 lg:flex-row">
      <ProfilYanMenu routeHref="/profil/ayarlar" />
      <div className="flex-1">
        <Suspense fallback={<Yukleniyor />}>
          <Ayarlar />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
