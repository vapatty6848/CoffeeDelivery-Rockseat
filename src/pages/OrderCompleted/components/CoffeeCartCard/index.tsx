import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { RegularText } from "../../../../Typography";
import { Counter } from "../../../../components/CountInput";
import { Trash } from "phosphor-react";

import { useCarts } from "../../../../hooks/useCarts";
import { formatMoney } from "../../../../utils/formatMoney";
import { CartItem } from "../../../../context/CartContext";


interface CoffeeCartCardProps {
  coffee: CartItem
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {

  const { changeCartItemQuantity, removeCartItem } = useCarts();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/ImgCoffees/${coffee.photo}`}  alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <Counter
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
                <Trash size={16} />
                  REMOVER
                </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ { formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
