import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M13,5.9h-1.4c-0.5,0-0.6,0.2-0.6,0.7v1.2h2L12.8,10H11v6.5H8.4V10H7V7.8h1.3V6.1c0-1.6,0.9-2.5,2.8-2.5H13L13,5.9L13,5.9z"
      />
    </Svg>
  );
};

export default Icon;
