import Link from "next/link";
import { openSans } from "../_lib/fonts";
import { FaLock, FaUser } from "react-icons/fa";

const SignIn = () => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-y-3 bg-cover bg-center p-5 ${openSans.className} `}
      style={{ backgroundImage: "url('/loginBG.webp')" }}
    >
      <div className="border-primary-800/50 backd bg-primary-700/70 flex flex-col items-center gap-y-6 rounded-2xl border-[1px] p-8 shadow-2xl backdrop-blur-sm">
        <h3 className="text-3xl font-semibold">Giriş Yap</h3>
        <p className="text-primary-50 opacity-75">
          Hoşgeldiniz! Lütfen gerekli alanları doldurunuz.
        </p>
        <div className="mt-10 mb-8 flex w-full flex-col gap-5">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="peer placeholder:text-primary-50/50 border-primary-500/80 w-full border-b-[3px] bg-transparent py-2 transition-all duration-300 outline-none focus:border-gray-600"
            />
            <FaUser className="peer-focus:fill-primary-50 fill-primary-300 absolute top-1/2 right-2 -translate-y-1/2 text-xl duration-300" />
            <span className="bg-primary-50/85 absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 peer-focus:w-full"></span>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="Şifre"
              className="peer placeholder:text-primary-50/50 border-primary-500/80 w-full border-b-[3px] bg-transparent py-2 transition-all duration-300 outline-none focus:border-gray-600"
            />
            <FaLock className="peer-focus:fill-primary-50 fill-primary-300 absolute top-1/2 right-2 -translate-y-1/2 text-xl duration-300" />
            <span className="bg-primary-50/85 absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 peer-focus:w-full"></span>
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
        <div className="mt-8 w-full text-center">
          <button className="bg-primary-500 hover:bg-primary-600 mb-4 w-full cursor-pointer rounded-full py-2 duration-300">
            Giriş Yap
          </button>
          <button className="hover:text-secondary-1 cursor-pointer text-xs duration-300">
            Hemen Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
