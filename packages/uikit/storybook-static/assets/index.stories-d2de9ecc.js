import{a as e,j as l}from"./jsx-runtime-a888423b.js";import{C as m}from"./Card-403f447b.js";import{s as a}from"./styled-components.browser.esm-05bde203.js";import{t as c,s as h}from"./index.esm-073a6cf8.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./animationToolkit-f78aec88.js";import"./Box-f877d5fa.js";import"./motion-minimal-b8fc2ac8.js";const r=a.td`
  border-bottom: 1px solid ${({theme:t})=>t.colors.cardBorder};
  color: ${({theme:t})=>t.colors.text};
  padding: 16px;
  vertical-align: middle;

  ${c}
`,d=a(r).attrs({as:"th"})`
  color: ${({theme:t})=>t.colors.secondary};
  font-size: 12px;
  text-transform: uppercase;

  ${c}
`;try{r.displayName="Td",r.__docgenInfo={description:"",displayName:"Td",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="Th",d.__docgenInfo={description:"",displayName:"Th",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=a.table`
  max-width: 100%;
  width: 100%;

  tbody tr:last-child {
    ${r} {
      border-bottom: 0;
    }
  }

  ${h}
`,p=u,$={title:"Components/Table",component:p,argTypes:{}},n=()=>e("div",{style:{width:"640px"},children:e(m,{children:l(p,{children:[e("thead",{children:l("tr",{children:[e(d,{textAlign:"left",children:"Column 1"}),e(d,{children:"Column 2"}),e(d,{children:"Column 3"})]})}),l("tbody",{children:[l("tr",{children:[e(r,{children:"Cell 1-1"}),e(r,{children:"Cell 1-2"}),e(r,{children:"Cell 1-3"})]}),l("tr",{children:[e(r,{children:"Cell 2-1"}),e(r,{children:"Cell 2-2"}),e(r,{children:"Cell 2-3"})]})]})]})})});var o,i,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <div style={{
    width: "640px"
  }}>
      <Card>
        <Table>
          <thead>
            <tr>
              <Th textAlign="left">Column 1</Th>
              <Th>Column 2</Th>
              <Th>Column 3</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Cell 1-1</Td>
              <Td>Cell 1-2</Td>
              <Td>Cell 1-3</Td>
            </tr>
            <tr>
              <Td>Cell 2-1</Td>
              <Td>Cell 2-2</Td>
              <Td>Cell 2-3</Td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>;
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,$ as default};
