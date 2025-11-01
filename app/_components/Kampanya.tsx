import Image from "next/image";
import { macondo } from "../_lib/fontlar";

const Kampanya = ({
  kampanyaDetaylari,
}: {
  kampanyaDetaylari: { fotograf: string };
}) => {
  const { fotograf } = kampanyaDetaylari;

  return (
    <div className="bg-primary-800 border-primary-500 flex flex-col overflow-hidden rounded-l-lg rounded-r-3xl border-[1px] sm:flex-row">
      <div className="relative aspect-video w-full rounded-lg sm:w-[60%]">
        <Image src={fotograf} alt="foto" fill />
      </div>
      <div className="cinema-box border-l-primary-500 relative flex-1 border-l-[1.5px]">
        <div>
          <p
            className={`text-secondary-1 p-4 text-center text-xl md:text-2xl ${macondo.className}`}
          >
            Vizyon+
          </p>
          <p className="p-2 text-center text-sm md:text-base">
            Pazartesi ve Çarşamba günleri sinemaseverleri ödüllendiriyoruz! Tüm
            biletlerde %30 indirimle dilediğin filmi izle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kampanya;
