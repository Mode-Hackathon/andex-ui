import{j as r,a as n,F as A}from"./jsx-runtime-a888423b.js";import{c as S}from"./capitalize-ce94671c.js";import{r as F}from"./index-8db94870.js";import{B as j,L as V}from"./react-router-dom-dc9a1bda.js";import{s as z}from"./styled-components.browser.esm-05bde203.js";import{B as o}from"./Box-f877d5fa.js";import{F as q}from"./Flex-e70cc8d9.js";import{I as i}from"./IconButton-ad080da8.js";import{B as a,v as D,s as O}from"./Button-1b68a01e.js";import{C as $,A as N,a as h}from"./ChevronUp-5aafa06e.js";import{C as U}from"./ChevronDown-63e00ded.js";import{L as d}from"./Logo-5fd66d13.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./inheritsLoose-c82a83d4.js";import"./index-1fc0ca9a.js";import"./extends-98964cd2.js";import"./tiny-invariant-dd7d57d2.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./motion-minimal-b8fc2ac8.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./Svg-f122668c.js";import"./getThemeValue-6fc24f62.js";const x=({onClick:e,expanded:t,children:s,...b})=>r(i,{"aria-label":"Hide or show expandable content",onClick:e,...b,children:[s,t?n($,{color:"invertedContrast"}):n(U,{color:"invertedContrast"})]});x.defaultProps={expanded:!1};const B=({onClick:e,expanded:t,children:s,...b})=>n(a,{paddingRight:0,variant:"text","aria-label":"Hide or show expandable content",onClick:e,endIcon:t?n($,{color:"primary"}):n(U,{color:"primary"}),...b,children:s});B.defaultProps={expanded:!1};try{x.displayName="ExpandableButton",x.__docgenInfo={description:"",displayName:"ExpandableButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}try{B.displayName="ExpandableLabel",B.__docgenInfo={description:"",displayName:"ExpandableLabel",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}const hn={title:"Components/Button",component:a,argTypes:{}},c=z(q)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`,p=()=>r(A,{children:[n(o,{mb:"32px",children:n("button",{type:"button",children:"Unstyled Button"})}),n(o,{mb:"32px",children:Object.values(D).map(e=>n(o,{mb:"32px",children:Object.values(O).map(t=>n(a,{variant:e,scale:t,mr:"8px",children:`${S(e)} ${t.toUpperCase()}`},t))},e))}),r(o,{children:[n(a,{mr:"8px",disabled:!0,children:"Disabled"}),n(a,{variant:"secondary",mr:"8px",disabled:!0,children:"Disabled"}),n(a,{disabled:!0,p:"0 45px",decorator:{text:"Soon"},children:"Locked"})]})]}),l=()=>r(A,{children:[n(o,{mb:"32px",children:Object.values(D).map(e=>n(o,{mb:"32px",children:Object.values(O).map(t=>n(a,{as:"a",href:"https://andex.vercel.app",variant:e,scale:t,external:!0,mr:"8px",children:`${S(e)} anchor ${t.toUpperCase()}`},t))},e))}),r(o,{children:[n(a,{as:"a",href:"https://andex.vercel.app",mr:"8px",external:!0,disabled:!0,children:"Disabled"}),n(a,{as:"a",href:"https://andex.vercel.app",variant:"secondary",external:!0,disabled:!0,children:"Disabled"})]})]}),u=()=>n(o,{width:"640px",children:r(j,{children:[n(c,{children:n(a,{as:V,to:"/router-link",variant:"secondary",children:"As an React Router link"})}),n(c,{children:n(a,{width:"100%",children:"Full size"})}),r(c,{children:[n(a,{isLoading:!0,endIcon:n(N,{spin:!0,color:"currentColor"}),children:"Approving"}),n(a,{isLoading:!0,variant:"success",children:"Approving"})]}),r(c,{children:[n(a,{startIcon:n(d,{}),children:"Start Icon"}),n(a,{endIcon:n(d,{}),children:"End Icon"}),n(a,{startIcon:n(d,{}),endIcon:n(d,{}),children:"Start & End Icon"})]}),r(c,{children:[n(i,{children:n(d,{})}),n(i,{variant:"secondary",children:n(h,{})})]}),r(c,{children:[n(i,{scale:"sm",variant:"danger",children:n(d,{})}),n(i,{scale:"sm",variant:"success",children:n(h,{color:"currentColor"})})]})]})}),m=()=>{const[e,t]=F.useState(!1);return n(o,{width:"640px",children:n(j,{children:r(c,{children:[n(x,{expanded:e,onClick:()=>t(s=>!s)}),n(B,{expanded:e,onClick:()=>t(s=>!s),children:"ExpandableLabel"})]})})})};var v,f,I;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <>
      <Box mb="32px">
        <button type="button">Unstyled Button</button>
      </Box>
      <Box mb="32px">
        {Object.values(variants).map(variant => {
        return <Box key={variant} mb="32px">
              {Object.values(scales).map(scale => {
            return <Button key={scale} variant={variant} scale={scale} mr="8px">
                    {\`\${capitalize(variant)} \${scale.toUpperCase()}\`}
                  </Button>;
          })}
            </Box>;
      })}
      </Box>
      <Box>
        <Button mr="8px" disabled>
          Disabled
        </Button>
        <Button variant="secondary" mr="8px" disabled>
          Disabled
        </Button>
        <Button disabled p="0 45px" decorator={{
        text: "Soon"
      }}>
          Locked
        </Button>
      </Box>
    </>;
}`,...(I=(f=p.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var w,g,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <>
      <Box mb="32px">
        {Object.values(variants).map(variant => {
        return <Box key={variant} mb="32px">
              {Object.values(scales).map(scale => {
            return <Button as="a" href="https://andex.vercel.app" key={scale} variant={variant} scale={scale} external mr="8px">
                    {\`\${capitalize(variant)} anchor \${scale.toUpperCase()}\`}
                  </Button>;
          })}
            </Box>;
      })}
      </Box>
      <Box>
        <Button as="a" href="https://andex.vercel.app" mr="8px" external disabled>
          Disabled
        </Button>
        <Button as="a" href="https://andex.vercel.app" variant="secondary" external disabled>
          Disabled
        </Button>
      </Box>
    </>;
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var R,k,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Box width="640px">
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant="secondary">
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%">Full size</Button>
        </Row>
        <Row>
          <Button isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
            Approving
          </Button>
          <Button isLoading variant="success">
            Approving
          </Button>
        </Row>
        <Row>
          <Button startIcon={<LogoIcon />}>Start Icon</Button>
          <Button endIcon={<LogoIcon />}>End Icon</Button>
          <Button startIcon={<LogoIcon />} endIcon={<LogoIcon />}>
            Start & End Icon
          </Button>
        </Row>
        <Row>
          <IconButton>
            <LogoIcon />
          </IconButton>
          <IconButton variant="secondary">
            <AddIcon />
          </IconButton>
        </Row>
        <Row>
          <IconButton scale="sm" variant="danger">
            <LogoIcon />
          </IconButton>
          <IconButton scale="sm" variant="success">
            <AddIcon color="currentColor" />
          </IconButton>
        </Row>
      </BrowserRouter>
    </Box>;
}`,...(L=(k=u.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var C,E,_;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [expanded, setExpanded] = useState(false);
  return <Box width="640px">
      <BrowserRouter>
        <Row>
          <ExpandableButton expanded={expanded} onClick={() => setExpanded(prev => !prev)} />
          <ExpandableLabel expanded={expanded} onClick={() => setExpanded(prev => !prev)}>
            ExpandableLabel
          </ExpandableLabel>
        </Row>
      </BrowserRouter>
    </Box>;
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const vn=["Default","Anchors","Variants","Expandable"];export{l as Anchors,p as Default,m as Expandable,u as Variants,vn as __namedExportsOrder,hn as default};
