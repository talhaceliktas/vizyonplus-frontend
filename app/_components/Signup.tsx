import Link from "next/link";
import { openSans } from "../_lib/fonts";
import { FaLock, FaUser } from "react-icons/fa";

const Signup = () => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-y-3 bg-cover bg-center p-5 ${openSans.className} `}
      style={{ backgroundImage: "url('/loginBG.webp')" }}
    >
      <div className="border-primary-200 flex flex-col items-center gap-y-6 border-[1px] p-8 shadow-2xl backdrop-blur-sm">
        <h3 className="text-3xl font-semibold">Giriş Yap</h3>
        <p className="text-primary-50 opacity-75">
          Hoşgeldiniz! Lütfen gerekli alanları doldurunuz.
        </p>
        <div className="mt-10 mb-8 flex w-full flex-col gap-5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="E-mail"
              className="placeholder:text-primary-50 border-primary-100 w-full rounded-full border-[2px] py-2 pl-4"
            />
            <FaUser className="absolute top-1/2 right-5 -translate-y-1/2 text-xl" />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Şifre"
              className="placeholder:text-primary-50 border-primary-100 w-full rounded-full border-[2px] py-2 pl-4"
            />
            <FaLock className="absolute top-1/2 right-5 -translate-y-1/2 text-xl" />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-x-2">
            <input type="checkbox" className="block" id="beniHatirla" />
            <label htmlFor="beniHatirla">Beni Hatırla</label>
          </div>
          <Link href={""} className="block">
            Şifremi Unuttum
          </Link>
        </div>
        <button className="bg-primary-300/30 w-full rounded-full py-2">
          Giriş Yap
        </button>
        <button>Hemen Kayıt Ol!</button>
      </div>
    </div>
  );
};

export default Signup;
