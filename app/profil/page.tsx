"use client";

import { redirect } from "next/navigation";
import { useAuth } from "../_context/AuthContext";

const Page = () => {
  const { user } = useAuth();

  if (!user) redirect("/giris");

  return <div>fdsg</div>;
};

export default Page;
