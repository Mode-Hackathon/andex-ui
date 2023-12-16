import{j as u,a as m}from"./jsx-runtime-a888423b.js";import{s as f}from"./index.esm-8c5d6e7e.js";import{r as s}from"./index-8db94870.js";import{t as h}from"./throttle-19a2d18a.js";import{s as l,n as g}from"./styled-components.browser.esm-05bde203.js";import{u as v}from"./useMatchBreakpoints-59a9bcd0.js";const x=({position:t})=>t==="top-right"?"100%":"50%",w=({position:t})=>t==="top"||t==="top-right"?"100%":"auto",r=l.div.withConfig({shouldForwardProp:f})`
  width: max-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  left: ${x};
  bottom: ${w};
  background-color: ${({theme:t})=>t.nav.background};
  box-shadow: ${({theme:t})=>t.shadows.level1};
  padding: 16px;
  max-height: 0px;
  overflow: hidden;
  z-index: ${({theme:t})=>t.zIndices.dropdown};
  border-radius: ${({theme:t})=>t.radii.small};
  opacity: 0;
  transition: max-height 0s 0.3s, opacity 0.3s ease-in-out;
  will-change: opacity;
  pointer-events: none;
`,y=l.div`
  position: relative;
  ${({$scrolling:t})=>!t&&g`
      &:hover ${r}, &:focus-within ${r} {
        opacity: 1;
        max-height: 400px;
        overflow-y: auto;
        transition: max-height 0s 0s, opacity 0.3s ease-in-out;
        pointer-events: auto;
      }
    `}
`,o=({target:t,position:c="bottom",children:d})=>{const[p,n]=s.useState(!1),{isMobile:a}=v();return s.useEffect(()=>{if(a){let e;const i=h(()=>{e&&clearTimeout(e),n(!0),e=setTimeout(()=>{n(!1)},300)},200);return document.addEventListener("scroll",i),()=>{document.removeEventListener("scroll",i)}}},[a]),u(y,{$scrolling:p,children:[t,m(r,{position:c,children:d})]})};o.defaultProps={position:"bottom"};const j=o;try{o.displayName="Dropdown",o.__docgenInfo={description:"",displayName:"Dropdown",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},position:{defaultValue:{value:"bottom"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"top-right"'}]}}}}}catch{}export{j as D};
