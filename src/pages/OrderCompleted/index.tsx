
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { ContainerCompleteOrder } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useCarts } from "../../hooks/useCarts";



enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;
  const { cleanCart } = useCarts();
  const navigate = useNavigate();
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", { state: data, });
    cleanCart();
    console.log(data)
  }
  return (
    <FormProvider  {...confirmOrderForm}>
    <ContainerCompleteOrder className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
      <CompleteOrderForm />
      <SelectedCoffees/>
    </ContainerCompleteOrder>
    </FormProvider>
  )
}

