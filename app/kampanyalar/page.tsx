import { Suspense } from "react";
import Kampanya from "../_components/Kampanya";
import Loading from "../loading";
import Footer from "../_components/Footer";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-48 w-full">
        <div className="mx-auto w-full max-w-[1360px]">
          <div className="rounded-xl">
            <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-14 p-4 lg:grid-cols-2">
              <Kampanya
                kampanyaDetaylari={{ fotograf: "/kampanyalar/Kampanya1.jpeg" }}
              />
              <Kampanya
                kampanyaDetaylari={{ fotograf: "/kampanyalar/Kampanya2.webp" }}
              />
              <Kampanya
                kampanyaDetaylari={{ fotograf: "/kampanyalar/Kampanya3.webp" }}
              />
              <Kampanya
                kampanyaDetaylari={{ fotograf: "/kampanyalar/Kampanya4.webp" }}
              />
              <Kampanya
                kampanyaDetaylari={{ fotograf: "/kampanyalar/Kampanya5.webp" }}
              />
              <Kampanya
                kampanyaDetaylari={{ fotograf: "/kampanyalar/Kampanya1.jpeg" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Page;
