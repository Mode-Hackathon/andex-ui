import{j as n,a as s}from"./jsx-runtime-a888423b.js";import{r as o}from"./index-8db94870.js";import{s as r}from"./styled-components.browser.esm-05bde203.js";const d=r.span`
  display: inline-flex;
  width: fit-content;
  position: relative;
`,v=r("span").withConfig({shouldForwardProp:e=>!["show"].includes(e)})`
  display: ${({show:e})=>e?"inline-flex":"none"};
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  pointer-events: none;
  border: 2px solid ${({theme:e})=>e.colors.invertedContrast};
  border-radius: 50%;
  background-color: ${({theme:e,color:a})=>e.colors[a]};
`,l=({show:e=!1,color:a="failure",children:t,...i})=>n(d,{children:[o.Children.map(t,u=>o.cloneElement(u,i)),s(v,{show:e,color:a})]}),f=l;try{l.displayName="NotificationDot",l.__docgenInfo={description:"",displayName:"NotificationDot",props:{show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"failure"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gold"'},{value:'"silver"'},{value:'"white"'},{value:'"yellow"'},{value:'"background"'},{value:'"text"'},{value:'"input"'},{value:'"disabled"'},{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"secondary80"'},{value:'"backgroundDisabled"'},{value:'"backgroundAlt"'},{value:'"backgroundAlt2"'},{value:'"cardBorder"'},{value:'"contrast"'},{value:'"dropdown"'},{value:'"dropdownDeep"'},{value:'"invertedContrast"'},{value:'"inputSecondary"'},{value:'"tertiary"'},{value:'"text99"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBubblegum"'},{value:'"gradientInverseBubblegum"'},{value:'"gradientCardHeader"'},{value:'"gradientBlue"'},{value:'"gradientViolet"'},{value:'"gradientVioletAlt"'},{value:'"gradientGold"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"overlay"'},{value:'"bronze"'},{value:'"failure"'},{value:'"failure33"'},{value:'"primary"'},{value:'"primary0f"'},{value:'"primary3D"'},{value:'"primaryBright"'},{value:'"primaryDark"'},{value:'"success19"'},{value:'"warning2D"'},{value:'"warning33"'}]}}}}}catch{}export{f as N};
