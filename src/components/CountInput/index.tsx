import { Minus, Plus } from "phosphor-react";
import { ContainerCount, IconWrapper } from "./styles";

interface CountProps {
  size?: 'medium' | 'small';
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Counter({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium'
}: CountProps) {
  return (
    <ContainerCount size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1} >
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease} >
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </ContainerCount>
  )
}
