import{a as t,j as V}from"./jsx-runtime-a888423b.js";import{r as c}from"./index-8db94870.js";import{S as m,a as _}from"./Skeleton-958caab1.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-8c5d6e7e.js";import"./index.esm-073a6cf8.js";import"./styled-components.browser.esm-05bde203.js";import"./animationToolkit-f78aec88.js";import"./motion-minimal-b8fc2ac8.js";import"./index-ba04c57b.js";import"./features-animation-7b2a34c9.js";const J={title:"Components/Skeleton",component:m,argTypes:{width:{control:"number"},height:{control:"number"}}},r=e=>t(m,{...e}),s=r.bind({});s.args={width:40,height:40,variant:"circle"};const a=r.bind({});a.args={width:100,height:200,animation:"waves"};const n=e=>V("div",{style:{width:200,height:90},children:[" ",t(m,{...e})," "]}),o=e=>{const[u,d]=c.useState(!0);return c.useEffect(()=>{const l=setTimeout(()=>{d(!1)},2e3);return()=>clearTimeout(l)},[]),t("h1",{style:{width:200},children:u?t(m,{...e}):"H1"})},i=e=>{const[u,d]=c.useState(!0);return c.useEffect(()=>{const l=setTimeout(()=>{d(!1)},2e3);return()=>clearTimeout(l)},[]),t(_,{...e,isDataReady:!u,width:200,children:t("h1",{children:"H1"})})};var p,g,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Skeleton {...args} />;
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,f,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <Skeleton {...args} />;
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,w,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Skeleton {...args} />;
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var v,y,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <div style={{
    width: 200,
    height: 90
  }}>
      {" "}
      <Skeleton {...args} />{" "}
    </div>;
}`,...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var L,b,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return <h1 style={{
    width: 200
  }}>{loading ? <Skeleton {...args} /> : "H1"}</h1>;
}`,...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var D,H,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return <SkeletonV2 {...args} isDataReady={!loading} width={200}>
      <h1>H1</h1>
    </SkeletonV2>;
}`,...(j=(H=i.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const K=["Default","Avatar","Animation","ParentSize","Text","TextWithTransition"];export{a as Animation,s as Avatar,r as Default,n as ParentSize,o as Text,i as TextWithTransition,K as __namedExportsOrder,J as default};
