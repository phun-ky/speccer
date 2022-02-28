!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).speccer={})}(this,(function(t){"use strict";const e=(t,e,o="noop")=>{t&&(!e||e&&0===e.length||e.trim().split(" ").filter((t=>t!==o)).forEach((e=>t.classList.add(e))))},o=(t,e)=>`${t} ${Object.keys(e).filter((t=>e[t])).join(" ")}`.trim(),n=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],i=t=>parseInt(t,10),p=t=>i(getComputedStyle(t).getPropertyValue("--ph-speccer-pin-space"))||48,a=()=>new Promise(requestAnimationFrame),r=async(t,e)=>{!t||!e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e||Array.isArray(e)&&0===e.length||0===Object.keys(e).length&&e.constructor===Object||(await a(),Array.isArray(e)?e.forEach((e=>t.style[e.key]=e.value)):Object.keys(e).forEach((o=>t.style[o]=e[o])))},s=async t=>(await a(),getComputedStyle(t,null)),l=(t,e,o)=>t-e.width/2+o.width/2,h=(t,e,o)=>t-e.height/2+o.height/2,c=async t=>{await a();const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},d=(t="",o="span")=>{const n=document.createElement(o),i=document.createTextNode(t+"");return n.appendChild(i),n.setAttribute("title",t+"px"),e(n,"ph speccer spacing"),n},f=async t=>{if(!t)return;const o=await s(t);if("none"===o.display||"0"===o.opacity||"hidden"===o.visibility)return;const n=(t=>{const{marginTop:e,marginBottom:o,marginLeft:n,marginRight:i,paddingTop:p,paddingBottom:a,paddingLeft:r,paddingRight:s}=t;return{marginTop:e,marginBottom:o,marginLeft:n,marginRight:i,paddingTop:p,paddingBottom:a,paddingLeft:r,paddingRight:s}})(o),p=Object.keys(n).filter((t=>"0px"!==n[t]));0!==p.length&&p.forEach((async o=>{const p=i(n[o]),s=d(p),l=(t=>-1!==t.indexOf("Top")?t.replace("Top"," top"):-1!==t.indexOf("Right")?t.replace("Right"," right"):-1!==t.indexOf("Bottom")?t.replace("Bottom"," bottom"):-1!==t.indexOf("Left")?t.replace("Left"," left"):"")(o);e(s,l),document.body.appendChild(s),t.classList.add("is-specced"),await(async(t,e,o,n)=>{await a();const i=n.getBoundingClientRect(),p=await c(n);"marginTop"===t&&r(o,{height:`${e}px`,width:i.width+"px",left:p.left+"px",top:p.top-e+"px"}),"marginRight"===t&&r(o,{height:i.height+"px",width:`${e}px`,left:p.left+parseInt(i.width+"",10)+"px",top:p.top+"px"}),"marginBottom"===t&&r(o,{height:`${e}px`,width:i.width+"px",left:p.left+"px",top:p.top+parseInt(i.height+"",10)+"px"}),"marginLeft"===t&&r(o,{height:i.height+"px",width:`${e}px`,left:p.left-e+"px",top:p.top+"px"}),"paddingTop"===t&&r(o,{height:`${e}px`,width:i.width+"px",left:p.left+"px",top:p.top+"px"}),"paddingBottom"===t&&r(o,{height:`${e}px`,width:i.width+"px",left:p.left+"px",top:p.top+(parseInt(i.height+"",10)-e)+"px"}),"paddingRight"===t&&r(o,{height:i.height+"px",width:`${e}px`,left:p.left+(parseInt(i.width+"",10)-e)+"px",top:p.top+"px"}),"paddingLeft"===t&&r(o,{height:i.height+"px",width:`${e}px`,left:p.left+"px",top:p.top+"px"})})(o,p,s,t)}))};var g=Object.freeze({__proto__:null,create:d,element:f});const u=t=>t.top,x=t=>t.left+t.width,y=t=>t.top+t.height,m=t=>t.left,w=t=>t.left+t.width/2,b=t=>t.top+t.height/2,O={center:t=>({x:w(t),y:b(t)}),top:t=>({x:w(t),y:u(t)}),right:t=>({x:x(t),y:b(t)}),bottom:t=>({x:w(t),y:y(t)}),left:t=>({x:m(t),y:b(t)})},_=(t,e,o="center",n="center")=>{if(!t||!e)throw"No element given";const{x:i,y:p}=E(t,o),{x:a,y:r}=E(e,n);return{x1:i,y1:p,x2:a,y2:r}},E=(t,e="center")=>{if(!e)throw"No position given";if("string"!=typeof e)throw"The position given is not the required type: pos: "+typeof e;if(!["center","left","right","top","bottom"].includes(e))throw"The position given does not match allowed positions to use! Valid positions are: center, left, right, top or bottom";const o=t.getBoundingClientRect();return O[e](o)},A=({start:t,stop:e})=>{const{x1:o,y1:n,x2:i,y2:p}=_(t,e),a=((t,e,o,n)=>{const i=n-e,p=o-t;let a=Math.atan2(i,p);return a*=180/Math.PI,a})(o,n,i,p);return S(a)},S=t=>t>=22.5&&t<=67.5?"north-west":t>=67.5&&t<=112.5?"north":t>=112.5&&t<=157.5?"north-east":t>=157.5&&t<=202.5?"east":t>=202.5&&t<=247.5?"south-east":t>=247.5&&t<=292.5?"south":t>=292.5&&t<=337.5?"south-west":t>=337.5||t<=22.5&&t>=-22.5?"west":t<=-22.5&&t>=-67.5?"south-west":t<=-67.5&&t>=-112.5?"south":t<=-112.5&&t>=-157.5?"south-east":t<=-157.5&&t>=-202.5?"east":t<=-202.5&&t>=-247.5?"north-east":t<=-247.5&&t>=-292.5?"north":t<=-292.5&&t>=-337.5?"north-west":t<=-337.5?"west":"south",v=function(){this._init()};var R,B;v.prototype._clear_lines=function(){document.querySelectorAll("path.ph.path:not(.original)").forEach((t=>t.remove()))},v.prototype._init=function(){if(this._original_path_el=document.getElementById("ph-speccer-path"),!this._original_path_el)throw"Missing target SVG. Are you sure you have added it in the DOM?"},v.prototype.connect=function(t,e){this._line(this._original_path_el,t,e)},v.prototype._get_positions_for_path=function(t){let e,o;switch(t){case"north":e="bottom",o="top";break;case"north-east":case"east":case"south-east":e="left",o="right";break;case"south":e="top",o="bottom";break;default:e="right",o="left"}return{pos1:e,pos2:o}},v.prototype._get_path=function(t,e){const o=A({stop:e,start:t});console.log(o);const{pos1:n,pos2:i}=this._get_positions_for_path(o),{x1:p,y1:a,x2:r,y2:s}=_(t,e,n,i);return"M "+p+" "+a+"C "+(p+(r-p)/2)+" "+a+", "+(p+(r-p)/2)+" "+s+", "+r+" "+s},v.prototype._line=function(t,e,o){if(!e||!o)return;const n=`ph_draw_path-path-${"_"+Math.random().toString(36).substring(2,11)}`,i=t.cloneNode(!1);i.setAttribute("id",n),i.classList.remove("original"),t.parentNode&&t.parentNode.insertBefore(i,t.nextSibling);const p=this._get_path(e,o);i.setAttribute("d",p)},function(t){t.Empty="",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top"}(R||(R={})),function(t){t.Outline="outline",t.Enclose="enclose",t.Full="full",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top"}(B||(B={}));const C=(t,e=3)=>parseFloat(t+"").toFixed(e),T=(t="",n,i="span")=>{const p=document.createElement(i),a=document.createTextNode(t),r={};null!==n&&""!==n&&(r[n]=!0),-1===n.indexOf(B.Full)&&-1===n.indexOf(B.Enclose)?p.appendChild(a):-1===n.indexOf(B.Full)&&-1===n.indexOf(B.Enclose)||p.setAttribute("data-dissection-counter",t);const s=o("ph speccer dissection",r);return e(p,s),p},L=t=>{if(!t)return;const e=t.querySelectorAll("[data-anatomy]");e&&e.forEach((async(t,e)=>{if(!t)return;const o=t.getAttribute("data-anatomy")||"";if(!o||""===o)return;const i=T(n[e],o);document.body.appendChild(i);const a=await(async(t,e,o)=>{const n=e.getBoundingClientRect(),i=o.getBoundingClientRect(),a=p(o),r=await c(e),s=r.left-i.width-a+"px",d=C(h(r.top,i,n))+"px",f=r.left+n.width+a+"px",g=C(h(r.top,i,n))+"px",u=C(l(r.left,i,n))+"px",x=r.top-i.height-a+"px",y=C(l(r.left,i,n))+"px",m=r.top+n.height+a+"px";let w={};return w=-1!==t.indexOf(B.Outline)?-1!==t.indexOf(B.Left)?-1!==t.indexOf(B.Full)?{left:r.left-8+"px",top:r.top+-1+"px",height:n.height+"px"}:-1!==t.indexOf(B.Enclose)?{left:r.left-1+"px",top:r.top+-1+"px",height:n.height+"px",width:n.width+"px"}:{left:s,top:d}:-1!==t.indexOf(B.Right)?-1!==t.indexOf(B.Full)?{left:r.left+n.width+"px",top:r.top+-1+"px",height:n.height+"px"}:-1!==t.indexOf(B.Enclose)?{left:r.left+-1+"px",top:r.top+-1+"px",height:n.height+"px",width:n.width+"px"}:{left:f,top:g}:-1!==t.indexOf(B.Top)?-1!==t.indexOf(B.Full)?{top:r.top+-8+"px",left:r.left+-1+"px",width:n.width+"px"}:-1!==t.indexOf(B.Enclose)?{top:r.top+-1+"px",left:r.left+-1+"px",height:n.height+"px",width:n.width+"px"}:{left:u,top:x}:-1!==t.indexOf(B.Bottom)?-1!==t.indexOf(B.Full)?{top:r.top+n.height+"px",left:r.left+-1+"px",width:n.width+"px"}:-1!==t.indexOf(B.Enclose)?{top:r.top+-1+"px",left:r.left+-1+"px",height:n.height+"px",width:n.width+"px"}:{left:y,top:m}:-1!==t.indexOf(B.Full)?{left:r.left+n.width+"px",top:r.top+"px",height:n.height+"px"}:-1!==t.indexOf(B.Enclose)?{left:r.left+n.width+"px",top:r.top+-1+"px",height:n.height+"px",width:n.width+"px"}:{left:s,top:d}:-1!==t.indexOf(B.Full)?{left:r.left-8+"px",top:r.top+-1+"px",height:n.height+"px"}:-1!==t.indexOf(B.Enclose)?{left:r.left-1+"px",top:r.top+-1+"px",height:n.height+"px",width:n.width+"px"}:{left:s,top:d},w})(o,t,i);r(i,a),-1===o.indexOf("full")&&-1===o.indexOf("enclose")&&setTimeout((()=>{(new v).connect(t,i)}),1e3)}))};const $=(t="",o="",n="span")=>{const i=document.createElement(n);return i.setAttribute("title",t+"px"),i.setAttribute("data-measure",parseInt(t+"",10)+"px"),e(i,`ph speccer measure ${o}`),i},F=async t=>{if(!t)return;const e=t.getAttribute("data-speccer-measure");if(""===e||!e)return;const o=await s(t);if("none"===o.display||"0"===o.opacity||"hidden"===o.visibility)return;await a();const n=t.getBoundingClientRect(),i=n.top+window.pageYOffset,p=n.left+window.pageXOffset;if(-1!==e.indexOf("width"))if(-1!==e.indexOf("bottom")){const t=$(n.width,e);document.body.appendChild(t),r(t,{left:p+"px",top:i+n.height+1+"px",width:n.width+"px"})}else{const t=$(n.width,e);document.body.appendChild(t);const o=t.getBoundingClientRect();r(t,{left:p+"px",top:i-o.height+1+"px",width:n.width+"px"})}else if(-1!==e.indexOf("height"))if(-1!==e.indexOf("right")){const t=$(n.height,e);document.body.appendChild(t),r(t,{left:p+n.width+"px",top:i+"px",height:n.height+"px"})}else{const t=$(n.height,e);document.body.appendChild(t);const o=t.getBoundingClientRect();r(t,{left:p-o.width+"px",top:i+"px",height:n.height+"px"})}};const j=(t,n)=>{const i=document.createElement("div"),p={};null!==n&&""!==n&&(p[n]=!0);const a=o("ph speccer typography",p);return i.innerHTML=t,e(i,a),i};const I=t=>{const e=()=>function(t,e,o){let n;return function(){const i=this,p=arguments,a=function(){n=null,o||t.apply(i,p)},r=o&&!n;n&&clearTimeout(n),n=setTimeout(a,e),r&&t.apply(i,p)}}((()=>{t()}),300);window.removeEventListener("resize",e),window.addEventListener("resize",e)},q=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{t()})):t()},z=g,M=Object.freeze({__proto__:null,create:T,element:L}),k=Object.freeze({__proto__:null,element:F}),N=Object.freeze({__proto__:null,create:j,element:async t=>{if(!t)return;const e=t.getAttribute("data-speccer-typography"),o=await s(t);if("none"===o.display||"0"===o.opacity||"hidden"===o.visibility)return;t.classList.add("is-specced");const n=await(async t=>{const e=(t=>{const{lineHeight:e,letterSpacing:o,fontFamily:n,fontSize:i,fontStyle:p,fontVariationSettings:a,fontWeight:r}=t;return{lineHeight:e,letterSpacing:o,fontFamily:n,fontSize:i,fontStyle:p,fontVariationSettings:a,fontWeight:r}})(await s(t)),o="normal"!==e.lineHeight?parseInt(e.lineHeight,10)/16+"rem":"normal";return`\nfont-styles: {<ul class="speccer-styles">  <li><span class="property">font-family:</span> ${e.fontFamily};</li>  <li><span class="property">font-size:</span> ${e.fontSize} / ${parseInt(e.fontSize,10)/16}rem;</li>  <li><span class="property">font-weight:</span> ${e.fontWeight};</li>  <li><span class="property">font-variation-settings:</span> ${e.fontVariationSettings};</li>  <li><span class="property">line-height:</span> ${e.lineHeight} / ${o};</li>  <li><span class="property">letter-spacing:</span> ${e.letterSpacing};</li>  <li><span class="property">font-style:</span> ${e.fontStyle};</li></ul>}`})(t),i=j(n,e);document.body.appendChild(i);const a=await(async(t,e,o)=>{const n=e.getBoundingClientRect(),i=p(o),a=o.getBoundingClientRect(),r=await c(e),s=r.left-a.width-i+"px",d=C(h(r.top,a,n))+"px",f=r.left+n.width+i+"px",g=C(h(r.top,a,n))+"px",u=C(l(r.left,a,n))+"px",x=r.top-a.height-i+"px",y=C(l(r.left,a,n))+"px",m=r.top+n.height+i+"px";let w={left:s,top:d};return t&&-1!==t.indexOf(R.Right)?w={left:f,top:g}:t&&-1!==t.indexOf(R.Top)?w={left:u,top:x}:t&&-1!==t.indexOf(R.Bottom)&&(w={left:y,top:m}),w})(e,t,i);r(i,a)}}),H=()=>{((t,e=document)=>{[].forEach.call(e.querySelectorAll(t),(function(t){t.remove()}))})(".speccer");const t=document.querySelectorAll("[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)"),e=document.querySelectorAll("[data-speccer-measure]"),o=document.querySelectorAll("[data-speccer-typography]"),n=document.querySelectorAll("[data-anatomy-section]");t.forEach(z.element),e.forEach(k.element),o.forEach(N.element),n.forEach(M.element)};(t=>{const e=document.currentScript;if(e){const o=e.getAttribute("src");!o||-1===o.indexOf("speccer.js")&&-1===o.indexOf("JaXpOK.js")||(e.hasAttribute("data-manual")?(t=>{window.speccer=t})(t):e.hasAttribute("data-instant")?t():e.hasAttribute("data-dom")?q(t):e.hasAttribute("data-lazy")?(()=>{const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(f(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-speccer],[data-speccer] *:not(td)").forEach((e=>{t.observe(e)}));const e=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(F(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-speccer-measure]").forEach((t=>{e.observe(t)}));const o=new IntersectionObserver(((t,e)=>{t.forEach((t=>{const o=t.target.querySelectorAll("[data-anatomy]");t.intersectionRatio>0&&(o.forEach(L),e.unobserve(t.target))}))}));document.querySelectorAll("[data-anatomy-section]").forEach((t=>{o.observe(t)}))})():q(t),e.hasAttribute("data-manual")||e.hasAttribute("data-lazy")||I(t))}})(H),t.default=H,t.dissect=M,t.measure=k,t.spacing=z,t.typography=N,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=speccer.js.map
