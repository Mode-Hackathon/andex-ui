import{a as n,j as t,F as S}from"./jsx-runtime-a888423b.js";import{r as l}from"./index-8db94870.js";import{s as p}from"./styled-components.browser.esm-05bde203.js";import{F as R}from"./Flex-e70cc8d9.js";import{c as B}from"./index.esm-073a6cf8.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";const V=p(R)`
  border-bottom: ${({isShowBorderBottom:e,theme:r})=>e?`2px solid ${r.colors.input}`:"none"};
  overflow-x: auto;
  padding: ${({fullWidth:e})=>e?0:"16px 16px 0 16px"};

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`,j=p(R)`
  justify-content: space-between;

  & > button + button {
    margin-left: ${({gap:e})=>e||"4px"};
  }

  & > button {
    flex-grow: ${({fullWidth:e})=>e?1:0};
  }

  ${({theme:e})=>e.mediaQueries.md} {
    flex-grow: ${({fullWidth:e})=>e?1:0};
  }

  flex-grow: ${({fullWidth:e})=>e?1:0};
`,h=({activeIndex:e=0,onItemClick:r,children:b,fullWidth:i,gap:x,isColorInverse:s=!1,isShowBorderBottom:f=!0})=>n(V,{p:["0 4px","0 16px"],fullWidth:i,isShowBorderBottom:f,children:n(j,{fullWidth:i,gap:x,children:l.Children.map(b,(g,T)=>{const o=e===T,M=o?"backgroundAlt":"textSubtle",_=o?"textSubtle":"backgroundAlt",F=o?"textSubtle":"input",q=o?"input":"textSubtle";return l.cloneElement(g,{isActive:o,onClick:r?()=>r(T):void 0,color:s?_:M,backgroundColor:s?q:F})})})}),m=h;try{h.displayName="TabMenu",h.__docgenInfo={description:"",displayName:"TabMenu",props:{activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!1,type:{name:"((index: number) => void)"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},isColorInverse:{defaultValue:{value:"false"},description:"",name:"isColorInverse",required:!1,type:{name:"boolean"}},isShowBorderBottom:{defaultValue:{value:"true"},description:"",name:"isShowBorderBottom",required:!1,type:{name:"boolean"}}}}}catch{}const E=({scale:e})=>e==="md"?"16px 16px 0 0":"24px 24px 0 0",D=({scale:e})=>e==="md"?"8px":"16px",$=p.button`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: ${D};
  border-radius: ${E};
  font-size: 16px;
  font-weight: 600;

  ${({theme:e})=>e.mediaQueries.md} {
    flex-grow: 0;
  }

  ${B}
`;$.defaultProps={scale:"md"};const a=$,H={title:"Components/Tab Menu",component:m,argTypes:{}},d=p.div`
  margin-bottom: 32px;
`,c=()=>{const[e,r]=l.useState(0),[b,i]=l.useState(0),[x,s]=l.useState(0);return t(S,{children:[n(d,{children:t(m,{activeIndex:e,onItemClick:o=>r(o),children:[n(a,{children:"Total"}),n(a,{children:"Cakers"}),n(a,{children:"Flippers"}),n(a,{children:"Storm"})]})}),n(d,{children:t(m,{activeIndex:b,onItemClick:o=>i(o),children:[n(a,{children:"#1 Team"}),n(a,{children:"#2 Team"}),n(a,{children:"#3 Team"})]})}),n(d,{children:t(m,{activeIndex:x,onItemClick:o=>s(o),children:[n(a,{children:"Really long tab name"}),n(a,{children:"Short"}),n(a,{children:"Medium length"})]})})]})},u=()=>t(S,{children:[t(d,{children:[n(a,{children:"Default"}),n(a,{color:"primary",backgroundColor:"secondary",children:"Custom colors"})]}),t(d,{children:[n(a,{scale:"md",children:"Small scale (md)"}),n(a,{scale:"lg",children:"Large scale (lg)"})]})]});var I,C,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const handleClick = newIndex => setIndex(newIndex);
  const handleClick2 = newIndex => setIndex2(newIndex);
  const handleClick3 = newIndex => setIndex3(newIndex);
  return <>
      <Row>
        <TabMenu activeIndex={index} onItemClick={handleClick}>
          <Tab>Total</Tab>
          <Tab>Cakers</Tab>
          <Tab>Flippers</Tab>
          <Tab>Storm</Tab>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu activeIndex={index2} onItemClick={handleClick2}>
          <Tab>#1 Team</Tab>
          <Tab>#2 Team</Tab>
          <Tab>#3 Team</Tab>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu activeIndex={index3} onItemClick={handleClick3}>
          <Tab>Really long tab name</Tab>
          <Tab>Short</Tab>
          <Tab>Medium length</Tab>
        </TabMenu>
      </Row>
    </>;
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,y,v;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <>
      <Row>
        <Tab>Default</Tab>
        <Tab color="primary" backgroundColor="secondary">
          Custom colors
        </Tab>
      </Row>
      <Row>
        <Tab scale="md">Small scale (md)</Tab>
        <Tab scale="lg">Large scale (lg)</Tab>
      </Row>
    </>;
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const J=["Default","Tabs"];export{c as Default,u as Tabs,J as __namedExportsOrder,H as default};
