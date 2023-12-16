import{a as e,j as s,F as M}from"./jsx-runtime-a888423b.js";import{R as I,r as g}from"./index-8db94870.js";import{s as f}from"./styled-components.browser.esm-05bde203.js";import{s as _,v as C}from"./index.esm-073a6cf8.js";import{B as T}from"./Box-f877d5fa.js";import{T as w}from"./Text-f6b55a62.js";import{I as E}from"./Warning-aed54631.js";import{I as D}from"./Error-413c24a1.js";import{C as V}from"./CheckmarkCircleFill-489a77ea.js";import{I as L}from"./InfoFilled-a7fe031e.js";import{H as U}from"./Help-964e06d0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./Svg-f122668c.js";const k={warning:{background:"#FFB23719",borderColor:"warning"},danger:{background:"#ED4B9E19",borderColor:"failure"},success:{background:"rgba(49, 208, 170, 0.1)",borderColor:"success"},primary:{background:"rgba(118, 69, 217, 0.1)",borderColor:"secondary"}},x=k,v=I.createContext({variant:"success"}),F={warning:E,danger:D,success:V,primary:L},N=f.div`
  background-color: gray;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;

  ${_}
  ${C({variants:x})}
`,$=f.div`
  display: flex;
`,B={warning:"#D67E0A",success:"#129E7D",danger:"failure",primary:"text"},a=({children:t,...i})=>{const o=g.useContext(v);return e(w,{fontSize:"14px",color:B[o==null?void 0:o.variant],...i,children:t})},u=({children:t,variant:i,icon:o,action:l,actionInline:c,showIcon:b=!0,...q})=>{const h=F[i],y=g.useMemo(()=>({variant:i}),[i]);return e(v.Provider,{value:y,children:s(N,{variant:i,...q,children:[s($,{children:[b&&e(T,{mr:"12px",children:o??e(h,{color:x[i].borderColor,width:"24px"})}),t,c&&l]}),!c&&l]})})},n=u;try{a.displayName="MessageText",a.__docgenInfo={description:"",displayName:"MessageText",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"",name:"ellipsis",required:!1,type:{name:"boolean"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}}}}}catch{}try{u.displayName="Message",u.__docgenInfo={description:"",displayName:"Message",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},actionInline:{defaultValue:null,description:"",name:"actionInline",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Message",component:n,argTypes:{}},r=()=>s(M,{children:[e(n,{variant:"warning",mb:"16px",children:e(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(n,{variant:"danger",mb:"16px",children:e(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(n,{variant:"warning",icon:e(U,{width:"24px"}),mb:"16px",children:e(a,{children:"Custom Icon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(n,{variant:"success",children:e(a,{children:"Custom Icon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]});var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <>
      <Message variant="warning" mb="16px">
        <MessageText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </MessageText>
      </Message>
      <Message variant="danger" mb="16px">
        <MessageText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </MessageText>
      </Message>
      <Message variant="warning" icon={<HelpIcon width="24px" />} mb="16px">
        <MessageText>
          Custom Icon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </MessageText>
      </Message>
      <Message variant="success">
        <MessageText>
          Custom Icon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </MessageText>
      </Message>
    </>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const te=["Default"];export{r as Default,te as __namedExportsOrder,ae as default};
