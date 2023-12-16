import{j as m,a as e}from"./jsx-runtime-a888423b.js";import{r as l}from"./index-8db94870.js";import{B as s}from"./Box-f877d5fa.js";import{B as d}from"./Button-1b68a01e.js";import{T as t}from"./Text-f6b55a62.js";import{B as n}from"./BottomDrawer-7b3fc12e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./styled-components.browser.esm-05bde203.js";import"./motion-minimal-b8fc2ac8.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./js.cookie-19aa770d.js";import"./index-8ce4a492.js";import"./useOnClickOutside-00feb151.js";import"./getPortalRoot-b8664777.js";import"./styles-278c0224.js";import"./useMatchBreakpoints-59a9bcd0.js";import"./Provider-7e243320.js";import"./Overlay-c4441d34.js";import"./IconButton-ad080da8.js";import"./Close-621ed1bc.js";import"./Svg-f122668c.js";const K={title:"Components/BottomDrawer",component:n,argTypes:{}},o=()=>{const[u,i]=l.useState(!1),c=m(s,{px:"16px",pt:"22px",height:"100%",overflowY:"auto",children:[e(t,{fontSize:"20px",children:"Example"}),[...Array(10).keys()].map(()=>e(t,{mb:"16px",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio hic quibusdam molestias magnam. Tempora saepe ea quidem quo, commodi sint tempore iste explicabo!"})),e(t,{children:"The end"})]});return m(s,{p:"24px",children:[e(t,{mb:"8px",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus dolorum porro facere cum ducimus, iste nobis voluptas dolorem quaerat perspiciatis voluptatum sed laborum reiciendis magnam illum necessitatibus. Ea, hic."}),e(d,{onClick:()=>i(!0),children:"Show bottom drawer"}),[...Array(10).keys()].map(()=>e(t,{mb:"16px",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio hic quibusdam molestias magnam. Tempora saepe ea quidem quo, commodi sint tempore iste explicabo!"})),e(n,{content:c,isOpen:u,setIsOpen:i})]})};var r,a,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const content = <Box px="16px" pt="22px" height="100%" overflowY="auto">
      <Text fontSize="20px">Example</Text>
      {[...Array(10).keys()].map(() => <Text mb="16px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio
          hic quibusdam molestias magnam. Tempora saepe ea quidem quo, commodi sint tempore iste explicabo!
        </Text>)}
      <Text>The end</Text>
    </Box>;
  return <Box p="24px">
      <Text mb="8px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus dolorum porro facere cum ducimus, iste
        nobis voluptas dolorem quaerat perspiciatis voluptatum sed laborum reiciendis magnam illum necessitatibus. Ea,
        hic.
      </Text>
      <Button onClick={() => setIsOpen(true)}>Show bottom drawer</Button>
      {[...Array(10).keys()].map(() => <Text mb="16px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio
          hic quibusdam molestias magnam. Tempora saepe ea quidem quo, commodi sint tempore iste explicabo!
        </Text>)}
      <BottomDrawer content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>;
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,K as default};
