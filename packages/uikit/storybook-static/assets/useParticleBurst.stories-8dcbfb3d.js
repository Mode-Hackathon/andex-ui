import{j as T,a as t}from"./jsx-runtime-a888423b.js";import{B as l}from"./Button-1b68a01e.js";import{T as u}from"./Text-f6b55a62.js";import{r as x}from"./index-8db94870.js";import{d as re}from"./debounce-2c70bf35.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./styled-components.browser.esm-05bde203.js";import"./index.esm-073a6cf8.js";import"./_commonjsHelpers-042e6b4d.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./index.esm-8c5d6e7e.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./toNumber-1b8e5138.js";const ie={size:30,distance:500},A=(a,n,s,p={})=>{const{size:m,distance:d}={...ie,...p},e=document.createElement("particle");document.body.appendChild(e);const w=Math.floor(Math.random()*m+8),i=w,h=(Math.random()-.5)*d,g=(Math.random()-.5)*d,r=Math.random()*520,O=Math.random()*200;e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="contain",e.style.backgroundImage=`url(${s})`,e.style.left="0",e.style.top="0",e.style.opacity="0",e.style.pointerEvents="none",e.style.position="fixed",e.style.width=`${w}px`,e.style.height=`${i}px`;const M=e.animate([{transform:`translate(-50%, -50%) translate(${a}px, ${n}px) rotate(0deg)`,opacity:1},{transform:`translate(-50%, -50%) translate(${a+h}px, ${n+g}px) rotate(${r}deg)`,opacity:0}],{duration:Math.random()*1e3+5e3,easing:"cubic-bezier(0, .9, .57, 1)",delay:O});M.onfinish=()=>{e.remove()}},ae={numberOfParticles:30,debounceDuration:200,particleOptions:{}},se=a=>{const{selector:n,numberOfParticles:s,debounceDuration:p,imgSrc:m,disableWhen:d,particleOptions:e}={...ae,...a},i=x.useCallback(()=>re(r=>{if(!(d&&d())){const M=r.currentTarget;if(r.clientX===0&&r.clientY===0){const{left:y,width:V,top:Z,height:ee}=M.getBoundingClientRect(),te=y+V/2,ne=Z+ee/2;for(let z=0;z<s;z+=1)A(te,ne,m,e)}else for(let y=0;y<s;y+=1)A(r.clientX,r.clientY+window.scrollY,m,e)}},p,{leading:!0}),[p,s,m,d,e])(),h=x.useCallback(()=>{n?document.querySelectorAll(n).forEach(r=>{r.addEventListener("click",i)}):document.addEventListener("click",i)},[n,i]),g=x.useCallback(()=>{n?document.querySelectorAll(n).forEach(r=>{r.removeEventListener("click",i)}):document.removeEventListener("click",i)},[n,i]);return x.useEffect(()=>(h(),()=>g()),[h,g]),{initialize:h,teardown:g}},o=se,c="https://via.placeholder.com/10",ke={title:"Hooks/useParticleBurst",argTypes:{}},b=()=>(o({imgSrc:c,selector:"button"}),T("div",{style:{padding:"32px"},children:[t(l,{type:"button",mr:"16px",children:"Click Me"}),t(l,{type:"button",variant:"secondary",mr:"16px",children:"Or Me"}),t(l,{type:"button",variant:"tertiary",children:"Or Me"})]})),f=()=>(o({imgSrc:c}),t("div",{style:{padding:"32px"},children:t(u,{children:"Any click (not recommended)"})})),v=()=>(o({imgSrc:c,particleOptions:{distance:800}}),t("div",{style:{padding:"32px"},children:t(u,{children:"Adjust distance"})})),S=()=>(o({imgSrc:c,particleOptions:{size:80}}),t("div",{style:{padding:"32px"},children:t(u,{children:"Adjust size"})})),B=()=>(o({imgSrc:c,numberOfParticles:100}),t("div",{style:{padding:"32px"},children:t(u,{children:"100 particles (beware of performance)"})})),P=()=>(o({selector:"button",imgSrc:c,disableWhen:()=>new Date().getMinutes()%2!==0}),T("div",{style:{padding:"32px"},children:[t(u,{mb:"8px",children:"Will only burst when current minute is even"}),t(l,{variant:"success",children:"Click Me"})]})),k=()=>{const{initialize:a,teardown:n}=o({imgSrc:c});return T("div",{style:{padding:"32px"},children:[t(u,{mb:"8px",children:"100 particles (beware of performance)"}),t(l,{variant:"secondary",onClick:()=>a(),mr:"8px",children:"Start Bursts"}),t(l,{variant:"tertiary",onClick:()=>n(),children:"Stop Bursts"})]})};var C,j,D;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  useParticleBurst({
    imgSrc: imagePath,
    selector: "button"
  });
  return <div style={{
    padding: "32px"
  }}>
      <Button type="button" mr="16px">
        Click Me
      </Button>
      <Button type="button" variant="secondary" mr="16px">
        Or Me
      </Button>
      <Button type="button" variant="tertiary">
        Or Me
      </Button>
    </div>;
}`,...(D=(j=b.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,W,$;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  useParticleBurst({
    imgSrc: imagePath
  });
  return <div style={{
    padding: "32px"
  }}>
      <Text>Any click (not recommended)</Text>
    </div>;
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var L,I,Y;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  useParticleBurst({
    imgSrc: imagePath,
    particleOptions: {
      distance: 800
    }
  });
  return <div style={{
    padding: "32px"
  }}>
      <Text>Adjust distance</Text>
    </div>;
}`,...(Y=(I=v.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var X,_,q;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  useParticleBurst({
    imgSrc: imagePath,
    particleOptions: {
      size: 80
    }
  });
  return <div style={{
    padding: "32px"
  }}>
      <Text>Adjust size</Text>
    </div>;
}`,...(q=(_=S.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var N,R,U;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  useParticleBurst({
    imgSrc: imagePath,
    numberOfParticles: 100
  });
  return <div style={{
    padding: "32px"
  }}>
      <Text>100 particles (beware of performance)</Text>
    </div>;
}`,...(U=(R=B.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var H,F,G;P.parameters={...P.parameters,docs:{...(H=P.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const disableWhen = () => {
    const date = new Date();
    const currentMinutes = date.getMinutes();
    return currentMinutes % 2 !== 0;
  };
  useParticleBurst({
    selector: "button",
    imgSrc: imagePath,
    disableWhen
  });
  return <div style={{
    padding: "32px"
  }}>
      <Text mb="8px">Will only burst when current minute is even</Text>
      <Button variant="success">Click Me</Button>
    </div>;
}`,...(G=(F=P.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const {
    initialize,
    teardown
  } = useParticleBurst({
    imgSrc: imagePath
  });
  const handleInitialize = () => initialize();
  const handleTeardown = () => teardown();
  return <div style={{
    padding: "32px"
  }}>
      <Text mb="8px">100 particles (beware of performance)</Text>
      <Button variant="secondary" onClick={handleInitialize} mr="8px">
        Start Bursts
      </Button>
      <Button variant="tertiary" onClick={handleTeardown}>
        Stop Bursts
      </Button>
    </div>;
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const we=["WithSelector","Document","AdjustDistance","AdjustSize","AdjustNumberOfParticles","DisableUnderCondition","StopAndStart"];export{v as AdjustDistance,B as AdjustNumberOfParticles,S as AdjustSize,P as DisableUnderCondition,f as Document,k as StopAndStart,b as WithSelector,we as __namedExportsOrder,ke as default};
