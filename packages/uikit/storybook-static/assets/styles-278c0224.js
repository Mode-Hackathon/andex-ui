import{c as a,s as o,n}from"./styled-components.browser.esm-05bde203.js";const r=a`
    0% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0%);
    }
  `,s=a`
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(20%);
    }
  `,i=o.div`
  width: 100%;
  height: 80vh;
  bottom: 0;
  background-color: ${({theme:t})=>t.colors.backgroundAlt};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  position: fixed;
  animation: ${r} 350ms ease forwards;
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  will-change: transform;
  z-index: 21;
  ${({isUnmounting:t})=>t&&n`
      animation: ${s} 350ms ease forwards;
    `}
`;export{i as D,r as m,s as u};
