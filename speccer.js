!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).speccer={})}(this,(function(t){"use strict";const e=(t,e,o="noop")=>{t&&(!e||e&&0===e.length||e.trim().split(" ").filter((t=>t!==o)).forEach((e=>t.classList.add(e))))},o=(t,e)=>t?e||"string"==typeof t?`${t} ${e?Object.keys(e).filter((t=>e[t])).join(" "):""}`.trim():`${Object.keys(t).filter((e=>t[e])).join(" ")}`.trim():"",i=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],n=t=>parseInt(t,10),r=t=>n(getComputedStyle(t).getPropertyValue("--ph-speccer-pin-space"))||48,s=()=>new Promise(requestAnimationFrame),a=async(t,e)=>{!t||!e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e||Array.isArray(e)&&0===e.length||0===Object.keys(e).length&&e.constructor===Object||(await s(),Array.isArray(e)?e.forEach((e=>t.style[e.key]=e.value)):Object.keys(e).forEach((o=>t.style[o]=e[o])))},p=async t=>(await s(),getComputedStyle(t,null)),c=(t,e,o)=>t-e.width/2+o.width/2,l=(t,e,o)=>t-e.height/2+o.height/2,h=async t=>{await s();const e=t.getBoundingClientRect(),o=e.top+window.scrollY,i=e.left+window.scrollX;return{height:e.height,width:e.width,top:o,left:i}},d=async(t,e)=>{await s();const o=t.getBoundingClientRect(),i=await h(e),n=await(async(t,e)=>{await s();const o=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=i.top+window.scrollY,r=i.left+window.scrollX;return{height:i.height,width:i.width,top:l(n,o,i),left:c(r,o,i)}})(t,e),r=i.height,a=i.width,p=o.height,d=o.width;return{absolute:()=>({top:i.top,left:i.left,height:r,width:a}),toTop:({center:t=!1,sourceHeight:e=p,modifier:o=0}={})=>({top:i.top+e+o,left:t?n.left:i.left,height:r,width:a}),fromTop:({center:t=!1,sourceHeight:e=p,modifier:o=0}={})=>({top:i.top-e-o,left:t?n.left:i.left,height:r,width:a}),toBottom:({center:t=!1,sourceHeight:e=p,targetHeight:o=r,modifier:s=0}={})=>({top:i.top+o-(e+s),left:t?n.left:i.left,height:r,width:a}),fromBottom:({center:t=!1,targetHeight:e=r,modifier:o=0}={})=>({top:i.top+e+o,left:t?n.left:i.left,height:r,width:a}),toLeft:({center:t=!1,sourceWidth:e=d,modifier:o=0}={})=>({top:t?n.top:i.top,left:i.left+e+o,height:r,width:a}),fromLeft:({center:t=!1,sourceWidth:e=d,modifier:o=0}={})=>({top:t?n.top:i.top,left:i.left-e-o,height:r,width:a}),toRight:({center:t=!1,sourceWidth:e=d,targetWidth:o=a,modifier:s=0}={})=>({top:t?n.top:i.top,left:i.left+o-(e+s),height:r,width:a}),fromRight:({center:t=!1,targetWidth:e=a,modifier:o=0}={})=>({top:t?n.top:i.top,left:i.left+e+o,height:r,width:a})}},f=(t="",o="span")=>{const i=document.createElement(o),n=document.createTextNode(t+"");return i.appendChild(n),i.setAttribute("title",t+"px"),e(i,"ph-speccer speccer spacing"),i},u=async t=>{if(!t)return;const o=await p(t);if("none"===o.display||"0"===o.opacity||"hidden"===o.visibility)return;const i=(t=>{const{marginTop:e,marginBottom:o,marginLeft:i,marginRight:n,paddingTop:r,paddingBottom:s,paddingLeft:a,paddingRight:p}=t;return{marginTop:e,marginBottom:o,marginLeft:i,marginRight:n,paddingTop:r,paddingBottom:s,paddingLeft:a,paddingRight:p}})(o),r=Object.keys(i).filter((t=>"0px"!==i[t]));0!==r.length&&r.forEach((async o=>{const r=n(i[o]),p=f(r),c=(t=>-1!==t.indexOf("Top")?t.replace("Top"," top"):-1!==t.indexOf("Right")?t.replace("Right"," right"):-1!==t.indexOf("Bottom")?t.replace("Bottom"," bottom"):-1!==t.indexOf("Left")?t.replace("Left"," left"):"")(o);e(p,c),document.body.appendChild(p),t.classList.add("is-specced"),await(async(t,e,o,i)=>{await s();const n=i.getBoundingClientRect(),r=await h(i);"marginTop"===t&&a(o,{height:`${e}px`,width:n.width+"px",left:r.left+"px",top:r.top-e+"px"}),"marginRight"===t&&a(o,{height:n.height+"px",width:`${e}px`,left:r.left+parseInt(n.width+"",10)+"px",top:r.top+"px"}),"marginBottom"===t&&a(o,{height:`${e}px`,width:n.width+"px",left:r.left+"px",top:r.top+parseInt(n.height+"",10)+"px"}),"marginLeft"===t&&a(o,{height:n.height+"px",width:`${e}px`,left:r.left-e+"px",top:r.top+"px"}),"paddingTop"===t&&a(o,{height:`${e}px`,width:n.width+"px",left:r.left+"px",top:r.top+"px"}),"paddingBottom"===t&&a(o,{height:`${e}px`,width:n.width+"px",left:r.left+"px",top:r.top+(parseInt(n.height+"",10)-e)+"px"}),"paddingRight"===t&&a(o,{height:n.height+"px",width:`${e}px`,left:r.left+(parseInt(n.width+"",10)-e)+"px",top:r.top+"px"}),"paddingLeft"===t&&a(o,{height:n.height+"px",width:`${e}px`,left:r.left+"px",top:r.top+"px"})})(o,r,p,t)}))};var m,g,w;!function(t){t.Empty="",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top"}(m||(m={})),function(t){t.Outline="outline",t.Enclose="enclose",t.Full="full",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top",t.SVG="svg",t.Curly="curly"}(g||(g={})),function(t){t.Width="width",t.Height="height",t.Left="left",t.Right="right",t.Bottom="bottom",t.Top="top"}(w||(w={}));const y=t=>t.split(" "),x=t=>y(t).includes(g.Right),b=t=>y(t).includes(g.Bottom),E=t=>y(t).includes(g.Full),$=t=>y(t).includes(g.Enclose),v=t=>t.includes(g.Curly)&&t.includes(g.Full),A=()=>"_"+Math.random().toString(36).substring(2,11),P=t=>t.top,S=t=>t.left+t.width,C=t=>t.top+t.height,B=t=>t.left+t.width/2,R=t=>t.top+t.height/2,L={center:t=>({x:B(t),y:R(t)}),top:t=>({x:B(t),y:P(t)}),right:t=>({x:S(t),y:R(t)}),bottom:t=>({x:B(t),y:C(t)})},O=async(t,e="center")=>{if(!e)throw new Error("No position given");if("string"!=typeof e)throw new Error("The position given is not the required type: pos: "+typeof e);const o=["center","left","right","top","bottom","right-top","right-bottom","left-top","left-bottom","top-left","top-right","bottom-left","bottom-right","top-center","right-center","bottom-center","left-center"];if(!o.includes(e))throw new Error(`The position given does not match allowed positions to use! Valid positions are: ${o.join(", ")}`);await s();const i=t.getBoundingClientRect();return L[e](i)},T=async(t,e,o="center",i="center")=>{if(!t||!e)throw new Error("No element given");const{x:n,y:r}=await O(t,o),{x:s,y:a}=await O(e,i);return{x1:n,y1:r,x2:s,y2:a}},N=(t,e)=>{const{x1:o,x2:i,y1:n,y2:r}=t,{direct:s=!1,firstSet:a=!1,direction:p}=e;let c={x:o+(i-o)/2,y:n},l={x:o+(i-o)/2,y:r};return s&&(a?"west"===p?(c={x:o-32,y:n-8},l={x:i+32,y:r}):"south"===p?(c={x:o-8,y:n+32},l={x:i,y:r-32}):"east"===p?(c={x:o+32,y:n-8},l={x:i-32,y:r}):(c={x:o-8,y:n-32},l={x:i,y:r+32}):"west"===p?(c={x:o-32,y:n+8},l={x:i+32,y:r}):"south"===p?(c={x:o+8,y:n+32},l={x:i,y:r-32}):"east"===p?(c={x:o+32,y:n+8},l={x:i-32,y:r}):(c={x:o+8,y:n-32},l={x:i,y:r+32})),{firstPoint:{x:o,y:n},firstControl:c,lastPoint:{x:i,y:r},lastControl:l}},M=async(t,e,o)=>{const{pos1:i,pos2:n,firstSet:r=!1,direction:s}=o,{x1:a,y1:p,x2:c,y2:l}=await T(t,e,i,n);let h=0,d=0;"north"==s?d=8:"west"==s?h=8:"east"==s?h=-8:"south"==s&&(d=-8);const f=N({x1:a+0,x2:c+h,y1:p+0,y2:l+d},{direct:!0,firstSet:r,direction:s}),{firstPoint:u,firstControl:m,lastControl:g,lastPoint:w}=f;return`M ${u.x} ${u.y}C ${m.x} ${m.y}, ${g.x} ${g.y}, ${w.x} ${w.y}`},I=async({start:t,stop:e,crude:o=!1})=>{const{x1:i,y1:n,x2:r,y2:s}=await T(t,e),a=((t,e,o,i,n=!0)=>{if(!(t&&e&&o&&i))throw new SyntaxError("Missing input for `angle`");if("number"!=typeof t||"number"!=typeof e||"number"!=typeof o||"number"!=typeof i)throw new TypeError(`Parameters for \`angle\` do not have the required type. Requires number! Got: ${typeof t} ${typeof e} ${typeof o} ${typeof i}`);const r=i-e,s=o-t;let a=Math.atan2(r,s);return a*=180/Math.PI,n&&a<0&&(a=360+a),a})(i,n,r,s);return o?(t=>{if(t>360)throw new RangeError("Parameter cannot exceed 360");if(t<0)throw new RangeError("Parameter cannot be lower than 0");return t>=45&&t<=135?"south":t>135&&t<=225?"west":t>225&&t<=315?"north":"east"})(a):(t=>{if(t>360)throw new RangeError("Parameter cannot exceed 360");if(t<0)throw new RangeError("Parameter cannot be lower than 0");return t>=0&&t<=22.5?"east":t>=22.5&&t<=67.5?"south-east":t>=67.5&&t<=112.5?"south":t>=112.5&&t<=157.5?"south-west":t>=157.5&&t<=202.5?"west":t>=202.5&&t<=247.5?"north-west":t>=247.5&&t<=292.5?"north":t>=292.5&&t<=337.5?"north-east":"east"})(a)};class k{#t;#e;startElement;stopElement;line;constructor(t,e){this.#o(t,e)}#o(t,e){if(!t||!e)throw new Error("Missing inputs startElement and stopElement");if(!document.body.contains(e))throw new Error("stopElement is not in the DOM");if(!document.body.contains(t))throw new Error("startElement is not in the DOM");if(this.startElement=t,this.stopElement=e,this.#t=document.getElementById("ph-speccer-svg"),this.#e=document.getElementById("ph-speccer-path"),!this.#e||!this.#t)throw new Error("Missing required SVG element to draw lines. Please see the documentation");this.connect()}connect(){this.draw(this.#e)}async draw(t){if(!t)throw new Error("No path given to draw!");const e=`ph_draw_path-path-${A()}`,o=t.cloneNode(!1);if(o.setAttribute("id",e),o.setAttribute("data-start-el",this.startElement.getAttribute("id")||"no-id-found"),o.classList.remove("original"),o.classList.add("speccer"),!t.parentNode)throw new Error("No parentNode found for path");this.line=t.parentNode.insertBefore(o,t.nextSibling);const i=await I({start:this.startElement,stop:this.stopElement,crude:!0}),{pos1:n,pos2:r}=(t=>{let e,o;switch(t){case"east":e="right",o="left";break;case"south":e="bottom",o="top";break;case"west":e="left",o="right";break;default:e="top",o="bottom"}return{pos1:e,pos2:o}})(i),s=await(async(t,e,o)=>{const{pos1:i,pos2:n}=o,{x1:r,y1:s,x2:a,y2:p}=await T(t,e,i,n),c=N({x1:r,x2:a,y1:s,y2:p},{direction:""}),{firstPoint:l,firstControl:h,lastControl:d,lastPoint:f}=c;return`M ${l.x} ${l.y}C ${h.x} ${h.y}, ${d.x} ${d.y}, ${f.x} ${f.y}`})(this.startElement,this.stopElement,{pos1:n,pos2:r});this.line.setAttribute("data-direction",i),this.line.setAttribute("data-pos1",n),this.line.setAttribute("data-pos2",r),this.line.setAttribute("d",s)}}window.DrawSVGLine=k;class q{#t;#e;startElement;stopElement;firstPathElement;secondPathElement;constructor(t,e){this.#o(t,e)}#o(t,e){if(!t||!e)throw new Error("Missing inputs startElement and stopElement");if(!document.body.contains(e))throw new Error("stopElement is not in the DOM");if(!document.body.contains(t))throw new Error("startElement is not in the DOM");if(this.startElement=t,this.stopElement=e,this.#t=document.getElementById("ph-speccer-svg"),this.#e=document.getElementById("ph-speccer-path"),!this.#e||!this.#t)throw new Error("Missing required SVG element to draw lines. Please see the documentation");this.connect()}connect(){this.draw(this.#e)}#i(t){if(!t)throw new Error("No path given to #getPathElement!");const e=`ph_draw_path-path-${A()}`,o=t.cloneNode(!1);return o.setAttribute("data-start-el",this.startElement.getAttribute("id")||"no-id-found"),o.setAttribute("id",e),o.classList.remove("original"),o.classList.add("speccer"),o}async draw(t){if(!t)throw new Error("No path given to draw!");const e=this.#i(t),o=this.#i(t);if(!t.parentNode)throw new Error("No parentNode found for path");this.firstPathElement=t.parentNode.insertBefore(e,t.nextSibling),this.secondPathElement=t.parentNode.insertBefore(o,t.nextSibling);const i=await I({stop:this.stopElement,start:this.startElement,crude:!0}),{path1pos1:n,path1pos2:r,path2pos1:s,path2pos2:a}=(t=>{let e,o,i,n;switch(t){case"east":e="right-top",o="left-center",i="right-bottom",n="left-center";break;case"south":e="bottom-left",o="top-center",i="bottom-right",n="top-center";break;case"west":e="left-top",o="right-center",i="left-bottom",n="right-center";break;default:e="top-left",o="bottom-center",i="top-right",n="bottom-center"}return{path1pos1:e,path1pos2:o,path2pos1:i,path2pos2:n}})(i),p=await M(this.startElement,this.stopElement,{pos1:n,pos2:r,firstSet:!0,direction:i}),c=await M(this.startElement,this.stopElement,{pos1:s,pos2:a,direction:i});this.firstPathElement.setAttribute("data-direction",i),this.firstPathElement.setAttribute("data-pos1",n),this.firstPathElement.setAttribute("data-pos2",r),this.firstPathElement.setAttribute("d",p),this.secondPathElement.setAttribute("data-direction",i),this.secondPathElement.setAttribute("data-pos1",s),this.secondPathElement.setAttribute("data-pos2",a),this.secondPathElement.setAttribute("d",c)}}window.DrawSVGCurlyBracket=q;const H=async(t,e,o,i)=>{const{isCurly:s=!1}=i||{},a=r(o),p=n(getComputedStyle(o).getPropertyValue("--ph-speccer-measure-size"))||8;const c=await d(o,e);if($(t)){const{left:t,top:e,height:o,width:i}=c.absolute();return{left:`${t}px`,top:`${e}px`,height:`${o}px`,width:`${i}px`}}if(y(t).includes(g.Left)){if(E(t)&&!s){const{left:t,top:e,height:o}=c.fromLeft({sourceWidth:p});return{left:`${t}px`,top:`${e}px`,height:`${o}px`}}{const{left:t,top:e}=c.fromLeft({center:!0,modifier:s?a/1.5:a});return{left:`${t}px`,top:`${e}px`}}}if(x(t)){if(E(t)&&!s){const{left:t,top:e,height:o}=c.fromRight({center:!1});return{left:`${t}px`,top:`${e}px`,height:`${o}px`}}{const{left:t,top:e}=c.fromRight({center:!0,modifier:s?a/1.5:a});return{left:`${t}px`,top:`${e}px`}}}if(b(t)){if(E(t)&&!s){const{left:t,top:e,width:o}=c.fromBottom({center:!1});return{left:`${t}px`,top:`${e}px`,width:`${o}px`}}{const{left:t,top:e}=c.fromBottom({center:!0,modifier:s?a/1.5:a});return{left:`${t}px`,top:`${e}px`}}}if(E(t)&&!s){const{left:t,top:e,width:o}=c.fromTop({center:!1});return{left:`${t}px`,top:`${e}px`,width:`${o}px`}}{const{left:t,top:e}=c.fromTop({center:!0,modifier:s?a/1.5:a});return{left:`${t}px`,top:`${e}px`}}},j=(t="",i,n="span")=>{const r=document.createElement(n),s=document.createTextNode(t),a={};null!==i&&""!==i&&(a[i]=!0),!E(i)&&!$(i)||E(i)&&v(i)?r.appendChild(s):(E(i)||$(i))&&r.setAttribute("data-dissection-counter",t);const p=o("ph-speccer speccer dissection",a);return e(r,p),r},V=t=>{if(!t)return Promise.resolve();const e=t.querySelectorAll("[data-anatomy]");if(e){let t=0;e.forEach((async(e,o)=>{if(!e)return Promise.resolve();const n=e.getAttribute("data-anatomy")||"";if(!n||""===n||-1===n.indexOf(g.Outline))return Promise.resolve();let r=i[o];r||(r=`${i[t]}${i[t].toLowerCase()}`,t++);const s=j(r,n);document.body.appendChild(s);const p=await H(n,e,s,{isCurly:v(n)});var c;await a(s,p),(c=n).includes(g.SVG)||c.includes(g.Curly)||c.includes(g.Full)||c.includes(g.Enclose)?new k(e,s):v(n)&&new q(e,s)}))}return Promise.resolve()},W=(t="",o="",i="span")=>{const n=document.createElement(i);return n.setAttribute("title",t+"px"),n.setAttribute("data-measure",parseInt(t+"",10)+"px"),e(n,`ph-speccer speccer measure ${o}`),n},z=async t=>{if(!t)return;const e=t.getAttribute("data-speccer-measure");if(""===e||!e)return;const o=await p(t);if("none"===o.display||"0"===o.opacity||"hidden"===o.visibility)return;await s();const i=t.getBoundingClientRect();if(y(e).includes(w.Width))if(b(e)){const o=W(i.width,e);document.body.appendChild(o);const n=await d(o,t),{left:r,top:s,width:p}=n.fromBottom({center:!1});await a(o,{left:`${r}px`,top:`${s}px`,width:`${p}px`})}else{const o=W(i.width,e);document.body.appendChild(o);const n=await d(o,t),{left:r,top:s,width:p}=n.fromTop({center:!1,modifier:-8});await a(o,{left:`${r}px`,top:`${s}px`,width:`${p}px`})}else if((t=>y(t).includes(w.Height))(e))if(x(e)){const o=W(i.height,e);document.body.appendChild(o);const n=await d(o,t),{left:r,top:s,height:p}=n.fromRight({center:!1});await a(o,{left:`${r}px`,top:`${s}px`,height:`${p}px`})}else{const o=W(i.height,e);document.body.appendChild(o);const n=await d(o,t),{left:r,top:s,height:p}=n.fromLeft({center:!1,modifier:-8});await a(o,{left:`${r}px`,top:`${s}px`,height:`${p}px`})}},F=(t="span")=>{const i=document.createElement(t),n=o("ph-speccer speccer mark");return e(i,n),i},D=async t=>{if(!t)return Promise.resolve();const e=F();document.body.appendChild(e);const o=await d(e,t),{left:i,top:n,height:r,width:s}=o.absolute(),p={left:`${i}px`,top:`${n}px`,height:`${r}px`,width:`${s}px`};await a(e,p)},G=(t,e=3)=>parseFloat(t+"").toFixed(e),_=(t,i)=>{const n=document.createElement("div"),r={};null!==i&&""!==i&&(r[i]=!0);const s=o("ph-speccer speccer typography",r);return n.innerHTML=t,e(n,s),n},X=async t=>{if(!t)return;const e=t.getAttribute("data-speccer-typography"),o=await p(t);if("none"===o.display||"0"===o.opacity||"hidden"===o.visibility)return;t.classList.add("is-specced");const i=await(async t=>{const e=(t=>{const{lineHeight:e,letterSpacing:o,fontFamily:i,fontSize:n,fontStyle:r,fontVariationSettings:s,fontWeight:a}=t;return{lineHeight:e,letterSpacing:o,fontFamily:i,fontSize:n,fontStyle:r,fontVariationSettings:s,fontWeight:a}})(await p(t)),o="normal"!==e.lineHeight?parseInt(e.lineHeight,10)/16+"rem":"normal";return`\nfont-styles: {<ul class="speccer-styles">  <li><span class="property">font-family:</span> ${e.fontFamily};</li>  <li><span class="property">font-size:</span> ${e.fontSize} / ${parseInt(e.fontSize,10)/16}rem;</li>  <li><span class="property">font-weight:</span> ${e.fontWeight};</li>  <li><span class="property">font-variation-settings:</span> ${e.fontVariationSettings};</li>  <li><span class="property">line-height:</span> ${e.lineHeight} / ${o};</li>  <li><span class="property">letter-spacing:</span> ${e.letterSpacing};</li>  <li><span class="property">font-style:</span> ${e.fontStyle};</li></ul>}`})(t),n=_(i,e);document.body.appendChild(n);const s=await(async(t,e,o)=>{const i=e.getBoundingClientRect(),n=r(o),s=o.getBoundingClientRect(),a=await h(e),p=a.left-s.width-n+"px",d=G(l(a.top,s,i))+"px",f=a.left+i.width+n+"px",u=G(l(a.top,s,i))+"px",g=G(c(a.left,s,i))+"px",w=a.top-s.height-n+"px",y=G(c(a.left,s,i))+"px",x=a.top+i.height+n+"px";let b={left:p,top:d};return t&&-1!==t.indexOf(m.Right)?b={left:f,top:u}:t&&-1!==t.indexOf(m.Top)?b={left:g,top:w}:t&&-1!==t.indexOf(m.Bottom)&&(b={left:y,top:x}),b})(e,t,n);a(n,s)},Y=t=>{const e=()=>((t,e,o=!1)=>{let i;return function(n,...r){const s=o&&!i;i&&clearTimeout(i),i=setTimeout((function(){i=null,o||t.apply(n,r)}),e),s&&t.apply(n,r)}})((()=>{t()}),300);window.removeEventListener("resize",e),window.addEventListener("resize",e)},J=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{t()})):t()},K=()=>{const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(u(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)").forEach((e=>{t.observe(e)}));const e=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(z(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-speccer-measure]").forEach((t=>{e.observe(t)}));const o=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.intersectionRatio>0&&(V(t.target),e.unobserve(t.target))}))}));document.querySelectorAll("[data-anatomy-section]").forEach((t=>{o.observe(t)}))},Q=t=>{window.speccer=t},U=t=>{const e=document.currentScript;if(e){const o=e.getAttribute("src");!o||-1===o.indexOf("speccer.js")&&-1===o.indexOf("JaXpOK.js")||(e.hasAttribute("data-manual")?Q(t):e.hasAttribute("data-instant")?t():e.hasAttribute("data-dom")?J(t):e.hasAttribute("data-lazy")?K():J(t),e.hasAttribute("data-manual")||e.hasAttribute("data-lazy")||Y(t))}},Z={create:f,element:u},tt={create:j,element:V},et={create:W,element:z},ot={create:F,element:D},it={create:_,element:X},nt={dom:J,lazy:K,manual:Q,activate:U},rt=()=>{((t,e=document)=>{[].forEach.call(e.querySelectorAll(t),(function(t){t.remove()}))})(".speccer");const t=document.querySelectorAll("[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)"),e=document.querySelectorAll("[data-speccer-measure]"),o=document.querySelectorAll("[data-speccer-typography]"),i=document.querySelectorAll("[data-anatomy-section]");document.querySelectorAll("[data-speccer-mark]").forEach(D),t.forEach(u),e.forEach(z),o.forEach(X),i.forEach(V)};U(rt),t.default=rt,t.dissect=tt,t.mark=ot,t.measure=et,t.modes=nt,t.spacing=Z,t.typography=it,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=speccer.js.map
