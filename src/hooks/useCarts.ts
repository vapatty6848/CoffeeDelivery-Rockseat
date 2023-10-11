import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export function useCarts() {
  const context = useContext(CartContext)
  return context;
}


// este hook foi feito pra não ser importado duas vezes cada vez que se queira usar o contexto
