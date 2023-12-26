import{j as e,F as g,a as n}from"./jsx-runtime-a888423b.js";import{r as B}from"./index-8db94870.js";import{s as W}from"./styled-components.browser.esm-05bde203.js";import{B as F}from"./Box-f877d5fa.js";import{B as u,a as t}from"./ButtonMenuItem-1387f099.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./motion-minimal-b8fc2ac8.js";import"./Button-1b68a01e.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */const o=W.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`,P={title:"Components/Button Menu",component:u,argTypes:{}},m=()=>{const[i,d]=B.useState(0),[c,s]=B.useState(1),l=a=>d(a),r=a=>s(a);return e(g,{children:[n(o,{children:e(u,{activeIndex:i,onItemClick:l,children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]})}),n(o,{children:e(u,{activeIndex:c,onItemClick:r,scale:"sm",ml:"24px",children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]})}),n(o,{children:e(u,{activeIndex:i,onItemClick:l,variant:"subtle",children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]})}),n(o,{children:e(u,{activeIndex:c,onItemClick:r,scale:"sm",variant:"subtle",ml:"24px",children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]})})]})},I=()=>n(o,{children:e(u,{activeIndex:0,children:[n(t,{as:"a",href:"https://andex.vercel.app",children:"Link 1"}),n(t,{as:"a",href:"https://andex.vercel.app",children:"Link 2"}),n(t,{as:"a",href:"https://andex.vercel.app",children:"Link 3"})]})}),h=()=>{const[i,d]=B.useState(0),[c,s]=B.useState(1),l=a=>d(a),r=a=>s(a);return e(g,{children:[n(o,{children:e(u,{activeIndex:i,onItemClick:l,children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]})}),n(o,{children:e(u,{disabled:!0,activeIndex:i,onItemClick:l,children:[n(t,{children:"Disabled 1"}),n(t,{children:"Disabled 2"}),n(t,{children:"Disabled 3"}),n(t,{children:"Disabled 4"})]})}),n(o,{children:e(u,{activeIndex:c,onItemClick:r,scale:"sm",variant:"subtle",ml:"24px",children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]})}),n(o,{children:e(u,{disabled:!0,activeIndex:c,onItemClick:r,scale:"sm",variant:"subtle",ml:"24px",children:[n(t,{children:"Disabled 1"}),n(t,{children:"Disabled 2"}),n(t,{children:"Disabled 3"}),n(t,{children:"Disabled 4"})]})})]})},M=()=>{const[i,d]=B.useState(0);return e(F,{width:"840px",children:[e(u,{activeIndex:i,onItemClick:s=>d(s),fullWidth:!0,mb:"24px",children:[n(t,{children:"Button 1"}),n(t,{children:"Button 2"}),n(t,{children:"Button 3"}),n(t,{children:"Button 4"})]}),e(u,{activeIndex:i,fullWidth:!0,scale:"sm",variant:"subtle",children:[n(t,{as:"a",href:"https://andex.vercel.app",children:"Link 1"}),n(t,{as:"a",href:"https://andex.vercel.app",children:"Link 2"}),n(t,{as:"a",href:"https://andex.vercel.app",children:"Link 3"})]})]})};var x,p,k;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const handleClick = newIndex => setIndex(newIndex);
  const handleClick1 = newIndex => setIndex1(newIndex);
  return <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" ml="24px">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="subtle">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>;
}`,...(k=(p=m.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var w,C,b;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Row>
      <ButtonMenu activeIndex={0}>
        <ButtonMenuItem as="a" href="https://andex.vercel.app">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://andex.vercel.app">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://andex.vercel.app">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Row>;
}`,...(b=(C=I.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,v,D;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const handleClick = newIndex => setIndex(newIndex);
  const handleClick1 = newIndex => setIndex1(newIndex);
  return <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled 1</ButtonMenuItem>
          <ButtonMenuItem>Disabled 2</ButtonMenuItem>
          <ButtonMenuItem>Disabled 3</ButtonMenuItem>
          <ButtonMenuItem>Disabled 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonMenuItem>Disabled 1</ButtonMenuItem>
          <ButtonMenuItem>Disabled 2</ButtonMenuItem>
          <ButtonMenuItem>Disabled 3</ButtonMenuItem>
          <ButtonMenuItem>Disabled 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>;
}`,...(D=(v=h.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var R,L,S;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const handleClick = (newIndex: number) => setIndex(newIndex);
  return <Box width="840px">
      <ButtonMenu activeIndex={index} onItemClick={handleClick} fullWidth mb="24px">
        <ButtonMenuItem>Button 1</ButtonMenuItem>
        <ButtonMenuItem>Button 2</ButtonMenuItem>
        <ButtonMenuItem>Button 3</ButtonMenuItem>
        <ButtonMenuItem>Button 4</ButtonMenuItem>
      </ButtonMenu>
      <ButtonMenu activeIndex={index} fullWidth scale="sm" variant="subtle">
        <ButtonMenuItem as="a" href="https://andex.vercel.app">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://andex.vercel.app">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://andex.vercel.app">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Box>;
}`,...(S=(L=M.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Q=["Default","AsLinks","DisabledMenu","FullWidthMenu"];export{I as AsLinks,m as Default,h as DisabledMenu,M as FullWidthMenu,Q as __namedExportsOrder,P as default};
