import Image from "next/image";
import vizyonPlusLogo from "../../public/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-primary-50 p-10 pb-6 text-xs duration-300 md:p-20 md:text-sm">
      <div className="mt-40 flex flex-col gap-4 md:flex-row md:justify-between md:gap-6">
        <div className="flex flex-col gap-y-4 md:max-w-md">
          <Link href="/">
            <Image
              src={vizyonPlusLogo}
              alt="Vizyon Plus Logosu"
              className="h-auto w-40"
            />
          </Link>
          <p>
            Vizyon+, sinema keyfini kolay ve hızlı yaşamanız için tasarlanmış
            modern bir bilet platformudur. Türkiye genelindeki salonları tek
            çatı altında toplar, seansları keşfetmenizi ve yerinizi anında
            ayırtmanızı sağlar. Kullanıcı dostu arayüzüyle her cihazdan güvenli,
            hızlı ve keyifli bir deneyim sunar.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="flex flex-col gap-y-2">
            <h3 className="mb-1 font-bold">Kurumsal</h3>
            <p className="cursor-pointer hover:underline">Hakkımızda</p>
            <p className="cursor-pointer hover:underline">Bize Ulaş</p>
            <p className="cursor-pointer hover:underline">
              Gizlilik Sözleşmesi
            </p>
            <p className="cursor-pointer hover:underline">KVKK</p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="mb-1 font-bold">İletişim</h3>
            <a
              className="cursor-pointer hover:underline"
              href="tel:+1-234-567-890"
            >
              +1-234-567-890
            </a>
            <a
              className="cursor-pointer hover:underline"
              href="mailto:iletisim@vizyonplus.com"
            >
              iletisim@vizyonplus.com
            </a>
            <p>
              Gülbahar Mahallesi, Lavanta Sokak No: 27, Meram / Konya, Türkiye
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <p className="mt-2 text-center">
        🎬 Vizyon+, tamamen deneysel amaçla geliştirilmiş bir sinema rezervasyon
        projesidir. Gerçek bilet satışı veya ticari bir faaliyet
        yürütmemektedir. Tüm içerikler, kullanıcı arayüzü ve veriler yalnızca
        eğitim ve demo amaçlı hazırlanmıştır. © 2025 Vizyon+ – Bu proje,
        yazılım geliştirme sürecinde öğrenme ve deneme çalışmasıdır.
      </p>
    </div>
  );
};

export default Footer;
