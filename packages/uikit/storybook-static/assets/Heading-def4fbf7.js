import{s as n}from"./styled-components.browser.esm-05bde203.js";import{T as s}from"./Text-f6b55a62.js";const f={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6"},t={MD:"md",LG:"lg",XL:"xl",XXL:"xxl"},o={[t.MD]:{fontSize:"20px",fontSizeLg:"20px"},[t.LG]:{fontSize:"24px",fontSizeLg:"24px"},[t.XL]:{fontSize:"32px",fontSizeLg:"40px"},[t.XXL]:{fontSize:"48px",fontSizeLg:"64px"}},i=n(s).attrs({bold:!0})`
  font-size: ${({scale:e})=>o[e||t.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${({theme:e})=>e.mediaQueries.lg} {
    font-size: ${({scale:e})=>o[e||t.MD].fontSizeLg};
  }
`;i.defaultProps={as:f.H2};const p=i;export{p as H};
