import{a as r}from"./jsx-runtime-a888423b.js";import{r as m}from"./index-8db94870.js";import{i as I}from"./isTouchDevice-38021306.js";import{D as g}from"./DropdownMenu-18ff9ab3.js";import{M as x}from"./MenuItem-33135317.js";import{F as D}from"./Flex-e70cc8d9.js";const i=({items:a=[],activeItem:d,activeSubItem:u,...f})=>r(D,{...f,children:a.map(({label:o,items:e=[],href:t,icon:s,disabled:n})=>{var l,p;const y=(p=(l=e==null?void 0:e.find(_=>_.status!==void 0))==null?void 0:l.status)==null?void 0:p.color,c=d===t,v=I()&&e&&e.length>0?{}:{href:t},M=s;return r(g,{items:e,py:1,activeItem:u,isDisabled:n,children:r(x,{...v,isActive:c,statusColor:y,isDisabled:n,children:o||s&&m.createElement(M,{color:c?"secondary":"textSubtle"})})},`${o}#${t}`)})}),E=m.memo(i);try{i.displayName="MenuItems",i.__docgenInfo={description:"",displayName:"MenuItems",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"MenuItemsType[]"}},activeItem:{defaultValue:null,description:"",name:"activeItem",required:!1,type:{name:"string"}},activeSubItem:{defaultValue:null,description:"",name:"activeSubItem",required:!1,type:{name:"string"}}}}}catch{}export{E as M};