import{a as x,j as y,F as h}from"./jsx-runtime-a888423b.js";import{c as v}from"./clsx.m-1229b3e0.js";import{r}from"./index-8db94870.js";import{E as S}from"./externalLinkProps-0f3801f5.js";import{s as E,n as k}from"./styled-components.browser.esm-05bde203.js";import{v as d,l as w,s as C}from"./index.esm-073a6cf8.js";import{v as c}from"./vars.css-8b7ea31e.js";const n={MD:"md",SM:"sm",XS:"xs"},a={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary",TEXT:"text",DANGER:"danger",SUBTLE:"subtle",SUCCESS:"success",LIGHT:"light",BUBBLEGUM:"bubblegum"},R={[n.MD]:{height:"48px",padding:"0 24px"},[n.SM]:{height:"32px",padding:"0 16px"},[n.XS]:{height:"20px",fontSize:"12px",padding:"0 8px"}},T={[a.PRIMARY]:{backgroundColor:"primary",color:"invertedContrast"},[a.SECONDARY]:{backgroundColor:"transparent",border:"2px solid",borderColor:"primary",boxShadow:"none",color:"primary",":disabled":{backgroundColor:"transparent"}},[a.TERTIARY]:{backgroundColor:"tertiary",boxShadow:"none",color:"primary"},[a.SUBTLE]:{backgroundColor:"textSubtle",color:"backgroundAlt"},[a.DANGER]:{backgroundColor:"failure",color:"white"},[a.SUCCESS]:{backgroundColor:"success",color:"white"},[a.TEXT]:{backgroundColor:"transparent",color:"primary",boxShadow:"none"},[a.LIGHT]:{backgroundColor:"input",color:"textSubtle",boxShadow:"none"},[a.BUBBLEGUM]:{background:c.colors.gradientBubblegum,color:"textSubtle",boxShadow:"none",":disabled":{background:c.colors.disabled}}},$=({$isLoading:e,theme:o})=>e===!0?`
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `:`
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${o.colors.backgroundDisabled};
      border-color: ${o.colors.backgroundDisabled};
      box-shadow: none;
      color: ${o.colors.textDisabled};
      cursor: not-allowed;
    }
  `,B=({$isLoading:e=!1})=>e?".5":"1",I=E("button").withConfig({shouldForwardProp:e=>!["fullWidth"].includes(e)})`
  position: relative;
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${B};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:focus-visible {
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  @media (hover: hover) {
    &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${$}
  ${d({prop:"scale",variants:R})}
  ${d({variants:T})}
  ${w}
  ${C}
  ${({decorator:e,theme:o})=>e&&k`
      &::before {
        content: "${e.text}";
        position: absolute;
        border-bottom: 20px solid ${e.backgroundColor??o.colors.secondary};
        border-left: 34px solid transparent;
        border-right: 12px solid transparent;
        height: 0;
        top: -1px;
        right: -12px;
        width: 75px;
        text-align: center;
        padding-right: 30px;
        line-height: 20px;
        font-size: 12px;
        font-weight: 400;
        transform: rotate(31.17deg);
        color: ${e.color??"white"};
      }
    `}
`,V=I,l=e=>{const{startIcon:o,endIcon:s,external:u,className:p,isLoading:t,disabled:b,children:m,...g}=e,f=u?S:{},i=t||b;return x(V,{$isLoading:t,className:v(p,{"pancake-button--loading":t,"pancake-button--disabled":i&&!t}),disabled:i,...f,...g,children:y(h,{children:[r.isValidElement(o)&&r.cloneElement(o,{mr:"0.5rem"}),m,r.isValidElement(s)&&r.cloneElement(s,{ml:"0.5rem"})]})})};l.defaultProps={isLoading:!1,external:!1,variant:a.PRIMARY,scale:n.MD,disabled:!1};const P=l;try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & ElementType) | ("object" & ElementType) | ("title" & ElementType) | ("center" & ElementType) | ("sub" & ElementType) | ... 174 more ...'}},external:{defaultValue:{value:"false"},description:"",name:"external",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},scale:{defaultValue:{value:"md"},description:"",name:"scale",required:!1,type:{name:"ResponsiveValue<Scale>"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"danger"'},{value:'"success"'},{value:'"light"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary"'},{value:'"subtle"'},{value:'"bubblegum"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},decorator:{defaultValue:null,description:"",name:"decorator",required:!1,type:{name:'{ backgroundColor?: string; color?: string; text: string; direction?: "left" | "right" | undefined; } | undefined'}}}}}catch{}export{P as B,n as s,a as v};
