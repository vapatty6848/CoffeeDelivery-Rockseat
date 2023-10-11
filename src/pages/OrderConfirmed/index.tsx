import { RegularText, TitleText } from "../../Typography";
import { ContainerConfirmOrder, OrderDetailsContainer } from "./styles";
import Illustration from "../../assets/Illustration.png";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { InfoIcon } from "../../components/InfoIcon";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../OrderCompleted";
import { useEffect } from "react";


interface LocationType {
  state: OrderData;
}
export function ConfirmOrderPage() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [ ]);

  if (!state) return <></>

  return (
    <ContainerConfirmOrder className="container">
      <div>
        <TitleText size="l">Uhu!  Pedido Confirmado</TitleText>
        <RegularText  size="l"  color="subtitle">
              Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
          <OrderDetailsContainer>
          <InfoIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
              text={
                  <RegularText>
                  Entrega em <strong>{state.street}, {state.number}</strong>
                    <br />
                   {state.district} - {state.city}, {state.uf}
                  </RegularText>
               }
            />
          <InfoIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{state.paymentMethod}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={Illustration} alt=""/>
      </section>
    </ContainerConfirmOrder>
  )
}
