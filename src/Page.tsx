import { useState } from "react";
import { parrafos } from "./Array-Parrafos";
export function Page() {
  const [visibleCount, setVisibleCount] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-pink-600 to-yellow-400 flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-300 drop-shadow-[6px_6px_0px_black] tracking-widest">
          PORQUE MATI DEBERIA VER JOJO'S BIZARRE ADVENTURE
        </h1>
        <p className="mt-6 text-white text-xl italic tracking-wide">
          Porque es una obra maestra del anime que combina acción, aventura y un
          estilo visual único, ofreciendo una experiencia emocionante y
          entretenida que no te puedes perder
        </p>
        {parrafos.slice(0, visibleCount).map((text, index) => (
          <p
            key={index}
            className="mt-6 text-white text-xl italic tracking-wide"
          >
            {text}
          </p>
        ))}
        {visibleCount < parrafos.length && (
          <button
            onClick={() => {
              if (visibleCount < parrafos.length) {
                setVisibleCount(visibleCount + 1);
              }
            }}
            className="mt-8 px-8 py-4 bg_black text-black-500 font-bold text-xl border-4 border-yellow-300 hover:scale-110 hover:bg-yellow-300 gover:text-black transition duration-300"
          >
            TODAVIA NO SOY TAN PUTO Y NECESITO MAS MOTIVOS
          </button>
        )}
      </div>
    </div>
  );
}
