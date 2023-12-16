import{j as n,F as r,a as t}from"./jsx-runtime-a888423b.js";import{c as a,s,n as i}from"./styled-components.browser.esm-05bde203.js";import{r as c}from"./index-8db94870.js";import{B as l}from"./Box-f877d5fa.js";const d=a`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `,m=a`
    0% {
     opacity: 0;
    }
    100% {
     opacity: 1;
    }
  `,p=s(l)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({theme:o})=>`${o.colors.text99}`};
  z-index: 20;
  will-change: opacity;
  animation: ${m} 350ms ease forwards;
  ${({isUnmounting:o})=>o&&i`
      animation: ${d} 350ms ease forwards;
    `}
`,y=()=>(c.useEffect(()=>(document.body.style.cssText=`
      overflow: hidden;
    `,document.body.style.overflow="hidden",()=>{document.body.style.cssText=`
        overflow: visible;
        overflow: overlay;
      `}),[]),null),e=o=>n(r,{children:[t(y,{}),t(p,{role:"presentation",...o})]}),g=e;try{e.displayName="Overlay",e.__docgenInfo={description:"",displayName:"Overlay",props:{isUnmounting:{defaultValue:null,description:"",name:"isUnmounting",required:!1,type:{name:"boolean"}}}}}catch{}export{e as O,g as a};
