import{j as e,a as t,F as gt}from"./jsx-runtime-a888423b.js";import{r as w}from"./index-8db94870.js";import{s as R}from"./styled-components.browser.esm-05bde203.js";import{I as m}from"./Input-771d9dff.js";import{T as V}from"./Toggle-069a6e25.js";import{T as d}from"./Text-f6b55a62.js";import{H as u}from"./Help-964e06d0.js";import{u as o}from"./useTooltip-035e2c84.js";import{B as S}from"./BalanceInput-4ba1fc61.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-e70cc8d9.js";import"./index.esm-073a6cf8.js";import"./Box-f877d5fa.js";import"./index.esm-8c5d6e7e.js";import"./motion-minimal-b8fc2ac8.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./Svg-f122668c.js";import"./index-8ce4a492.js";import"./usePopper-eec57ba6.js";import"./lib-98203da3.js";import"./debounce-2c70bf35.js";import"./toNumber-1b8e5138.js";import"./getPortalRoot-b8664777.js";import"./isTouchDevice-38021306.js";import"./index-ba04c57b.js";import"./features-animation-7b2a34c9.js";import"./IconButton-ad080da8.js";import"./Button-1b68a01e.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./SwapVert-b7e10d21.js";const p=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,l=R.div`
  background-color: #1fc7d4;
  width: 160px;
  height: 160px;
  border-radius: 8px;
`,ft=R.div`
  padding: 64px 120px;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(4, 200px);
`,H=R.div`
  width: 300px;
  margin: 0 auto;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(70, 70, 80, 0.2) 0px 7px 29px 0px;
`,B=R.div`
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Qt={title:"Hooks/useTooltip"},v=()=>{const{targetRef:n,tooltip:i}=o("top-start",{placement:"top-start"}),{targetRef:r,tooltip:a}=o("top",{placement:"top"}),{targetRef:s,tooltip:c}=o("top-end",{placement:"top-end"}),{targetRef:g,tooltip:f}=o("left-start",{placement:"left-start"}),{targetRef:h,tooltip:y}=o("left",{placement:"left"}),{targetRef:Z,tooltip:$}=o("left-end",{placement:"left-end"}),{targetRef:tt,tooltip:et}=o("right-start",{placement:"right-start"}),{targetRef:ot,tooltip:nt}=o("right",{placement:"right"}),{targetRef:it,tooltip:rt}=o("right-end",{placement:"right-end"}),{targetRef:lt,tooltip:pt}=o("bottom-start",{placement:"bottom-start"}),{targetRef:at,tooltip:st}=o("bottom",{placement:"bottom"}),{targetRef:ct,tooltip:dt}=o("bottom-end",{placement:"bottom-end"});return e(ft,{children:[e(p,{children:[t(l,{ref:n}),i]}),e(p,{children:[t(l,{ref:r}),a]}),e(p,{children:[t(l,{ref:s}),c]}),e(p,{children:[t(l,{ref:g}),f]}),t("div",{}),e(p,{children:[t(l,{ref:tt}),et]}),e(p,{children:[t(l,{ref:h}),y]}),t("div",{}),e(p,{children:[t(l,{ref:ot}),nt]}),e(p,{children:[t(l,{ref:Z}),$]}),t("div",{}),e(p,{children:[t(l,{ref:it}),rt]}),e(p,{children:[t(l,{ref:lt}),pt]}),e(p,{children:[t(l,{ref:at}),st]}),e(p,{children:[t(l,{ref:ct}),dt]})]})},x=()=>{const{tooltipVisible:n,targetRef:i,tooltip:r}=o("You clicked me!",{placement:"right",trigger:"click"}),{tooltipVisible:a,targetRef:s,tooltip:c}=o("Hovering",{placement:"right",trigger:"hover"}),{tooltipVisible:g,targetRef:f,tooltip:h}=o("You focused me!",{placement:"right",trigger:"focus"});return e("div",{style:{display:"flex",flexDirection:"column",height:"300px",width:"200px",justifyContent:"space-evenly"},children:[t(m,{ref:i,placeholder:"click"}),n&&r,t(m,{ref:s,placeholder:"hover"}),a&&c,t(m,{ref:f,placeholder:"focus"}),g&&h]})},b=()=>{const[n,i]=w.useState(!1),[r,a]=w.useState(!1),{tooltipVisible:s,targetRef:c,tooltip:g}=o("You clicked on the help icon but the card did not expand",{placement:"right",trigger:"click"}),{tooltipVisible:f,targetRef:h,tooltip:y}=o("You hovered over the help icon",{placement:"right",trigger:"hover"});return e("div",{style:{display:"flex",flexDirection:"column",height:"600px",width:"500px",justifyContent:"space-evenly"},children:[t(d,{children:"Events do not propagate to other elements in the tree. This helps to not cause unwanted behaviour like expanding the cards when clicking on the tooltip target."}),e(H,{onClick:()=>i(!n),children:[e(B,{children:["On click ",n?"▴":"▾",t("span",{ref:c,children:t(u,{})})]}),n&&t("div",{style:{margin:"15px 0"},children:"You clicked on the header but not on the help icon inside the header"}),s&&g]}),t(d,{children:"On touch screen devices hover interactions are also properly handled with `touchstart` and `touchend` events (`mouseenter` and `mouseleave` cause unwanted behaviour on some mobile browsers)."}),e(H,{onClick:()=>a(!r),children:[e(B,{children:["On hover ",r?"▴":"▾",t("span",{ref:h,children:t(u,{})})]}),r&&t("div",{style:{margin:"15px 0"},children:"On mobile hovering (or more specifically touching and holding) over the help icon does not trigger expansion of this card"}),f&&y]})]})},T=()=>{const{tooltipVisible:n,targetRef:i,tooltip:r}=o("Just default tooltip",{placement:"top-start"}),{tooltipVisible:a,targetRef:s,tooltip:c}=o("Didn't you know that 6 comes before 7?",{placement:"top-start",arrowPadding:{right:221},tooltipOffset:[0,-8]});return e("div",{style:{width:"500px",height:"500px"},children:[t(d,{fontSize:"20px",children:"Hover over inputs"}),t(d,{bold:!0,children:"Default placement"}),t(m,{ref:i,value:"0x1234567890000"}),n&&r,t(d,{bold:!0,children:"Fine tuned arrow placement"}),t(m,{ref:s,value:"0x1234576890000"}),a&&c]})},E=()=>{const{targetRef:n,tooltip:i}=o("All tooltips flip automatically when you scroll",{placement:"top"});return e("div",{style:{padding:"200px",width:"500px",height:"2000px"},children:[t(l,{ref:n}),i]})},C=()=>{const{targetRef:n,tooltip:i,tooltipVisible:r}=o("I should not touch the edge of the screen",{placement:"top",trigger:"click"}),{targetRef:a,tooltip:s,tooltipVisible:c}=o("I should not touch the edge of the screen",{placement:"top",trigger:"click"}),{targetRef:g,tooltip:f,tooltipVisible:h}=o("I should not touch the edge of the screen",{placement:"top",trigger:"click"});return e("div",{style:{padding:"16px",height:"800px",backgroundColor:"#EEE"},children:[t(d,{children:"This story can be used to visually tooltip behavior when the target element is positioned close to the screen edge. Open this screen on the phone or in browser with responsive mode. Tooltips should not touch the screen edge."}),e("div",{style:{display:"flex",justifyContent:"space-between",padding:"24px"},children:[t("span",{ref:n,children:t(u,{})}),r&&i,t("span",{ref:g,children:t(u,{})}),h&&f,t("span",{ref:a,children:t(u,{})}),c&&s]})]})},k=()=>{const n=e(gt,{children:[t(d,{children:"Tooltips have inverted theme"}),t(V,{}),t(S,{value:"1.0",currencyValue:"~623.45 USD",placeholder:"0.0"})]}),{targetRef:i,tooltip:r}=o(n,{placement:"bottom"});return e("div",{style:{padding:"60px 25px",width:"550px",display:"flex",gap:"15px"},children:[e("div",{style:{flex:"1"},children:[t(d,{children:"Current theme looks like this"}),t(V,{}),t(S,{value:"1.0",currencyValue:"~623.45 USD",placeholder:"0.0"})]}),t("div",{style:{flex:"1",textAlign:"center"},children:t("span",{ref:i,children:t(u,{})})}),r]})};var F,G,I;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  // Trigger doesn't matter in this story, it just shows tooltips no matter what
  // TOP
  const {
    targetRef: targetRefTopStart,
    tooltip: tooltipTopStart
  } = useTooltip("top-start", {
    placement: "top-start"
  });
  const {
    targetRef: targetRefTop,
    tooltip: tooltipTop
  } = useTooltip("top", {
    placement: "top"
  });
  const {
    targetRef: targetRefTopEnd,
    tooltip: tooltipTopEnd
  } = useTooltip("top-end", {
    placement: "top-end"
  });
  // LEFT
  const {
    targetRef: targetRefLeftStart,
    tooltip: tooltipLeftStart
  } = useTooltip("left-start", {
    placement: "left-start"
  });
  const {
    targetRef: targetRefLeft,
    tooltip: tooltipLeft
  } = useTooltip("left", {
    placement: "left"
  });
  const {
    targetRef: targetRefLeftEnd,
    tooltip: tooltipLeftEnd
  } = useTooltip("left-end", {
    placement: "left-end"
  });
  // RIGHT
  const {
    targetRef: targetRefRightStart,
    tooltip: tooltipRightStart
  } = useTooltip("right-start", {
    placement: "right-start"
  });
  const {
    targetRef: targetRefRight,
    tooltip: tooltipRight
  } = useTooltip("right", {
    placement: "right"
  });
  const {
    targetRef: targetRefRightEnd,
    tooltip: tooltipRightEnd
  } = useTooltip("right-end", {
    placement: "right-end"
  });
  // BOTTOM
  const {
    targetRef: targetRefBottomStart,
    tooltip: tooltipBottomStart
  } = useTooltip("bottom-start", {
    placement: "bottom-start"
  });
  const {
    targetRef: targetRefBottom,
    tooltip: tooltipBottom
  } = useTooltip("bottom", {
    placement: "bottom"
  });
  const {
    targetRef: targetRefBottomEnd,
    tooltip: tooltipBottomEnd
  } = useTooltip("bottom-end", {
    placement: "bottom-end"
  });
  return <Container>
      <GridCell>
        <ReferenceElement ref={targetRefTopStart} />
        {tooltipTopStart}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefTop} />
        {tooltipTop}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefTopEnd} />
        {tooltipTopEnd}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefLeftStart} />
        {tooltipLeftStart}
      </GridCell>
      <div />
      <GridCell>
        <ReferenceElement ref={targetRefRightStart} />
        {tooltipRightStart}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefLeft} />
        {tooltipLeft}
      </GridCell>
      <div />
      <GridCell>
        <ReferenceElement ref={targetRefRight} />
        {tooltipRight}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefLeftEnd} />
        {tooltipLeftEnd}
      </GridCell>
      <div />
      <GridCell>
        <ReferenceElement ref={targetRefRightEnd} />
        {tooltipRightEnd}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefBottomStart} />
        {tooltipBottomStart}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefBottom} />
        {tooltipBottom}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefBottomEnd} />
        {tooltipBottomEnd}
      </GridCell>
    </Container>;
}`,...(I=(G=v.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var L,D,O;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    tooltipVisible: tooltipVisibleClick,
    targetRef: targetRefClick,
    tooltip: tooltipClick
  } = useTooltip("You clicked me!", {
    placement: "right",
    trigger: "click"
  });
  const {
    tooltipVisible: tooltipVisibleHover,
    targetRef: targetRefHover,
    tooltip: tooltipHover
  } = useTooltip("Hovering", {
    placement: "right",
    trigger: "hover"
  });
  const {
    tooltipVisible: tooltipVisibleFocus,
    targetRef: targetRefFocus,
    tooltip: tooltipFocus
  } = useTooltip("You focused me!", {
    placement: "right",
    trigger: "focus"
  });
  return <div style={{
    display: "flex",
    flexDirection: "column",
    height: "300px",
    width: "200px",
    justifyContent: "space-evenly"
  }}>
      <Input ref={targetRefClick} placeholder="click" />
      {tooltipVisibleClick && tooltipClick}
      <Input ref={targetRefHover} placeholder="hover" />
      {tooltipVisibleHover && tooltipHover}
      <Input ref={targetRefFocus} placeholder="focus" />
      {tooltipVisibleFocus && tooltipFocus}
    </div>;
}`,...(O=(D=x.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var j,Y,M;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [showExpandedClick, setShowExpandedClick] = useState(false);
  const [showExpandedHover, setShowExpandedHover] = useState(false);
  const {
    tooltipVisible: tooltipVisibleClick,
    targetRef: targetRefClick,
    tooltip: tooltipClick
  } = useTooltip("You clicked on the help icon but the card did not expand", {
    placement: "right",
    trigger: "click"
  });
  const {
    tooltipVisible: tooltipVisibleHover,
    targetRef: targetRefHover,
    tooltip: tooltipHover
  } = useTooltip("You hovered over the help icon", {
    placement: "right",
    trigger: "hover"
  });
  return <div style={{
    display: "flex",
    flexDirection: "column",
    height: "600px",
    width: "500px",
    justifyContent: "space-evenly"
  }}>
      <Text>
        Events do not propagate to other elements in the tree. This helps to not cause unwanted behaviour like expanding
        the cards when clicking on the tooltip target.
      </Text>

      <ExpandableCard onClick={() => setShowExpandedClick(!showExpandedClick)}>
        <ExpandableHeader>
          On click {showExpandedClick ? "▴" : "▾"}
          <span ref={targetRefClick}>
            <HelpIcon />
          </span>
        </ExpandableHeader>
        {showExpandedClick && <div style={{
        margin: "15px 0"
      }}>You clicked on the header but not on the help icon inside the header</div>}
        {tooltipVisibleClick && tooltipClick}
      </ExpandableCard>
      <Text>
        On touch screen devices hover interactions are also properly handled with \`touchstart\` and \`touchend\` events
        (\`mouseenter\` and \`mouseleave\` cause unwanted behaviour on some mobile browsers).
      </Text>
      <ExpandableCard onClick={() => setShowExpandedHover(!showExpandedHover)}>
        <ExpandableHeader>
          On hover {showExpandedHover ? "▴" : "▾"}
          <span ref={targetRefHover}>
            <HelpIcon />
          </span>
        </ExpandableHeader>
        {showExpandedHover && <div style={{
        margin: "15px 0"
      }}>
            On mobile hovering (or more specifically touching and holding) over the help icon does not trigger expansion
            of this card
          </div>}
        {tooltipVisibleHover && tooltipHover}
      </ExpandableCard>
    </div>;
}`,...(M=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var P,A,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const {
    tooltipVisible: tooltipVisibleDefault,
    targetRef: targetRefDefault,
    tooltip: tooltipDefault
  } = useTooltip("Just default tooltip", {
    placement: "top-start"
  });
  const {
    tooltipVisible: tooltipVisibleFineTuned,
    targetRef: targetRefFineTuned,
    tooltip: tooltipFineTuned
  } = useTooltip("Didn't you know that 6 comes before 7?", {
    placement: "top-start",
    arrowPadding: {
      right: 221
    },
    tooltipOffset: [0, -8]
  });
  return <div style={{
    width: "500px",
    height: "500px"
  }}>
      <Text fontSize="20px">Hover over inputs</Text>
      <Text bold>Default placement</Text>
      <Input ref={targetRefDefault} value="0x1234567890000" />
      {tooltipVisibleDefault && tooltipDefault}
      <Text bold>Fine tuned arrow placement</Text>
      <Input ref={targetRefFineTuned} value="0x1234576890000" />
      {tooltipVisibleFineTuned && tooltipFineTuned}
    </div>;
}`,...(U=(A=T.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var _,z,J;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const {
    targetRef,
    tooltip
  } = useTooltip("All tooltips flip automatically when you scroll", {
    placement: "top"
  });
  return <div style={{
    padding: "200px",
    width: "500px",
    height: "2000px"
  }}>
      <ReferenceElement ref={targetRef} />
      {tooltip}
    </div>;
}`,...(J=(z=E.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var q,K,N;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const {
    targetRef: targetRefLeft,
    tooltip: tooltipLeft,
    tooltipVisible: leftVisible
  } = useTooltip("I should not touch the edge of the screen", {
    placement: "top",
    trigger: "click"
  });
  const {
    targetRef: targetRefRight,
    tooltip: tooltipRight,
    tooltipVisible: rightVisible
  } = useTooltip("I should not touch the edge of the screen", {
    placement: "top",
    trigger: "click"
  });
  const {
    targetRef: targetRefMiddle,
    tooltip: tooltipMiddle,
    tooltipVisible: middleVisible
  } = useTooltip("I should not touch the edge of the screen", {
    placement: "top",
    trigger: "click"
  });
  return <div style={{
    padding: "16px",
    height: "800px",
    backgroundColor: "#EEE"
  }}>
      <Text>
        This story can be used to visually tooltip behavior when the target element is positioned close to the screen
        edge. Open this screen on the phone or in browser with responsive mode. Tooltips should not touch the screen
        edge.
      </Text>
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "24px"
    }}>
        <span ref={targetRefLeft}>
          <HelpIcon />
        </span>
        {leftVisible && tooltipLeft}
        <span ref={targetRefMiddle}>
          <HelpIcon />
        </span>
        {middleVisible && tooltipMiddle}
        <span ref={targetRefRight}>
          <HelpIcon />
        </span>
        {rightVisible && tooltipRight}
      </div>
    </div>;
}`,...(N=(K=C.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,W,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const tooltipContent = <>
      <Text>Tooltips have inverted theme</Text>
      <Toggle />
      <BalanceInput value="1.0" currencyValue="~623.45 USD" placeholder="0.0" />
    </>;
  const {
    targetRef,
    tooltip
  } = useTooltip(tooltipContent, {
    placement: "bottom"
  });
  return <div style={{
    padding: "60px 25px",
    width: "550px",
    display: "flex",
    gap: "15px"
  }}>
      <div style={{
      flex: "1"
    }}>
        <Text>Current theme looks like this</Text>
        <Toggle />
        <BalanceInput value="1.0" currencyValue="~623.45 USD" placeholder="0.0" />
      </div>
      <div style={{
      flex: "1",
      textAlign: "center"
    }}>
        <span ref={targetRef}>
          <HelpIcon />
        </span>
      </div>
      {tooltip}
    </div>;
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const Wt=["Placement","Triggers","EventPropagationAndMobile","FineTuning","Flipping","ScreenEdges","ThemeInversion"];export{b as EventPropagationAndMobile,T as FineTuning,E as Flipping,v as Placement,C as ScreenEdges,k as ThemeInversion,x as Triggers,Wt as __namedExportsOrder,Qt as default};
