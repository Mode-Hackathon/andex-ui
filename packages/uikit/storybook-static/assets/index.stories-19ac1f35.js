import{a as e,j as r}from"./jsx-runtime-a888423b.js";import{B as s}from"./Box-f877d5fa.js";import{F as p}from"./Flex-e70cc8d9.js";import{G as y}from"./Grid-6e2f9414.js";import{T as C}from"./Text-f6b55a62.js";import{L as f}from"./Link-a711c4b9.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./styled-components.browser.esm-05bde203.js";import"./motion-minimal-b8fc2ac8.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./externalLinkProps-0f3801f5.js";const A={title:"Components/Primitives",component:s,argTypes:{}},n=()=>e("div",{children:r(s,{as:"p",children:["Contains background, border, layout, position, and space from"," ",e(f,{href:"https://styled-system.com/api",target:"_blank",children:"Styled System‘s API"})]})}),t=()=>r("div",{children:[e(C,{children:"Based on the Box component. You can apply any flexbox properties on the Flex component."}),e(f,{href:"https://styled-system.com/api#flexbox",target:"_blank",children:"List of applicable props"}),r(p,{justifyContent:"space-between",mt:"40px",children:[e("span",{children:"Left"}),e("span",{children:"right"})]}),e(p,{justifyContent:"center",mt:"8px",children:e("span",{children:"center"})})]}),o=()=>r(y,{justifyItems:"center",alignContent:"center",gridTemplateColumns:"1fr 1fr",gridColumnGap:"16px",style:{backgroundColor:"#7645D9"},children:[e(s,{style:{backgroundColor:"#1fc7d4",width:"300px",height:"300px"}}),e(s,{style:{backgroundColor:"#1fc7d4",width:"300px",height:"300px"}})]});var a,i,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{" "}
        <Link href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </Link>
      </BoxComponent>
    </div>;
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <div>
      <Text>Based on the Box component. You can apply any flexbox properties on the Flex component.</Text>
      <Link href="https://styled-system.com/api#flexbox" target="_blank">
        List of applicable props
      </Link>
      <FlexComponent justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>;
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var x,u,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <GridComponent justifyItems="center" alignContent="center" gridTemplateColumns="1fr 1fr" gridColumnGap="16px" style={{
    backgroundColor: "#7645D9"
  }}>
      <BoxComponent style={{
      backgroundColor: "#1fc7d4",
      width: "300px",
      height: "300px"
    }} />
      <BoxComponent style={{
      backgroundColor: "#1fc7d4",
      width: "300px",
      height: "300px"
    }} />
    </GridComponent>;
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const D=["Box","Flex","Grid"];export{n as Box,t as Flex,o as Grid,D as __namedExportsOrder,A as default};
