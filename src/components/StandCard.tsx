import type { Stand } from "../data/Stands";

type StandCardProps = {
  stand: Stand;
  addToCart: (stand: Stand) => void;
};

export const StandCard = ({ stand, addToCart }: StandCardProps) => {
  return (
    <div className="group relative h-full">
      {/* Shadow element for depth */}
      <div className="absolute inset-0 bg-jojo-black transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5" />
      
      {/* Main card container */}
      <div className="relative h-full bg-white border-4 border-jojo-black flex flex-col transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
        
        {/* Image Container with "Trippy" border effect */}
        <div className="relative h-64 overflow-hidden border-b-4 border-jojo-black bg-jojo-purple/20">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shine_3s_infinite]" />
            <img 
              src={stand.image} 
              alt={stand.name} 
              className={`w-full h-full object-cover ${stand.objectPosition || 'object-top'} transition-transform duration-500 group-hover:scale-110`}
            />
             {/* Name Overlay */}
             <div className="absolute bottom-0 left-0 bg-jojo-yellow/90 px-2 py-1 border-t-4 border-r-4 border-jojo-black transform -skew-x-12 -translate-x-2 translate-y-2">
                <h3 className="text-xl font-black uppercase text-jojo-black transform skew-x-12 truncate max-w-[180px]">
                  {stand.name}
                </h3>
             </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div className="mb-4">
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold bg-jojo-purple text-white px-2 py-0.5 rounded-full border-2 border-jojo-black">
                  STAND
                </span>
                <span className="font-mono font-bold text-lg">¥{stand.price.toLocaleString()}</span>
             </div>
             <p className="text-sm font-bold text-gray-800 line-clamp-3 italic">
               "{stand.power}"
             </p>
          </div>

          <button 
            onClick={() => addToCart(stand)}
            className="w-full bg-jojo-pink text-white font-black py-3 border-4 border-jojo-black hover:bg-white hover:text-jojo-pink transition-colors uppercase tracking-widest relative overflow-hidden"
          >
             <span className="relative z-10">ADD TO CART</span>
             <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 font-japanese text-3xl select-none pointer-events-none">
               オラオラ
             </span>
          </button>
        </div>
      </div>
    </div>
  );
};
