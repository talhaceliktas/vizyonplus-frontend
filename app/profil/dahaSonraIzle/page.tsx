import Izlenecekler from "../../_components/profil/Izlenecekler";
import ProfilYanMenu from "../../_components/profil/ProfilYanMenu";

const Page = () => {
  return (
    <div className="flex w-full gap-x-10">
      <ProfilYanMenu routeHref="/profil/dahaSonraIzle" />
      <div className="flex-1">
        <Izlenecekler />
      </div>
    </div>
  );
};

export default Page;
