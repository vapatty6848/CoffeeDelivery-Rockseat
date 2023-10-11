import { RegularText } from "../../../../Typography";
import { ButtonComponent } from "../../../../components/Button";
import { useCarts } from "../../../../hooks/useCarts";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCarts();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s"> Total de itens</RegularText>
        <RegularText>{formattedItemsTotal }</RegularText>
      </div>
      <div>
        <RegularText size="s"> Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700"  color="subtitle" size="l"> Total </RegularText>
        <RegularText weight="700" color="subtitle" size="l">R$ {formattedCartTotal} </RegularText>
      </div>
      <ButtonComponent
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
