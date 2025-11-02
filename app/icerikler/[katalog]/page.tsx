import React, { Suspense } from "react";
import KategoriSecim from "../../_components/icerikler/KategoriSecim";
import KategoriSiralama from "../../_components/icerikler/KategoriSiralama";
import KategoriIcerik from "../../_components/icerikler/KategoriIcerik";
import Loading from "../../loading";
import Yukleniyor from "../../_components/ui/Yukleniyor";
import Footer from "../../_components/Footer";
import IcerikTurFiltre from "../../_components/icerikler/dizi-film/IcerikTurFiltre";
import KategoriLayout from "../../_components/icerikler/KategoriLayout";

export async function generateStaticParams() {
  return [
    { katalog: "diziler" },
    { katalog: "filmler" },
    { katalog: "yakindakiler" },
  ];
}

const Page = async ({ params }: { params: { katalog: string } }) => {
  const { katalog } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-48">
        <div className="mx-auto w-full max-w-[1360px]">
          <div className="mx-4">
            <KategoriSiralama katalog={katalog} />
            <KategoriLayout
              kategoriSecim={<KategoriSecim katalog={katalog} />}
              icerikTurFiltre={<IcerikTurFiltre />}
            >
              <Suspense fallback={<Yukleniyor />}>
                <KategoriIcerik katalog={katalog} />
              </Suspense>
            </KategoriLayout>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Page;
