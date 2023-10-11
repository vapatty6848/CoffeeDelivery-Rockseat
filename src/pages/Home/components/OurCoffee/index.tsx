import { TitleText } from "../../../../Typography";
import { coffees } from "../../../../data/coffees";
import { CardCoffee } from "../CoffeeCard";
import { CoffeeList, ContainerOurCoffee } from "./style";


export function OurCoffee() {
  return (
    <ContainerOurCoffee className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeeList >
        {coffees.map((coffee) => (
          <CardCoffee key={coffee.id} coffee={coffee} />
        ))}

      </CoffeeList>

    </ContainerOurCoffee>
  );
}
