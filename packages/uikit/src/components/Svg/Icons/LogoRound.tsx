import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15.6569" cy="15.2888" r="15" fill="black" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7618 3.28885C7.1459 4.5988 2.96252 9.63664 2.96252 15.6516C2.96252 16.9294 3.15133 18.1631 3.50256 19.3264L12.7618 3.28885ZM6.36757 24.3035C7.54376 25.5658 8.97416 26.588 10.5772 27.2888L15.6567 18.491L20.7361 27.2889C22.3393 26.5882 23.7698 25.5659 24.946 24.3036L15.6568 8.21416L6.36757 24.3035ZM27.811 19.3265L18.5517 3.28882C24.1677 4.59871 28.3511 9.63658 28.3511 15.6516C28.3511 16.9294 28.1623 18.1632 27.811 19.3265Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
