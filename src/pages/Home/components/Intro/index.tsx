import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { IntroContainer, IntroContainerBenefits, IntroContent, IntroTitle } from "./styles"
import  CoffeeImg  from '../../../../assets/CoffeeImg.png'
import { RegularText } from "../../../../Typography";
import { InfoIcon } from "../../../../components/InfoIcon";
import { useTheme } from "styled-components";

export function Intro() {
const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <IntroContainerBenefits>

              <InfoIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />

          </IntroContainerBenefits>
        </div>
        <img src={CoffeeImg} alt=""/>
      </IntroContent>
    </IntroContainer>
  )
}
