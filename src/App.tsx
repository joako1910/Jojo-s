import { useState } from 'react';
import { Cart } from './components/Cart';
import { Shop } from './pages/Shop';
import type { Stand } from './data/Stands';

function App() {
  const [cartItems, setCartItems] = useState<Stand[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (stand: Stand) => {
    setCartItems([...cartItems, stand]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-jojo-purple">
      {/* Background decoration */}
      <div className="fixed inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-jojo-pink)_10%,_transparent_10%)] bg-[length:40px_40px]"></div>
      
      <div className="relative z-10 py-10">
         <div className="container mx-auto px-4 mb-10">
            <h1 className="text-6xl md:text-8xl font-black text-center text-white drop-shadow-[0_5px_0_#000] italic transform -skew-x-12">
               SPEEDWAGON
            </h1>
            <h2 className="text-3xl md:text-5xl font-black text-center text-jojo-yellow drop-shadow-[0_3px_0_#000] mt-2 uppercase tracking-widest">
               FOUNDATION SHOP
            </h2>
         </div>
         
         <Shop addToCart={addToCart} />
      </div>

      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        isOpen={isCartOpen}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
    </div>
  );
}

export default App;
