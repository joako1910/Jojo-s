import { useState } from "react";
export function Page() {
  const [motivos, setMotivos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMotivo = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/motivos");
      const data = await res.json();
      if (data.motivo) {
        setMotivos([...motivos, data.motivo]);
      }
    } catch (err) {
      console.error("Error al general motivo", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-pink-600 to-yellow-400 flex items-center justify-center relative overflow-hidden">
      <img
        src="https://static.bandainamcoent.eu/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover filter blur-xxl opacity-70 z-0"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-300 drop-shadow-[6px_6px_0px_black] tracking-widest">
          PORQUE MATI DEBERIA VER JOJO'S BIZARRE ADVENTURE
        </h1>
        <div className="mt-6 max-w-3xl mx-auto space-y-4">
          <p className="mt-6 text-yellow-300 text-xl italic tracking-wide bg-black bg-opacity-50 p-2 rounded text-center">
            Porque es una obra maestra del anime que combina acción, aventura y
            un estilo visual único, ofreciendo una experiencia emocionante y
            entretenida que no te puedes perder
          </p>
          {motivos.map((motivo, index) => (
            <p
              key={index}
              className="mt-6 text-yellow-300 text-xl italic tracking-wide bg-black bg-opacity-50 p-2 rounded text-center"
            >
              {motivo}
            </p>
          ))}
        </div>

        <button
          onClick={fetchMotivo}
          className="mt-8 px-8 py-4 bg-yellow-100 text-black font-bold text-xl border-4 border-yellow-300 hover:scale-110 hover:bg-yellow-300 hover:text-black transition duration-300"
        >
          {loading
            ? "Generando motivo ..."
            : "TODAVIA NO SOY TAN PUTO Y NECESITO MAS MOTIVOS"}
        </button>
      </div>
    </div>
  );
}
