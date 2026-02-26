import http from "http";
import { parse } from "url";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const HF_TOKEN = process.env.HF_API_KEY;
const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const { pathname } = parse(req.url, true);

  if (pathname === "/api/motivos") {
    try {
      const hfResponse = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HF_TOKEN}`,
          },
          body: JSON.stringify({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
              {
                role: "system",
                content:
                  "Eres un fanático entusiasta de JoJo's Bizarre Adventure. Tu tarea es dar un motivo divertido y corto (máximo un párrafo) por el cual alguien debería ver el anime.",
              },
              {
                role: "user",
                content: "Dame un motivo para ver JoJo's.",
              },
            ],
            max_tokens: 100,
          }),
        },
      );

      const data = await hfResponse.json();
      console.log("HF RESPONSE:", JSON.stringify(data, null, 2));

      let motivo = "No se generó texto";
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        motivo = data.choices[0].message.content.trim();
      } else if (data.error) {
        throw new Error(data.error.message || JSON.stringify(data.error));
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ motivo }));
    } catch (err) {
      console.error("SERVER ERROR:", err.message);
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
