import{j as d,a as u}from"./jsx-runtime-a888423b.js";import{r as n}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const C=t=>{n.useEffect(()=>{const r=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"];let e=0;const s=w=>{const{key:p}=w;if(p!==r[e]){e=0;return}e+=1,r.length===e&&(e=0,t())};return document.addEventListener("keyup",s),()=>document.removeEventListener("keyup",s)},[t])},A=C,E={title:"Hooks/useKonamiCheatCode",argTypes:{}},o=()=>{const[t,r]=n.useState(!1),e=n.useCallback(()=>r(!0),[r]);return A(e),d("div",{style:{padding:"32px"},children:[u("div",{children:"Enter: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight"}),d("pre",{children:["Code Entered: ",JSON.stringify(t)]})]})};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [correctCodeEntered, setCorrectCodeEntered] = useState(false);
  const correctCodeHandler = useCallback(() => setCorrectCodeEntered(true), [setCorrectCodeEntered]);
  useKonamiCheatCode(correctCodeHandler);
  return <div style={{
    padding: "32px"
  }}>
      <div>Enter: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight</div>
      <pre>Code Entered: {JSON.stringify(correctCodeEntered)}</pre>
    </div>;
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,E as default};
