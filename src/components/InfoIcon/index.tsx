import { ReactNode } from "react";
import { IconContainer, ItemIconContainer } from "./styles";


interface IconProps  {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoIcon({ icon, text, iconBg }: IconProps) {
  return (
    <IconContainer>
      <ItemIconContainer iconBg={iconBg}>
        {icon}
      </ItemIconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </IconContainer>
  )
}
