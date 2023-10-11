import { TitleText } from "../../../../Typography";
import { useCarts } from "../../../../hooks/useCarts";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";



export function SelectedCoffees() {
  const { cartItems } = useCarts();
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
            {cartItems.map((item) => (
              <CoffeeCartCard key={item.id} coffee={item} />
           ))}

            <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
