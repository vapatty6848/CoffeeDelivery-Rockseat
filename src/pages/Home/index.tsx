
import { OurCoffee } from "./components/OurCoffee";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffee />
    </HomeContainer>
  );
}
