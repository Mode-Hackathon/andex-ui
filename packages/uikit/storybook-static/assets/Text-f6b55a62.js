import{s as i}from"./styled-components.browser.esm-05bde203.js";import{s}from"./index.esm-8c5d6e7e.js";import{s as l,t as r,l as a}from"./index.esm-073a6cf8.js";import{g as n}from"./getThemeValue-6fc24f62.js";const f=({color:t,theme:e})=>n(e,`colors.${t}`,t),o=i.div.attrs(t=>{const e=typeof t.title<"u"?t.title:t.ellipsis&&typeof t.children=="string"?t.children:void 0;return{...t,title:e}}).withConfig({shouldForwardProp:s})`
  color: ${f};
  font-weight: ${({bold:t})=>t?600:400};
  line-height: 1.5;
  ${({textTransform:t})=>t&&`text-transform: ${t};`}
  ${({ellipsis:t})=>t&&`white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${l}
  ${r}
  ${a}

  ${({small:t})=>t&&"font-size: 14px;"}
`;o.defaultProps={color:"text",small:!1,fontSize:"16px",ellipsis:!1};const m=o;export{m as T};
