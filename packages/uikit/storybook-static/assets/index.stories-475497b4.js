import{a as e,j as r,F as ne}from"./jsx-runtime-a888423b.js";import{r as u}from"./index-8db94870.js";import{B as te,L as E}from"./react-router-dom-dc9a1bda.js";import{r as re}from"./index-8ce4a492.js";import{u as oe}from"./usePopper-eec57ba6.js";import{s as M}from"./styled-components.browser.esm-05bde203.js";import{B as c}from"./Box-f877d5fa.js";import{F as g}from"./Flex-e70cc8d9.js";import{g as ae}from"./getPortalRoot-b8664777.js";import{B as l}from"./Button-1b68a01e.js";import{T as d}from"./Text-f6b55a62.js";import{G as ie}from"./Grid-6e2f9414.js";import{E as le}from"./Ellipsis-36d9f2d8.js";import{L as x}from"./LinkExternal-6ec529da.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-c82a83d4.js";import"./index-1fc0ca9a.js";import"./extends-98964cd2.js";import"./tiny-invariant-dd7d57d2.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./motion-minimal-b8fc2ac8.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./Svg-f122668c.js";import"./Link-a711c4b9.js";import"./OpenNew-e0313d1b.js";const _=M(c)`
  background-color: ${({theme:n})=>n.colors.backgroundAlt};
  border-radius: ${({theme:n})=>n.radii.card};
  box-shadow: ${({theme:n})=>n.shadows.tooltip};
`,C=M(g)`
  flex-direction: column;
  overflow: hidden;
  min-width: 136px;
  background: ${({theme:n})=>n.colors.input};
  border-radius: ${({theme:n})=>n.radii.default};
  border: ${({theme:n})=>`1px solid ${n.colors.inputSecondary}`};
`,S=M.div`
  cursor: pointer;
  display: inline-flex;
`,o=M.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  background: transparent;
  padding: 8px 16px;
  color: ${({theme:n})=>n.colors.text};
  width: 100%;
  font-size: 16px;
  text-align: left;

  &:hover {
    background-color: ${({theme:n})=>n.colors.inputSecondary};
    text-decoration: none;
  }
`;try{_.displayName="InlineMenuContainer",_.__docgenInfo={description:"",displayName:"InlineMenuContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="SubMenuContainer",C.__docgenInfo={description:"",displayName:"SubMenuContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="ClickableElementContainer",S.__docgenInfo={description:"",displayName:"ClickableElementContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="SubMenuItem",o.__docgenInfo={description:"",displayName:"SubMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const w=({component:n,options:t,children:a,isOpen:i=!1})=>{const[s,R]=u.useState(null),[m,J]=u.useState(null),z=(t==null?void 0:t.placement)??"bottom",H=(t==null?void 0:t.offset)??[0,10],K=(t==null?void 0:t.padding)??{left:16,right:16},[Q,p]=u.useState(i),v=()=>{p(f=>!f)},U=()=>{p(!0)},X=()=>{p(!1)};u.useEffect(()=>{p(i)},[i,p]),u.useEffect(()=>{if(m!==null&&s!==null){const f=({target:I})=>{I instanceof Node&&!m.contains(I)&&!s.contains(I)&&p(!1)};return document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}}},[m,s]);const{styles:Y,attributes:Z}=oe(s,m,{placement:z,modifiers:[{name:"offset",options:{offset:H}},{name:"preventOverflow",options:{padding:K}}]}),V=e("div",{ref:J,style:Y.popper,...Z.popper,children:typeof a=="function"?a({toggle:v,open:U,close:X}):a}),O=ae(),ee=O?re.createPortal(V,O):V;return r(ne,{children:[e(S,{ref:R,onClick:v,children:n}),Q&&ee]})},P=w;try{w.displayName="BaseMenu",w.__docgenInfo={description:"",displayName:"BaseMenu",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"MenuOptions"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const B=({children:n,component:t,isOpen:a=!1,...i})=>e(P,{options:{placement:"bottom"},component:t,isOpen:a,children:e(_,{...i,children:n})}),T=B;try{B.displayName="InlineMenu",B.__docgenInfo={description:"",displayName:"InlineMenu",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"MenuOptions"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const k=({children:n,component:t,options:a,isOpen:i=!1,...s})=>e(P,{component:t,options:a,isOpen:i,children:e(C,{...s,children:n})}),q=k;try{k.displayName="SubMenu",k.__docgenInfo={description:"",displayName:"SubMenu",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"MenuOptions"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const je={title:"Components/Menu"},h=()=>r(g,{justifyContent:"space-around",p:"64px",children:[r(T,{component:e(l,{children:"Inline Menu #1"}),children:[e(c,{p:"24px",width:"320px",children:e(d,{children:"Menu Content"})}),r(ie,{alignItems:"center",borderTop:"1px solid",borderTopColor:"cardBorder",py:"16px",px:"24px",gridGap:"16px",gridTemplateColumns:"repeat(2, 1fr)",children:[e(l,{variant:"secondary",children:"Clear"}),e(l,{children:"Apply"})]})]}),e(T,{component:e(l,{variant:"tertiary",children:"Menu #2"}),children:e(c,{p:"24px",width:"320px",children:e(d,{children:"Menu Content #2"})})})]}),b=()=>{const[n,t]=u.useState(!0);return r(c,{children:[e(l,{variant:"success",scale:"sm",mr:"32px",onClick:()=>t(!n),children:"Outside component controlling menu"}),e(T,{component:e(l,{children:"Controlled Menu"}),isOpen:n,children:r(c,{p:"24px",width:"320px",children:[e(d,{mb:"8px",children:"Open Initially"}),e(l,{scale:"sm",variant:"danger",onClick:()=>t(!1),children:"Close this menu inside"})]})})]})},y=()=>r(te,{children:[r(g,{mb:"24px",p:"8px",width:"300px",border:"1px solid grey",justifyContent:"space-between",alignItems:"center",children:[e(d,{children:"Icon"}),r(q,{component:e(le,{height:"16px",width:"16px"}),options:{placement:"right",offset:[0,15],padding:{top:20}},children:[e(o,{as:x,href:"https://bscscan.com",bold:!1,color:"text",children:"View on BSCScan"}),e(o,{as:x,href:"https://pancakeswap.info",bold:!1,color:"text",target:"blank",children:"View on PCS Info"}),e(o,{as:E,to:"/profile",children:"Go to profile page"}),e(o,{children:"Just button"})]})]}),r(g,{p:"8px",width:"300px",border:"1px solid grey",justifyContent:"space-between",alignItems:"center",children:[e(d,{children:"Text"}),r(q,{component:e(d,{color:"primary",bold:!0,children:"Click me"}),children:[e(o,{as:x,href:"https://bscscan.com",bold:!1,color:"text",children:"View on BSCScan"}),e(o,{as:x,href:"https://pancakeswap.info",bold:!1,color:"text",target:"blank",children:"View on PCS Info"}),e(o,{as:E,to:"/profile",children:"Go to profile page"}),e(o,{children:"Just button"})]})]})]});var N,L,$;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Flex justifyContent="space-around" p="64px">
      <InlineMenu component={<Button>Inline Menu #1</Button>}>
        <Box p="24px" width="320px">
          <Text>Menu Content</Text>
        </Box>
        <Grid alignItems="center" borderTop="1px solid" borderTopColor="cardBorder" py="16px" px="24px" gridGap="16px" gridTemplateColumns="repeat(2, 1fr)">
          <Button variant="secondary">Clear</Button>
          <Button>Apply</Button>
        </Grid>
      </InlineMenu>
      <InlineMenu component={<Button variant="tertiary">Menu #2</Button>}>
        <Box p="24px" width="320px">
          <Text>Menu Content #2</Text>
        </Box>
      </InlineMenu>
    </Flex>;
}`,...($=(L=h.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var A,F,G;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(true);
  return <Box>
      <Button variant="success" scale="sm" mr="32px" onClick={() => setIsOpen(!isOpen)}>
        Outside component controlling menu
      </Button>
      <InlineMenu component={<Button>Controlled Menu</Button>} isOpen={isOpen}>
        <Box p="24px" width="320px">
          <Text mb="8px">Open Initially</Text>
          <Button scale="sm" variant="danger" onClick={() => setIsOpen(false)}>
            Close this menu inside
          </Button>
        </Box>
      </InlineMenu>
    </Box>;
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var j,W,D;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <BrowserRouter>
      <Flex mb="24px" p="8px" width="300px" border="1px solid grey" justifyContent="space-between" alignItems="center">
        <Text>Icon</Text>
        <SubMenuComp component={<EllipsisIcon height="16px" width="16px" />} options={{
        placement: "right",
        offset: [0, 15],
        padding: {
          top: 20
        }
      }}>
          <SubMenuItem as={LinkExternal} href="https://bscscan.com" bold={false} color="text">
            View on BSCScan
          </SubMenuItem>
          <SubMenuItem as={LinkExternal} href="https://pancakeswap.info" bold={false} color="text" target="blank">
            View on PCS Info
          </SubMenuItem>
          <SubMenuItem as={Link} to="/profile">
            Go to profile page
          </SubMenuItem>
          <SubMenuItem>Just button</SubMenuItem>
        </SubMenuComp>
      </Flex>
      <Flex p="8px" width="300px" border="1px solid grey" justifyContent="space-between" alignItems="center">
        <Text>Text</Text>
        <SubMenuComp component={<Text color="primary" bold>
              Click me
            </Text>}>
          <SubMenuItem as={LinkExternal} href="https://bscscan.com" bold={false} color="text">
            View on BSCScan
          </SubMenuItem>
          <SubMenuItem as={LinkExternal} href="https://pancakeswap.info" bold={false} color="text" target="blank">
            View on PCS Info
          </SubMenuItem>
          <SubMenuItem as={Link} to="/profile">
            Go to profile page
          </SubMenuItem>
          <SubMenuItem>Just button</SubMenuItem>
        </SubMenuComp>
      </Flex>
    </BrowserRouter>;
}`,...(D=(W=y.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const We=["Default","Controlled","SubMenu"];export{b as Controlled,h as Default,y as SubMenu,We as __namedExportsOrder,je as default};
