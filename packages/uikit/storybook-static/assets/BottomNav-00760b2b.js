import{j as h,F as S,a as o}from"./jsx-runtime-a888423b.js";import{r as c}from"./index-8db94870.js";import{s as $}from"./styled-components.browser.esm-05bde203.js";import{F as j}from"./Flex-e70cc8d9.js";import{D as O}from"./DropdownMenu-18ff9ab3.js";import{a as k}from"./Overlay-c4441d34.js";import{B as D}from"./Box-f877d5fa.js";import{N as F}from"./NotificationDot-0a79bff8.js";import{B as I}from"./BottomNavItem-e80503d3.js";const q=$(j)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 5px 8px;
  background: ${({theme:t})=>t.colors.backgroundAlt};
  border-top: 1px solid ${({theme:t})=>t.colors.cardBorder};
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
`,M=q,i=({items:t=[],activeItem:l="",activeSubItem:u="",...v})=>{const[f,B]=c.useState({}),x=Object.values(f).some(e=>e);return h(S,{children:[x&&o(k,{}),o(M,{justifyContent:"space-around",...v,children:t.map(({label:e,items:a,href:r,icon:y,fillIcon:N,showOnMobile:g=!0,showItemsOnMobile:s=!0,disabled:n},_)=>{var d,p;const m=(p=(d=a==null?void 0:a.find(b=>b.status!==void 0))==null?void 0:d.status)==null?void 0:p.color;return g&&o(O,{items:a,isBottomNav:!0,activeItem:u,showItemsOnMobile:s,setMenuOpenByIndex:B,index:_,isDisabled:n,children:o(D,{children:o(F,{show:!!m,color:m,children:o(I,{href:r,disabled:n,isActive:r===l,label:e,icon:y,fillIcon:N,showItemsOnMobile:s})})})},`${e}#${r}`)})})]})},H=c.memo(i);try{i.displayName="BottomNav",i.__docgenInfo={description:"",displayName:"BottomNav",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"MenuItemsType[]"}},activeItem:{defaultValue:{value:""},description:"",name:"activeItem",required:!1,type:{name:"string"}},activeSubItem:{defaultValue:{value:""},description:"",name:"activeSubItem",required:!1,type:{name:"string"}}}}}catch{}export{H as B};
