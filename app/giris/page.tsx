"use client";

import { redirect } from "next/navigation";
import GirisYap from "../_components/giris-kayit/GirisYap";
import { useAuth } from "../_context/AuthContext";

const Page = () => {
  const { user } = useAuth();

  if (user) redirect("/profil");

  return (
    <div className="h-screen w-full">
      <div className="dis-kutu h-full w-full rounded-2xl bg-gray-50">
        <GirisYap />
      </div>
    </div>
  );
};

export default Page;
