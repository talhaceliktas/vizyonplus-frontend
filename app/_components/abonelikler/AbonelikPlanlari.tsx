"use client"; // Buton etkileşimi için bu bir client component olmalı

import React from "react";
// Türkçeleştirilmiş component'i ve tiplerini import ediyoruz
import AbonelikKarti, { PlanTipi } from "./AbonelikKarti";
// Harici JSON verisini import ediyoruz
import planVerisi from "../../data/abonelikler.json";

// Component adını "AbonelikPlanlari" olarak değiştiriyoruz
const AbonelikPlanlari: React.FC = () => {
  // JSON'dan gelen veriyi `PlanTipi` dizisi olarak tanımlıyoruz
  // Bu, TypeScript'in veri yapısını tanımasını sağlar
  const planlar: PlanTipi[] = planVerisi;

  // Handler (işleyici) fonksiyonu da Türkçeleştirebiliriz
  const planSecimiAfirmasi = (planAdi: string) => {
    console.log(`${planAdi} planı seçildi!`);
    // Burada Next.js router ile ödeme sayfasına yönlendirme yapabilirsiniz
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.push(`/odeme?plan=${planAdi}`);
  };

  return (
    <section className="from-primary-950 via-primary-900 to-primary-950 relative min-h-screen overflow-hidden bg-gradient-to-b py-20 md:py-32">
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="from-primary-50 via-primary-100 to-primary-200 mb-6 bg-gradient-to-r bg-clip-text text-5xl font-black text-transparent md:text-6xl">
            Vizyon+&apos;a Katılın
          </h2>
          <p className="text-primary-300 text-xl font-medium md:text-2xl">
            Size uygun planı seçin. İstediğiniz zaman iptal edin.
          </p>
        </div>

        {/* Veriyi JSON'dan alıp map (döngü) ile işliyoruz.
          Her bir "plan" için bir "AbonelikKarti" component'i oluşturuyoruz.
        */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {planlar.map((plan) => (
            <AbonelikKarti
              key={plan.name}
              plan={plan}
              onPlanSec={planSecimiAfirmasi} // Türkçeleştirilmiş prop'u bağlıyoruz
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary-400 text-sm">
            Tüm planlar 3 gün ücretsiz deneme ile başlar • İstediğiniz zaman
            iptal edin
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbonelikPlanlari;
