import{a as r,j as c}from"./jsx-runtime-a888423b.js";import{B as e}from"./Button-1b68a01e.js";import{F as l}from"./Flex-e70cc8d9.js";import{D as n}from"./Dropdown-de8b15b7.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./styled-components.browser.esm-05bde203.js";import"./index.esm-073a6cf8.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./throttle-19a2d18a.js";import"./debounce-2c70bf35.js";import"./isObject-5487ad91.js";import"./toNumber-1b8e5138.js";import"./useMatchBreakpoints-59a9bcd0.js";import"./Provider-7e243320.js";const k={title:"Components/Dropdown",component:n,argTypes:{}},t=()=>r("div",{children:r(n,{target:r(e,{children:"Hover"}),children:[...Array(30)].map(()=>r("div",{children:"Content"}))})}),o=()=>c(l,{justifyContent:"space-between",style:{marginTop:"400px"},children:[r(n,{position:"top-right",target:r(e,{children:"Top right"}),children:[...Array(20)].map(()=>r("div",{children:"Content"}))}),r(n,{position:"top",target:r(e,{children:"Top"}),children:[...Array(20)].map(()=>r("div",{children:"Content"}))})]});var p,i,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div>
      <Dropdown target={<Button>Hover</Button>}>
        {[...Array(30)].map(() => <div>Content</div>)}
      </Dropdown>
    </div>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,m,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Flex justifyContent="space-between" style={{
    marginTop: "400px"
  }}>
      <Dropdown position="top-right" target={<Button>Top right</Button>}>
        {[...Array(20)].map(() => <div>Content</div>)}
      </Dropdown>
      <Dropdown position="top" target={<Button>Top</Button>}>
        {[...Array(20)].map(() => <div>Content</div>)}
      </Dropdown>
    </Flex>;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const q=["Default","Top"];export{t as Default,o as Top,q as __namedExportsOrder,k as default};
