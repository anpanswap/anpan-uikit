import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1,0H0.9C0.4,0,0,0.5,0,1.2v17.7C0,19.5,0.4,20,0.9,20h18.2c0.5,0,0.9-0.5,0.9-1.2V1.2C20,0.5,19.6,0,19.1,0z M6.7,17.5l0-14.8l8.6,7.4L6.7,17.5z"
      />
    </Svg>
  );
};

export default Icon;
