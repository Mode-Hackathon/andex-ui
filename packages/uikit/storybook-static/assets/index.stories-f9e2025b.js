import{a as e,j as a}from"./jsx-runtime-a888423b.js";import{r as b}from"./index-8db94870.js";import{J as T}from"./styled-components.browser.esm-05bde203.js";import{B as i}from"./Button-1b68a01e.js";import{H as w}from"./Heading-def4fbf7.js";import{M as r,u}from"./useModal-bc77086c.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./externalLinkProps-0f3801f5.js";import"./index.esm-073a6cf8.js";import"./vars.css-8b7ea31e.js";/* empty css                            */import"./Text-f6b55a62.js";import"./index.esm-8c5d6e7e.js";import"./getThemeValue-6fc24f62.js";import"./get-8ca00567.js";import"./isObject-5487ad91.js";import"./ModalContext-901e5072.js";import"./iframe-13deebe4.js";import"../sb-preview/runtime.js";import"./extends-98964cd2.js";import"./index-8ce4a492.js";import"./index-b1f965a7.js";import"./lib-98203da3.js";import"./styles-278c0224.js";import"./animationToolkit-f78aec88.js";import"./getPortalRoot-b8664777.js";import"./Flex-e70cc8d9.js";import"./Box-f877d5fa.js";import"./motion-minimal-b8fc2ac8.js";import"./IconButton-ad080da8.js";import"./Close-621ed1bc.js";import"./Svg-f122668c.js";import"./ArrowBack-df32b0be.js";import"./Provider-7e243320.js";import"./index-ba04c57b.js";import"./Overlay-c4441d34.js";import"./useMatchBreakpoints-59a9bcd0.js";const Pe={title:"Widgets/Modal",component:r,argTypes:{}},h=({title:t,onDismiss:s,...n})=>a(r,{title:t,onDismiss:s,...n,children:[e(w,{children:t}),e(i,{children:"This button Does nothing"})]}),l=()=>{const t=T(),[s]=u(e(h,{title:"Modal 1"})),[n]=u(e(h,{title:"Modal 2"})),[o]=u(e(h,{title:"Modal 3",headerBackground:t.colors.gradientCardHeader}));return a("div",{children:[e(i,{onClick:s,children:"Open modal 1"}),e(i,{onClick:n,children:"Open modal 2"}),e(i,{onClick:o,children:"Open modal with background"})]})},c=()=>{const[t]=u(e(h,{title:"Modal 1"}),!1);return e("div",{children:e(i,{onClick:t,children:"Disabled overlay click"})})},d=()=>{const t=({title:n,onDismiss:o})=>e(r,{title:n,onDismiss:o,onBack:()=>1,hideCloseButton:!0,children:e(i,{onClick:o,variant:"text",children:"Consumer can still close it."})}),[s]=u(e(t,{title:"Modal with no X"}),!1);return e(i,{onClick:s,children:"Only Back Button"})},m=()=>{const t=({title:n,onDismiss:o})=>a(r,{title:n,headerBackground:"primary",onDismiss:o,children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros, eget sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod ante mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper nibh sed sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices. Aliquam in eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac vulputate libero, id vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin non elementum nec, tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum sodales suscipit eu nec lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo et, tempor quis ligula. Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros, eget sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod ante mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper nibh sed sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices. Aliquam in eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac vulputate libero, id vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin non elementum nec, tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum sodales suscipit eu nec lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo et, tempor quis ligula. Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra mauris.",e(i,{children:"This button Does nothing"})]}),[s]=u(e(t,{title:"Modal with custom header"}));return e(i,{onClick:s,children:"Modal with custom header"})},p=()=>{const[t,s]=b.useState(0);b.useEffect(()=>{const v=setInterval(()=>{s(g=>g+1)},500);return()=>clearInterval(v)},[]);const n=({title:v,count:g,onDismiss:C})=>a(r,{title:v,onDismiss:C,children:[a("h2",{children:["Counter: ",g]}),e(i,{mt:"8px",onClick:C,children:"Close"})]}),[o]=u(e(n,{title:`[${t}] Modal that reacts to outside change`,count:t}),!0,!0,"reactiveModal"),[M]=u(e(n,{title:`[${t}] Modal that does NOT react to outside change`,count:t}));return a("div",{children:[a("h2",{children:["Counter: ",t]}),e(i,{onClick:o,children:"Reactive modal"}),e(i,{ml:"16px",onClick:M,children:"Non-reactive modal"})]})};var B,P,f;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  const [onPresent3] = useModal(<CustomModal title="Modal 3" headerBackground={theme.colors.gradientCardHeader} />);
  return <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
      <Button onClick={onPresent3}>Open modal with background</Button>
    </div>;
}`,...(f=(P=l.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var k,q,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false);
  return <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>;
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var O,R,x;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const BackButtonModal: React.FC<React.PropsWithChildren<ModalProps>> = ({
    title,
    onDismiss
  }) => {
    const handleOnBack = () => {
      return 1;
    };
    return <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
        <Button onClick={onDismiss} variant="text">
          Consumer can still close it.
        </Button>
      </Modal>;
  };
  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false);
  return <Button onClick={onPresent1}>Only Back Button</Button>;
}`,...(x=(R=d.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var N,j,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const CustomHeaderModal: React.FC<React.PropsWithChildren<ModalProps>> = ({
    title,
    onDismiss
  }) => {
    return <Modal title={title} headerBackground="primary" onDismiss={onDismiss}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros, eget
        sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in
        tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod
        ante mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper
        nibh sed sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices.
        Aliquam in eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac
        vulputate libero, id vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin
        non elementum nec, tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum
        sodales suscipit eu nec lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo
        et, tempor quis ligula. Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra
        mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros,
        eget sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in
        tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod
        ante mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper
        nibh sed sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices.
        Aliquam in eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac
        vulputate libero, id vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin
        non elementum nec, tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum
        sodales suscipit eu nec lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo
        et, tempor quis ligula. Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra
        mauris.
        <Button>This button Does nothing</Button>
      </Modal>;
  };
  const [onPresent1] = useModal(<CustomHeaderModal title="Modal with custom header" />);
  return <Button onClick={onPresent1}>Modal with custom header</Button>;
}`,...(I=(j=m.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,y,H;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  const ReactiveModal: React.FC<React.PropsWithChildren<ModalProps & {
    count: number;
  }>> = ({
    title,
    count,
    onDismiss
  }) => {
    return <Modal title={title} onDismiss={onDismiss}>
        <h2>Counter: {count}</h2>
        <Button mt="8px" onClick={onDismiss}>
          Close
        </Button>
      </Modal>;
  };
  const [onPresent1] = useModal(<ReactiveModal title={\`[\${counter}] Modal that reacts to outside change\`} count={counter} />, true, true, "reactiveModal");
  const [onPresent2] = useModal(<ReactiveModal title={\`[\${counter}] Modal that does NOT react to outside change\`} count={counter} />);
  return <div>
      <h2>Counter: {counter}</h2>
      <Button onClick={onPresent1}>Reactive modal</Button>
      <Button ml="16px" onClick={onPresent2}>
        Non-reactive modal
      </Button>
    </div>;
}`,...(H=(y=p.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const fe=["Default","DisableOverlayClick","WithBackButton","WithCustomHeader","ReactingToOutsideChanges"];export{l as Default,c as DisableOverlayClick,p as ReactingToOutsideChanges,d as WithBackButton,m as WithCustomHeader,fe as __namedExportsOrder,Pe as default};
