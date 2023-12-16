import{a as c}from"./jsx-runtime-a888423b.js";import{r as i}from"./index-8db94870.js";import{M as h}from"./context-f318d187.js";import{s as v}from"./styled-components.browser.esm-05bde203.js";import{u as x}from"./useMatchBreakpoints-59a9bcd0.js";const o=v.div`
  position: relative;

  ${({$isActive:e,$variant:a,theme:t})=>e&&a==="subMenu"&&`
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${t.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`,$=v.a`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({theme:e,$isActive:a})=>a?e.colors.secondary:e.colors.textSubtle};
  font-size: 16px;
  font-weight: ${({$isActive:e})=>e?"600":"400"};
  opacity: ${({$isDisabled:e})=>e?.5:1};
  pointer-events: ${({$isDisabled:e})=>e?"none":"inherit"};

  ${({$statusColor:e,theme:a})=>e&&`
    &:after {
      content: "";
      border-radius: 100%;
      background: ${a.colors[e]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({$variant:e})=>e==="default"?`
    padding: 0 16px;
    height: 48px;
  `:`
    padding-left: 4px;
    padding-right: 4px;

    height: 42px;
  `}

  &:hover {
    background: ${({theme:e})=>e.colors.tertiary};
    ${({$variant:e})=>e==="default"&&"border-radius: 16px;"};
  }
`,M=$;try{o.displayName="StyledMenuItemContainer",o.__docgenInfo={description:"",displayName:"StyledMenuItemContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({children:e,href:a,isActive:t=!1,isDisabled:f=!1,variant:d="default",scrollLayerRef:r,statusColor:m,...g})=>{const{isMobile:p}=x(),u=i.useRef(null),{linkComponent:y}=i.useContext(h),b=a?{as:y,href:a}:{as:"div"};return i.useEffect(()=>{if(!p||!t||!u.current||!(r!=null&&r.current))return;const n=r.current,l=u.current.parentNode;l&&(n.scrollLeft>l.offsetLeft||n.scrollLeft+n.offsetWidth<l.offsetLeft+l.offsetWidth)&&(n.scrollLeft=l.offsetLeft)},[t,p,r]),c(o,{$isActive:t,$variant:d,ref:u,children:c(M,{...b,$isActive:t,$isDisabled:f,$variant:d,$statusColor:m,...g,children:e})})},V=s;try{s.displayName="MenuItem",s.__docgenInfo={description:"",displayName:"MenuItem",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"subMenu"'}]}},statusColor:{defaultValue:null,description:"",name:"statusColor",required:!1,type:{name:"enum",value:[{value:'"gold"'},{value:'"silver"'},{value:'"white"'},{value:'"yellow"'},{value:'"background"'},{value:'"text"'},{value:'"input"'},{value:'"disabled"'},{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"secondary80"'},{value:'"backgroundDisabled"'},{value:'"backgroundAlt"'},{value:'"backgroundAlt2"'},{value:'"cardBorder"'},{value:'"contrast"'},{value:'"dropdown"'},{value:'"dropdownDeep"'},{value:'"invertedContrast"'},{value:'"inputSecondary"'},{value:'"tertiary"'},{value:'"text99"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBubblegum"'},{value:'"gradientInverseBubblegum"'},{value:'"gradientCardHeader"'},{value:'"gradientBlue"'},{value:'"gradientViolet"'},{value:'"gradientVioletAlt"'},{value:'"gradientGold"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"overlay"'},{value:'"bronze"'},{value:'"failure"'},{value:'"failure33"'},{value:'"primary"'},{value:'"primary0f"'},{value:'"primary3D"'},{value:'"primaryBright"'},{value:'"primaryDark"'},{value:'"success19"'},{value:'"warning2D"'},{value:'"warning33"'}]}},scrollLayerRef:{defaultValue:null,description:"",name:"scrollLayerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}}}catch{}export{V as M};
