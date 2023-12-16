import{j as i,a as d,F as f}from"./jsx-runtime-a888423b.js";import{s as v}from"./styled-components.browser.esm-05bde203.js";import{F as g}from"./Flex-e70cc8d9.js";const h={SM:"sm",MD:"md",LG:"lg"},y={sm:{handleHeight:"16px",handleWidth:"16px",handleLeft:"2px",handleTop:"2px",checkedLeft:"calc(100% - 18px)",toggleHeight:"20px",toggleWidth:"36px"},md:{handleHeight:"26px",handleWidth:"26px",handleLeft:"3px",handleTop:"3px",checkedLeft:"calc(100% - 30px)",toggleHeight:"32px",toggleWidth:"56px"},lg:{handleHeight:"32px",handleWidth:"32px",handleLeft:"4px",handleTop:"4px",checkedLeft:"calc(100% - 36px)",toggleHeight:"40px",toggleWidth:"72px"}},a=e=>({scale:r=h.LG})=>y[r][e],l=v.div`
  background-color: ${({theme:e})=>e.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${a("handleHeight")};
  left: ${a("handleLeft")};
  position: absolute;
  top: ${a("handleTop")};
  transition: left 200ms ease-in;
  width: ${a("handleWidth")};
  z-index: 1;
`,s=v.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${l} {
    left: ${a("checkedLeft")};
  }

  &:focus + ${l} {
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }

  &:hover + ${l}:not(:disabled):not(:checked) {
    box-shadow: ${({theme:e})=>e.shadows.focus};
  }
`,b=v.div`
  align-items: center;
  background-color: ${({theme:e,$checked:r,$checkedColor:n,$defaultColor:t,disabled:u})=>e.colors[r&&!u?n:t]};
  border-radius: 24px;
  box-shadow: ${({theme:e})=>e.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${a("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${a("toggleWidth")};
`,x=b;try{l.displayName="Handle",l.__docgenInfo={description:"",displayName:"Handle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({checked:e,defaultColor:r="input",checkedColor:n="success",scale:t=h.LG,startIcon:u,endIcon:o,disabled:p,...m})=>i(x,{disabled:p,$checked:!!e,$checkedColor:n,$defaultColor:r,scale:t,children:[d(s,{disabled:p,checked:e,scale:t,...m,type:"checkbox"}),u&&o?i(f,{children:[d(l,{scale:t,children:d(g,{height:"100%",alignItems:"center",justifyContent:"center",children:e?o(e):u(!e)})}),i(g,{width:"100%",height:"100%",justifyContent:"space-around",alignItems:"center",children:[u(),o()]})]}):d(l,{scale:t})]}),T=c;try{c.displayName="Toggle",c.__docgenInfo={description:"",displayName:"Toggle",props:{scale:{defaultValue:{value:"lg"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},checkedColor:{defaultValue:{value:"success"},description:"",name:"checkedColor",required:!1,type:{name:"enum",value:[{value:'"gold"'},{value:'"silver"'},{value:'"white"'},{value:'"yellow"'},{value:'"background"'},{value:'"text"'},{value:'"input"'},{value:'"disabled"'},{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"secondary80"'},{value:'"backgroundDisabled"'},{value:'"backgroundAlt"'},{value:'"backgroundAlt2"'},{value:'"cardBorder"'},{value:'"contrast"'},{value:'"dropdown"'},{value:'"dropdownDeep"'},{value:'"invertedContrast"'},{value:'"inputSecondary"'},{value:'"tertiary"'},{value:'"text99"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBubblegum"'},{value:'"gradientInverseBubblegum"'},{value:'"gradientCardHeader"'},{value:'"gradientBlue"'},{value:'"gradientViolet"'},{value:'"gradientVioletAlt"'},{value:'"gradientGold"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"overlay"'},{value:'"bronze"'},{value:'"failure"'},{value:'"failure33"'},{value:'"primary"'},{value:'"primary0f"'},{value:'"primary3D"'},{value:'"primaryBright"'},{value:'"primaryDark"'},{value:'"success19"'},{value:'"warning2D"'},{value:'"warning33"'}]}},defaultColor:{defaultValue:{value:"input"},description:"",name:"defaultColor",required:!1,type:{name:"enum",value:[{value:'"gold"'},{value:'"silver"'},{value:'"white"'},{value:'"yellow"'},{value:'"background"'},{value:'"text"'},{value:'"input"'},{value:'"disabled"'},{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"secondary80"'},{value:'"backgroundDisabled"'},{value:'"backgroundAlt"'},{value:'"backgroundAlt2"'},{value:'"cardBorder"'},{value:'"contrast"'},{value:'"dropdown"'},{value:'"dropdownDeep"'},{value:'"invertedContrast"'},{value:'"inputSecondary"'},{value:'"tertiary"'},{value:'"text99"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBubblegum"'},{value:'"gradientInverseBubblegum"'},{value:'"gradientCardHeader"'},{value:'"gradientBlue"'},{value:'"gradientViolet"'},{value:'"gradientVioletAlt"'},{value:'"gradientGold"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"overlay"'},{value:'"bronze"'},{value:'"failure"'},{value:'"failure33"'},{value:'"primary"'},{value:'"primary0f"'},{value:'"primary3D"'},{value:'"primaryBright"'},{value:'"primaryDark"'},{value:'"success19"'},{value:'"warning2D"'},{value:'"warning33"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"((isActive?: boolean) => ReactNode)"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"((isActive?: boolean) => ReactNode)"}}}}}catch{}export{T};
