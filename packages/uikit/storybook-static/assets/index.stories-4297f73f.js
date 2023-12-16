import{j as c,a as t,F as b}from"./jsx-runtime-a888423b.js";import{r as f}from"./index-8db94870.js";import{s as u}from"./styled-components.browser.esm-05bde203.js";import"./_commonjsHelpers-042e6b4d.js";const m={SM:"sm",MD:"md",LG:"lg"},x={sm:{pancakeSize:"14px",travelDistance:"14px",toggleHeight:"20px",toggleWidth:"36px",pancakeThickness:"1px",pancakeTwoOffset:"0px",pancakeThreeOffset:"-3px",butterTop:"3px",butterLeft:"10px",butterWidth:"6px",butterHeight:"5px",butterThickness:"0.5px",butterRadius:"2px",butterSmearOneTop:"10px",butterSmearOneLeft:"2.5px",butterSmearTwoTop:"11px",butterSmearTwoRight:"2.5px"},md:{pancakeSize:"24px",travelDistance:"24px",toggleHeight:"32px",toggleWidth:"56px",pancakeThickness:"1.5px",pancakeTwoOffset:"-1px",pancakeThreeOffset:"-6px",butterTop:"5px",butterLeft:"13px",butterWidth:"10px",butterHeight:"8px",butterThickness:"0.75px",butterRadius:"3px",butterSmearOneTop:"15px",butterSmearOneLeft:"3.75px",butterSmearTwoTop:"16px",butterSmearTwoRight:"3.75px"},lg:{pancakeSize:"31px",travelDistance:"31px",toggleHeight:"40px",toggleWidth:"72px",pancakeThickness:"2px",pancakeTwoOffset:"-3px",pancakeThreeOffset:"-8px",butterTop:"3px",butterLeft:"16px",butterWidth:"12px",butterHeight:"11px",butterThickness:"1px",butterRadius:"4px",butterSmearOneTop:"20px",butterSmearOneLeft:"5px",butterSmearTwoTop:"22px",butterSmearTwoRight:"5px"}},e=a=>({scale:n=m.LG})=>x[n][a],i=u.div`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .pancakes {
    position: absolute;
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .pancake {
    background: #e27c31;
    border-radius: 50%;
    width: ${e("pancakeSize")};
    height: ${e("pancakeSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${e("pancakeThickness")} 0 ${e("pancakeThickness")} #fbbe7c;
  }

  .pancake:nth-child(1) {
    background: ${({theme:a})=>a.pancakeToggle.handleBackground};
    box-shadow: 0 ${e("pancakeThickness")} 0 ${e("pancakeThickness")}
      ${({theme:a})=>a.pancakeToggle.handleShadow};
  }

  .pancake:nth-child(2) {
    left: 0;
    top: ${e("pancakeTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .pancake:nth-child(3) {
    top: ${e("pancakeThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .pancake:nth-child(3):before,
  .pancake:nth-child(3):after {
    content: "";
    position: absolute;
    background: #ef8927;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .pancake:nth-child(3):before {
    top: ${e("butterSmearOneTop")};
    left: ${e("butterSmearOneLeft")};
  }

  .pancake:nth-child(3):after {
    top: ${e("butterSmearTwoTop")};
    right: ${e("butterSmearTwoRight")};
  }

  .butter {
    width: ${e("butterWidth")};
    height: ${e("butterHeight")};
    background: #fbdb60;
    top: ${e("butterTop")};
    left: ${e("butterLeft")};
    position: absolute;
    border-radius: ${e("butterRadius")};
    box-shadow: 0 ${e("butterThickness")} 0 ${e("butterThickness")} #d67823;
    transform: scale(0);
    transition: 0.2s ease;
  }
`,l=u.input`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({theme:a})=>a.shadows.focus};
  }

  &:checked + label .pancakes {
    transform: translateX(${e("travelDistance")});
  }

  &:checked + label .pancake:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${e("pancakeThickness")} 0 ${e("pancakeThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .pancake:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .pancake:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`,p=u.label`
  width: ${e("toggleWidth")};
  height: ${e("toggleHeight")};
  background: ${({theme:a,checked:n})=>a.colors[n?"success":"input"]};
  box-shadow: ${({theme:a})=>a.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;try{i.displayName="PancakeStack",i.__docgenInfo={description:"",displayName:"PancakeStack",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="PancakeInput",l.__docgenInfo={description:"",displayName:"PancakeInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="PancakeLabel",p.__docgenInfo={description:"",displayName:"PancakeLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const d=({checked:a,scale:n=m.LG,...r})=>c(i,{scale:n,children:[t(l,{id:r.id||"pancake-toggle",scale:n,type:"checkbox",checked:a,...r}),t(p,{scale:n,checked:a,htmlFor:r.id||"pancake-toggle",children:c("div",{className:"pancakes",children:[t("div",{className:"pancake"}),t("div",{className:"pancake"}),t("div",{className:"pancake"}),t("div",{className:"butter"})]})})]}),o=d;try{d.displayName="PancakeToggle",d.__docgenInfo={description:"",displayName:"PancakeToggle",props:{scale:{defaultValue:{value:"lg"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"sm"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Components/PancakeToggle",component:o},s=()=>{const[a,n]=f.useState(!1),r=()=>n(!a);return c(b,{children:[t("div",{style:{marginBottom:"32px"},children:t(o,{checked:a,onChange:r})}),t("div",{style:{marginBottom:"32px"},children:t(o,{checked:a,onChange:r,scale:"md"})}),t("div",{children:t(o,{checked:a,onChange:r,scale:"sm"})})]})};var h,k,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked(!isChecked);
  return <>
      <div style={{
      marginBottom: "32px"
    }}>
        <PancakeToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{
      marginBottom: "32px"
    }}>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>;
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const S=["Default"];export{s as Default,S as __namedExportsOrder,w as default};
