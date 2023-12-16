import{c as n,n as e,s as a}from"./styled-components.browser.esm-05bde203.js";import{s as i}from"./index.esm-073a6cf8.js";import{g as s}from"./getThemeValue-6fc24f62.js";const l=n`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,f=e`
  animation: ${l} 2s linear infinite;
`,r=a("svg").withConfig({shouldForwardProp:t=>!["spin"].includes(t)})`
  align-self: center; // Safari fix
  fill: ${({theme:t,color:o})=>s(t,`colors.${o}`,o)}; // should use color and currentColor in svg path
  color: ${({theme:t,color:o})=>s(t,`colors.${o}`,o)};
  flex-shrink: 0;
  ${({spin:t})=>t&&f};
  ${i};

  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`;r.defaultProps={color:"text",width:"20px",xmlns:"http://www.w3.org/2000/svg",spin:!1};const d=r;export{d as S};
