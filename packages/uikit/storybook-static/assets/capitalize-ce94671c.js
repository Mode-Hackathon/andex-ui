import{g as m}from"./_commonjsHelpers-042e6b4d.js";import{t as n}from"./get-8ca00567.js";function b(r,a,e){var i=-1,o=r.length;a<0&&(a=-a>o?0:o+a),e=e>o?o:e,e<0&&(e+=o),o=a>e?0:e-a>>>0,a>>>=0;for(var f=Array(o);++i<o;)f[i]=r[i+a];return f}var $=b,A=$;function C(r,a,e){var i=r.length;return e=e===void 0?i:e,!a&&e>=i?r:A(r,a,e)}var R=C,S="\\ud800-\\udfff",h="\\u0300-\\u036f",y="\\ufe20-\\ufe2f",_="\\u20d0-\\u20ff",T=h+y+_,F="\\ufe0e\\ufe0f",U="\\u200d",M=RegExp("["+U+S+T+F+"]");function x(r){return M.test(r)}var t=x;function j(r){return r.split("")}var k=j,c="\\ud800-\\udfff",z="\\u0300-\\u036f",E="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",J=z+E+H,O="\\ufe0e\\ufe0f",V="["+c+"]",u="["+J+"]",s="\\ud83c[\\udffb-\\udfff]",w="(?:"+u+"|"+s+")",l="[^"+c+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",W="\\u200d",g=w+"?",p="["+O+"]?",Z="(?:"+W+"(?:"+[l,v,d].join("|")+")"+p+g+")*",q=p+g+Z,D="(?:"+[l+u+"?",u,v,d,V].join("|")+")",L=RegExp(s+"(?="+s+")|"+D+q,"g");function N(r){return r.match(L)||[]}var P=N,B=k,G=t,I=P;function K(r){return G(r)?I(r):B(r)}var Q=K,X=R,Y=t,rr=Q,ar=n;function er(r){return function(a){a=ar(a);var e=Y(a)?rr(a):void 0,i=e?e[0]:a.charAt(0),o=e?X(e,1).join(""):a.slice(1);return i[r]()+o}}var or=er,ir=or,ur=ir("toUpperCase"),sr=ur,fr=n,nr=sr;function tr(r){return nr(fr(r).toLowerCase())}var cr=tr;const dr=m(cr);export{dr as c};