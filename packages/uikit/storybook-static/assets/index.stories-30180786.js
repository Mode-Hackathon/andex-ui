import{j as c,a as o}from"./jsx-runtime-a888423b.js";import{l as n}from"./colors-b5755d7b.js";import{u as v}from"./useTooltip-035e2c84.js";import{F as p}from"./Flex-e70cc8d9.js";import{I}from"./Info-c3889864.js";import{s as h}from"./styled-components.browser.esm-05bde203.js";import{l as S}from"./colors-70c6af9e.js";import{C as k}from"./CircleOutline-b54933da.js";import{L as C}from"./Logo-5fd66d13.js";import{C as w}from"./CheckmarkCircleFill-489a77ea.js";import{T as d}from"./Text-f6b55a62.js";import{B as N}from"./Box-f877d5fa.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./usePopper-eec57ba6.js";import"./lib-98203da3.js";import"./debounce-2c70bf35.js";import"./isObject-5487ad91.js";import"./toNumber-1b8e5138.js";import"./getPortalRoot-b8664777.js";import"./isTouchDevice-38021306.js";import"./motion-minimal-b8fc2ac8.js";import"./index-ba04c57b.js";import"./features-animation-7b2a34c9.js";import"./index.esm-073a6cf8.js";import"./Svg-f122668c.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./index.esm-8c5d6e7e.js";const m=({text:e,iconColor:t="textSubtle",...l})=>{const{targetRef:i,tooltip:a,tooltipVisible:s}=v(e,{});return c(p,{...l,alignItems:"center",children:[s&&a,o(p,{ref:i,alignItems:"center",children:o(I,{color:t})})]})},P=m;try{m.displayName="InfoTooltip",m.__docgenInfo={description:"",displayName:"InfoTooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},iconColor:{defaultValue:{value:"textSubtle"},description:"",name:"iconColor",required:!1,type:{name:"string"}}}}}catch{}const B=h.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`,D=h.li`
  display: flex;
  position: relative;
  margin-bottom: 14px;

  &:after {
    content: "";
    position: absolute;
    left: 9px;
    top: 26px;
    width: 2px;
    height: 10px;
    background-color: ${({theme:e,$useDark:t})=>t?e.colors.textSubtle:S.textSubtle};
  }

  &:last-child:after {
    display: none;
  }
`,F=({eventStatus:e,useDark:t})=>e==="upcoming"?t?"textDisabled":n.textDisabled:e==="live"?"success":t?"textSubtle":n.textSubtle,u=({events:e,useDark:t=!0})=>o(B,{children:e.map(({text:l,status:i,altText:a,infoText:s})=>{const T=i==="upcoming",y=i==="live",_=i==="past";return c(D,{$useDark:t,children:[c(p,{mr:"10px",alignItems:"center",children:[T&&o(k,{color:t?"textDisabled":n.textDisabled}),y&&o(C,{}),_&&o(w,{color:t?"textSubtle":n.textSubtle})]}),o(d,{color:F({eventStatus:i,useDark:t}),bold:!0,children:l}),a&&o(d,{color:"warning",ml:"2px",bold:!0,children:a}),s&&o(P,{text:s,ml:"10px",iconColor:t?"textSubtle":n.textSubtle})]},l)})}),b=u;try{u.displayName="Timeline",u.__docgenInfo={description:"",displayName:"Timeline",props:{events:{defaultValue:null,description:"",name:"events",required:!0,type:{name:"Event[]"}},useDark:{defaultValue:{value:"true"},description:"",name:"useDark",required:!1,type:{name:"boolean"}}}}}catch{}const de={title:"Components/Timeline",component:b},M=[{status:"past",text:"Get Ready",infoText:"Activate your profile and make sure you have at least 5 BNB in your wallet to buy a Minting Ticket."},{status:"live",text:"Pre-Sale: Now Live",infoText:"During this phase, any wallet holding a Minting Ticket can redeem their ticket to mint a Pancake Squad NFT."},{status:"upcoming",text:"Public-Sale:",altText:"1d 4h 34m",infoText:"Public Sale: Any wallet with an active Pancake Profile can purchase up to 20 Minting Tickets, while stocks last."},{status:"upcoming",text:"Mint",infoText:"Pre-sale: Wallets which held “Gen 0” Pancake Bunnies NFTs (bunnyID 0,1,2,3,4) at block xxxxxxx can purchase one Minting Ticket per Gen 0 NFT."}],q=e=>o(N,{p:"20px",children:o(b,{...e})}),r=q.bind({});r.args={events:M,useDark:!1};var x,f,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Box p="20px">
      <Timeline {...args} />
    </Box>;
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const xe=["Default"];export{r as Default,xe as __namedExportsOrder,de as default};
