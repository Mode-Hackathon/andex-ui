import{a,j as r}from"./jsx-runtime-a888423b.js";import{T as y}from"./Text-f6b55a62.js";import{s as t}from"./styled-components.browser.esm-05bde203.js";import{B as g}from"./Box-f877d5fa.js";import{I as v}from"./Input-771d9dff.js";import{I as w}from"./IconButton-ad080da8.js";import{F as l}from"./Flex-e70cc8d9.js";import{S as T}from"./SwapVert-b7e10d21.js";const i=t(w)`
  width: 16px;
`,d=t(y)`
  margin-left: 4px;
  text-align: right;
  color: ${({theme:e})=>e.colors.textSubtle};
  white-space: nowrap;
`,o=t(g)`
  background-color: ${({theme:e})=>e.colors.input};
  border: 1px solid ${({theme:e})=>e.colors.inputSecondary};
  border-radius: 16px;
  box-shadow: ${({theme:e,isWarning:n})=>e.shadows[n?"warning":"inset"]};
  padding: 8px 16px;
`,u=t(v)`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  text-align: ${({textAlign:e="right"})=>e};
  border: none;

  ::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;try{i.displayName="SwitchUnitsButton",i.__docgenInfo={description:"",displayName:"SwitchUnitsButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="UnitContainer",d.__docgenInfo={description:"",displayName:"UnitContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledBalanceInput",o.__docgenInfo={description:"",displayName:"StyledBalanceInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledInput",u.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({value:e,placeholder:n="0.0",onUserInput:h,currencyValue:p,inputProps:_,innerRef:I,isWarning:b=!1,decimals:x=18,unit:c,switchEditingUnits:m,...V})=>{const q=f=>{f.currentTarget.validity.valid&&h(f.currentTarget.value.replace(/,/g,"."))};return a(o,{isWarning:b,...V,children:r(l,{justifyContent:"flex-end",children:[r(g,{width:"100%",children:[r(l,{alignItems:"center",children:[a(u,{pattern:`^[0-9]*[.,]?[0-9]{0,${x}}$`,inputMode:"decimal",min:"0",value:e,onChange:q,placeholder:n,ref:I,..._}),c&&a(d,{children:c})]}),p&&a(y,{fontSize:"12px",textAlign:"right",color:"textSubtle",children:p})]}),m&&a(l,{alignItems:"center",pl:"12px",children:a(i,{scale:"sm",variant:"text",onClick:m,children:a(T,{color:"textSubtle"})})})]})})},j=s;try{s.displayName="BalanceInput",s.__docgenInfo={description:"",displayName:"BalanceInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},onUserInput:{defaultValue:null,description:"",name:"onUserInput",required:!0,type:{name:"(input: string) => void"}},inputAlign:{defaultValue:null,description:"",name:"inputAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},currencyValue:{defaultValue:null,description:"",name:"currencyValue",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:{value:"0.0"},description:"",name:"placeholder",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:'(Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "placeholder" | "value"> & InputProps)'}},isWarning:{defaultValue:{value:"false"},description:"",name:"isWarning",required:!1,type:{name:"boolean"}},decimals:{defaultValue:{value:"18"},description:"",name:"decimals",required:!1,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"ReactNode"}},switchEditingUnits:{defaultValue:null,description:"",name:"switchEditingUnits",required:!1,type:{name:"(() => void)"}}}}}catch{}export{j as B,o as S,u as a};
