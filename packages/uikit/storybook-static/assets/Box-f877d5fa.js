import{s as m}from"./index.esm-8c5d6e7e.js";import{s as o}from"./styled-components.browser.esm-05bde203.js";import{b as t,a as i,l as a,p as r,s,c}from"./index.esm-073a6cf8.js";import{m as d}from"./motion-minimal-b8fc2ac8.js";const e=o(d.div).withConfig({})`
  ${t}
  ${i}
  ${a}
  ${r}
  ${s}
`,p=o.div.withConfig({shouldForwardProp:m})`
  ${t}
  ${i}
  ${a}
  ${r}
  ${s}
  ${c}
`,f=p;try{AnimatePresence.displayName="AnimatePresence",AnimatePresence.__docgenInfo={description:`\`AnimatePresence\` enables the animation of components that have been removed from the tree.

When adding/removing more than a single child, every child **must** be given a unique \`key\` prop.

Any \`motion\` components that have an \`exit\` property defined will animate out when removed from
the tree.

\`\`\`jsx
import { motion, AnimatePresence } from 'framer-motion'

export const Items = ({ items }) => (
  <AnimatePresence>
    {items.map(item => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    ))}
  </AnimatePresence>
)
\`\`\`

You can sequence exit animations throughout a tree using variants.

If a child contains multiple \`motion\` components with \`exit\` props, it will only unmount the child
once all \`motion\` components have finished animating out. Likewise, any components using
\`usePresence\` all need to call \`safeToRemove\`.`,displayName:"AnimatePresence",props:{}}}catch{}try{LazyMotion.displayName="LazyMotion",LazyMotion.__docgenInfo={description:`Used in conjunction with the \`m\` component to reduce bundle size.

\`m\` is a version of the \`motion\` component that only loads functionality
critical for the initial render.

\`LazyMotion\` can then be used to either synchronously or asynchronously
load animation and gesture support.

\`\`\`jsx
// Synchronous loading
import { LazyMotion, m, domAnimation } from "framer-motion"

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ scale: 2 }} />
    </LazyMotion>
  )
}

// Asynchronous loading
import { LazyMotion, m } from "framer-motion"

function App() {
  return (
    <LazyMotion features={() => import('./path/to/domAnimation')}>
      <m.div animate={{ scale: 2 }} />
    </LazyMotion>
  )
}
\`\`\``,displayName:"LazyMotion",props:{}}}catch{}try{e.displayName="MotionBox",e.__docgenInfo={description:"",displayName:"MotionBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{f as B,e as M};
