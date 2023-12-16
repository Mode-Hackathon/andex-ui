import{j as l,F as g,a as e}from"./jsx-runtime-a888423b.js";import{r as m}from"./index-8db94870.js";import{T as t}from"./Toggle-069a6e25.js";import{S as h,M as p}from"./Sun-00919f0c.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-components.browser.esm-05bde203.js";import"./Flex-e70cc8d9.js";import"./index.esm-073a6cf8.js";import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./Svg-f122668c.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";const M={title:"Components/Toggle",component:t},s=()=>{const[o,d]=m.useState(!1),n=()=>d(!o);return l(g,{children:[e("div",{style:{marginBottom:"32px"},children:e(t,{checked:o,onChange:n})}),e("div",{style:{marginBottom:"32px"},children:e(t,{checked:o,onChange:n,scale:"md"})}),e("div",{style:{marginBottom:"32px"},children:e(t,{checked:o,defaultColor:"textDisabled",checkedColor:"textDisabled",onChange:n,scale:"md",startIcon:(c=!1)=>e(h,{color:c?"warning":"backgroundAlt"}),endIcon:(c=!1)=>e(p,{color:c?"secondary":"backgroundAlt"})})}),e("div",{children:e(t,{checked:o,onChange:n,scale:"sm"})})]})};var r,a,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked(!isChecked);
  return <>
      <div style={{
      marginBottom: "32px"
    }}>
        <Toggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{
      marginBottom: "32px"
    }}>
        <Toggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div style={{
      marginBottom: "32px"
    }}>
        <Toggle checked={isChecked} defaultColor="textDisabled" checkedColor="textDisabled" onChange={toggle} scale="md" startIcon={(isActive = false) => <SunIcon color={isActive ? "warning" : "backgroundAlt"} />} endIcon={(isActive = false) => <MoonIcon color={isActive ? "secondary" : "backgroundAlt"} />} />
      </div>
      <div>
        <Toggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>;
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,M as default};
