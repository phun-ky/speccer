!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).speccer={})}(this,(function(e){"use strict";!function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();const t=(e,t,n)=>{n=n||window;var i=!1,o=function(){i||(i=!0,requestAnimationFrame((function(){n.dispatchEvent(new CustomEvent(t)),i=!1})))};n.removeEventListener(e,o),n.addEventListener(e,o)},n=(e,t)=>{Object.assign(e.style,t)},i=e=>parseInt(e,10),o=e=>{const t=parseFloat(e);return t>=0&&t<1||t<=0&&t>-1?0:t},s=e=>window.getComputedStyle?getComputedStyle(e,null):e.currentStyle,a=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],d=[{type:"button-center"},{type:"button-outline"},{type:"button-icon"}],l=["TR","TH","TD","TBODY","THEAD","TFOOT"],p=(e="",t,n="span")=>{const i=document.createElement(n),o=document.createTextNode(e);(i.classList.add("dissection"),-1===t.indexOf("full")&&-1===t.indexOf("enclose")?i.appendChild(o):-1===t.indexOf("full")&&-1===t.indexOf("enclose")||i.setAttribute("data-dissection-counter",e),t)&&(-1!==t.indexOf(" ")?t.split(" ").forEach((e=>{i.classList.add(e)})):i.classList.add(t));return i},r=(e,t)=>{const i=e.getBoundingClientRect();if(e.getAttribute("data-anatomy")){const i=e.getAttribute("data-anatomy"),o=p(a[t],i),s=e.getBoundingClientRect();let d=0,r=0;const f=l.indexOf(e.nodeName)>=0;if(f){const t=e.closest("table"),n=window.getComputedStyle(t.parentElement);t.insertAdjacentElement("afterend",o),d=t.getBoundingClientRect().top-parseInt(n.getPropertyValue("padding-top"),10),r=t.getBoundingClientRect().left-parseInt(n.getPropertyValue("padding-left"),10)}else e.insertAdjacentElement("afterend",o);const c=o.getBoundingClientRect();let h=(f?s.left-r:e.offsetLeft)-c.width-48+"px",g=(f?s.top-d:e.offsetTop)+s.height/2-c.height/2+"px",m=(f?s.left-r:e.offsetLeft)+s.width+48+"px",x=(f?s.top-d:e.offsetTop)+s.height/2-c.height/2+"px",u=(f?s.left-r:e.offsetLeft)+s.width/2-c.width/2+"px",y=(f?s.top-d:e.offsetTop)-c.height-48+"px",E=(f?s.left-r:e.offsetLeft)+s.width/2-c.width/2+"px",w=(f?s.top-d:e.offsetTop)+s.height+48+"px";-1!==i.indexOf("outline")?-1!==i.indexOf("left")?-1!==i.indexOf("full")?n(o,{left:e.offsetLeft-8+"px",top:e.offsetTop+-1+"px",height:s.height+"px"}):-1!==i.indexOf("enclose")?n(o,{left:e.offsetLeft-1+"px",top:e.offsetTop+-1+"px",height:s.height+"px",width:s.width+"px"}):n(o,{left:h,top:g}):-1!==i.indexOf("right")?-1!==i.indexOf("full")?n(o,{left:e.offsetLeft+s.width+"px",top:e.offsetTop+-1+"px",height:s.height+"px"}):-1!==i.indexOf("enclose")?n(o,{left:e.offsetLeft+-1+"px",top:e.offsetTop+-1+"px",height:s.height+"px",width:s.width+"px"}):n(o,{left:m,top:x}):-1!==i.indexOf("top")?-1!==i.indexOf("full")?n(o,{bottom:e.offsetTop+s.height+"px",left:e.offsetLeft+-1+"px",width:s.width+"px"}):-1!==i.indexOf("enclose")?n(o,{top:e.offsetTop+-1+"px",left:e.offsetLeft+-1+"px",height:s.height+"px",width:s.width+"px"}):n(o,{left:u,top:y}):-1!==i.indexOf("bottom")?-1!==i.indexOf("full")?n(o,{top:e.offsetTop+s.height+"px",left:e.offsetLeft+-1+"px",width:s.width+"px"}):-1!==i.indexOf("enclose")?n(o,{top:e.offsetTop+-1+"px",left:e.offsetLeft+-1+"px",height:s.height+"px",width:s.width+"px"}):n(o,{left:E,top:w}):-1!==i.indexOf("full")?n(o,{left:e.offsetLeft+s.width+"px",top:e.offsetTop+"px",height:s.height+"px"}):-1!==i.indexOf("enclose")?n(o,{left:e.offsetLeft+s.width+"px",top:e.offsetTop+-1+"px",height:s.height+"px",width:s.width+"px"}):n(o,{left:h,top:g}):-1!==i.indexOf("full")?n(o,{left:e.offsetLeft-8+"px",top:e.offsetTop+-1+"px",height:s.height+"px"}):-1!==i.indexOf("enclose")?n(o,{left:e.offsetLeft-1+"px",top:e.offsetTop+-1+"px",height:s.height+"px",width:s.width+"px"}):n(o,{left:h,top:g})}else d.forEach(((t,o)=>{const s=p(a[o],t.type);l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s);const d=s.getBoundingClientRect();"button-center"==t.type?n(s,{left:e.offsetLeft+i.width/2-d.width/2+"px",top:e.offsetTop-d.height-48+i.height/2+"px"}):"button-outline"==t.type?n(s,{left:e.offsetLeft+i.width+48+"px",top:e.offsetTop+i.height/2-d.height/2+"px"}):"button-icon"==t.type&&n(s,{left:e.offsetLeft-d.width-48+18+"px",top:e.offsetTop+i.height/2-d.height/2+"px"})}))},f=()=>{console.info("[@phun-ky/speccer]: Running anatomy()"),E(".dissection"),document.querySelectorAll("[data-anatomy-section]").forEach((e=>{e.querySelectorAll("[data-anatomy]").forEach(r)}))},c=(e="",t="span")=>{const n=document.createElement(t),i=document.createTextNode(e);return n.appendChild(i),n.setAttribute("title",e+"px"),n.classList.add("speccer"),n},h=(e="",t="",n="span")=>{const i=document.createElement(n);(i.setAttribute("title",e+"px"),i.setAttribute("data-measure",parseInt(e,10)+"px"),i.classList.add("speccer"),i.classList.add("measure"),""!==t)&&(-1!==t.indexOf(" ")?t.split(" ").forEach((e=>{i.classList.add(e)})):i.classList.add(t));return i},g=e=>{const t=e.getBoundingClientRect(),i=e.getAttribute("data-speccer-measure");if(""!==i)if(-1!==i.indexOf("width"))if(-1!==i.indexOf("bottom")){const i=h(t.width,"width bottom");l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",i):e.insertAdjacentElement("afterend",i),n(i,{left:e.offsetLeft+"px",top:e.offsetTop+t.height+1+"px",width:t.width+"px"})}else{const i=h(t.width,"width top");l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",i):e.insertAdjacentElement("afterend",i);const o=i.getBoundingClientRect();n(i,{left:e.offsetLeft+"px",top:e.offsetTop-o.height+1+"px",width:t.width+"px"})}else if(-1!==i.indexOf("height"))if(-1!==i.indexOf("right")){const i=h(t.height,"height right");l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",i):e.insertAdjacentElement("afterend",i),n(i,{left:e.offsetLeft+t.width+"px",top:e.offsetTop+"px",height:t.height+"px"})}else{const i=h(t.height,"height top");l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",i):e.insertAdjacentElement("afterend",i);const o=i.getBoundingClientRect();n(i,{left:e.offsetLeft-o.width+"px",top:e.offsetTop+"px",height:t.height+"px"})}},m=e=>{const t=e.getAttribute("data-speccer-typography"),i=s(e);if("none"===i.display||"hidden"===i.visibility)return;e.classList.add("speccer-isSpecced");"static"===s(e.parentElement).position&&(e.parentElement.style.position="relative");const o=(e=>{const{lineHeight:t,letterSpacing:n,fontFamily:i,fontSize:o,fontStyle:s,fontVariationSettings:a,fontWeight:d}=e;return{lineHeight:t,letterSpacing:n,fontFamily:i,fontSize:o,fontStyle:s,fontVariationSettings:a,fontWeight:d}})(i),a=e.getBoundingClientRect(),d=((e,t)=>{const n=document.createElement("div");return n.innerHTML=e,n.classList.add("speccer"),n.classList.add("typography"),""!==t&&(-1!==t.indexOf(" ")?t.split(" ").forEach((e=>{n.classList.add(e)})):n.classList.add(t)),n})(`\n    font-styles: {<ul class="speccer-styles">  <li><span class="property">font-family:</span> ${o.fontFamily};</li>  <li><span class="property">font-size:</span> ${o.fontSize} / ${parseInt(o.fontSize,10)/16}rem;</li>  <li><span class="property">font-weight:</span> ${o.fontWeight};</li>  <li><span class="property">font-variation-settings:</span> ${o.fontVariationSettings};</li>  <li><span class="property">line-height:</span> ${o.lineHeight} / ${parseInt(o.lineHeight,10)/16}rem;</li>  <li><span class="property">letter-spacing:</span> ${o.letterSpacing};</li>  <li><span class="property">font-style:</span> ${o.fontStyle};</li></ul>}`,t);let p=0,r=0;const f=l.indexOf(e.nodeName)>=0;if(f){const t=e.parentElement,n=window.getComputedStyle(t.parentElement);t.insertAdjacentElement("afterend",d),p=t.getBoundingClientRect().top-parseInt(n.getPropertyValue("padding-top"),10),r=t.getBoundingClientRect().left-parseInt(n.getPropertyValue("padding-left"),10)}else e.insertAdjacentElement("afterend",d);const c=d.getBoundingClientRect();let h=(f?c.left-r:e.offsetLeft)-c.width-48+"px",g=parseFloat((f?c.top-p:e.offsetTop)-c.height/2+a.height/2).toFixed(3)+"px",m=(f?c.left-r:e.offsetLeft)+a.width+48+"px",x=parseFloat((f?c.top-p:e.offsetTop)-c.height/2+a.height/2).toFixed(3)+"px",u=parseFloat((f?c.left-r:e.offsetLeft)-c.width/2+a.width/2).toFixed(3)+"px",y=(f?c.top-p:e.offsetTop)-c.height-48+"px",E=parseFloat((f?c.left-r:e.offsetLeft)-c.width/2+a.width/2).toFixed(3)+"px",w=(f?c.top-p:e.offsetTop)+a.height+48+"px",L={left:h,top:g};-1!==t.indexOf("right")?L={left:m,top:x}:-1!==t.indexOf("top")?L={left:u,top:y}:-1!==t.indexOf("bottom")&&(L={left:E,top:w}),n(d,L)},x=e=>{const t={},a=s(e);if("none"===a.display||"hidden"===a.visibility)return;e.classList.add("speccer-isSpecced");if("static"===s(e.parentElement).position&&(e.parentElement.style.position="relative"),t.style=(e=>{const{marginTop:t,marginBottom:n,marginLeft:i,marginRight:o,paddingTop:s,paddingBottom:a,paddingLeft:d,paddingRight:l}=e;return{marginTop:t,marginBottom:n,marginLeft:i,marginRight:o,paddingTop:s,paddingBottom:a,paddingLeft:d,paddingRight:l}})(a),t.rect=e.getBoundingClientRect(),"0px"!==t.style.marginTop){const s=c(i(t.style.marginTop));s.classList.add("margin"),s.classList.add("marginTop"),n(s,{height:t.style.marginTop,width:t.rect.width+"px",left:o(t.rect.x-e.parentElement.getBoundingClientRect().x)+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y-parseInt(t.style.marginTop,10))+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.marginRight){const s=c(i(t.style.marginRight));s.classList.add("margin"),s.classList.add("marginRight"),n(s,{height:t.rect.height+"px",width:t.style.marginRight,left:o(t.rect.x-e.parentElement.getBoundingClientRect().x+parseInt(t.rect.width,10))+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y)+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.marginBottom){const s=c(i(t.style.marginBottom));s.classList.add("margin"),s.classList.add("marginBottom"),n(s,{height:t.style.marginBottom,width:t.rect.width+"px",left:o(t.rect.x-e.parentElement.getBoundingClientRect().x)+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y+parseInt(t.rect.height,10))+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.marginLeft){const s=c(i(t.style.marginLeft));s.classList.add("margin"),s.classList.add("marginLeft"),n(s,{height:t.rect.height+"px",width:t.style.marginLeft,left:o(t.rect.x-e.parentElement.getBoundingClientRect().x-parseInt(t.style.marginLeft,10))+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y)+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.paddingTop){const s=c(i(t.style.paddingTop));s.classList.add("padding"),s.classList.add("paddingTop"),n(s,{height:t.style.paddingTop,width:t.rect.width+"px",left:o(t.rect.x-e.parentElement.getBoundingClientRect().x)+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y)+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.paddingBottom){const s=c(i(t.style.paddingBottom));s.classList.add("padding"),s.classList.add("paddingBottom"),n(s,{height:t.style.paddingBottom,width:t.rect.width+"px",left:o(t.rect.x-e.parentElement.getBoundingClientRect().x)+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y+(parseInt(t.rect.height,10)-parseInt(t.style.paddingBottom,10)))+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.paddingRight){const s=c(i(t.style.paddingRight));s.classList.add("padding"),s.classList.add("paddingRight"),n(s,{height:t.rect.height+"px",width:t.style.paddingRight,left:o(t.rect.x-e.parentElement.getBoundingClientRect().x+(parseInt(t.rect.width,10)-parseInt(t.style.paddingRight,10)))+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y)+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}if("0px"!==t.style.paddingLeft){const s=c(i(t.style.paddingLeft));s.classList.add("padding"),s.classList.add("paddingLeft"),n(s,{height:t.rect.height+"px",width:t.style.paddingLeft,left:o(t.rect.x-e.parentElement.getBoundingClientRect().x)+"px",top:o(t.rect.y-e.parentElement.getBoundingClientRect().y)+"px"}),l.indexOf(e.nodeName)>=0?e.closest("table").insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}},u=()=>{console.info("[@phun-ky/speccer]: Running speccer()"),E(".speccer");document.querySelectorAll("[data-speccer],[data-speccer] *:not(td)").forEach(x);document.querySelectorAll("[data-speccer-measure]").forEach(g);document.querySelectorAll("[data-speccer-typography]").forEach(m)},y=()=>{t("resize","speccer-onResize"),t("resize","anatomy-onResize");const e=()=>{console.info("[@phun-ky/speccer]: Event speccer-onResize triggered"),u()},n=()=>{console.info("[@phun-ky/speccer]: Event anatomy-onResize triggered"),f()};window.removeEventListener("speccer-onResize",e),window.removeEventListener("anatomy-onResize",n),window.addEventListener("speccer-onResize",e),window.addEventListener("anatomy-onResize",n)},E=(e,t=document)=>{[].forEach.call(t.querySelectorAll(e),(function(e){e.parentNode.removeChild(e)}))},w=document.currentScript;if(console.log(w),w&&(-1!==w.getAttribute("src").indexOf("speccer.js")||-1!==w.getAttribute("src").indexOf("JaXpOK.js"))){if(w.hasAttribute("data-manual"))console.info("[@phun-ky/speccer]: Initialized with: data-manual"),window.speccer=u,window.anatomy=f;else if(w.hasAttribute("data-instant"))f(),u();else if(w.hasAttribute("data-dom"))console.info("[@phun-ky/speccer]: Initialized with: data-dom"),"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",f),document.addEventListener("DOMContentLoaded",u)):(f(),u());else if(w.hasAttribute("data-lazy")){console.info("[@phun-ky/speccer]: Initialized with: data-lazy");let e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.intersectionRatio>0&&(x(e.target),t.unobserve(e.target))}))}));document.querySelectorAll("[data-speccer],[data-speccer] *:not(td)").forEach((t=>{e.observe(t)}));let t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.intersectionRatio>0&&(g(e.target),t.unobserve(e.target))}))}));document.querySelectorAll("[data-speccer-measure]").forEach((e=>{t.observe(e)}));let n=new IntersectionObserver(((e,t)=>{e.forEach((e=>{const n=e.target.querySelectorAll("[data-anatomy]");e.intersectionRatio>0&&(n.forEach(r),t.unobserve(e.target))}))}));const i=e=>{n.observe(e)};document.querySelectorAll("[data-anatomy-section]").forEach(i)}else console.info("[@phun-ky/speccer]: Initialized with nothing, falling back to data-dom"),"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",f),document.addEventListener("DOMContentLoaded",u)):(f(),u());w.hasAttribute("data-manual")||w.hasAttribute("data-lazy")||y()}e.activateOnResize=y,e.anatomy=f,e.dissectElement=r,e.measureElement=g,e.removeSpeccerElements=E,e.specElement=x,e.specTypographyElement=m,e.speccer=u,Object.defineProperty(e,"__esModule",{value:!0})}));
