import{a as t,j as n}from"./jsx-runtime-a888423b.js";import{s as i}from"./styled-components.browser.esm-05bde203.js";import{R as o}from"./index-8db94870.js";import{F as L}from"./Flex-e70cc8d9.js";import{B as R}from"./Box-f877d5fa.js";import{C as m}from"./Card-403f447b.js";import{C as f}from"./CardBody-ebccf188.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-073a6cf8.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./animationToolkit-f78aec88.js";const B=i.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`,v=({children:e})=>{const r=o.Children.count(e);return t(B,{children:o.Children.map(e,s=>o.isValidElement(s)?o.cloneElement(s,{numberOfSteps:r}):s)})},F=v;try{v.displayName="Stepper",v.__docgenInfo={description:"",displayName:"Stepper",props:{}}}catch{}const U=({theme:e,status:r})=>r==="past"?e.colors.success:r==="current"?e.colors.invertedContrast:e.colors.textDisabled,W=i(L)`
  ${({theme:e})=>e.mediaQueries.md} {
    justify-content: center;
  }
`,C=i.div`
  position: absolute;
  width: 4px;
  height: calc(50% + 20px);
  ${({$isFirstStep:e,$isLastStep:r,$isFirstPart:s})=>e?"top: 50%;":r?"top: 0;":s?"top:0;":"top:50%;"}
  left: calc(50% - 2px);
  background-color: ${({theme:e,status:r})=>e.colors[r==="past"||r==="current"?"success":"textDisabled"]};
`,N=i(R)`
  ${({theme:e})=>e.mediaQueries.md} {
    visibility: ${({isVisible:e})=>e?"visible":"hidden"};
  }
`,j=i(N)`
  display: none;
  ${({theme:e})=>e.mediaQueries.md} {
    display: block;
    margin-right: 16px;
  }
`,k=i(N)`
  margin-left: 8px;
  ${({theme:e})=>e.mediaQueries.md} {
    margin-left: 16px;
  }
`,D=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,a=i.div`
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  background-color: ${({theme:e,status:r})=>e.colors[r==="current"?"secondary":"invertedContrast"]};
  border: 2px solid ${({theme:e,status:r})=>r==="past"?e.colors.success:"transparent"};
  border-radius: ${({theme:e})=>e.radii.circle};
  color: ${U};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  width: 48px;
  height: 48px;
  z-index: 5;
  ${({theme:e})=>e.mediaQueries.md} {
    font-size: 40px;
    width: 80px;
    height: 80px;
  }
`,u=({index:e,statusFirstPart:r,statusSecondPart:s,numberOfSteps:q=0,children:S})=>{const g=e%2===0,h=e===0,b=e===q-1;return n(W,{mb:e<q-1?"16px":0,children:[t(j,{isVisible:!g,children:S}),n(D,{children:[t(a,{status:r,children:e+1}),t(C,{$isFirstStep:h,$isLastStep:b,status:r,$isFirstPart:!0}),!h&&!b&&t(C,{$isFirstStep:h,$isLastStep:b,status:s})]}),t(k,{isVisible:g,children:S})]})};try{a.displayName="StepNumber",a.__docgenInfo={description:"",displayName:"StepNumber",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="Step",u.__docgenInfo={description:`ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
One of the child is hidden based on the step number.`,displayName:"Step",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},statusFirstPart:{defaultValue:null,description:"",name:"statusFirstPart",required:!0,type:{name:"enum",value:[{value:'"current"'},{value:'"past"'},{value:'"future"'}]}},statusSecondPart:{defaultValue:null,description:"",name:"statusSecondPart",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"past"'},{value:'"future"'}]}},numberOfSteps:{defaultValue:{value:"0"},description:"",name:"numberOfSteps",required:!1,type:{name:"number"}}}}}catch{}const Y={title:"Components/Stepper",component:F,argTypes:{}},l="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at, placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed, finibus neque. Phasellus consequat at lorem a venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at, placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed, finibus neque. Phasellus consequat at lorem a venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at, placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed, finibus neque. Phasellus consequat at lorem a venenatis.",Q=[l,l,l,l],y=["past","current","future","future"],d=i.div`
  display: flex;
`,c=()=>t(F,{children:Q.map((e,r)=>t(u,{index:r,statusFirstPart:y[r],statusSecondPart:y[r+1],children:t(m,{children:t(f,{children:e})})},e))}),p=()=>n("div",{children:[n(d,{children:[t(a,{status:"past",children:"1"}),t(a,{status:"current",children:"1"}),t(a,{status:"future",children:"1"})]}),t(d,{children:t(u,{index:0,statusFirstPart:"past",children:t(m,{children:n(f,{children:[t("h2",{children:"Step 0"}),t("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at, placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed, finibus neque. Phasellus consequat at lorem a venenatis."})]})})})}),t(d,{children:t(u,{index:1,statusFirstPart:"current",statusSecondPart:"future",children:t(m,{children:n(f,{children:[t("h2",{children:"Step 1"}),t("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at, placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed, finibus neque. Phasellus consequat at lorem a venenatis."})]})})})}),t(d,{children:t(u,{index:2,statusFirstPart:"future",children:t(m,{children:n(f,{children:[t("h2",{children:"Step 2"}),t("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at, placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed, finibus neque. Phasellus consequat at lorem a venenatis."})]})})})})]});var x,_,P;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Stepper>
      {steps.map((step, index) => <Step key={step} index={index} statusFirstPart={status[index]} statusSecondPart={status[index + 1]}>
          <Card>
            <CardBody>{step}</CardBody>
          </Card>
        </Step>)}
    </Stepper>;
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var V,$,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <div>
      <Row>
        <StepNumber status="past">1</StepNumber>
        <StepNumber status="current">1</StepNumber>
        <StepNumber status="future">1</StepNumber>
      </Row>
      <Row>
        <Step index={0} statusFirstPart="past">
          <Card>
            <CardBody>
              <h2>Step 0</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at,
                placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed,
                finibus neque. Phasellus consequat at lorem a venenatis.
              </div>
            </CardBody>
          </Card>
        </Step>
      </Row>
      <Row>
        <Step index={1} statusFirstPart="current" statusSecondPart="future">
          <Card>
            <CardBody>
              <h2>Step 1</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at,
                placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed,
                finibus neque. Phasellus consequat at lorem a venenatis.
              </div>
            </CardBody>
          </Card>
        </Step>
      </Row>
      <Row>
        <Step index={2} statusFirstPart="future">
          <Card>
            <CardBody>
              <h2>Step 2</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl imperdiet, vestibulum lacus at,
                placerat nisi. Vestibulum quis scelerisque purus. Curabitur non magna tincidunt, fermentum neque sed,
                finibus neque. Phasellus consequat at lorem a venenatis.
              </div>
            </CardBody>
          </Card>
        </Step>
      </Row>
    </div>;
}`,...(w=($=p.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const Z=["Default","Components"];export{p as Components,c as Default,Z as __namedExportsOrder,Y as default};
