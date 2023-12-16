import{a as r,j as a}from"./jsx-runtime-a888423b.js";import{s as y,J as U}from"./styled-components.browser.esm-05bde203.js";import{B as x}from"./Box-f877d5fa.js";import{H as s}from"./Heading-def4fbf7.js";import{s as P}from"./index.esm-8c5d6e7e.js";import{s as A}from"./index.esm-073a6cf8.js";import{C as n}from"./CardBody-ebccf188.js";import{C as o}from"./Card-403f447b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./motion-minimal-b8fc2ac8.js";import"./Text-f6b55a62.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./animationToolkit-f78aec88.js";const V=y.div`
  z-index: ${({theme:e})=>e.zIndices.ribbon};
  background-color: ${({variantColor:e="secondary",theme:i})=>i.colors[e]};
  color: white;
  margin: 0;
  padding: 8px 0;
  position: absolute;
  right: ${({ribbonPosition:e})=>e==="right"?0:"auto"};
  top: 0;
  text-align: center;
  transform: ${({ribbonPosition:e})=>e==="right"?"translateX(30%) translateY(0%) rotate(45deg)":"translateX(0%) translateY(200%) rotate(-45deg)"};
  transform-origin: top left;
  width: 96px;

  &:before,
  &:after {
    background-color: ${({variantColor:e="secondary",theme:i})=>i.colors[e]};
    content: "";
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`,v=({variantColor:e,text:i,ribbonPosition:h,...l})=>r(V,{variantColor:e,ribbonPosition:h,...l,children:r("div",{title:i,children:i})});v.defaultProps={ribbonPosition:"right"};const c=v;try{v.displayName="CardRibbon",v.__docgenInfo={description:"",displayName:"CardRibbon",props:{variantColor:{defaultValue:null,description:"",name:"variantColor",required:!1,type:{name:"enum",value:[{value:'"gold"'},{value:'"silver"'},{value:'"white"'},{value:'"yellow"'},{value:'"background"'},{value:'"text"'},{value:'"input"'},{value:'"disabled"'},{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"secondary80"'},{value:'"backgroundDisabled"'},{value:'"backgroundAlt"'},{value:'"backgroundAlt2"'},{value:'"cardBorder"'},{value:'"contrast"'},{value:'"dropdown"'},{value:'"dropdownDeep"'},{value:'"invertedContrast"'},{value:'"inputSecondary"'},{value:'"tertiary"'},{value:'"text99"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBubblegum"'},{value:'"gradientInverseBubblegum"'},{value:'"gradientCardHeader"'},{value:'"gradientBlue"'},{value:'"gradientViolet"'},{value:'"gradientVioletAlt"'},{value:'"gradientGold"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"overlay"'},{value:'"bronze"'},{value:'"failure"'},{value:'"failure33"'},{value:'"primary"'},{value:'"primary0f"'},{value:'"primary3D"'},{value:'"primaryBright"'},{value:'"primaryDark"'},{value:'"success19"'},{value:'"warning2D"'},{value:'"warning33"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},ribbonPosition:{defaultValue:{value:"right"},description:"",name:"ribbonPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const I=y.div.withConfig({shouldForwardProp:P})`
  background: ${({theme:e,variant:i="default"})=>e.card.cardHeaderBackground[i]};
  border-radius: ${({theme:e})=>`${e.radii.card} ${e.radii.card} 0 0`};
  ${A}
`;I.defaultProps={p:"24px"};const u=I,_=y.div.withConfig({shouldForwardProp:P})`
  border-top: 1px solid ${({theme:e})=>e.colors.cardBorder};
  ${A}
`;_.defaultProps={p:"24px"};const t=_,d=y.div`
  margin-bottom: 32px;
`,or={title:"Components/Card",component:o,argTypes:{}},C=()=>a("div",{style:{padding:"32px",width:"500px"},children:[r(d,{children:a(o,{children:[r(n,{children:"Body"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{isActive:!0,children:[r(n,{children:"Active"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{isSuccess:!0,children:[r(n,{children:"Success"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{isWarning:!0,children:[r(n,{children:"Warning"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{isDisabled:!0,children:[r(n,{children:"Disabled"}),r(t,{children:"Footer"})]})})]}),p=()=>{const e=U(),i="60px",h="#7645D9",l=`calc(${i} + 1px)`,T=`linear-gradient(${h} ${l}, ${e.colors.cardBorder} ${l})`,K=`linear-gradient(transparent ${l}, ${e.colors.cardBorder} ${l}), ${e.colors.gradientCardHeader}`;return a("div",{style:{padding:"32px",width:"500px"},children:[r(d,{children:a(o,{borderBackground:T,children:[r(x,{background:h,p:"16px",height:i,children:r(s,{size:"xl",color:"white",children:"Custom overlapping Header"})}),r(n,{children:"The border on sides of header is covered"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{borderBackground:K,children:[r(x,{background:e.colors.gradientCardHeader,p:"16px",height:i,children:r(s,{size:"xl",children:"Gradient overlapping Header"})}),r(n,{children:"The border on sides of header is covered"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{children:[r(u,{children:r(s,{size:"xl",children:"Card Header"})}),r(n,{children:"Body"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{children:[r(u,{variant:"blue",children:r(s,{size:"xl",children:"Card Header"})}),r(n,{children:"Body"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{children:[r(u,{variant:"violet",children:r(s,{size:"xl",children:"Card Header"})}),r(n,{children:"Body"}),r(t,{children:"Footer"})]})}),r(d,{children:a(o,{children:[r(u,{variant:"bubblegum",children:r(s,{size:"xl",children:"Card Header"})}),r(n,{children:"Body"}),r(t,{children:"Footer"})]})})]})},g=()=>r("div",{style:{padding:"32px",width:"500px"},children:r(o,{background:"#f0c243",borderBackground:"#b88700",children:r(n,{style:{height:"150px"},children:"Custom background"})})}),b=()=>a("div",{style:{padding:"32px",width:"500px"},children:[r(d,{children:a(o,{ribbon:r(c,{text:"Ribbon"}),children:[r("div",{style:{height:"112px",backgroundColor:"#191326"}}),r(n,{style:{height:"150px"},children:"Body"})]})}),r(d,{children:r(o,{ribbon:r(c,{variantColor:"textDisabled",text:"Ribbon with Long Text"}),children:r(n,{style:{height:"150px"},children:"Ribbons will truncate when text is too long"})})}),r(d,{children:r(o,{ribbon:r(c,{variantColor:"success",text:"Success"}),children:r(n,{style:{height:"150px"},children:"Card"})})}),r(d,{children:r(o,{ribbon:r(c,{variantColor:"failure",text:"Failure"}),children:r(n,{style:{height:"150px"},children:"Any Color in the theme"})})}),r(d,{children:r(o,{ribbon:r(c,{variantColor:"failure",text:"Failure",ribbonPosition:"left"}),children:r(n,{style:{height:"150px"},children:"Any Color in the theme"})})})]});var m,B,w;C.parameters={...C.parameters,docs:{...(m=C.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div style={{
    padding: "32px",
    width: "500px"
  }}>
      <Row>
        <Card>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isActive>
          <CardBody>Active</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isSuccess>
          <CardBody>Success</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isWarning>
          <CardBody>Warning</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isDisabled>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </div>;
}`,...(w=(B=C.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var H,R,f;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const theme = useTheme();
  // This is example how to make card header "overlap" the border.
  // Seems to be easiest solution that works on all screens and does not rely on absolute positioning trickery
  const headerHeight = "60px";
  const customHeadingColor = "#7645D9";
  const gradientStopPoint = \`calc(\${headerHeight} + 1px)\`;
  const borderBackground = \`linear-gradient(\${customHeadingColor} \${gradientStopPoint}, \${theme.colors.cardBorder} \${gradientStopPoint})\`;

  // Gradient overlap is also possible, just put the "dividing" gradient first and after that the header gradient
  const gradientBorderColor = \`linear-gradient(transparent \${gradientStopPoint}, \${theme.colors.cardBorder} \${gradientStopPoint}), \${theme.colors.gradientCardHeader}\`;
  return <div style={{
    padding: "32px",
    width: "500px"
  }}>
      <Row>
        <Card borderBackground={borderBackground}>
          <Box background={customHeadingColor} p="16px" height={headerHeight}>
            <Heading size="xl" color="white">
              Custom overlapping Header
            </Heading>
          </Box>
          <CardBody>The border on sides of header is covered</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card borderBackground={gradientBorderColor}>
          <Box background={theme.colors.gradientCardHeader} p="16px" height={headerHeight}>
            <Heading size="xl">Gradient overlapping Header</Heading>
          </Box>
          <CardBody>The border on sides of header is covered</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader>
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="blue">
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="violet">
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="bubblegum">
            <Heading size="xl">Card Header</Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </div>;
}`,...(f=(R=p.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var F,$,k;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <div style={{
    padding: "32px",
    width: "500px"
  }}>
      <Card background="#f0c243" borderBackground="#b88700">
        <CardBody style={{
        height: "150px"
      }}>Custom background</CardBody>
      </Card>
    </div>;
}`,...(k=($=g.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var S,D,z;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <div style={{
    padding: "32px",
    width: "500px"
  }}>
      <Row>
        <Card ribbon={<CardRibbon text="Ribbon" />}>
          <div style={{
          height: "112px",
          backgroundColor: "#191326"
        }} />
          <CardBody style={{
          height: "150px"
        }}>Body</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="textDisabled" text="Ribbon with Long Text" />}>
          <CardBody style={{
          height: "150px"
        }}>Ribbons will truncate when text is too long</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="success" text="Success" />}>
          <CardBody style={{
          height: "150px"
        }}>Card</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="failure" text="Failure" />}>
          <CardBody style={{
          height: "150px"
        }}>Any Color in the theme</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="failure" text="Failure" ribbonPosition="left" />}>
          <CardBody style={{
          height: "150px"
        }}>Any Color in the theme</CardBody>
        </Card>
      </Row>
    </div>;
}`,...(z=(D=b.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const nr=["Default","CardHeader","CustomBackground","Ribbon"];export{p as CardHeader,g as CustomBackground,C as Default,b as Ribbon,nr as __namedExportsOrder,or as default};
