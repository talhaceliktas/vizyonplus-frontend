import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-screen">
        <Image
          src="/marvelBanner.jpg"
          fill
          alt="banner"
          className="object-cover opacity-65"
        />
        <div className="bg-primary-800/5 absolute top-[50%] ml-10 -translate-y-1/2">
          <div className="h-40 w-60 md:h-60 md:w-80">
            <Image
              src="/marvelLogo.webp"
              fill
              alt="Marvel Logosu"
              className="object-contain"
            />
          </div>
          <h3>Aksiyon | Macera | Bilim Kurgu</h3>
        </div>
      </div>
    </div>
  );
}
