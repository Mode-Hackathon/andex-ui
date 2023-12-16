import{a as r,j as a,F as A}from"./jsx-runtime-a888423b.js";import{r as m}from"./index-8db94870.js";import{c as W}from"./capitalize-ce94671c.js";import{r as i}from"./random-f0d5b04b.js";import{B as z}from"./Box-f877d5fa.js";import{H as b}from"./Heading-def4fbf7.js";import{B as c}from"./Button-1b68a01e.js";import{s as F}from"./index.esm-8c5d6e7e.js";import{s as x}from"./styled-components.browser.esm-05bde203.js";import{v as B,s as H}from"./index.esm-073a6cf8.js";import{l as h}from"./colors-b5755d7b.js";import{P as O}from"./ProgressBunny-a33412db.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./isArrayLike-45d73953.js";import"./toNumber-1b8e5138.js";import"./motion-minimal-b8fc2ac8.js";import"./Text-f6b55a62.js";import"./getThemeValue-6fc24f62.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./Svg-f122668c.js";const p={ROUND:"round",FLAT:"flat"},v={MD:"md",SM:"sm"},j={[p.ROUND]:{borderRadius:"32px"},[p.FLAT]:{borderRadius:0}},M={[v.MD]:{height:"16px"},[v.SM]:{height:"8px"}},d=x.div.withConfig({shouldForwardProp:F})`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({theme:e,$useDark:t,primary:n,$background:s})=>s||(t?n?e.colors.secondary:`${e.colors.secondary80}`:n?h.secondary:`${h.secondary80}`)};
  height: 100%;
  transition: width 200ms ease;
`;d.defaultProps={primary:!1};const L=x.div`
  position: relative;
  background-color: ${({theme:e,$useDark:t})=>t?e.colors.input:h.input};
  box-shadow: ${({theme:e})=>e.shadows.inset};
  overflow: hidden;

  ${d} {
    border-top-left-radius: ${({variant:e})=>e===p.FLAT?"0":"32px"};
    border-bottom-left-radius: ${({variant:e})=>e===p.FLAT?"0":"32px"};
  }

  ${B({variants:j})}
  ${B({prop:"scale",variants:M})}
  ${H}
`,U=L;try{d.displayName="Bar",d.__docgenInfo={description:"",displayName:"Bar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const E=x.div`
  display: flex;
  z-index: 2;
  top: -65%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: left 200ms ease-out;
`,I=E,f=e=>e<0?0:e>100?100:e,P=({className:e,variant:t=p.ROUND,scale:n=v.MD,primaryStep:s=0,secondaryStep:o=null,showProgressBunny:q=!1,useDark:S=!0,children:N})=>r(U,{className:e,$useDark:S,variant:t,scale:n,children:N||a(A,{children:[q&&r(I,{style:{left:`${f(s)}%`},children:r(O,{})}),r(d,{$useDark:S,primary:!0,style:{width:`${f(s)}%`}}),o?r(d,{$useDark:S,style:{width:`${f(o)}%`}}):null]})}),u=P;try{P.displayName="Progress",P.__docgenInfo={description:"",displayName:"Progress",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"round"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"flat"'}]}},scale:{defaultValue:{value:"md"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'}]}},primaryStep:{defaultValue:{value:"0"},description:"",name:"primaryStep",required:!1,type:{name:"number"}},secondaryStep:{defaultValue:{value:"null"},description:"",name:"secondaryStep",required:!1,type:{name:"number"}},showProgressBunny:{defaultValue:{value:"false"},description:"",name:"showProgressBunny",required:!1,type:{name:"boolean"}},useDark:{defaultValue:{value:"true"},description:"",name:"useDark",required:!1,type:{name:"boolean"}}}}}catch{}const ve={title:"Components/Progress",component:u,argTypes:{}},G=e=>{const[t,n]=m.useState(i(1,100)),s=()=>n(i(1,100));return a("div",{style:{padding:"32px",width:"400px"},children:[Object.values(p).map(o=>a(z,{mb:"16px",children:[r(b,{size:"md",mb:"8px",children:W(o)}),r(u,{variant:o,primaryStep:t,...e})]},o)),r(b,{size:"md",mb:"8px",children:"Small"}),r(u,{scale:"sm",primaryStep:t,...e}),r("div",{style:{marginTop:"32px"},children:r(c,{type:"button",scale:"sm",onClick:s,children:"Random Progress"})})]})},l=G.bind({});l.args={useDark:!1};const y=()=>{const[e,t]=m.useState(10),[n,s]=m.useState(40);return a("div",{style:{padding:"32px",width:"400px"},children:[r(u,{primaryStep:e,secondaryStep:n}),a("div",{style:{marginTop:"32px"},children:[r(c,{type:"button",scale:"sm",onClick:()=>t(i(1,100)),children:"Random Primary Progress"}),r(c,{style:{marginTop:"16px"},type:"button",scale:"sm",onClick:()=>s(i(1,100)),children:"Random Secondary Progress"})]})]})},g=()=>{const[e,t]=m.useState(10),[n,s]=m.useState(40);return a("div",{style:{padding:"32px",width:"400px"},children:[r(u,{primaryStep:e,secondaryStep:n,showProgressBunny:!0}),a("div",{style:{marginTop:"32px"},children:[r(c,{type:"button",scale:"sm",onClick:()=>t(i(1,100)),children:"Random Primary Progress"}),r(c,{style:{marginTop:"16px"},type:"button",scale:"sm",onClick:()=>s(i(1,100)),children:"Random Secondary Progress"})]})]})};var w,k,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [progress, setProgress] = useState(random(1, 100));
  const handleClick = () => setProgress(random(1, 100));
  return <div style={{
    padding: "32px",
    width: "400px"
  }}>
      {Object.values(variants).map(variant => {
      return <Box key={variant} mb="16px">
            <Heading size="md" mb="8px">
              {capitalize(variant)}
            </Heading>
            <Progress variant={variant} primaryStep={progress} {...args} />
          </Box>;
    })}
      <Heading size="md" mb="8px">
        Small
      </Heading>
      <Progress scale="sm" primaryStep={progress} {...args} />
      <div style={{
      marginTop: "32px"
    }}>
        <Button type="button" scale="sm" onClick={handleClick}>
          Random Progress
        </Button>
      </div>
    </div>;
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var _,$,C;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [primaryStep, setPrimaryStep] = useState(10);
  const [secondaryStep, setSecondaryStep] = useState(40);
  return <div style={{
    padding: "32px",
    width: "400px"
  }}>
      <Progress primaryStep={primaryStep} secondaryStep={secondaryStep} />
      <div style={{
      marginTop: "32px"
    }}>
        <Button type="button" scale="sm" onClick={() => setPrimaryStep(random(1, 100))}>
          Random Primary Progress
        </Button>
        <Button style={{
        marginTop: "16px"
      }} type="button" scale="sm" onClick={() => setSecondaryStep(random(1, 100))}>
          Random Secondary Progress
        </Button>
      </div>
    </div>;
}`,...(C=($=y.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var R,D,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [primaryStep, setPrimaryStep] = useState(10);
  const [secondaryStep, setSecondaryStep] = useState(40);
  return <div style={{
    padding: "32px",
    width: "400px"
  }}>
      <Progress primaryStep={primaryStep} secondaryStep={secondaryStep} showProgressBunny />
      <div style={{
      marginTop: "32px"
    }}>
        <Button type="button" scale="sm" onClick={() => setPrimaryStep(random(1, 100))}>
          Random Primary Progress
        </Button>
        <Button style={{
        marginTop: "16px"
      }} type="button" scale="sm" onClick={() => setSecondaryStep(random(1, 100))}>
          Random Secondary Progress
        </Button>
      </div>
    </div>;
}`,...(V=(D=g.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const Pe=["Default","WithSecondary","WithSecondaryAndProgressBunny"];export{l as Default,y as WithSecondary,g as WithSecondaryAndProgressBunny,Pe as __namedExportsOrder,ve as default};
