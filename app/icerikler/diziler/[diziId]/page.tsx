import { Suspense } from "react";
import { diziyiGetir } from "../../../_lib/data-service-server";
import { DiziDetay, DiziSezon } from "../../../types";
import Loading from "../../../loading";
import Image from "next/image";
import Footer from "../../../_components/Footer";
import supabaseServerClient from "../../../_lib/supabase/server";
import IcerikButonlari from "../../../_components/icerikler/dizi-film/IcerikButonlari";
import Yorumlar from "../../../_components/icerikler/dizi-film/Yorumlar";
import DiziIcerigi from "../../../_components/icerikler/DiziIcerigi";
import DiziSezonlari from "../../../_components/icerikler/DiziSezonlari";
import DiziBolumleri from "../../../_components/icerikler/DiziBolumleri";

const Page = async ({ params }: { params: { diziId: number } }) => {
  const { diziId } = await params;

  const dizi: DiziSezon = await diziyiGetir(diziId);

  const supabase = await supabaseServerClient();

  const user = await (await supabase.auth.getUser()).data.user;

  const { id, isim, fotograf } = dizi;

  console.log(dizi.dizi);

  return (
    <Suspense fallback={<Loading />}>
      <div className="px-4 pt-40 pb-20">
        <div className="mx-auto flex h-full w-full max-w-[1360px] flex-col gap-y-20">
          <div className="flex gap-x-10 gap-y-10">
            <div className="relative aspect-[9/16] w-full max-w-[400px]">
              <Image
                alt={`${isim} filmi kapağı`}
                src={fotograf}
                className="rounded-xl object-cover"
                fill
              />
            </div>
            <div className="flex w-full flex-col gap-y-6">
              <DiziIcerigi dizi={dizi} />
              <IcerikButonlari id={id} user={user} />
              <div className="divide-primary-500 border-primary-600 flex border-[1px]">
                <DiziSezonlari diziSezonBilgileri={dizi.dizi} diziId={diziId} />
                <span className="bg-primary-600 h-full w-[1px]"></span>
                <DiziBolumleri diziSezonBilgileri={dizi.dizi} />
              </div>
            </div>
          </div>
          <Yorumlar icerikId={id} />
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Page;
