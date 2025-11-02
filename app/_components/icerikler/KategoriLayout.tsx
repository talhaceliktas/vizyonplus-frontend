"use client";

import { useState } from "react";
import { IoFilter, IoClose } from "react-icons/io5";

interface KategoriLayoutProps {
  kategoriSecim: React.ReactNode;
  icerikTurFiltre: React.ReactNode;
  children: React.ReactNode;
}

const KategoriLayout = ({
  kategoriSecim,
  icerikTurFiltre,
  children,
}: KategoriLayoutProps) => {
  const [filtreAcik, setFiltreAcik] = useState(false);

  return (
    <div className="mt-10">
      <div className="hidden grid-cols-[12.5rem_1fr] gap-x-10 md:grid">
        <div className="relative">
          <div className="sticky top-40 flex flex-col gap-y-10">
            {kategoriSecim}
            {icerikTurFiltre}
          </div>
        </div>
        <div>{children}</div>
      </div>

      <div className="md:hidden">
        <div>{children}</div>
      </div>

      <div className="fixed right-4 bottom-4 z-40 md:hidden">
        <button
          onClick={() => setFiltreAcik(true)}
          className="bg-secondary-1 text-primary-50 flex items-center gap-2 rounded-full p-4 shadow-lg"
        >
          <IoFilter size={20} />
          <span>Filtrele</span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ease-out md:hidden ${
          filtreAcik
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } `}
        onClick={() => setFiltreAcik(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`text-primary-50 bg-primary-900 absolute right-0 bottom-0 left-0 max-h-[90vh] overflow-y-auto rounded-t-lg p-4 shadow-xl transition-transform duration-300 ease-out ${filtreAcik ? "translate-y-0" : "translate-y-full"} `}
        >
          <div className="mb-4 flex items-center justify-end">
            <button onClick={() => setFiltreAcik(false)}>
              <IoClose size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-y-8">
            <div>{kategoriSecim}</div>
            <hr className="border-gray-700" />
            <div>
              <h4 className="text-md mb-2 font-semibold">Tür</h4>
              {icerikTurFiltre}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KategoriLayout;
