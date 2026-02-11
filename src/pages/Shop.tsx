import { stands } from "../data/Stands";
import { StandCard } from "../components/StandCard";
import type { Stand } from "../data/Stands";

type ShopProps = {
  addToCart: (stand: Stand) => void;
};

export const Shop = ({ addToCart }: ShopProps) => {
  return (
    <div className="container mx-auto px-4 pb-20">
      {/* Page Header */}
      <div className="mb-12 text-center relative">
         <h2 className="text-5xl font-black text-white inline-block relative z-10 drop-shadow-[4px_4px_0_#000]">
           STAND ARROWS STOCK
         </h2>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white/5 whitespace-nowrap select-none overflow-hidden pointer-events-none w-full">
           ゴゴゴゴゴゴゴゴ
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
        {stands.map((stand) => (
          <div key={stand.id} className="min-h-[400px]">
            <StandCard stand={stand} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};
