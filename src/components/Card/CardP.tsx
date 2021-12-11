import React from "react";
import { StyledCardP, StyledCardInnerP } from "./StyledCardP";
import { CardProps } from "./types";

const CardP: React.FC<CardProps> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledCardP {...props}>
      <StyledCardInnerP background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledCardInnerP>
    </StyledCardP>
  );
};
export default CardP;
