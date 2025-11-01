"use client";

import Link from "next/link";
import Image from "next/image";
import { ImExit } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import CikisYapButton from "./ui/CikisYapButton";
import { User } from "@supabase/supabase-js";

const AsagiAcilirMenu = ({
  user,
  profilFoto,
  setIsDropdownOpen,
}: {
  user: User | null;
  profilFoto: string | null;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const MenuLink = ({
    href,
    children,
    icon,
  }: {
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="text-primary-100 hover:bg-primary-700 flex w-full items-center justify-between px-4 py-2 text-left text-base"
      onClick={() => setIsDropdownOpen(false)}
    >
      {children}
      <span className="text-xl">{icon}</span>
    </Link>
  );

  return (
    <div className="bg-primary-900/50 ring-opacity-5 absolute right-0 z-20 mt-2 w-56 origin-top-right translate-y-1/3 rounded-md py-2 shadow-lg ring-1 ring-black backdrop-blur-xl focus:outline-none">
      {user ? (
        <>
          {/* 🔹 Üstte küçük avatar */}
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={profilFoto || "/default-user.jpg"}
                alt="Profil fotoğrafı"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="text-primary-50 truncate font-medium">
              {user.email}
            </span>
          </div>

          <div className="bg-primary-700 my-1 h-px" />

          <MenuLink href="/profil" icon={<FaUser />}>
            <b>Profilim</b>
          </MenuLink>
          <MenuLink href="/abonelikler" icon={<MdPayments />}>
            Abonelikler
          </MenuLink>

          <div className="bg-primary-700 my-1 h-px" />

          <CikisYapButton
            icon={<ImExit />}
            className="text-primary-100 hover:bg-primary-700 flex w-full items-center justify-between px-4 py-2 text-base"
            href="/giris"
          >
            Çıkış Yap
          </CikisYapButton>
        </>
      ) : (
        <>
          <MenuLink href="/giris" icon={<VscSignIn />}>
            Giriş Yap
          </MenuLink>
          <Link
            className="text-primary-100 hover:bg-primary-700 flex w-full items-center justify-between px-4 py-2 text-base"
            href="/kayitol"
            onClick={() => setIsDropdownOpen(false)}
          >
            <span>Kayıt Ol</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 stroke-[1.5]"
            >
              <path d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          </Link>
        </>
      )}
    </div>
  );
};

export default AsagiAcilirMenu;
