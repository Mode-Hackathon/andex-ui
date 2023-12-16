import{j as o,a as e,F as _}from"./jsx-runtime-a888423b.js";import{s as m}from"./styled-components.browser.esm-05bde203.js";import{S as c,a as i}from"./StarFill-d0e10303.js";import{H as E}from"./Heading-def4fbf7.js";import{I as a,s as r}from"./Input-771d9dff.js";import{r as $}from"./index-8db94870.js";import{B as w}from"./Box-f877d5fa.js";import"./Svg-f122668c.js";import"./index.esm-073a6cf8.js";import"./_commonjsHelpers-042e6b4d.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./Text-f6b55a62.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";const x=(t,n)=>{if(!n)return"16px";switch(t){case r.SM:return"32px";case r.LG:return"56px";case r.MD:default:return"48px"}},D=m(w)`
  ${a} {
    padding-left: ${({hasStartIcon:t,scale:n})=>x(n,t)};
    padding-right: ${({hasEndIcon:t,scale:n})=>x(n,t)};
  }
`,I=m.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;

  ${({isEndIcon:t,scale:n})=>t?`
    right: ${n===r.SM?"8px":"16px"};
  `:`
    left: ${n===r.SM?"8px":"16px"};
  `}
`,d=({scale:t=r.MD,startIcon:n,endIcon:l,children:G,...b})=>o(D,{scale:t,width:"100%",position:"relative",hasStartIcon:!!n,hasEndIcon:!!l,...b,children:[n&&e(I,{scale:t,children:n}),$.cloneElement(G,{scale:t}),l&&e(I,{scale:t,isEndIcon:!0,children:l})]}),u=d;try{d.displayName="InputGroup",d.__docgenInfo={description:"",displayName:"InputGroup",props:{scale:{defaultValue:{value:"md"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const F=m.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`,T={title:"Components/Input",component:a,argTypes:{}},p=()=>e("div",{children:Object.keys(r).map(t=>o(_,{children:[e(E,{mb:"16px",children:t}),o(F,{children:[e(a,{type:"text",scale:r[t],value:"Value"}),e(a,{type:"text",scale:r[t],placeholder:"Placeholder..."}),e(a,{type:"text",scale:r[t],value:"Disabled",disabled:!0}),e(a,{type:"text",scale:r[t],value:"Success",isSuccess:!0}),e(a,{type:"text",scale:r[t],value:"Warning",isWarning:!0})]})]}))}),s=()=>o(w,{width:"300px",children:[e(u,{startIcon:e(c,{width:"18px"}),endIcon:e(i,{width:"18px"}),mb:"24px",scale:"sm",children:e(a,{type:"text",value:"Input Group"})}),e(u,{startIcon:e(c,{width:"24px"}),endIcon:e(i,{width:"24px"}),mb:"24px",scale:"md",children:e(a,{type:"text",value:"Input Group"})}),e(u,{startIcon:e(c,{width:"32px"}),endIcon:e(i,{width:"32px"}),mb:"24px",scale:"lg",children:e(a,{type:"text",value:"Input Group"})})]});var h,y,g;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <div>
      {Object.keys(scales).map(key => <>
          <Heading mb="16px">{key}</Heading>
          <Row>
            <Input type="text" scale={scales[key]} value="Value" />
            <Input type="text" scale={scales[key]} placeholder="Placeholder..." />
            <Input type="text" scale={scales[key]} value="Disabled" disabled />
            <Input type="text" scale={scales[key]} value="Success" isSuccess />
            <Input type="text" scale={scales[key]} value="Warning" isWarning />
          </Row>
        </>)}
    </div>;
}`,...(g=(y=p.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,f,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Box width="300px">
      <InputGroup startIcon={<Search width="18px" />} endIcon={<StarFill width="18px" />} mb="24px" scale="sm">
        <Input type="text" value="Input Group" />
      </InputGroup>
      <InputGroup startIcon={<Search width="24px" />} endIcon={<StarFill width="24px" />} mb="24px" scale="md">
        <Input type="text" value="Input Group" />
      </InputGroup>
      <InputGroup startIcon={<Search width="32px" />} endIcon={<StarFill width="32px" />} mb="24px" scale="lg">
        <Input type="text" value="Input Group" />
      </InputGroup>
    </Box>;
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const z=["Default","Icons"];export{p as Default,s as Icons,z as __namedExportsOrder,T as default};
