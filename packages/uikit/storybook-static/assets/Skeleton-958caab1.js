import{a as t,j as T}from"./jsx-runtime-a888423b.js";import{s as g}from"./index.esm-8c5d6e7e.js";import{r as m}from"./index-8db94870.js";import{c as b,s as r}from"./styled-components.browser.esm-05bde203.js";import{l as V,s as R,d as $}from"./index.esm-073a6cf8.js";import{a as x,d as D,b as f,c as v,e as y}from"./animationToolkit-f78aec88.js";import{m as N}from"./motion-minimal-b8fc2ac8.js";import{L as W,A as U}from"./index-ba04c57b.js";import{d as I}from"./features-animation-7b2a34c9.js";const i={WAVES:"waves",PULSE:"pulse"},o={RECT:"rect",ROUND:"round",CIRCLE:"circle"},j=b`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`,z=b`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`,S=r(N.div)`
  position: relative;
  will-change: opacity;
  opacity: 0;
  &.appear {
    animation: ${x} 0.3s ease-in-out forwards;
  }
  &.disappear {
    animation: ${D} 0.3s ease-in-out forwards;
  }
`,M=r.div.withConfig({shouldForwardProp:g})`
  position: relative;
  ${V}
  ${R}
  overflow: hidden;
`,_=r.div.withConfig({shouldForwardProp:g})`
  min-height: 20px;
  display: block;
  background-color: ${({theme:e,isDark:a})=>a?e.colors.inputSecondary:e.colors.backgroundDisabled};
  border-radius: ${({variant:e,theme:a})=>e===o.CIRCLE?a.radii.circle:e===o.ROUND?a.radii.default:a.radii.small};
  ${V}
  ${R}
  ${$}
`,q=r(_)`
  animation: ${z} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
`,w=r(_)`
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${j} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`,u=({variant:e=o.RECT,animation:a=i.PULSE,...n})=>a===i.WAVES?t(w,{variant:e,...n}):t(q,{variant:e,...n}),k=({variant:e=o.RECT,animation:a=i.PULSE,isDataReady:n=!1,children:h,wrapperProps:E,skeletonTop:L="0",skeletonLeft:P="0",width:s,height:l,mr:A,ml:C,...p})=>{const d=m.useRef(null),c=m.useRef(null);return t(M,{width:s,height:l,mr:A,ml:C,...E,children:t(W,{features:I,children:T(U,{children:[n&&t(S,{ref:d,onAnimationStart:()=>f(d.current),...v,variants:y,transition:{duration:.3},children:h},"content"),!n&&t(S,{style:{position:"absolute",top:L,left:P},ref:c,onAnimationStart:()=>f(c.current),...v,variants:y,transition:{duration:.3},children:a===i.WAVES?t(w,{variant:e,...p,width:s,height:l}):t(q,{variant:e,...p,width:s,height:l})},"skeleton")]})})})},Y=u;try{k.displayName="SkeletonV2",k.__docgenInfo={description:"",displayName:"SkeletonV2",props:{animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"waves"'},{value:'"pulse"'}]}},variant:{defaultValue:{value:"rect"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"circle"'},{value:'"rect"'}]}},isDataReady:{defaultValue:{value:"false"},description:"",name:"isDataReady",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:"(SpaceProps<Required<Theme<TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<Theme<TLengthStyledSystem>>>)"}},skeletonTop:{defaultValue:{value:"0"},description:"",name:"skeletonTop",required:!1,type:{name:"string"}},skeletonLeft:{defaultValue:{value:"0"},description:"",name:"skeletonLeft",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{u.displayName="Skeleton",u.__docgenInfo={description:"",displayName:"Skeleton",props:{animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"waves"'},{value:'"pulse"'}]}},variant:{defaultValue:{value:"rect"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"circle"'},{value:'"rect"'}]}},isDark:{defaultValue:null,description:"",name:"isDark",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{Y as S,k as a};
