import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { TitleText } from "../../../../Typography";
import { SectionTitle } from "../SectionTitle";
import { ContainerCompleteOrderForm, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";



export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <ContainerCompleteOrderForm>
      <TitleText size="xs" color="subtitle" >
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que vc deseja pagar"
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
        />
        <PaymentMethodOptions/>
      </FormSectionContainer>
    </ContainerCompleteOrderForm>
  )
}
