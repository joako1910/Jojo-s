import http from "http";
import { parse } from "url";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const HF_TOKEN = process.env.HF_API_KEY;
const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  const { pathname } = parse(req.url, true);

  if (pathname === "/api/motivos") {
    try {
      const hfResponse = await fetch(
        "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HF_TOKEN}`,
          },
          body: JSON.stringify({
            inputs:
              "Genera un motivo divertido por el que alguien debería ver JoJo's Bizarre Adventure",
            options: { wait_for_model: true },
          }),
        },
      );
      const data = await hfResponse.json();
      console.log("HF RESPONSE:", data);
      console.log("PATHNAME:", pathname);
      const motivo = data.generated_text || "No se generó texto";

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ motivo }));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor Corriendo en HTTP://localhost:${PORT}`);
});
