import { RegularText, TitleText } from "../../../../Typography";
import { Counter } from "../../../../components/CountInput";
import { useCarts } from "../../../../hooks/useCarts";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCardWrapper,
  CardFooter,
  ContainerCardCoffee,
  Description,
  Name,
  Tags
} from "./styles";

import { ShoppingCart } from "phosphor-react";
import { useState } from "react";


export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
   }

export function CardCoffee({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeCart } = useCarts();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity ,
    }
    addCoffeeCart(coffeeToAdd)
  }
  const formattedPrice = formatMoney(coffee.price);
  return (
    <ContainerCardCoffee>
      <img src={`/ImgCoffees/${coffee.photo}`} alt="" />
      <Tags>
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{ tag}</span>
          ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
             {formattedPrice}
          </TitleText>
        </div>
        <AddCardWrapper>
          <Counter
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
        <button type="button"  onClick={handleAddToCart}>
          <ShoppingCart  weight="fill" size={22}/>
        </button>
        </AddCardWrapper>
      </CardFooter>
    </ContainerCardCoffee>
  )
}
