import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ItemCounter } from "./shopping-cart/ItemCounter";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>CARRITO DE COMPRAS</h1>
    <ItemCounter name="Manzanas" />
    <ItemCounter name="Banana" />
    <ItemCounter name="Pera" />
  </StrictMode>,
);
