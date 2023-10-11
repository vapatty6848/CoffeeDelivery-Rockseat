import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<ButtonHTMLElement> {
  text: string | number;
}

export function ButtonComponent({  text, ...props}: ButtonProps) {
  return (
    <ButtonContainer { ...props}>
      {text}
    </ButtonContainer>
  )
}
