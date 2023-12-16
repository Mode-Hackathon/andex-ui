import{j as g,a}from"./jsx-runtime-a888423b.js";import{c as o}from"./capitalize-ce94671c.js";import{B as v}from"./Box-f877d5fa.js";import{F as $}from"./Flex-e70cc8d9.js";import{R as l}from"./index-8db94870.js";import{s as B}from"./index.esm-8c5d6e7e.js";import{s as N}from"./styled-components.browser.esm-05bde203.js";import{v as x,s as D,t as _}from"./index.esm-073a6cf8.js";import{C as T,R as y}from"./Remove-94e33974.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./motion-minimal-b8fc2ac8.js";import"./Svg-f122668c.js";import"./getThemeValue-6fc24f62.js";const r={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",TEXTDISABLED:"textDisabled",TEXTSUBTLE:"textSubtle",BINANCE:"binance",FAILURE:"failure",WARNING:"warning",GRADIENTBOLD:"gradientBold"},c={MD:"md",SM:"sm"},A={[c.MD]:{height:"28px",padding:"0 8px",fontSize:"14px"},[c.SM]:{height:"24px",padding:"0 4px",fontSize:"12px"}},E={[r.PRIMARY]:{backgroundColor:"primary"},[r.SECONDARY]:{backgroundColor:"secondary"},[r.SUCCESS]:{backgroundColor:"success"},[r.TEXTDISABLED]:{backgroundColor:"textDisabled"},[r.TEXTSUBTLE]:{backgroundColor:"textSubtle"},[r.BINANCE]:{backgroundColor:"binance"},[r.FAILURE]:{backgroundColor:"failure"},[r.WARNING]:{backgroundColor:"warning"},[r.WARNING]:{backgroundColor:"warning"},[r.GRADIENTBOLD]:{bg:"gradientBold"}},V=({outline:e,theme:n,variant:d=r.PRIMARY})=>{if(e){const p=E[d].backgroundColor,f=n.colors[p];return`
      color: ${f};
      background: none;
      border: 2px solid ${f};
    `}return""},m=N.div.withConfig({shouldForwardProp:B})`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({textTransform:e})=>e&&`text-transform: ${e};`}

  ${x({prop:"scale",variants:A})}
  ${x({variants:E})}
  ${D}
  ${_}

  ${V}
`;try{m.displayName="StyledTag",m.__docgenInfo={description:"",displayName:"StyledTag",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({startIcon:e,endIcon:n,children:d,...p})=>g(m,{...p,children:[l.isValidElement(e)&&l.cloneElement(e,{mr:"0.5em"}),d,l.isValidElement(n)&&l.cloneElement(n,{ml:"0.5em"})]});u.defaultProps={variant:"primary",scale:c.MD,outline:!1};const t=u;try{u.displayName="Tag",u.__docgenInfo={description:"",displayName:"Tag",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"failure"'},{value:'"primary"'}]}},scale:{defaultValue:{value:"md"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const K={title:"Components/Tag",argTypes:{}},i=()=>a(v,{children:Object.values(r).map(e=>a(v,{mb:"32px ",children:g($,{alignItems:"center",children:[Object.values(c).map(n=>a(t,{scale:n,variant:e,mr:"8px",children:`${o(e)}: ${n.toUpperCase()}`})),a(t,{variant:e,outline:!0,mr:"8px",children:`${o(e)} Outline`}),a(t,{variant:e,outline:!0,startIcon:a(T,{}),mr:"8px",children:`${o(e)} Icon Left`}),a(t,{variant:e,outline:!0,endIcon:a(y,{}),mr:"8px",children:`${o(e)} Icon Right`}),a(t,{variant:e,outline:!0,startIcon:a(T,{}),endIcon:a(y,{}),children:`${o(e)} Both`})]})},e))}),s=()=>g("div",{children:[a(t,{textTransform:"uppercase",mr:"16px",children:"uppercase"}),a(t,{fontWeight:"bold",mr:"16px",children:"Bold"})]});var I,b,h;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Box>
      {Object.values(variants).map(variant => {
      return <Box key={variant} mb="32px ">
            <Flex alignItems="center">
              {Object.values(scales).map(scale => {
            return <Tag scale={scale} variant={variant} mr="8px">
                    {\`\${capitalize(variant)}: \${scale.toUpperCase()}\`}
                  </Tag>;
          })}
              <Tag variant={variant} outline mr="8px">
                {\`\${capitalize(variant)} Outline\`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} mr="8px">
                {\`\${capitalize(variant)} Icon Left\`}
              </Tag>
              <Tag variant={variant} outline endIcon={<RemoveIcon />} mr="8px">
                {\`\${capitalize(variant)} Icon Right\`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} endIcon={<RemoveIcon />}>
                {\`\${capitalize(variant)} Both\`}
              </Tag>
            </Flex>
          </Box>;
    })}
    </Box>;
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var C,S,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div>
      <Tag textTransform="uppercase" mr="16px">
        uppercase
      </Tag>
      <Tag fontWeight="bold" mr="16px">
        Bold
      </Tag>
    </div>;
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const H=["Default","TextVariations"];export{i as Default,s as TextVariations,H as __namedExportsOrder,K as default};
