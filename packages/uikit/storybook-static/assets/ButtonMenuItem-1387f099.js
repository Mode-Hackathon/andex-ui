import{a as n}from"./jsx-runtime-a888423b.js";import{r as i}from"./index-8db94870.js";import{s as d}from"./styled-components.browser.esm-05bde203.js";import{s as y}from"./index.esm-073a6cf8.js";import{v as a,s as x,B as c}from"./Button-1b68a01e.js";const B=({theme:e,variant:t})=>e.colors[t===a.SUBTLE?"input":"tertiary"],M=({theme:e,variant:t})=>e.colors[t===a.SUBTLE?"inputSecondary":"disabled"],g=d.div.withConfig({shouldForwardProp:e=>!["fullWidth"].includes(e)})`
  background-color: ${B};
  border-radius: 16px;
  display: ${({fullWidth:e})=>e?"flex":"inline-flex"};
  border: 1px solid ${M};
  width: ${({fullWidth:e})=>e?"100%":"auto"};

  & > button,
  & > a {
    flex: ${({fullWidth:e})=>e?1:"auto"};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({disabled:e,theme:t,variant:o})=>e?`
        opacity: 0.5;

        & > button:disabled {
          color: ${o===a.PRIMARY?t.colors.primary:t.colors.textSubtle};
        }
    `:""}
  ${y}
`,l=({activeIndex:e=0,scale:t=x.MD,variant:o=a.PRIMARY,onItemClick:r,disabled:u,children:p,fullWidth:m=!1,...f})=>n(g,{disabled:u,variant:o,fullWidth:m,...f,children:i.Children.map(p,(v,s)=>i.cloneElement(v,{isActive:e===s,onClick:r?b=>r(s,b):void 0,scale:t,variant:o,disabled:u}))}),q=l;try{l.displayName="ButtonMenu",l.__docgenInfo={description:"",displayName:"ButtonMenu",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"primary"'},{value:'"subtle"'}]}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!1,type:{name:"((index: number, event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},scale:{defaultValue:{value:"md"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const h=d(c)`
  background-color: transparent;
  color: ${({theme:e,variant:t})=>t===a.PRIMARY?e.colors.primary:e.colors.textSubtle};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`,I=({isActive:e=!1,variant:t=a.PRIMARY,as:o,...r})=>e?n(c,{as:o,variant:t,...r}):n(h,{forwardedAs:o,variant:t,...r}),w=I;export{q as B,w as a};
