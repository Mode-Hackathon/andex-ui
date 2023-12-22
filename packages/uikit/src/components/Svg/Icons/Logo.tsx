import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="43"
      height="41"
      viewBox="0 0 43 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 198 199"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3324 0.726582C6.97238 2.90976 0 11.3062 0 21.3311C0 23.4609 0.314693 25.5172 0.900117 27.456L16.3324 0.726582ZM5.67517 35.7511C7.63554 37.855 10.0196 39.5587 12.6915 40.7266L21.1572 26.0636L29.6229 40.7266C32.2947 39.5587 34.6787 37.855 36.6391 35.7512L21.1571 8.93561L5.67517 35.7511ZM41.4142 27.4561L25.9819 0.726562C35.3419 2.90971 42.3143 11.3062 42.3143 21.3311C42.3143 23.4609 41.9996 25.5172 41.4142 27.4561Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
