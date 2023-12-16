import{j as l,F as p,a as e}from"./jsx-runtime-a888423b.js";import{s as u}from"./styled-components.browser.esm-05bde203.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const s={SM:"sm",MD:"md"},a=({scale:o})=>{switch(o){case s.SM:return"24px";case s.MD:default:return"32px"}},i=u.input.attrs({type:"checkbox"})`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${a};
  width: ${a};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: ${({theme:o})=>o.isDark?`solid 1px ${o.colors.disabled}`:"0"};
  border-radius: 8px;
  background-color: ${({theme:o})=>o.colors.cardBorder};
  box-shadow: ${({theme:o})=>o.shadows.inset};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({theme:o})=>o.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({theme:o})=>o.shadows.focus};
  }

  &:checked {
    border: 0;
    background-color: ${({theme:o})=>o.colors.success};
    &:after {
      border-color: white;
    }
  }

  &:disabled {
    border: 0;
    cursor: default;
    opacity: 0.6;
  }
`;i.defaultProps={scale:s.MD};const t=i,f={title:"Components/Checkbox",component:t,argTypes:{}},r=()=>l(p,{children:[e("div",{style:{marginBottom:"32px"},children:e(t,{})}),e("div",{children:e(t,{scale:"sm"})})]});var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <>
      <div style={{
      marginBottom: "32px"
    }}>
        <Checkbox />
      </div>
      <div>
        <Checkbox scale="sm" />
      </div>
    </>;
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["Default"];export{r as Default,g as __namedExportsOrder,f as default};
