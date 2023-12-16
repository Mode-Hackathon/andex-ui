import{s as t}from"./styled-components.browser.esm-05bde203.js";import{T as s}from"./Text-f6b55a62.js";const p=({$isActive:e,disabled:r,theme:a})=>r?a.colors.textDisabled:e?a.colors.secondary:a.colors.textSubtle,o=t("button").withConfig({shouldForwardProp:e=>!["confirmModalId"].includes(e)})`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({theme:e,disabled:r,$isActive:a})=>p({theme:e,disabled:r,$isActive:a})};
  cursor: pointer;
  font-weight: ${({$isActive:e=!1})=>e?"600":"400"};
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  pointer-events: ${({disabled:e})=>e?"none":"inherit"};

  &:is(button) {
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  }

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.tertiary};
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`,d=t.div`
  &:first-child ${o} {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child ${o} {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,i=t.hr`
  border-color: ${({theme:e})=>e.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`,n=t.div`
  background-color: ${({theme:e})=>e.card.background};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  border-radius: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  margin-bottom: 0;
  width: ${({$isBottomNav:e})=>e?"calc(100% - 32px)":"280px"};
  visibility: visible;
  z-index: 1001;

  ${({$isOpen:e})=>!e&&`
    pointer-events: none;
    visibility: hidden;
  `}
`,l=t(s)`
  border-radius: ${({theme:e})=>e.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({theme:e,color:r})=>e.colors[r]};
  box-shadow: none;
  color: ${({theme:e,color:r})=>e.colors[r]};
  margin-left: 8px;
`;try{o.displayName="DropdownMenuItem",o.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledDropdownMenuItemContainer",d.__docgenInfo={description:"",displayName:"StyledDropdownMenuItemContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="DropdownMenuDivider",i.__docgenInfo={description:"",displayName:"DropdownMenuDivider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="StyledDropdownMenu",n.__docgenInfo={description:"",displayName:"StyledDropdownMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="LinkStatus",l.__docgenInfo={description:"",displayName:"LinkStatus",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}var u=(e=>(e[e.INTERNAL_LINK=0]="INTERNAL_LINK",e[e.EXTERNAL_LINK=1]="EXTERNAL_LINK",e[e.BUTTON=2]="BUTTON",e[e.DIVIDER=3]="DIVIDER",e))(u||{});export{u as D,l as L,n as S,d as a,o as b,i as c};
