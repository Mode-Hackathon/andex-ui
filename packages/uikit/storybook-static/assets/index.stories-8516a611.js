import{j as p,a as e}from"./jsx-runtime-a888423b.js";import{s}from"./styled-components.browser.esm-05bde203.js";import{n as I}from"./noop-b0c9bf7e.js";import{C as R,I as T}from"./Block-549da8ba.js";import{I as k}from"./Error-413c24a1.js";import{I as S}from"./Info-c3889864.js";import{F as b}from"./Flex-e70cc8d9.js";import{T as o}from"./Text-f6b55a62.js";import{I as y}from"./IconButton-ad080da8.js";import{C as N}from"./Close-621ed1bc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Svg-f122668c.js";import"./index.esm-073a6cf8.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./Button-1b68a01e.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */const n={INFO:"info",DANGER:"danger",SUCCESS:"success",WARNING:"warning"},_=({theme:r,variant:a=n.INFO})=>{switch(a){case n.DANGER:return r.colors.failure;case n.WARNING:return r.colors.warning;case n.SUCCESS:return r.colors.success;case n.INFO:default:return r.colors.secondary}},D=(r=n.INFO)=>{switch(r){case n.DANGER:return T;case n.WARNING:return k;case n.SUCCESS:return R;case n.INFO:default:return S}},E=s.div`
  background-color: ${_};
  border-radius: 16px 0 0 16px;
  color: ${({theme:r})=>r.alert.background};
  padding: 12px;
`,W=32+12+8,$=s.div`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({$hasHandler:r})=>r?`${W}px`:"12px"};
  padding-top: 12px;
`,F=s.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`,G=s(b)`
  position: relative;
  background-color: ${({theme:r})=>r.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`,m=({title:r,children:a,variant:h,onClick:u})=>{const C=D(h);return p(G,{children:[e(E,{variant:h,children:e(C,{color:"currentColor",width:"24px"})}),p($,{$hasHandler:!!u,children:[e(o,{bold:!0,children:r}),typeof a=="string"?e(o,{style:{wordBreak:"break-word"},as:"p",children:a}):a]}),u&&e(F,{children:e(y,{scale:"sm",variant:"text",onClick:u,children:e(N,{width:"24px",color:"currentColor"})})})]})},t=m;try{m.displayName="Alert",m.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((evt: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const i=s.div`
  margin-bottom: 32px;
`,ce={title:"Components/Alert",component:t,argTypes:{}},c=()=>p("div",{style:{padding:"32px",width:"400px"},children:[e(i,{children:e(t,{title:"Info",children:e(o,{as:"p",children:"This is a description"})})}),e(i,{children:e(t,{title:"Success",variant:"success",children:e(o,{as:"p",children:"This is a description"})})}),e(i,{children:e(t,{title:"Warning",variant:"warning",children:e(o,{as:"p",children:"This is a description"})})}),e(i,{children:e(t,{title:"Danger",variant:"danger",children:e(o,{as:"p",children:"This is a description"})})})]}),l=I,d=()=>p("div",{style:{padding:"32px",width:"400px"},children:[e(i,{children:e(t,{onClick:l,title:"Info"})}),e(i,{children:e(t,{onClick:l,title:"Success",variant:"success",children:"A description of the success alert"})}),e(i,{children:e(t,{onClick:l,title:"Danger A Long Title",variant:"danger"})}),e(i,{children:e(t,{onClick:l,title:"Warning",variant:"warning"})})]});var g,x,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    padding: "32px",
    width: "400px"
  }}>
      <Row>
        <Alert title="Info">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Success" variant="success">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Warning" variant="warning">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Danger" variant="danger">
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
    </div>;
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,f,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <div style={{
    padding: "32px",
    width: "400px"
  }}>
      <Row>
        <Alert onClick={handleClick} title="Info" />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Success" variant="success">
          A description of the success alert
        </Alert>
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Danger A Long Title" variant="danger" />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Warning" variant="warning" />
      </Row>
    </div>;
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const le=["Default","WithHandler"];export{c as Default,d as WithHandler,le as __namedExportsOrder,ce as default};
