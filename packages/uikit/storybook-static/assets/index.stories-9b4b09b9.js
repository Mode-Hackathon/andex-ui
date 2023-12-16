import{a as t}from"./jsx-runtime-a888423b.js";import{s}from"./styled-components.browser.esm-05bde203.js";import{G as l}from"./Grid-6e2f9414.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-073a6cf8.js";import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";const g=s(l)`
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  ${({theme:r})=>r.mediaQueries.sm} {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }
  ${({theme:r})=>r.mediaQueries.md} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
  ${({theme:r})=>r.mediaQueries.lg} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
`,u=g,y=s(u)`
  & > div {
    grid-column: span 6;
    ${({theme:r})=>r.mediaQueries.sm} {
      grid-column: span 4;
    }
  }
`,f=y,A={title:"Components/Layouts",argTypes:{}},c=s.div`
  width: 100%;
  background: #1fc7d4;
  height: 300px;
`,e=()=>t(u,{children:[...Array(24)].map(r=>t(c,{},r))}),a=()=>t(f,{children:[...Array(10)].map(r=>t(c,{},r))});var o,p,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <BaseLayout>
      {[...Array(24)].map(value => <Stub key={value} />)}
    </BaseLayout>;
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <CardsLayout>
      {[...Array(10)].map(value => <Stub key={value} />)}
    </CardsLayout>;
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const G=["Base","Cards"];export{e as Base,a as Cards,G as __namedExportsOrder,A as default};
