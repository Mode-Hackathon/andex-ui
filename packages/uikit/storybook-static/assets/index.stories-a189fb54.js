import{a as r,j as n}from"./jsx-runtime-a888423b.js";import{B as T,L as k}from"./react-router-dom-dc9a1bda.js";import{T as t}from"./Text-f6b55a62.js";import{L as p}from"./Link-a711c4b9.js";import{L as B}from"./Logo-5fd66d13.js";import{P as D}from"./PresentWon-8ffce718.js";import{r as h}from"./index-8db94870.js";import{s as y}from"./styled-components.browser.esm-05bde203.js";import{s as w}from"./index.esm-073a6cf8.js";import{C as R}from"./ChevronRight-b60b1663.js";import"./inheritsLoose-c82a83d4.js";import"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./tiny-invariant-dd7d57d2.js";import"./index.esm-8c5d6e7e.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./externalLinkProps-0f3801f5.js";import"./Svg-f122668c.js";const S=y.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.textDisabled};
  display: flex;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;

  ${({theme:e})=>e.mediaQueries.sm} {
    padding-left: 8px;
    padding-right: 8px;
  }

  ${({theme:e})=>e.mediaQueries.md} {
    padding-left: 16px;
    padding-right: 16px;
  }
`,_=y.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  a {
    color: ${({theme:e})=>e.colors.primary};

    &:hover {
      color: ${({theme:e})=>e.colors.primaryBright};
    }
  }

  ${w}
`,$=(e,l)=>e.reduce((i,s,o)=>o===0?[...i,s]:[...i,r(S,{"aria-hidden":!0,children:l},`separator-${o}`),s],[]),I=r(R,{color:"currentColor",width:"24px"}),m=({separator:e=I,children:l})=>{const i=h.Children.toArray(l).filter(o=>h.isValidElement(o)),s=$(i,e);return r(_,{children:s.map((o,L)=>r("li",{children:o},`child-${L}`))})},a=m;try{m.displayName="Breadcrumbs",m.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{separator:{defaultValue:{value:'<ChevronRightIcon color="currentColor" width="24px" />'},description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const Z={title:"Components/Breadcrumbs",component:a,argTypes:{}},c=()=>r(T,{children:n(t,{p:"32px",children:[n(a,{mb:"32px",children:[r("a",{href:"/",children:"Link"}),r("a",{href:"/",children:"Link"}),r(k,{to:"/",children:"React Router Link"}),r(t,{color:"textDisabled",children:"Crumb 1"}),r(t,{color:"textDisabled",children:"Crumb 2"})]}),n(a,{children:[r(t,{children:"Andex"}),r(t,{children:"The #1 AMM and yield farm on Binance Smart Chain."})]})]})}),d=()=>n(t,{p:"32px",children:[r(t,{mb:"16px",children:n(a,{separator:r(B,{width:"24px"}),children:[r(p,{href:"/",color:"secondary",style:{fontWeight:400},children:"Link"}),r(t,{color:"textDisabled",children:"Crumb 1"}),r(t,{color:"textDisabled",children:"Crumb 2"})]})}),r(t,{mb:"16px",children:n(a,{separator:r(D,{width:"48px"}),children:[r(p,{href:"/",color:"failure",style:{fontWeight:400},children:"Link"}),r(p,{href:"/",color:"primary",style:{fontWeight:400},children:"Link 2"}),r(t,{color:"textDisabled",children:"Crumb 2"})]})})]});var x,u,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <BrowserRouter>
      <Text p="32px">
        <BreadCrumbs mb="32px">
          <a href="/">Link</a>
          <a href="/">Link</a>
          <RouterLink to="/">React Router Link</RouterLink>
          <Text color="textDisabled">Crumb 1</Text>
          <Text color="textDisabled">Crumb 2</Text>
        </BreadCrumbs>
        <BreadCrumbs>
          <Text>Andex</Text>
          <Text>The #1 AMM and yield farm on Binance Smart Chain.</Text>
        </BreadCrumbs>
      </Text>
    </BrowserRouter>;
}`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,C,g;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Text p="32px">
      <Text mb="16px">
        <BreadCrumbs separator={<LogoIcon width="24px" />}>
          <Link href="/" color="secondary" style={{
          fontWeight: 400
        }}>
            Link
          </Link>
          <Text color="textDisabled">Crumb 1</Text>
          <Text color="textDisabled">Crumb 2</Text>
        </BreadCrumbs>
      </Text>
      <Text mb="16px">
        <BreadCrumbs separator={<PresentWonIcon width="48px" />}>
          <Link href="/" color="failure" style={{
          fontWeight: 400
        }}>
            Link
          </Link>
          <Link href="/" color="primary" style={{
          fontWeight: 400
        }}>
            Link 2
          </Link>
          <Text color="textDisabled">Crumb 2</Text>
        </BreadCrumbs>
      </Text>
    </Text>;
}`,...(g=(C=d.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const rr=["Default","CustomSeparator"];export{d as CustomSeparator,c as Default,rr as __namedExportsOrder,Z as default};
