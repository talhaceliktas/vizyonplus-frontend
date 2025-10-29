import Favoriler from "../../_components/profil/favoriler/Favoriler";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";

const Page = () => {
  return (
    <div className="flex w-full gap-x-10">
      <ProfilYanMenu routeHref="/profil/favoriler" />
      <div className="flex-1">
        <Favoriler />
      </div>
    </div>
  );
};

export default Page;
