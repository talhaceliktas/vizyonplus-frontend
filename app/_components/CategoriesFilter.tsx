"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoriesFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (filtre: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("filtre", filtre);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      name="Filtre"
      className="text-primary-50 ml-auto block"
      onChange={(e) => handleFilter(e.target.value)}
    >
      <option value="vizyon" className="text-primary-800">
        Vizyon Tarihi
      </option>
      <option value="puan" className="text-primary-800">
        Puana Gore
      </option>
    </select>
  );
};

export default CategoriesFilter;
