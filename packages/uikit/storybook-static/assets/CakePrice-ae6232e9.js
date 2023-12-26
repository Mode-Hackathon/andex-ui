import{j as n,a}from"./jsx-runtime-a888423b.js";import{R as i}from"./index-8db94870.js";import{s as o}from"./styled-components.browser.esm-05bde203.js";import{L as d}from"./LogoRound-8b1e5485.js";import{T as s}from"./Text-f6b55a62.js";import{S as v}from"./Skeleton-958caab1.js";const c=o.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`,r=({cakePriceUsd:e,color:l="textSubtle",showSkeleton:t=!0,chainId:u})=>e?n(c,{href:`https://andex.vercel.app/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=${u}`,target:"_blank",children:[a(d,{width:"24px",mr:"8px"}),a(s,{color:l,bold:!0,children:`$${e.toFixed(3)}`})]}):t?a(v,{width:80,height:24}):null,h=i.memo(r);try{r.displayName="CakePrice",r.__docgenInfo={description:"",displayName:"CakePrice",props:{color:{defaultValue:{value:"textSubtle"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gold"'},{value:'"silver"'},{value:'"white"'},{value:'"yellow"'},{value:'"background"'},{value:'"text"'},{value:'"input"'},{value:'"disabled"'},{value:'"success"'},{value:'"warning"'},{value:'"secondary"'},{value:'"secondary80"'},{value:'"backgroundDisabled"'},{value:'"backgroundAlt"'},{value:'"backgroundAlt2"'},{value:'"cardBorder"'},{value:'"contrast"'},{value:'"dropdown"'},{value:'"dropdownDeep"'},{value:'"invertedContrast"'},{value:'"inputSecondary"'},{value:'"tertiary"'},{value:'"text99"'},{value:'"textDisabled"'},{value:'"textSubtle"'},{value:'"gradientBubblegum"'},{value:'"gradientInverseBubblegum"'},{value:'"gradientCardHeader"'},{value:'"gradientBlue"'},{value:'"gradientViolet"'},{value:'"gradientVioletAlt"'},{value:'"gradientGold"'},{value:'"gradientBold"'},{value:'"binance"'},{value:'"overlay"'},{value:'"bronze"'},{value:'"failure"'},{value:'"failure33"'},{value:'"primary"'},{value:'"primary0f"'},{value:'"primary3D"'},{value:'"primaryBright"'},{value:'"primaryDark"'},{value:'"success19"'},{value:'"warning2D"'},{value:'"warning33"'}]}},cakePriceUsd:{defaultValue:null,description:"",name:"cakePriceUsd",required:!1,type:{name:"number"}},showSkeleton:{defaultValue:{value:"true"},description:"",name:"showSkeleton",required:!1,type:{name:"boolean"}},chainId:{defaultValue:null,description:"",name:"chainId",required:!0,type:{name:"number"}}}}}catch{}export{h as C};
