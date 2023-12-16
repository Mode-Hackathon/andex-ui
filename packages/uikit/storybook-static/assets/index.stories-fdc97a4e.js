import{j as n,a as e}from"./jsx-runtime-a888423b.js";import{T as t}from"./Text-f6b55a62.js";import{s as T}from"./styled-components.browser.esm-05bde203.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";const u=T(t)`
  text-decoration: underline dotted;
  text-decoration-color: ${({theme:o,decorationColor:s})=>{var i;return`${o!=null&&o.colors&&s?o.colors[s]:(i=o==null?void 0:o.colors)==null?void 0:i.textSubtle}`}};
  text-underline-offset: 0.1em;
`,f=u,j={title:"Components/Text",component:t,argTypes:{bold:{name:"bold",table:{type:{summary:"bool",detail:"Bold the text"},defaultValue:{summary:!1}},control:{type:null}},fontSize:{name:"fontSize",table:{type:{summary:"string",detail:"Fontsize in px or em"},defaultValue:{summary:"16px"}},control:{type:null}},color:{name:"color",table:{type:{summary:"string",detail:"Color from the theme, or CSS color"},defaultValue:{summary:"theme.colors.text"}},control:{type:null}}}},r=()=>n("div",{children:[e(t,{children:"Default"}),e(t,{bold:!0,children:"Bold text"}),e(t,{small:!0,children:"Small text"}),e(t,{fontSize:"24px",children:"Custom fontsize"}),e(t,{color:"red",children:"Custom color"}),e(t,{color:"primary",children:"Custom color from theme"}),e(t,{color:"secondary",textTransform:"uppercase",children:"with text transform"}),e(t,{textAlign:"center",children:"center"}),n(t,{display:"inline",color:"textSubtle",textTransform:"uppercase",children:["Example of"," "]}),n(t,{display:"inline",bold:!0,textTransform:"uppercase",children:["inline"," "]}),e(t,{display:"inline",color:"textSubtle",textTransform:"uppercase",children:"Text"}),e(t,{ellipsis:!0,width:"250px",children:"Ellipsis: a long text with an ellipsis just for the example"})]}),l=()=>n("div",{children:[e(t,{children:"Use TooltipText for text that has tooltip, it accepts the same props as normal Text component"}),e(f,{children:"Example"})]});var a,p,x;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div>
      <Text>Default</Text>
      <Text bold>Bold text</Text>
      <Text small>Small text</Text>
      <Text fontSize="24px">Custom fontsize</Text>
      <Text color="red">Custom color</Text>
      <Text color="primary">Custom color from theme</Text>
      <Text color="secondary" textTransform="uppercase">
        with text transform
      </Text>
      <Text textAlign="center">center</Text>
      <Text display="inline" color="textSubtle" textTransform="uppercase">
        Example of{" "}
      </Text>
      <Text display="inline" bold textTransform="uppercase">
        inline{" "}
      </Text>
      <Text display="inline" color="textSubtle" textTransform="uppercase">
        Text
      </Text>
      <Text ellipsis width="250px">
        Ellipsis: a long text with an ellipsis just for the example
      </Text>
    </div>;
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var c,m,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <div>
      <Text>Use TooltipText for text that has tooltip, it accepts the same props as normal Text component</Text>
      <TooltipText>Example</TooltipText>
    </div>;
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const V=["Default","TooltipTextVariant"];export{r as Default,l as TooltipTextVariant,V as __namedExportsOrder,j as default};
