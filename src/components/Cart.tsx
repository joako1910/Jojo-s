import type { Stand } from "../data/Stands";

type CartProps = {
  cartItems: Stand[];
  removeFromCart: (id: number) => void;
  isOpen: boolean;
  toggleCart: () => void;
};

export const Cart = ({ cartItems, removeFromCart, isOpen, toggleCart }: CartProps) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Toggle Button (Visible when closed) */}
      {!isOpen && (
        <button 
          onClick={toggleCart}
          className="fixed top-4 right-4 z-50 bg-jojo-yellow text-jojo-black font-black py-2 px-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-105 transition-transform"
        >
          CART ({cartItems.length})
        </button>
      )}

      {/* Cart Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-jojo-purple border-l-8 border-jojo-black p-6 shadow-2xl overflow-y-auto transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <button 
          onClick={toggleCart}
          className="absolute top-2 right-2 text-white font-bold text-xl hover:text-jojo-yellow"
        >
          ✕ CLOSE
        </button>

        {/* Header */}
        <div className="mb-8 mt-6 transform -skew-x-12 border-4 border-jojo-black bg-jojo-pink p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-extrabold text-jojo-yellow uppercase tracking-tighter drop-shadow-md text-center">
            YOUR LOOT
          </h2>
        </div>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-white/50 font-bold italic py-10">
              NO STANDS ACQUIRED... YET
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="relative group">
                <div className="absolute inset-0 bg-jojo-black transform translate-x-2 translate-y-2" />
                <div className="relative bg-white border-4 border-jojo-black p-4 flex justify-between items-center transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <div>
                    <h3 className="text-xl font-bold text-black uppercase">{item.name}</h3>
                    <p className="text-jojo-purple font-mono font-bold">¥{item.price.toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 font-bold hover:underline"
                  >
                    DISCARD
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total Section */}
        <div className="mt-12 border-t-4 border-jojo-black pt-6 mb-20">
          <div className="flex justify-between items-end mb-6">
            <span className="text-2xl font-bold skew-x-12 text-white">TOTAL:</span>
            <span className="text-3xl font-black text-jojo-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              ¥{total.toLocaleString()}
            </span>
          </div>
          <button className="w-full bg-jojo-yellow text-jojo-black font-black text-2xl py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed" disabled={cartItems.length === 0}>
            PURCHASE
          </button>
        </div>
        
        {/* Decorative To Be Continued arrow */}
        <div className="absolute bottom-4 left-4 opacity-50 pointer-events-none">
          <div className="w-0 h-0 border-l-[20px] border-l-jojo-yellow border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent transform rotate-180"></div>
        </div>
      </div>
    </>
  );
};
