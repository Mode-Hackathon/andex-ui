import{j as h,F as f,a as t}from"./jsx-runtime-a888423b.js";import{r as w}from"./index-8db94870.js";import{s as x}from"./styled-components.browser.esm-05bde203.js";import{N as n}from"./NotificationDot-0a79bff8.js";import{B as s}from"./Button-1b68a01e.js";import{B as D,a as e}from"./ButtonMenuItem-1387f099.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./index.esm-073a6cf8.js";import"./vars.css-8b7ea31e.js";/* empty css                            */const y={title:"Components/NotificationDot",component:n,argTypes:{}},i=()=>h(f,{children:[t(n,{show:!0,children:t(s,{children:"Hi"})}),t(n,{show:!0,color:"warning",children:t(s,{children:"Hi"})}),t(n,{show:!0,color:"success",children:t(s,{children:"Hi"})})]}),I=x.div`
  & > * + * {
    margin-left: 16px;
  }
`,r=()=>{const[o,B]=w.useState(0);return t(I,{children:h(D,{activeIndex:o,onItemClick:p=>B(p),children:[t(n,{show:o===0,children:t(e,{children:"Button 1"})}),t(n,{show:o===1,children:t(e,{children:"Button 2"})}),t(n,{show:o===2,children:t(e,{children:"Button 3"})}),t(n,{show:o===3,children:t(e,{children:"Button 4"})})]})})};var c,a,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <NotificationDot show>
        <Button>Hi</Button>
      </NotificationDot>
      <NotificationDot show color="warning">
        <Button>Hi</Button>
      </NotificationDot>
      <NotificationDot show color="success">
        <Button>Hi</Button>
      </NotificationDot>
    </>;
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const handleClick = newIndex => setIndex(newIndex);
  return <Row>
      <ButtonMenu activeIndex={index} onItemClick={handleClick}>
        <NotificationDot show={index === 0}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 1}>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 2}>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 3}>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Row>;
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const O=["Default","MenuButtons"];export{i as Default,r as MenuButtons,O as __namedExportsOrder,y as default};
