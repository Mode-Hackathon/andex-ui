import{a as n}from"./jsx-runtime-a888423b.js";import{r as o}from"./index-8db94870.js";import{s as c}from"./styled-components.browser.esm-05bde203.js";import{s as b}from"./index.esm-073a6cf8.js";const $={root:null,rootMargin:"200px",threshold:0},x=c.div`
  max-height: ${({$height:e})=>e}px;
  max-width: ${({$width:e})=>e}px;
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-top: ${({$width:e,$height:r})=>r/e*100}%;
  }

  ${b}
`,p=o.forwardRef(({width:e,height:r,...a},i)=>n(x,{ref:i,$width:e,$height:r,...a})),W=p;try{p.displayName="Wrapper",p.__docgenInfo={description:"",displayName:"Wrapper",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}}}catch{}const q=c.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`,P=q,S=c.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`,d=({src:e,alt:r,width:a,height:i,fallbackSrc:l,...u})=>{const s=o.useRef(null),[f,m]=o.useState(!1),[h,g]=o.useState(!1);return o.useEffect(()=>{let t;const y=typeof window=="object"&&window.IntersectionObserver;return s.current&&y&&(t=new window.IntersectionObserver(w=>{w.forEach(_=>{const{isIntersecting:I}=_;I&&(m(!0),typeof(t==null?void 0:t.disconnect)=="function"&&t.disconnect())})},$),t.observe(s.current)),()=>{typeof(t==null?void 0:t.disconnect)=="function"&&t.disconnect()}},[e]),n(W,{ref:s,height:i,width:a,...u,children:f?n(S,{src:h&&l?l:e,alt:r,onError:()=>g(!0)}):n(P,{})},e)},O=d;try{d.displayName="Image",d.__docgenInfo={description:"",displayName:"Image",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:"WrapperProps"}},fallbackSrc:{defaultValue:null,description:"",name:"fallbackSrc",required:!1,type:{name:"string"}}}}}catch{}export{O as I,P,W,$ as o};
