import React from "react";

// Tipleri Türkçeleştiriyoruz ve dışa aktarılabilir yapıyoruz
export type PlanOzelligi = {
  text: string;
  included: boolean;
};

export type PlanTipi = {
  name: string;
  price: string;
  priceDetails: string;
  quality: string;
  features: PlanOzelligi[];
  isHighlighted?: boolean;
};

// Component'in alacağı props'ları (özellikleri) tanımlıyoruz
type AbonelikKartiProps = {
  plan: PlanTipi;
  onPlanSec: (planAdi: string) => void;
};

// Component adını "AbonelikKarti" olarak değiştiriyoruz
const AbonelikKarti: React.FC<AbonelikKartiProps> = ({ plan, onPlanSec }) => {
  // Stil sınıflarını (tailwind class) dinamik olarak belirliyoruz
  const cardClasses = plan.isHighlighted
    ? "bg-gradient-to-br from-primary-900 to-primary-800 border-2 border-secondary-1 shadow-2xl shadow-secondary-1/20 scale-105 relative overflow-hidden"
    : "bg-gradient-to-br from-primary-800 to-primary-900 border border-primary-700 shadow-xl hover:border-primary-600 hover:shadow-2xl";

  const buttonClasses = plan.isHighlighted
    ? "bg-gradient-to-r from-secondary-1 to-secondary-2 hover:from-secondary-2 hover:to-secondary-3 shadow-lg shadow-secondary-1/30"
    : "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600";

  return (
    <div
      className={`flex h-full flex-col rounded-2xl p-8 text-white transition-all duration-500 hover:-translate-y-2 ${cardClasses}`}
    >
      {/* Öne çıkan kart için parlama efekti */}
      {plan.isHighlighted && (
        <div className="from-secondary-1/10 absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent" />
      )}
      <div className="relative z-10">
        {/* Popüler etiket */}
        {plan.isHighlighted && (
          <div className="mb-6 text-center">
            <span className="from-secondary-1 to-secondary-2 text-primary-900 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2 text-sm font-bold shadow-lg">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              EN POPÜLER
            </span>
          </div>
        )}

        <h3 className="text-primary-50 mb-3 text-center text-3xl font-bold">
          {plan.name}
        </h3>
        <p className="text-primary-300 mb-8 text-center text-sm font-medium">
          {plan.quality}
        </p>

        <div className="mb-10 text-center">
          <div className="flex items-baseline justify-center gap-2">
            <span className="from-primary-50 to-primary-200 bg-gradient-to-r bg-clip-text text-6xl font-black text-transparent">
              {plan.price}
            </span>
          </div>
          <span className="text-primary-400 text-sm font-medium">
            / {plan.priceDetails}
          </span>
        </div>

        <div className="via-primary-600 mb-8 h-px bg-gradient-to-r from-transparent to-transparent" />

        <ul className="mb-10 flex-grow space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <div className="bg-secondary-1/20 mt-0.5 flex-shrink-0 rounded-full p-1">
                  <svg
                    className="text-secondary-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="bg-primary-700/30 mt-0.5 flex-shrink-0 rounded-full p-1">
                  <svg
                    className="text-primary-500 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
              <span
                className={
                  feature.included
                    ? "text-primary-100 font-medium"
                    : "text-primary-500 line-through"
                }
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Tıklama olayını Türkçeleştirilmiş prop'tan alıyoruz */}
        <button
          onClick={() => onPlanSec(plan.name)}
          className={`w-full rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 ${buttonClasses}`}
        >
          Planı Seç
        </button>
      </div>
    </div>
  );
};

export default AbonelikKarti;
