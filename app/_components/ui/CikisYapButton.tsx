"use client";

import Link from "next/link";
import supabaseBrowserClient from "../../_lib/supabase/client";
import type { ReactNode } from "react";
import toast from "react-hot-toast";

type CikisYap = {
  children: ReactNode;
  icon: ReactNode;
  className: string;
  href: string;
};

const CikisYapButton = ({ children, icon, className, href }: CikisYap) => {
  return (
    <Link
      className={className}
      href={href}
      onClick={() => {
        supabaseBrowserClient.auth.signOut();
        toast.success("Başarıyla çıkış yapıldı");
      }}
    >
      <span>{children}</span>
      <span className="">{icon}</span>
    </Link>
  );
};

export default CikisYapButton;
