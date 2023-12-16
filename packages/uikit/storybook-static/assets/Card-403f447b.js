import{a as l,j as u}from"./jsx-runtime-a888423b.js";import{s as c}from"./index.esm-8c5d6e7e.js";import{s as t,n as p}from"./styled-components.browser.esm-05bde203.js";import{s as f}from"./index.esm-073a6cf8.js";import{p as m}from"./animationToolkit-f78aec88.js";import{B as y}from"./Box-f877d5fa.js";const g=({isActive:e,isSuccess:a,isWarning:n,borderBackground:d,theme:r})=>d||(n?r.colors.warning:a?r.colors.success:e?`linear-gradient(180deg, ${r.colors.primaryBright}, ${r.colors.secondary})`:r.colors.cardBorder),i=t.div.withConfig({shouldForwardProp:c})`
  background: ${g};
  border-radius: ${({theme:e})=>e.radii.card};
  color: ${({theme:e,isDisabled:a})=>e.colors[a?"textDisabled":"text"]};
  overflow: hidden;
  position: relative;

  ${({isActive:e})=>e&&p`
      animation: ${m} 3s ease infinite;
      background-size: 400% 400%;
    `}

  padding: 1px 1px 3px 1px;

  ${f}
`,o=t(y)`
  width: 100%;
  height: 100%;
  overflow: ${({hasCustomBorder:e})=>e?"initial":"inherit"};
  background: ${({theme:e,background:a})=>a??e.card.background};
  border-radius: ${({theme:e})=>e.radii.card};
`;i.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};try{i.displayName="StyledCard",i.__docgenInfo={description:"",displayName:"StyledCard",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledCardInner",o.__docgenInfo={description:"",displayName:"StyledCardInner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({ribbon:e,children:a,background:n,innerCardProps:d,...r})=>l(i,{...r,children:u(o,{...d,background:n,hasCustomBorder:!!r.borderBackground,children:[e,a]})}),$=s;try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean"}},isWarning:{defaultValue:null,description:"",name:"isWarning",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},ribbon:{defaultValue:null,description:"",name:"ribbon",required:!1,type:{name:"ReactNode"}},borderBackground:{defaultValue:null,description:"",name:"borderBackground",required:!1,type:{name:"string"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},innerCardProps:{defaultValue:null,description:"",name:"innerCardProps",required:!1,type:{name:"BoxProps"}}}}}catch{}export{$ as C};
