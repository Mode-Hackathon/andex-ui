import{s as e}from"./styled-components.browser.esm-05bde203.js";const r={SM:"sm",MD:"md",LG:"lg"},n=({isSuccess:s=!1,isWarning:a=!1,theme:o})=>a?o.shadows.warning:s?o.shadows.success:o.shadows.inset,t=({scale:s=r.MD})=>{switch(s){case r.SM:return"32px";case r.LG:return"48px";case r.MD:default:return"40px"}},c=e("input").withConfig({shouldForwardProp:s=>!["scale","isSuccess","isWarning"].includes(s)})`
  background-color: ${({theme:s})=>s.colors.input};
  border-radius: 16px;
  box-shadow: ${n};
  color: ${({theme:s})=>s.colors.text};
  display: block;
  font-size: 16px;
  height: ${t};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid ${({theme:s})=>s.colors.inputSecondary};

  &::placeholder {
    color: ${({theme:s})=>s.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({theme:s})=>s.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({theme:s})=>s.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${({theme:s,isWarning:a,isSuccess:o})=>a?s.shadows.warning:o?s.shadows.success:s.shadows.focus};
  }
`;c.defaultProps={scale:r.MD,isSuccess:!1,isWarning:!1};const l=c;export{l as I,r as s};
