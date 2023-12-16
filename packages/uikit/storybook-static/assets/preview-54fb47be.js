import{a as E,j as K}from"./jsx-runtime-a888423b.js";import{R as g,r as i}from"./index-8db94870.js";import{a as F,X as V}from"./styled-components.browser.esm-05bde203.js";import{l as a,d}from"./colors-70c6af9e.js";import{v as l}from"./vars.css-8b7ea31e.js";import{b as W,m as Y,a as J}from"./Provider-7e243320.js";import{f as X}from"./ModalContext-901e5072.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                            */import"./iframe-13deebe4.js";import"../sb-preview/runtime.js";import"./extends-98964cd2.js";import"./index-8ce4a492.js";import"./index-b1f965a7.js";import"./lib-98203da3.js";import"./styles-278c0224.js";import"./animationToolkit-f78aec88.js";import"./getPortalRoot-b8664777.js";import"./Flex-e70cc8d9.js";import"./index.esm-073a6cf8.js";import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./IconButton-ad080da8.js";import"./Button-1b68a01e.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./Close-621ed1bc.js";import"./Svg-f122668c.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./ArrowBack-df32b0be.js";import"./index-ba04c57b.js";import"./Overlay-c4441d34.js";const{useParameter:G,addons:U,useEffect:vt,useMemo:Q}=__STORYBOOK_MODULE_PREVIEW_API__;var Z=Object.defineProperty,ee=(e,t)=>{for(var o in t)Z(e,o,{get:t[o],enumerable:!0})},te={};ee(te,{initializeThemeState:()=>q,pluckThemeFromContext:()=>H,useThemeParameters:()=>j});var L="themes",oe=`storybook/${L}}`,re="theme",ae={},ne={REGISTER_THEMES:`${oe}/REGISTER_THEMES`};function H({globals:e}){return e[re]||""}function j(){return G(L,ae)}function q(e,t){U.getChannel().emit(ne.REGISTER_THEMES,{defaultTheme:t,themes:e})}var ie=([e,t])=>t,se=({Provider:e,GlobalStyles:t,defaultTheme:o,themes:b={}})=>{let h=Object.keys(b),n=o||h[0];return q(h,n),(r,f)=>{let{themeOverride:p}=j(),w=H(f),S=Q(()=>{let c=p||w||n,m=Object.entries(b);return m.length===1?ie(m[0]):b[c]},[b,w,p]);return e?g.createElement(e,{theme:S},t&&g.createElement(t,null),r()):g.createElement(g.Fragment,null,t&&g.createElement(t,null),r())}};const de=F`
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.textSubtle}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({theme:e})=>e.colors.input}; 
    border-radius: 10px;
  }

  /* Slider */ 
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }  
`,ce=de,le={background:a.backgroundAlt},me={background:d.backgroundAlt},ue={background:a.backgroundAlt,boxShadow:l.shadows.level1,boxShadowActive:l.shadows.active,boxShadowSuccess:l.shadows.success,boxShadowWarning:l.shadows.warning,cardHeaderBackground:{default:a.gradientCardHeader,blue:a.gradientBlue,bubblegum:a.gradientBubblegum,violet:a.gradientViolet},dropShadow:"drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"},he={background:d.backgroundAlt,boxShadow:l.shadows.level1,boxShadowActive:l.shadows.active,boxShadowSuccess:l.shadows.success,boxShadowWarning:l.shadows.warning,cardHeaderBackground:{default:d.gradientCardHeader,blue:d.gradientBlue,bubblegum:a.gradientBubblegum,violet:d.gradientViolet},dropShadow:"drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"},be={handleBackground:a.backgroundAlt,handleShadow:a.textDisabled},pe={handleBackground:d.backgroundAlt,handleShadow:d.textDisabled},ge={handleBackground:a.backgroundAlt},ke={handleBackground:d.backgroundAlt},fe={handleBackground:a.backgroundAlt},we={handleBackground:d.backgroundAlt},ve={background:a.backgroundAlt},Se={background:d.backgroundAlt},xe={background:a.backgroundAlt},ye={background:d.backgroundAlt},Te={background:a.backgroundAlt,text:a.text,boxShadow:l.shadows.tooltip},Ee={background:d.backgroundAlt,text:d.text,boxShadow:l.shadows.tooltip},D={siteWidth:1200,breakpoints:Object.values(W).map(e=>`${e}px`),mediaQueries:Y,spacing:l.space,shadows:l.shadows,radii:l.radii,zIndices:{ribbon:9,dropdown:10,modal:100}},$e={...D,isDark:!0,alert:me,colors:d,card:he,toggle:we,nav:Se,modal:ye,pancakeToggle:pe,radio:ke,tooltip:Ee},Ae={...D,isDark:!1,alert:le,colors:a,card:ue,toggle:fe,nav:ve,modal:xe,pancakeToggle:be,radio:ge,tooltip:Te},M=["light","dark"],O="(prefers-color-scheme: dark)",Ce=typeof window>"u",P=i.createContext(void 0),_e={setTheme:e=>{},themes:[]},Me=()=>{var e;return(e=i.useContext(P))!==null&&e!==void 0?e:_e},Oe=e=>i.useContext(P)?g.createElement(i.Fragment,null,e.children):g.createElement(Re,e),Pe=["light","dark"],Re=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:o=!0,enableColorScheme:b=!0,storageKey:h="theme",themes:n=Pe,defaultTheme:r=o?"system":"light",attribute:f="data-theme",value:p,children:w,nonce:S})=>{const[c,m]=i.useState(()=>B(h,r)),[$,k]=i.useState(()=>B(h)),y=p?Object.values(p):n,C=i.useCallback(s=>{let u=s;if(!u)return;s==="system"&&o&&(u=I());const _=p?p[u]:u,R=t?Ie():null,A=document.documentElement;if(f==="class"?(A.classList.remove(...y),_&&A.classList.add(_)):_?A.setAttribute(f,_):A.removeAttribute(f),b){const z=M.includes(r)?r:null,N=M.includes(u)?u:z;A.style.colorScheme=N}R==null||R()},[]),v=i.useCallback(s=>{m(s);try{localStorage.setItem(h,s)}catch{}},[e]),x=i.useCallback(s=>{const u=I(s);k(u),c==="system"&&o&&!e&&C("system")},[c,e]);i.useEffect(()=>{const s=window.matchMedia(O);return s.addListener(x),x(s),()=>s.removeListener(x)},[x]),i.useEffect(()=>{const s=u=>{u.key===h&&v(u.newValue||r)};return window.addEventListener("storage",s),()=>window.removeEventListener("storage",s)},[v]),i.useEffect(()=>{C(e??c)},[e,c]);const T=i.useMemo(()=>({theme:c,setTheme:v,forcedTheme:e,resolvedTheme:c==="system"?$:c,themes:o?[...n,"system"]:n,systemTheme:o?$:void 0}),[c,v,e,$,o,n]);return g.createElement(P.Provider,{value:T},g.createElement(Be,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:o,enableColorScheme:b,storageKey:h,themes:n,defaultTheme:r,attribute:f,value:p,children:w,attrs:y,nonce:S}),w)},Be=i.memo(({forcedTheme:e,storageKey:t,attribute:o,enableSystem:b,enableColorScheme:h,defaultTheme:n,value:r,attrs:f,nonce:p})=>{const w=n==="system",S=o==="class"?`var d=document.documentElement,c=d.classList;c.remove(${f.map(k=>`'${k}'`).join(",")});`:`var d=document.documentElement,n='${o}',s='setAttribute';`,c=h?M.includes(n)&&n?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${n}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(k,y=!1,C=!0)=>{const v=r?r[k]:k,x=y?k+"|| ''":`'${v}'`;let T="";return h&&C&&!y&&M.includes(k)&&(T+=`d.style.colorScheme = '${k}';`),o==="class"?T+=y||v?`c.add(${x})`:"null":v&&(T+=`d[s](n,${x})`),T},$=e?`!function(){${S}${m(e)}}()`:b?`!function(){try{${S}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${w})){var t='${O}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${r?`var x=${JSON.stringify(r)};`:""}${m(r?"x[e]":"e",!0)}}${w?"":"else{"+m(n,!1,!1)+"}"}${c}}catch(e){}}()`:`!function(){try{${S}var e=localStorage.getItem('${t}');if(e){${r?`var x=${JSON.stringify(r)};`:""}${m(r?"x[e]":"e",!0)}}else{${m(n,!1,!1)};}${c}}catch(t){}}();`;return g.createElement("script",{nonce:p,dangerouslySetInnerHTML:{__html:$}})},()=>!0),B=(e,t)=>{if(Ce)return;let o;try{o=localStorage.getItem(e)||void 0}catch{}return o||t},Ie=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},I=e=>(e||(e=window.matchMedia(O)),e.matches?"dark":"light"),Le=e=>E(J,{children:K(X,{children:[E(ce,{}),E(e,{})]})}),He=e=>{const{setTheme:t}=Me();return i.useEffect(()=>{t(e.theme.name)},[e.theme.name]),E(V,{...e,children:e.children})},je=e=>E(Oe,{children:E(He,{...e})}),St=[Le,se({themes:{light:{name:"light",...Ae},dark:{name:"dark",...$e}},defaultTheme:"light",Provider:je})];export{St as decorators};
