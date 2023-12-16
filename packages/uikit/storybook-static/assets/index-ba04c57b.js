import{r as e}from"./index-8db94870.js";import{u as P,f as U,a as A,P as B,L as K,l as I,b as O}from"./motion-minimal-b8fc2ac8.js";function w(){const n=e.useRef(!1);return P(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function S(){const n=w(),[r,t]=e.useState(0),s=e.useCallback(()=>{n.current&&t(r+1)},[r]);return[e.useCallback(()=>U.postRender(s),[s]),r]}class T extends e.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=t.offsetHeight||0,s.width=t.offsetWidth||0,s.top=t.offsetTop,s.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function D({children:n,isPresent:r}){const t=e.useId(),s=e.useRef(null),p=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:a,height:i,top:d,left:h}=p.current;if(r||!s.current||!a||!i)return;s.current.dataset.motionPopId=t;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[r]),e.createElement(T,{isPresent:r,childRef:s,sizeRef:p},e.cloneElement(n,{ref:s}))}const L=({children:n,initial:r,isPresent:t,onExitComplete:s,custom:p,presenceAffectsLayout:a,mode:i})=>{const d=A(G),h=e.useId(),l=e.useMemo(()=>({id:h,initial:r,isPresent:t,custom:p,onExitComplete:o=>{d.set(o,!0);for(const c of d.values())if(!c)return;s&&s()},register:o=>(d.set(o,!1),()=>d.delete(o))}),a?void 0:[t]);return e.useMemo(()=>{d.forEach((o,c)=>d.set(c,!1))},[t]),e.useEffect(()=>{!t&&!d.size&&s&&s()},[t]),i==="popLayout"&&(n=e.createElement(D,{isPresent:t},n)),e.createElement(B.Provider,{value:l},n)};function G(){return new Map}function H(n){return e.useEffect(()=>()=>n(),[])}const m=n=>n.key||"";function V(n,r){n.forEach(t=>{const s=m(t);r.set(s,t)})}function W(n){const r=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&r.push(t)}),r}const q=({children:n,custom:r,initial:t=!0,onExitComplete:s,exitBeforeEnter:p,presenceAffectsLayout:a=!0,mode:i="sync"})=>{const d=e.useContext(K).forceRender||S()[0],h=w(),l=W(n);let o=l;const c=e.useRef(new Map).current,E=e.useRef(o),C=e.useRef(new Map).current,x=e.useRef(!0);if(P(()=>{x.current=!1,V(l,C),E.current=o}),H(()=>{x.current=!0,C.clear(),c.clear()}),x.current)return e.createElement(e.Fragment,null,o.map(u=>e.createElement(L,{key:m(u),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:a,mode:i},u)));o=[...o];const y=E.current.map(m),z=l.map(m),F=y.length;for(let u=0;u<F;u++){const f=y[u];z.indexOf(f)===-1&&!c.has(f)&&c.set(f,void 0)}return i==="wait"&&c.size&&(o=[]),c.forEach((u,f)=>{if(z.indexOf(f)!==-1)return;const g=C.get(f);if(!g)return;const v=y.indexOf(f);let R=u;if(!R){const k=()=>{C.delete(f),c.delete(f);const $=E.current.findIndex(b=>b.key===f);if(E.current.splice($,1),!c.size){if(E.current=l,h.current===!1)return;d(),s&&s()}};R=e.createElement(L,{key:m(g),isPresent:!1,onExitComplete:k,custom:r,presenceAffectsLayout:a,mode:i},g),c.set(f,R)}o.splice(v,0,R)}),o=o.map(u=>{const f=u.key;return c.has(f)?u:e.createElement(L,{key:m(u),isPresent:!0,presenceAffectsLayout:a,mode:i},u)}),e.createElement(e.Fragment,null,c.size?o:o.map(u=>e.cloneElement(u)))};function J({children:n,features:r,strict:t=!1}){const[,s]=e.useState(!M(r)),p=e.useRef(void 0);if(!M(r)){const{renderer:a,...i}=r;p.current=a,I(i)}return e.useEffect(()=>{M(r)&&r().then(({renderer:a,...i})=>{I(i),p.current=a,s(!0)})},[]),e.createElement(O.Provider,{value:{renderer:p.current,strict:t}},n)}function M(n){return typeof n=="function"}export{q as A,J as L};
