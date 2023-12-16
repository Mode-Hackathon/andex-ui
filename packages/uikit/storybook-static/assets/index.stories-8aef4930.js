import{a as t}from"./jsx-runtime-a888423b.js";import{s as c}from"./index.esm-8c5d6e7e.js";import{c as f,s as h}from"./styled-components.browser.esm-05bde203.js";import{L as y}from"./Logo-5fd66d13.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-073a6cf8.js";import"./Svg-f122668c.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";const $=f`
  0% {
    opacity: 1;
    transform: translate(0, -100%) rotateZ(0deg);
  }

  75% {
    opacity: 1;
    transform: translate(100px, 75vh) rotateZ(270deg);
  }

  100% {
    opacity: 0;
    transform: translate(150px, 100vh) rotateZ(360deg);
  }
`,g=h.div.withConfig({shouldForwardProp:c})`
  display: inline-flex;
  position: fixed;
  top: 0;
  left: ${({position:n})=>`${n}vw`};
  transform: translate3d(0, -100%, 0);
  user-select: none;
  pointer-events: none;
  z-index: 99999;

  animation-name: ${$};
  animation-duration: ${({duration:n})=>`${n}s`};
  animation-timing-function: linear;
  animation-iteration-count: ${({iterations:n})=>Number.isFinite(n)?String(n):"infinite"};
  animation-play-state: running;

  &:nth-child(5n + 5) {
    animation-delay: ${({duration:n})=>`${n/10*1.3}s`};
  }

  &:nth-child(3n + 2) {
    animation-delay: ${({duration:n})=>`${n/10*1.5}s`};
  }

  &:nth-child(2n + 5) {
    animation-delay: ${({duration:n})=>`${n/10*1.7}s`};
  }

  &:nth-child(3n + 10) {
    animation-delay: ${({duration:n})=>`${n/10*2.7}s`};
  }

  &:nth-child(7n + 2) {
    animation-delay: ${({duration:n})=>`${n/10*3.5}s`};
  }

  &:nth-child(4n + 5) {
    animation-delay: ${({duration:n})=>`${n/10*5.5}s`};
  }

  &:nth-child(3n + 7) {
    animation-delay: ${({duration:n})=>`${n/10*8}s`};
  }
`,a=({count:n=30,size:i=32,iterations:d=1/0,duration:m=10})=>{const u=[...Array(n)].map((_,p)=>t(g,{position:Math.random()*100,iterations:d,duration:m,children:t(y,{width:i,height:i})},String(p)));return t("div",{children:u})},l=a;try{a.displayName="FallingBunnies",a.__docgenInfo={description:"",displayName:"FallingBunnies",props:{size:{defaultValue:{value:"32"},description:"",name:"size",required:!1,type:{name:"number"}},count:{defaultValue:{value:"30"},description:"",name:"count",required:!1,type:{name:"number"}},iterations:{defaultValue:null,description:"",name:"iterations",required:!1,type:{name:"number"}},duration:{defaultValue:{value:"10"},description:"",name:"duration",required:!1,type:{name:"number"}}}}}catch{}const Z={title:"Components/FallingBunnies",component:l,argTypes:{}},e=()=>t(l,{});var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <FallingBunnies />;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,Z as default};
