!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).speccer={})}(this,(function(t){"use strict";const e=(t,e,n="noop")=>{t&&(!e||e&&0===e.length||e.trim().split(" ").filter((t=>t!==n)).forEach((e=>t.classList.add(e))))},n=(t,e)=>`${t} ${Object.keys(e).filter((t=>e[t])).join(" ")}`.trim(),i=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],o=t=>parseInt(t,10),p=t=>o(getComputedStyle(t).getPropertyValue("--ph-speccer-pin-space"))||48,s=()=>new Promise(requestAnimationFrame),a=async(t,e)=>{!t||!e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e||Array.isArray(e)&&0===e.length||0===Object.keys(e).length&&e.constructor===Object||(await s(),Array.isArray(e)?e.forEach((e=>t.style[e.key]=e.value)):Object.keys(e).forEach((n=>t.style[n]=e[n])))},r=async t=>(await s(),getComputedStyle(t,null)),d=(t,e,n)=>t-e.width/2+n.width/2,l=(t,e,n)=>t-e.height/2+n.height/2,h=()=>{const t=getComputedStyle(document.body),e=parseInt(t.paddingLeft)+parseInt(t.marginLeft);return{top:parseInt(t.paddingTop)+parseInt(t.marginTop),left:e}},c=(t="",n="span")=>{const i=document.createElement(n),o=document.createTextNode(t+"");return i.appendChild(o),i.setAttribute("title",t+"px"),e(i,"ph speccer spacing"),i},f=async t=>{const n={},i=await r(t);if("none"===i.display||"hidden"===i.visibility||!t.parentElement)return;t.classList.add("is-specced"),n.styles=(t=>{const{marginTop:e,marginBottom:n,marginLeft:i,marginRight:o,paddingTop:p,paddingBottom:s,paddingLeft:a,paddingRight:r}=t;return{marginTop:e,marginBottom:n,marginLeft:i,marginRight:o,paddingTop:p,paddingBottom:s,paddingLeft:a,paddingRight:r}})(i);const p=t.getBoundingClientRect(),s=h(),d=t.offsetTop+s.top,l=t.offsetLeft+s.left;if("0px"!==n.styles.marginTop){const i=c(o(n.styles.marginTop));document.body.appendChild(i),e(i,"margin top"),a(i,{height:n.styles.marginTop,width:p.width+"px",transform:t.style.transform,left:l+"px",top:d-parseInt(n.styles.marginTop,10)+"px"})}if("0px"!==n.styles.marginRight){const i=c(o(n.styles.marginRight));e(i,"margin right"),a(i,{height:p.height+"px",width:n.styles.marginRight,transform:t.style.transform,left:l+parseInt(p.width+"",10)+"px",top:d+"px"}),document.body.appendChild(i)}if("0px"!==n.styles.marginBottom){const i=c(o(n.styles.marginBottom));e(i,"margin bottom"),a(i,{height:n.styles.marginBottom,width:p.width+"px",transform:t.style.transform,left:l+"px",top:d+parseInt(p.height+"",10)+"px"}),document.body.appendChild(i)}if("0px"!==n.styles.marginLeft){const i=c(o(n.styles.marginLeft));e(i,"margin left"),a(i,{height:p.height+"px",width:n.styles.marginLeft,transform:t.style.transform,left:l-parseInt(n.styles.marginLeft,10)+"px",top:d+"px"}),document.body.appendChild(i)}if("0px"!==n.styles.paddingTop){const i=c(o(n.styles.paddingTop));e(i,"padding top"),a(i,{height:n.styles.paddingTop,width:p.width+"px",transform:t.style.transform,left:l+"px",top:d+"px"}),document.body.appendChild(i)}if("0px"!==n.styles.paddingBottom){const i=c(o(n.styles.paddingBottom));e(i,"padding bottom"),a(i,{height:n.styles.paddingBottom,width:p.width+"px",transform:t.style.transform,left:l+"px",top:d+(parseInt(p.height+"",10)-parseInt(n.styles.paddingBottom,10))+"px"}),document.body.appendChild(i)}if("0px"!==n.styles.paddingRight){const i=c(o(n.styles.paddingRight));e(i,"padding right"),a(i,{height:p.height+"px",width:n.styles.paddingRight,transform:t.style.transform,left:l+(parseInt(p.width+"",10)-parseInt(n.styles.paddingRight,10))+"px",top:d+"px"}),document.body.appendChild(i)}if("0px"!==n.styles.paddingLeft){const i=c(o(n.styles.paddingLeft));e(i,"padding left"),a(i,{height:p.height+"px",width:n.styles.paddingLeft,transform:t.style.transform,left:l+"px",top:d+"px"}),document.body.appendChild(i)}};var g,m,u=Object.freeze({__proto__:null,create:c,element:f});!function(t){t.Empty="",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top"}(g||(g={})),function(t){t.Outline="outline",t.Enclose="enclose",t.Full="full",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top"}(m||(m={}));const x=(t,e=3)=>parseFloat(t+"").toFixed(e),y=(t="",i,o="span")=>{const p=document.createElement(o),s=document.createTextNode(t),a={};null!==i&&""!==i&&(a[i]=!0),-1===i.indexOf(m.Full)&&-1===i.indexOf(m.Enclose)?p.appendChild(s):-1===i.indexOf(m.Full)&&-1===i.indexOf(m.Enclose)||p.setAttribute("data-dissection-counter",t);const r=n("ph speccer dissection",a);return e(p,r),p},w=async(t,e)=>{if(!t)return;const n=t.getAttribute("data-anatomy")||"";if(!n||""===n)return;const o=y(i[e],n);document.body.appendChild(o);const s=((t,e,n)=>{const i=e.getBoundingClientRect(),o=p(n),s=n.getBoundingClientRect(),a=h(),r=e.offsetTop+a.top,c=e.offsetLeft+a.left,f=c-s.width-o+"px",g=x(l(r,s,i))+"px",u=c+i.width+o+"px",y=x(l(r,s,i))+"px",w=x(d(c,s,i))+"px",b=r-s.height-o+"px",O=x(d(c,s,i))+"px",E=r+i.height+o+"px";let A={};return A=-1!==t.indexOf(m.Outline)?-1!==t.indexOf(m.Left)?-1!==t.indexOf(m.Full)?{left:c-8+"px",top:r+-1+"px",height:i.height+"px"}:-1!==t.indexOf(m.Enclose)?{left:c-1+"px",top:r+-1+"px",height:i.height+"px",width:i.width+"px"}:{left:f,top:g}:-1!==t.indexOf(m.Right)?-1!==t.indexOf(m.Full)?{left:c+i.width+"px",top:r+-1+"px",height:i.height+"px"}:-1!==t.indexOf(m.Enclose)?{left:c+-1+"px",top:r+-1+"px",height:i.height+"px",width:i.width+"px"}:{left:u,top:y}:-1!==t.indexOf(m.Top)?-1!==t.indexOf(m.Full)?{top:r+-8+"px",left:c+-1+"px",width:i.width+"px"}:-1!==t.indexOf(m.Enclose)?{top:r+-1+"px",left:c+-1+"px",height:i.height+"px",width:i.width+"px"}:{left:w,top:b}:-1!==t.indexOf(m.Bottom)?-1!==t.indexOf(m.Full)?{top:r+i.height+"px",left:c+-1+"px",width:i.width+"px"}:-1!==t.indexOf(m.Enclose)?{top:r+-1+"px",left:c+-1+"px",height:i.height+"px",width:i.width+"px"}:{left:O,top:E}:-1!==t.indexOf(m.Full)?{left:c+i.width+"px",top:r+"px",height:i.height+"px"}:-1!==t.indexOf(m.Enclose)?{left:c+i.width+"px",top:r+-1+"px",height:i.height+"px",width:i.width+"px"}:{left:f,top:g}:-1!==t.indexOf(m.Full)?{left:c-8+"px",top:r+-1+"px",height:i.height+"px"}:-1!==t.indexOf(m.Enclose)?{left:c-1+"px",top:r+-1+"px",height:i.height+"px",width:i.width+"px"}:{left:f,top:g},A})(n,t,o);a(o,s)};const b=(t="",n="",i="span")=>{const o=document.createElement(i);return o.setAttribute("title",t+"px"),o.setAttribute("data-measure",parseInt(t+"",10)+"px"),e(o,`ph speccer measure ${n}`),o},O=t=>{if(!t)return;const e=t.getBoundingClientRect(),n=t.getAttribute("data-speccer-measure");if(""===n||!n)return;const i=h(),o=t.offsetTop+i.top,p=t.offsetLeft+i.left;if(-1!==n.indexOf("width"))if(-1!==n.indexOf("bottom")){const t=b(e.width,"width bottom");document.body.appendChild(t),a(t,{left:p+"px",top:o+e.height+1+"px",width:e.width+"px"})}else{const t=b(e.width,"width top");document.body.appendChild(t);const n=t.getBoundingClientRect();a(t,{left:p+"px",top:o-n.height+1+"px",width:e.width+"px"})}else if(-1!==n.indexOf("height"))if(-1!==n.indexOf("right")){const t=b(e.height,"height right");document.body.appendChild(t),a(t,{left:p+e.width+"px",top:o+"px",height:e.height+"px"})}else{const t=b(e.height,"height left");document.body.appendChild(t);const n=t.getBoundingClientRect();a(t,{left:p-n.width+"px",top:o+"px",height:e.height+"px"})}};const E=(t,i)=>{const o=document.createElement("div"),p={};null!==i&&""!==i&&(p[i]=!0);const s=n("ph speccer typography",p);return o.innerHTML=t,e(o,s),o};const A=t=>{const e=()=>function(t,e,n){let i;return function(){const o=this,p=arguments,s=function(){i=null,n||t.apply(o,p)},a=n&&!i;i&&clearTimeout(i),i=setTimeout(s,e),a&&t.apply(o,p)}}((()=>{t()}),300);window.removeEventListener("resize",e),window.addEventListener("resize",e)},C=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{t()})):t()},L=u,T=Object.freeze({__proto__:null,create:y,element:w}),S=Object.freeze({__proto__:null,element:O}),R=Object.freeze({__proto__:null,create:E,element:async t=>{if(!t)return;const e=t.getAttribute("data-speccer-typography"),n=await r(t);if("none"===n.display||"hidden"===n.visibility||!t.parentElement)return;t.classList.add("is-specced");const i=await(async t=>{const e=(t=>{const{lineHeight:e,letterSpacing:n,fontFamily:i,fontSize:o,fontStyle:p,fontVariationSettings:s,fontWeight:a}=t;return{lineHeight:e,letterSpacing:n,fontFamily:i,fontSize:o,fontStyle:p,fontVariationSettings:s,fontWeight:a}})(await r(t));return`\nfont-styles: {<ul class="speccer-styles">  <li><span class="property">font-family:</span> ${e.fontFamily};</li>  <li><span class="property">font-size:</span> ${e.fontSize} / ${parseInt(e.fontSize,10)/16}rem;</li>  <li><span class="property">font-weight:</span> ${e.fontWeight};</li>  <li><span class="property">font-variation-settings:</span> ${e.fontVariationSettings};</li>  <li><span class="property">line-height:</span> ${e.lineHeight} / ${parseInt(e.lineHeight,10)/16}rem;</li>  <li><span class="property">letter-spacing:</span> ${e.letterSpacing};</li>  <li><span class="property">font-style:</span> ${e.fontStyle};</li></ul>}`})(t),o=E(i,e);document.body.appendChild(o);const s=((t,e,n)=>{const i=e.getBoundingClientRect(),o=p(n),s=n.getBoundingClientRect(),a=h(),r=e.offsetTop+a.top,c=e.offsetLeft+a.left,f=c-s.width-o+"px",m=x(l(r,s,i))+"px",u=c+i.width+o+"px",y=x(l(r,s,i))+"px",w=x(d(c,s,i))+"px",b=r-s.height-o+"px",O=x(d(c,s,i))+"px",E=r+i.height+o+"px";let A={left:f,top:m};return t&&-1!==t.indexOf(g.Right)?A={left:u,top:y}:t&&-1!==t.indexOf(g.Top)?A={left:w,top:b}:t&&-1!==t.indexOf(g.Bottom)&&(A={left:O,top:E}),A})(e,t,o);a(o,s)}}),B=()=>{((t,e=document)=>{[].forEach.call(e.querySelectorAll(t),(function(t){t.remove()}))})(".speccer");const t=document.querySelectorAll("[data-speccer],[data-speccer] *:not(td)"),e=document.querySelectorAll("[data-speccer-measure]"),n=document.querySelectorAll("[data-speccer-typography]"),i=document.querySelectorAll("[data-anatomy-section] [data-anatomy]");t.forEach(L.element),e.forEach(S.element),n.forEach(R.element),i.forEach(T.element)};(t=>{const e=document.currentScript;if(e){const n=e.getAttribute("src");!n||-1===n.indexOf("speccer.js")&&-1===n.indexOf("JaXpOK.js")||(e.hasAttribute("data-manual")?(t=>{window.speccer=t})(t):e.hasAttribute("data-instant")?t():e.hasAttribute("data-dom")?C(t):e.hasAttribute("data-lazy")?(()=>{const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(f(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-speccer],[data-speccer] *:not(td)").forEach((e=>{t.observe(e)}));const e=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(O(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-speccer-measure]").forEach((t=>{e.observe(t)}));const n=new IntersectionObserver(((t,e)=>{t.forEach((t=>{const n=t.target.querySelectorAll("[data-anatomy]");t.intersectionRatio>0&&(n.forEach(w),e.unobserve(t.target))}))}));document.querySelectorAll("[data-anatomy-section]").forEach((t=>{n.observe(t)}))})():C(t),e.hasAttribute("data-manual")||e.hasAttribute("data-lazy")||A(t))}})(B),t.default=B,t.dissect=T,t.measure=S,t.spacing=L,t.typography=R,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=speccer.js.map
