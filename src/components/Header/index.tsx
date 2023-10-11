
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";

import logoCoffee from '../../assets/logoCoffee.svg'
import { useCarts } from "../../hooks/useCarts";

export function Header() {
  const { cartQuantity } = useCarts();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffee} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/OrderCompleted">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>

        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
