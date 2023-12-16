import{a,j as y}from"./jsx-runtime-a888423b.js";import{r as b}from"./index-8db94870.js";import{M as h}from"./context-f318d187.js";import{A as v}from"./AnimatedIconComponent-70d34edd.js";import{s as m}from"./styled-components.browser.esm-05bde203.js";import{T as x}from"./Text-f6b55a62.js";import{F as _}from"./Flex-e70cc8d9.js";const o=m.button`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  height: 44px;
  padding: 4px 12px;
  &:hover {
    border-radius: 16px;
  }
  &:hover,
  &:hover div {
    background: ${({theme:e})=>e.colors.tertiary};
  }
`,r=m(x)`
  display: -webkit-box;
  overflow: hidden;
  user-select: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;try{o.displayName="StyledBottomNavItem",o.__docgenInfo={description:"",displayName:"StyledBottomNavItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.displayName="StyledBottomNavText",r.__docgenInfo={description:"",displayName:"StyledBottomNavText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const l=({label:e,icon:n,fillIcon:u,href:p,showItemsOnMobile:c=!1,isActive:t=!1,disabled:i=!1,...d})=>{const{linkComponent:f}=b.useContext(h),s=y(_,{flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",children:[n&&a(v,{icon:n,fillIcon:u,height:"22px",width:"21px",color:t?"secondary":"textSubtle",isActive:t,activeBackgroundColor:"backgroundAlt"}),a(r,{color:t?"text":"textSubtle",fontWeight:t?"600":"400",fontSize:"10px",children:e})]});return c?a(o,{style:{opacity:i?.5:1},type:"button",...d,children:s}):a(o,{style:{opacity:i?.5:1},as:f,href:p,...d,children:s})},B=l;try{l.displayName="BottomNavItem",l.__docgenInfo={description:"",displayName:"BottomNavItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},fillIcon:{defaultValue:null,description:"",name:"fillIcon",required:!1,type:{name:"ElementType<any>"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},showItemsOnMobile:{defaultValue:{value:"false"},description:"",name:"showItemsOnMobile",required:!1,type:{name:"boolean"}}}}}catch{}export{B};
