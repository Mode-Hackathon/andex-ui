import{c as i}from"./styled-components.browser.esm-05bde203.js";const s=i`
  from { opacity:0 }
  to { opacity:1 }
`,o=i`
  from { opacity:1 }
  to { opacity:0 }
`,n=a=>{a&&(a.classList.contains("appear")?(a.classList.remove("appear"),a.classList.add("disappear")):(a.classList.remove("disappear"),a.classList.add("appear")))},r={initial:{transform:"translateX(0px)"},animate:{transform:"translateX(0px)"},exit:{transform:"translateX(0px)"}},p={initial:"initial",animate:"animate",exit:"exit"},c=i`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;export{s as a,n as b,p as c,o as d,r as e,c as p};
