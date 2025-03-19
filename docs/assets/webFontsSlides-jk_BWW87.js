var mn=Object.defineProperty;var fn=(h,t,e)=>t in h?mn(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e;var Jt=(h,t,e)=>fn(h,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/*!
* reveal.js 5.1.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
*/const bt=(h,t)=>{for(let e in t)h[e]=t[e];return h},x=(h,t)=>Array.from(h.querySelectorAll(t)),Zt=(h,t,e)=>{e?h.classList.add(t):h.classList.remove(t)},vt=h=>{if(typeof h=="string"){if(h==="null")return null;if(h==="true")return!0;if(h==="false")return!1;if(h.match(/^-?[\d\.]+$/))return parseFloat(h)}return h},lt=(h,t)=>{h.style.transform=t},Bt=(h,t)=>{let e=h.matches||h.matchesSelector||h.msMatchesSelector;return!(!e||!e.call(h,t))},j=(h,t)=>{if(typeof h.closest=="function")return h.closest(t);for(;h;){if(Bt(h,t))return h;h=h.parentNode}return null},tn=h=>{let t=(h=h||document.documentElement).requestFullscreen||h.webkitRequestFullscreen||h.webkitRequestFullScreen||h.mozRequestFullScreen||h.msRequestFullscreen;t&&t.apply(h)},te=h=>{let t=document.createElement("style");return t.type="text/css",h&&h.length>0&&(t.styleSheet?t.styleSheet.cssText=h:t.appendChild(document.createTextNode(h))),document.head.appendChild(t),t},qe=()=>{let h={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{h[t.split("=").shift()]=t.split("=").pop()});for(let t in h){let e=h[t];h[t]=vt(unescape(e))}return h.dependencies!==void 0&&delete h.dependencies,h},vn={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},en=navigator.userAgent,yt=/(iphone|ipod|ipad|android)/gi.test(en)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,nn=/android/gi.test(en);var bn=function(h){if(h){var t=function(f){return[].slice.call(f)},e=3,n=[],i=null,r="requestAnimationFrame"in h?function(){h.cancelAnimationFrame(i),i=h.requestAnimationFrame(function(){return o(n.filter(function(f){return f.dirty&&f.active}))})}:function(){},s=function(f){return function(){n.forEach(function(C){return C.dirty=f}),r()}},o=function(f){f.filter(function(P){return!P.styleComputed}).forEach(function(P){P.styleComputed=d(P)}),f.filter(p).forEach(y);var C=f.filter(g);C.forEach(m),C.forEach(function(P){y(P),a(P)}),C.forEach(L)},a=function(f){return f.dirty=0},m=function(f){f.availableWidth=f.element.parentNode.clientWidth,f.currentWidth=f.element.scrollWidth,f.previousFontSize=f.currentFontSize,f.currentFontSize=Math.min(Math.max(f.minSize,f.availableWidth/f.currentWidth*f.previousFontSize),f.maxSize),f.whiteSpace=f.multiLine&&f.currentFontSize===f.minSize?"normal":"nowrap"},g=function(f){return f.dirty!==2||f.dirty===2&&f.element.parentNode.clientWidth!==f.availableWidth},d=function(f){var C=h.getComputedStyle(f.element,null);return f.currentFontSize=parseFloat(C.getPropertyValue("font-size")),f.display=C.getPropertyValue("display"),f.whiteSpace=C.getPropertyValue("white-space"),!0},p=function(f){var C=!1;return!f.preStyleTestCompleted&&(/inline-/.test(f.display)||(C=!0,f.display="inline-block"),f.whiteSpace!=="nowrap"&&(C=!0,f.whiteSpace="nowrap"),f.preStyleTestCompleted=!0,C)},y=function(f){f.element.style.whiteSpace=f.whiteSpace,f.element.style.display=f.display,f.element.style.fontSize=f.currentFontSize+"px"},L=function(f){f.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:f.previousFontSize,newValue:f.currentFontSize,scaleFactor:f.currentFontSize/f.previousFontSize}}))},c=function(f,C){return function(){f.dirty=C,f.active&&r()}},H=function(f){return function(){n=n.filter(function(C){return C.element!==f.element}),f.observeMutations&&f.observer.disconnect(),f.element.style.whiteSpace=f.originalStyle.whiteSpace,f.element.style.display=f.originalStyle.display,f.element.style.fontSize=f.originalStyle.fontSize}},S=function(f){return function(){f.active||(f.active=!0,r())}},q=function(f){return function(){return f.active=!1}},Y=function(f){f.observeMutations&&(f.observer=new MutationObserver(c(f,1)),f.observer.observe(f.element,f.observeMutations))},M={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in h&&{subtree:!0,childList:!0,characterData:!0}},R=null,T=function(){h.clearTimeout(R),R=h.setTimeout(s(2),I.observeWindowDelay)},O=["resize","orientationchange"];return Object.defineProperty(I,"observeWindow",{set:function(f){var C="".concat(f?"add":"remove","EventListener");O.forEach(function(P){h[C](P,T)})}}),I.observeWindow=!0,I.observeWindowDelay=100,I.fitAll=s(e),I}function F(f,C){var P=Object.assign({},M,C),$=f.map(function(W){var K=Object.assign({},P,{element:W,active:!0});return function(U){U.originalStyle={whiteSpace:U.element.style.whiteSpace,display:U.element.style.display,fontSize:U.element.style.fontSize},Y(U),U.newbie=!0,U.dirty=!0,n.push(U)}(K),{element:W,fit:c(K,e),unfreeze:S(K),freeze:q(K),unsubscribe:H(K)}});return r(),$}function I(f){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof f=="string"?F(t(document.querySelectorAll(f)),C):F([f],C)[0]}}(typeof window>"u"?null:window);let yn=class{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,x(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))}),x(t,"video, audio").forEach(i=>{let r=0;x(i,"source[data-src]").forEach(s=>{s.setAttribute("src",s.getAttribute("data-src")),s.removeAttribute("data-src"),s.setAttribute("data-lazy-loaded",""),r+=1}),yt&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),r>0&&i.load()});let n=t.slideBackgroundElement;if(n){n.style.display="block";let i=t.slideBackgroundContentElement,r=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let o=t.getAttribute("data-background-image"),a=t.getAttribute("data-background-video"),m=t.hasAttribute("data-background-video-loop"),g=t.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?i.style.backgroundImage=`url(${o.trim()})`:i.style.backgroundImage=o.split(",").map(d=>`url(${((p="")=>encodeURI(p).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,y=>`%${y.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(d.trim()))})`).join(",");else if(a&&!this.Reveal.isSpeakerNotes()){let d=document.createElement("video");m&&d.setAttribute("loop",""),g&&(d.muted=!0),yt&&(d.muted=!0,d.setAttribute("playsinline","")),a.split(",").forEach(p=>{const y=document.createElement("source");y.setAttribute("src",p);let L=((c="")=>vn[c.split(".").pop()])(p);L&&y.setAttribute("type",L),d.appendChild(y)}),i.appendChild(d)}else if(r&&e.excludeIframes!==!0){let d=document.createElement("iframe");d.setAttribute("allowfullscreen",""),d.setAttribute("mozallowfullscreen",""),d.setAttribute("webkitallowfullscreen",""),d.setAttribute("allow","autoplay"),d.setAttribute("data-src",r),d.style.width="100%",d.style.height="100%",d.style.maxHeight="100%",d.style.maxWidth="100%",i.appendChild(d)}}let s=i.querySelector("iframe[data-src]");s&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(r)&&s.getAttribute("src")!==r&&s.setAttribute("src",r)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{bn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",x(e,"iframe[src]").forEach(n=>{n.removeAttribute("src")})),x(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}),x(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,n,i)=>{x(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach(r=>{let s=r.getAttribute(e);s&&s.indexOf(i)===-1&&r.setAttribute(e,s+(/\?/.test(s)?"&":"?")+i)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(x(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),x(t,"video, audio").forEach(e=>{if(j(e,".fragment")&&!j(e,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=e.hasAttribute("data-autoplay")||!!j(e,".slide-background")),n&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(yt){let i=e.play();i&&typeof i.catch=="function"&&e.controls===!1&&i.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),x(t,"iframe[src]").forEach(e=>{j(e,".fragment")&&!j(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),x(t,"iframe[data-src]").forEach(e=>{j(e,".fragment")&&!j(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!j(t.target,"html"),n=!!j(t.target,".present");e&&n&&(t.target.paused||t.target.ended)&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!j(t.target,"html"),i=!!j(t.target,".present");if(n&&i){let r=this.Reveal.getConfig().autoPlayMedia;typeof r!="boolean"&&(r=e.hasAttribute("data-autoplay")||!!j(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&r?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&r?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=bt({unloadIframes:!0},e),t&&t.parentNode&&(x(t,"video, audio").forEach(n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())}),x(t,"iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)}),x(t,'iframe[src*="youtube.com/embed/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),x(t,'iframe[src*="player.vimeo.com/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&x(t,"iframe[data-src]").forEach(n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")}))}};const gt=".slides section",rt=".slides>section",Oe=".slides>section.present>section",wn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,Fe=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let kn=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),i="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(i=n.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let s=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],i){case"c":e.push(this.Reveal.getSlidePastCount(t)+s);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+s,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(t);e.push(o.h+s);let a=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(a,o.v+1)}}let r="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],r)}formatNumber(t,e,n,i="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}},Sn=class{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const i=this.Reveal.getSlides()[parseInt(e,10)-1];i&&(t=this.Reveal.getIndices(i))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find(i=>e.test(i.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}};const Qt=h=>{let t=h.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=h.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=h.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let i=h.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};let xn=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);x(t,"section").forEach(n=>{this.createBackground(n,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",n.appendChild(i),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=i,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,i={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},r=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?t.setAttribute("data-background-image",i.background):e.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&e.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&e.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(e.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(e.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&e.setAttribute("data-background-transition",i.backgroundTransition),r&&e.setAttribute("data-preload",""),i.backgroundSize&&(n.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(n.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(n.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(n.style.opacity=i.backgroundOpacity);const s=this.getContrastClass(t);typeof s=="string"&&t.classList.add(s)}getContrastClass(t){const e=t.slideBackgroundElement;let n=t.getAttribute("data-background-color");if(!n||!Qt(n)){let r=window.getComputedStyle(e);r&&r.backgroundColor&&(n=r.backgroundColor)}if(n){const r=Qt(n);if(r&&r.a!==0)return typeof(i=n)=="string"&&(i=Qt(i)),(i?(299*i.r+587*i.g+114*i.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var i;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach(n=>{t.classList.contains(n)?e.classList.add(n):e.classList.remove(n)},this)}update(t=!1){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),i=this.Reveal.getIndices(),r=null,s=e.rtl?"future":"past",o=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((a,m)=>{a.classList.remove("past","present","future"),m<i.h?a.classList.add(s):m>i.h?a.classList.add(o):(a.classList.add("present"),r=a),(t||m===i.h)&&x(a,".slide-background").forEach((g,d)=>{g.classList.remove("past","present","future");const p=typeof i.v=="number"?i.v:0;d<p?g.classList.add("past"):d>p?g.classList.add("future"):(g.classList.add("present"),m===i.h&&(r=g))})}),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),r&&this.previousBackground){let a=this.previousBackground.getAttribute("data-background-hash"),m=r.getAttribute("data-background-hash");if(m&&m===a&&r!==this.previousBackground){this.element.classList.add("no-transition");const g=r.querySelector("video"),d=this.previousBackground.querySelector("video");if(g&&d){const p=g.parentNode;d.parentNode.appendChild(g),p.appendChild(d)}}}if(this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),r){this.Reveal.slideContent.startEmbeddedContent(r);let a=r.querySelector(".slide-background-content");if(a){let m=a.style.backgroundImage||"";/\.gif/i.test(m)&&(a.style.backgroundImage="",window.getComputedStyle(a).opacity,a.style.backgroundImage=m)}this.previousBackground=r}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout(()=>{this.element.classList.remove("no-transition")},10)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,i=this.Reveal.getHorizontalSlides(),r=this.Reveal.getVerticalSlides(),s=this.element.style.backgroundSize.split(" ");s.length===1?e=n=parseInt(s[0],10):(e=parseInt(s[0],10),n=parseInt(s[1],10));let o,a,m=this.element.offsetWidth,g=i.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:g>1?(e-m)/(g-1):0,a=o*t.h*-1;let d,p,y=this.element.offsetHeight,L=r.length;d=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-y)/(L-1),p=L>0?d*t.v:0,this.element.style.backgroundPosition=a+"px "+-p+"px"}}destroy(){this.element.remove()}},Ue=0,En=class{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),i=n.indexOf(e),r=n.indexOf(t);if(t&&e&&t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(i>r?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||te();let s=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",s.slideDirection=i>r?"forward":"backward";let o=t.style.display==="none";o&&(t.style.display=this.Reveal.getConfig().display);let a=this.getAutoAnimatableElements(t,e).map(m=>this.autoAnimateElements(m.from,m.to,m.options||{},s,Ue++));if(o&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let m=.8*s.duration,g=.2*s.duration;this.getUnmatchedAutoAnimateElements(e).forEach(d=>{let p=this.getAutoAnimateOptions(d,s),y="unmatched";p.duration===s.duration&&p.delay===s.delay||(y="unmatched-"+Ue++,a.push(`[data-auto-animate="running"] [data-auto-animate-target="${y}"] { transition: opacity ${p.duration}s ease ${p.delay}s; }`)),d.dataset.autoAnimateTarget=y},this),a.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${m}s ease ${g}s; }`)}this.autoAnimateStyleSheet.innerHTML=a.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){x(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),x(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,i,r){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=r;let s=this.getAutoAnimateOptions(e,i);n.delay!==void 0&&(s.delay=n.delay),n.duration!==void 0&&(s.duration=n.duration),n.easing!==void 0&&(s.easing=n.easing);let o=this.getAutoAnimatableProperties("from",t,n),a=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&(delete a.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(Fe)||[""])[0]===(e.className.match(Fe)||[""])[0]&&i.slideDirection==="forward"&&e.classList.add("visible","disabled"),n.translate!==!1||n.scale!==!1){let d=this.Reveal.getScale(),p={x:(o.x-a.x)/d,y:(o.y-a.y)/d,scaleX:o.width/a.width,scaleY:o.height/a.height};p.x=Math.round(1e3*p.x)/1e3,p.y=Math.round(1e3*p.y)/1e3,p.scaleX=Math.round(1e3*p.scaleX)/1e3,p.scaleX=Math.round(1e3*p.scaleX)/1e3;let y=n.translate!==!1&&(p.x!==0||p.y!==0),L=n.scale!==!1&&(p.scaleX!==0||p.scaleY!==0);if(y||L){let c=[];y&&c.push(`translate(${p.x}px, ${p.y}px)`),L&&c.push(`scale(${p.scaleX}, ${p.scaleY})`),o.styles.transform=c.join(" "),o.styles["transform-origin"]="top left",a.styles.transform="none"}}for(let d in a.styles){const p=a.styles[d],y=o.styles[d];p===y?delete a.styles[d]:(p.explicitValue===!0&&(a.styles[d]=p.value),y.explicitValue===!0&&(o.styles[d]=y.value))}let m="",g=Object.keys(a.styles);return g.length>0&&(o.styles.transition="none",a.styles.transition=`all ${s.duration}s ${s.easing} ${s.delay}s`,a.styles["transition-property"]=g.join(", "),a.styles["will-change"]=g.join(", "),m='[data-auto-animate-target="'+r+'"] {'+Object.keys(o.styles).map(d=>d+": "+o.styles[d]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+r+'"] {'+Object.keys(a.styles).map(d=>d+": "+a.styles[d]+" !important;").join("")+"}"),m}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=bt(n,e),t.parentNode){let i=j(t.parentNode,"[data-auto-animate-target]");i&&(n=this.getAutoAnimateOptions(i,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let i=this.Reveal.getConfig(),r={styles:[]};if(n.translate!==!1||n.scale!==!1){let o;if(typeof n.measure=="function")o=n.measure(e);else if(i.center)o=e.getBoundingClientRect();else{let a=this.Reveal.getScale();o={x:e.offsetLeft*a,y:e.offsetTop*a,width:e.offsetWidth*a,height:e.offsetHeight*a}}r.x=o.x,r.y=o.y,r.width=o.width,r.height=o.height}const s=getComputedStyle(e);return(n.styles||i.autoAnimateStyles).forEach(o=>{let a;typeof o=="string"&&(o={property:o}),o.from!==void 0&&t==="from"?a={value:o.from,explicitValue:!0}:o.to!==void 0&&t==="to"?a={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(a=parseFloat(s["line-height"])/parseFloat(s["font-size"])),isNaN(a)&&(a=s[o.property])),a!==""&&(r.styles[o.property]=a)}),r}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),i=[];return n.filter((r,s)=>{if(i.indexOf(r.to)===-1)return i.push(r.to),!0})}getAutoAnimatePairs(t,e){let n=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",r=>r.nodeName+":::"+r.getAttribute("data-id")),this.findAutoAnimateMatches(n,t,e,i,r=>r.nodeName+":::"+r.innerText),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",r=>r.nodeName+":::"+(r.getAttribute("src")||r.getAttribute("data-src"))),this.findAutoAnimateMatches(n,t,e,"pre",r=>r.nodeName+":::"+r.innerText),n.forEach(r=>{Bt(r.from,i)?r.options={scale:!1}:Bt(r.from,"pre")&&(r.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,r.from,r.to,".hljs .hljs-ln-code",s=>s.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,r.from,r.to,".hljs .hljs-ln-numbers[data-line-number]",s=>s.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,i,r,s){let o={},a={};[].slice.call(e.querySelectorAll(i)).forEach((m,g)=>{const d=r(m);typeof d=="string"&&d.length&&(o[d]=o[d]||[],o[d].push(m))}),[].slice.call(n.querySelectorAll(i)).forEach((m,g)=>{const d=r(m);let p;if(a[d]=a[d]||[],a[d].push(m),o[d]){const y=a[d].length-1,L=o[d].length-1;o[d][y]?(p=o[d][y],o[d][y]=null):o[d][L]&&(p=o[d][L],o[d][L]=null)}p&&t.push({from:p,to:m,options:s})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,n)=>{const i=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||i||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e},[])}},An=class{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=x(this.Reveal.getRevealElement(),rt),n=x(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let i;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const r=window.getComputedStyle(this.viewportElement);r&&r.background&&(i=r.background);const s=[],o=e[0].parentNode;let a;const m=(g,d,p,y)=>{let L;if(a&&this.Reveal.shouldAutoAnimateBetween(a,g))L=document.createElement("div"),L.className="scroll-page-content scroll-auto-animate-page",L.style.display="none",a.closest(".scroll-page-content").parentNode.appendChild(L);else{const c=document.createElement("div");if(c.className="scroll-page",s.push(c),y&&n.length>d){const S=n[d],q=window.getComputedStyle(S);q&&q.background?c.style.background=q.background:i&&(c.style.background=i)}else i&&(c.style.background=i);const H=document.createElement("div");H.className="scroll-page-sticky",c.appendChild(H),L=document.createElement("div"),L.className="scroll-page-content",H.appendChild(L)}L.appendChild(g),g.classList.remove("past","future"),g.setAttribute("data-index-h",d),g.setAttribute("data-index-v",p),g.slideBackgroundElement&&(g.slideBackgroundElement.remove("past","future"),L.insertBefore(g.slideBackgroundElement,g)),a=g};e.forEach((g,d)=>{this.Reveal.isVerticalStack(g)?g.querySelectorAll("section").forEach((p,y)=>{m(p,d,y,!0)}):m(g,d,0)},this),this.createProgressBar(),x(this.Reveal.getRevealElement(),".stack").forEach(g=>g.remove()),s.forEach(g=>o.appendChild(g)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach(g=>g()),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=n=>{let i=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;i=Math.max(Math.min(i,1),0),this.viewportElement.scrollTop=i*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(n)})}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),i=t.scrollLayout==="compact",r=this.viewportElement.offsetHeight,s=e.height*n,o=i?s:r;this.scrollTriggerHeight=i?s:r,this.viewportElement.style.setProperty("--page-height",o+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const a=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=a.map(m=>{const g=this.createPage({pageElement:m,slideElement:m.querySelector("section"),stickyElement:m.querySelector(".scroll-page-sticky"),contentElement:m.querySelector(".scroll-page-content"),backgroundElement:m.querySelector(".slide-background"),autoAnimateElements:m.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});g.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:g,activate:()=>this.activatePage(g),deactivate:()=>this.deactivatePage(g)}),this.createFragmentTriggersForPage(g),g.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(g);let d=Math.max(g.scrollTriggers.length-1,0);d+=g.autoAnimatePages.reduce((p,y)=>p+Math.max(y.scrollTriggers.length-1,0),g.autoAnimatePages.length),g.pageElement.querySelectorAll(".scroll-snap-point").forEach(p=>p.remove());for(let p=0;p<d+1;p++){const y=document.createElement("div");y.className="scroll-snap-point",y.style.height=this.scrollTriggerHeight+"px",y.style.scrollSnapAlign=i?"center":"start",g.pageElement.appendChild(y),p===0&&(y.style.marginTop=-this.scrollTriggerHeight+"px")}return i&&g.scrollTriggers.length>0?(g.pageHeight=r,g.pageElement.style.setProperty("--page-height",r+"px")):(g.pageHeight=o,g.pageElement.style.removeProperty("--page-height")),g.scrollPadding=this.scrollTriggerHeight*d,g.totalHeight=g.pageHeight+g.scrollPadding,g.pageElement.style.setProperty("--page-scroll-padding",g.scrollPadding+"px"),d>0?(g.stickyElement.style.position="sticky",g.stickyElement.style.top=Math.max((r-g.pageHeight)/2,0)+"px"):(g.stickyElement.style.position="relative",g.pageElement.style.scrollSnapAlign=g.pageHeight<r?"center":"start"),g}),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce((e,n)=>e+Math.max(n.page.scrollTriggers.length,1),0);let t=0;this.slideTriggers.forEach((e,n)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const i=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach((r,s)=>{r.range=[t+s*i,t+(s+1)*i]}),t=e.range[1]})}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const n=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return n.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),n.forEach((i,r)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(r,t.fragments,e)}})})),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map((e,n)=>{let i=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(i,i.slideElement),t.autoAnimatePages.push(i),{page:i,activate:()=>this.activatePage(i),deactivate:()=>this.deactivatePage(i)}}))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(s=>s.remove());const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,n=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const i=e/t*this.progressBarHeight,r=Math.min(i/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-r+"px",i>6?this.slideTriggers.forEach(s=>{const{page:o}=s;o.progressBarSlide=document.createElement("div"),o.progressBarSlide.className="scrollbar-slide",o.progressBarSlide.style.top=s.range[0]*this.progressBarHeight+"px",o.progressBarSlide.style.height=(s.range[1]-s.range[0])*this.progressBarHeight-r+"px",o.progressBarSlide.classList.toggle("has-triggers",o.scrollTriggers.length>0),this.progressBarInner.appendChild(o.progressBarSlide),o.scrollTriggerElements=o.scrollTriggers.map((a,m)=>{const g=document.createElement("div");return g.className="scrollbar-trigger",g.style.top=(a.range[0]-s.range[0])*this.progressBarHeight+"px",g.style.height=(a.range[1]-a.range[0])*this.progressBarHeight-r+"px",o.progressBarSlide.appendChild(g),m===0&&(g.style.display="none"),g})}):this.pages.forEach(s=>s.progressBarSlide=null)}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,i=this.viewportElement.scrollHeight-t,r=Math.max(Math.min(n/i,1),0),s=Math.max(Math.min((n+t/2)/this.viewportElement.scrollHeight,1),0);let o;this.slideTriggers.forEach(a=>{const{page:m}=a;r>=a.range[0]-2*e&&r<=a.range[1]+2*e&&!m.loaded?(m.loaded=!0,this.Reveal.slideContent.load(m.slideElement)):m.loaded&&(m.loaded=!1,this.Reveal.slideContent.unload(m.slideElement)),r>=a.range[0]&&r<=a.range[1]?(this.activateTrigger(a),o=a.page):a.active&&this.deactivateTrigger(a)}),o&&o.scrollTriggers.forEach(a=>{s>=a.range[0]&&s<=a.range[1]?this.activateTrigger(a):a.active&&this.deactivateTrigger(a)}),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter(e=>e.progressBarSlide).forEach(e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach((n,i)=>{e.scrollTriggerElements[i].classList.toggle("active",e.active===!0&&n.active===!0)})}),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout(()=>{this.progressBar&&this.progressBar.classList.remove("visible")},500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push(()=>this.scrollToSlide(t))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout(()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null},50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:n,contentElement:i,indexh:r,indexv:s}=t;i.style.display="block",e.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(e,r,s),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(i.parentNode.querySelectorAll(".scroll-page-content")).forEach(o=>{o!==i&&(o.style.display="none")})}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const n=this.getAllPages().find(i=>i.indexh===t&&i.indexv===e);return n?n.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find(e=>e.page.slideElement===t)}getAllPages(){return this.pages.flatMap(t=>[t,...t.autoAnimatePages||[]])}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Rn=class{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=x(this.Reveal.getRevealElement(),gt),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),r=Math.floor(i.width*(1+t.margin)),s=Math.floor(i.height*(1+t.margin)),o=i.width,a=i.height;await new Promise(requestAnimationFrame),te("@page{size:"+r+"px "+s+"px; margin: 0px;}"),te(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+a+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=r+"px",document.body.style.height=s+"px";const m=this.Reveal.getViewportElement();let g;if(m){const c=window.getComputedStyle(m);c&&c.background&&(g=c.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,a),await new Promise(requestAnimationFrame);const d=e.map(c=>c.scrollHeight),p=[],y=e[0].parentNode;let L=1;e.forEach(function(c,H){if(c.classList.contains("stack")===!1){let S=(r-o)/2,q=(s-a)/2;const Y=d[H];let M=Math.max(Math.ceil(Y/s),1);M=Math.min(M,t.pdfMaxPagesPerSlide),(M===1&&t.center||c.classList.contains("center"))&&(q=Math.max((s-Y)/2,0));const R=document.createElement("div");if(p.push(R),R.className="pdf-page",R.style.height=(s+t.pdfPageHeightOffset)*M+"px",g&&(R.style.background=g),R.appendChild(c),c.style.left=S+"px",c.style.top=q+"px",c.style.width=o+"px",this.Reveal.slideContent.layout(c),c.slideBackgroundElement&&R.insertBefore(c.slideBackgroundElement,c),t.showNotes){const T=this.Reveal.getSlideNotes(c);if(T){const F=typeof t.showNotes=="string"?t.showNotes:"inline",I=document.createElement("div");I.classList.add("speaker-notes"),I.classList.add("speaker-notes-pdf"),I.setAttribute("data-layout",F),I.innerHTML=T,F==="separate-page"?p.push(I):(I.style.left="8px",I.style.bottom="8px",I.style.width=r-2*8+"px",R.appendChild(I))}}if(n){const T=document.createElement("div");T.classList.add("slide-number"),T.classList.add("slide-number-pdf"),T.innerHTML=L++,R.appendChild(T)}if(t.pdfSeparateFragments){const T=this.Reveal.fragments.sort(R.querySelectorAll(".fragment"),!0);let O;T.forEach(function(F,I){O&&O.forEach(function(C){C.classList.remove("current-fragment")}),F.forEach(function(C){C.classList.add("visible","current-fragment")},this);const f=R.cloneNode(!0);if(n){const C=I+1;f.querySelector(".slide-number-pdf").innerHTML+="."+C}p.push(f),O=F},this),T.forEach(function(F){F.forEach(function(I){I.classList.remove("visible","current-fragment")})})}else x(R,".fragment:not(.fade-out)").forEach(function(T){T.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),p.forEach(c=>y.appendChild(c)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),m.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}},Ln=class{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){x(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){x(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],i=[],r=[];t.forEach(o=>{if(o.hasAttribute("data-fragment-index")){let a=parseInt(o.getAttribute("data-fragment-index"),10);n[a]||(n[a]=[]),n[a].push(o)}else i.push([o])}),n=n.concat(i);let s=0;return n.forEach(o=>{o.forEach(a=>{r.push(a),a.setAttribute("data-fragment-index",s)}),s++}),e===!0?n:r}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=x(t,"section");e.forEach((n,i)=>{this.sort(n.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e,n=this.Reveal.getCurrentSlide()){let i={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(e=e||this.sort(n.querySelectorAll(".fragment"))).length){let r=0;if(typeof t!="number"){let s=this.sort(n.querySelectorAll(".fragment.visible")).pop();s&&(t=parseInt(s.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((s,o)=>{if(s.hasAttribute("data-fragment-index")&&(o=parseInt(s.getAttribute("data-fragment-index"),10)),r=Math.max(r,o),o<=t){let a=s.classList.contains("visible");s.classList.add("visible"),s.classList.remove("current-fragment"),o===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(s)),s.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(s)),a||(i.shown.push(s),this.Reveal.dispatchEvent({target:s,type:"visible",bubbles:!1}))}else{let a=s.classList.contains("visible");s.classList.remove("visible"),s.classList.remove("current-fragment"),a&&(this.Reveal.slideContent.stopEmbeddedContent(s),i.hidden.push(s),this.Reveal.dispatchEvent({target:s,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,r),-1),n.setAttribute("data-fragment",t)}return i.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:i.hidden[0],fragments:i.hidden}}),i.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:i.shown[0],fragments:i.shown}}),i}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let i=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof t!="number"){let s=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=s?parseInt(s.getAttribute("data-fragment-index")||0,10):-1}t+=e;let r=this.update(t,i);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!r.shown.length&&!r.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Tn=class{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),x(this.Reveal.getRevealElement(),gt).forEach(i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&x(t,"section").forEach((n,i)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",i),lt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{lt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),x(t,".slide-background").forEach((n,i)=>{lt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),x(this.Reveal.getRevealElement(),gt).forEach(e=>{lt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),x(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{lt(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),i=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,i)}}}},Cn=class{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let r=document.activeElement&&document.activeElement.isContentEditable===!0,s=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),a=!([32,37,38,39,40,63,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(r||s||o||a)return;let m,g=[66,86,190,191,112];if(typeof e.keyboard=="object")for(m in e.keyboard)e.keyboard[m]==="togglePause"&&g.push(parseInt(m,10));if(this.Reveal.isPaused()&&g.indexOf(n)===-1)return!1;let d=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),p=!1;if(typeof e.keyboard=="object"){for(m in e.keyboard)if(parseInt(m,10)===n){let y=e.keyboard[m];typeof y=="function"?y.apply(null,[t]):typeof y=="string"&&typeof this.Reveal[y]=="function"&&this.Reveal[y].call(),p=!0}}if(p===!1){for(m in this.bindings)if(parseInt(m,10)===n){let y=this.bindings[m].callback;typeof y=="function"?y.apply(null,[t]):typeof y=="string"&&typeof this.Reveal[y]=="function"&&this.Reveal[y].call(),p=!0}}p===!1&&(p=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&d?e.rtl?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&d?e.rtl?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&d?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&d?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(n)||n===191&&!t.shiftKey?this.Reveal.togglePause():n===70?tn(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():n!==63&&n!==191||!t.shiftKey?n===112?this.Reveal.toggleHelp():p=!1:this.Reveal.toggleHelp()),p?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}},Pn=class{constructor(t){Jt(this,"MAX_REPLACE_STATE_FREQUENCY",1e3);this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),i=n.split("/");if(/^[0-9]*$/.test(i[0])||!n.length){const r=this.Reveal.getConfig();let s,o=r.hashOneBasedIndex||e.oneBasedIndex?1:0,a=parseInt(i[0],10)-o||0,m=parseInt(i[1],10)-o||0;return r.fragmentInURL&&(s=parseInt(i[2],10),isNaN(s)&&(s=void 0)),{h:a,v:m,f:s}}{let r,s;/\/[-\d]+$/g.test(n)&&(s=parseInt(n.split("/").pop(),10),s=isNaN(s)?void 0:s,n=n.split("/").shift());try{r=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(r)return{...this.Reveal.getIndices(r),f:s}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let i=this.getHash();e.history?window.location.hash=i:e.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),i=n?n.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let r=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(r.f=void 0),typeof i=="string"&&i.length)e="/"+i,r.f>=0&&(e+="/"+r.f);else{let s=this.Reveal.getConfig().hashOneBasedIndex?1:0;(r.h>0||r.v>0||r.f>=0)&&(e+=r.h+s),(r.v>0||r.f>=0)&&(e+="/"+(r.v+s)),r.f>=0&&(e+="/"+r.f)}return e}onWindowHashChange(t){this.readURL()}},Nn=class{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=x(e,".navigate-left"),this.controlsRight=x(e,".navigate-right"),this.controlsUp=x(e,".navigate-up"),this.controlsDown=x(e,".navigate-down"),this.controlsPrev=x(e,".navigate-prev"),this.controlsNext=x(e,".navigate-next"),this.controlsFullscreen=x(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];nn&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(n=>n.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(n=>n.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(n=>n.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(n=>n.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(n=>n.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(n=>n.addEventListener(e,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(n=>n.addEventListener(e,this.onEnterFullscreen,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(e=>e.removeEventListener(t,this.onEnterFullscreen,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsNext.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(n.prev&&this.controlsUp.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsDown.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")})):(n.prev&&this.controlsLeft.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsRight.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(t){const e=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();tn(e.embedded?n:n.parentElement)}};class In{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,i=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(i=n-i);let r=this.Reveal.getIndices(e[i]);this.Reveal.slide(r.h,r.v)}destroy(){this.element.remove()}}class Mn{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const We=(h,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=h,typeof t=="function"&&(e.onload=e.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=i=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+i))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class zn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(n=>{let i=[],r=0;if(e.forEach(s=>{s.condition&&!s.condition()||(s.async?this.asyncDependencies.push(s):i.push(s))}),i.length){r=i.length;const s=o=>{o&&typeof o.callback=="function"&&o.callback(),--r==0&&this.initPlugins().then(n)};i.forEach(o=>{typeof o.id=="string"?(this.registerPlugin(o),s(o)):typeof o.src=="string"?We(o.src,()=>s(o)):(console.warn("Unrecognized plugin format",o),s())})}else this.initPlugins().then(n)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let i,r=()=>{--n==0?this.loadAsync().then(t):i()},s=0;i=()=>{let o=e[s++];if(typeof o.init=="function"){let a=o.init(this.Reveal);a&&typeof a.then=="function"?a.then(r):r()}else r()},i()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{We(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}let $n=class{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(Bt(t,"video[controls], audio[controls]"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.touchCaptured=!1,this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)nn&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,i=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let r=this.Reveal.availableRoutes({includeFragments:!0}),s=n-this.touchStartX,o=i-this.touchStartY;s>40&&Math.abs(s)>Math.abs(o)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):s<-40&&Math.abs(s)>Math.abs(o)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&r.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&r.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}};const Gt="focus",je="blur";class Bn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==Gt&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Gt}blur(){this.state!==je&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=je}isFocused(){return this.state===Gt}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=j(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class _n{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(n=>n.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class Dn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,i=this.diameter2,r=28;this.progressOffset+=.1*(1-this.progressOffset);const s=-Math.PI/2+t*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,i,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,i,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,i,e,o,s,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,r),this.context.fillRect(18,0,10,r)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,r),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Hn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const sn="5.1.0";function an(h,t){arguments.length<2&&(t=arguments[0],h=document.querySelector(".reveal"));const e={};let n,i,r,s,o,a={},m=!1,g=!1,d={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},p=[],y=1,L={layout:"",overview:""},c={},H="idle",S=0,q=0,Y=-1,M=!1,R=new yn(e),T=new kn(e),O=new Sn(e),F=new En(e),I=new xn(e),f=new An(e),C=new Rn(e),P=new Ln(e),$=new Tn(e),W=new Cn(e),K=new Pn(e),U=new Nn(e),et=new In(e),ie=new Mn(e),G=new zn(e),ht=new Bn(e),Dt=new $n(e),Q=new _n(e);function un(){g=!0,a.showHiddenSlides||x(c.wrapper,'section[data-visibility="hidden"]').forEach(l=>{const u=l.parentNode;u.childElementCount===1&&/section/i.test(u.nodeName)?u.remove():l.remove()}),function(){c.slides.classList.add("no-transition"),yt?c.wrapper.classList.add("no-hover"):c.wrapper.classList.remove("no-hover"),I.render(),T.render(),O.render(),U.render(),et.render(),Q.render(),c.pauseOverlay=((l,u,v,b="")=>{let w=l.querySelectorAll("."+v);for(let z=0;z<w.length;z++){let _=w[z];if(_.parentNode===l)return _}let N=document.createElement(u);return N.className=v,N.innerHTML=b,l.appendChild(N),N})(c.wrapper,"div","pause-overlay",a.controls?'<button class="resume-button">Resume presentation</button>':null),c.statusElement=function(){let l=c.wrapper.querySelector(".aria-status");return l||(l=document.createElement("div"),l.style.position="absolute",l.style.height="1px",l.style.width="1px",l.style.overflow="hidden",l.style.clip="rect( 1px, 1px, 1px, 1px )",l.classList.add("aria-status"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),c.wrapper.appendChild(l)),l}(),c.wrapper.setAttribute("role","application")}(),a.postMessage&&window.addEventListener("message",Me,!1),setInterval(()=>{(!f.isActive()&&c.wrapper.scrollTop!==0||c.wrapper.scrollLeft!==0)&&(c.wrapper.scrollTop=0,c.wrapper.scrollLeft=0)},1e3),document.addEventListener("fullscreenchange",Nt),document.addEventListener("webkitfullscreenchange",Nt),at().forEach(l=>{x(l,"section").forEach((u,v)=>{v>0&&(u.classList.remove("present"),u.classList.remove("past"),u.classList.add("future"),u.setAttribute("aria-hidden","true"))})}),se(),I.update(!0),function(){const l=a.view==="print",u=a.view==="scroll"||a.view==="reader";(l||u)&&(l?Et():Dt.unbind(),c.viewport.classList.add("loading-scroll-mode"),l?document.readyState==="complete"?C.activate():window.addEventListener("load",()=>C.activate()):f.activate())}(),K.readURL(),setTimeout(()=>{c.slides.classList.remove("no-transition"),c.wrapper.classList.add("ready"),Z({type:"ready",data:{indexh:n,indexv:i,currentSlide:s}})},1)}function Ht(l){c.statusElement.textContent=l}function xt(l){let u="";if(l.nodeType===3)u+=l.textContent;else if(l.nodeType===1){let v=l.getAttribute("aria-hidden"),b=window.getComputedStyle(l).display==="none";v==="true"||b||Array.from(l.childNodes).forEach(w=>{u+=xt(w)})}return u=u.trim(),u===""?"":u+" "}function se(l){const u={...a};if(typeof l=="object"&&bt(a,l),e.isReady()===!1)return;const v=c.wrapper.querySelectorAll(gt).length;c.wrapper.classList.remove(u.transition),c.wrapper.classList.add(a.transition),c.wrapper.setAttribute("data-transition-speed",a.transitionSpeed),c.wrapper.setAttribute("data-background-transition",a.backgroundTransition),c.viewport.style.setProperty("--slide-width",typeof a.width=="string"?a.width:a.width+"px"),c.viewport.style.setProperty("--slide-height",typeof a.height=="string"?a.height:a.height+"px"),a.shuffle&&Wt(),Zt(c.wrapper,"embedded",a.embedded),Zt(c.wrapper,"rtl",a.rtl),Zt(c.wrapper,"center",a.center),a.pause===!1&&kt(),a.previewLinks?(de(),Ot("[data-preview-link=false]")):(Ot(),de("[data-preview-link]:not([data-preview-link=false])")),F.reset(),o&&(o.destroy(),o=null),v>1&&a.autoSlide&&a.autoSlideStoppable&&(o=new Dn(c.wrapper,()=>Math.min(Math.max((Date.now()-Y)/S,0),1)),o.on("click",gn),M=!1),a.navigationMode!=="default"?c.wrapper.setAttribute("data-navigation-mode",a.navigationMode):c.wrapper.removeAttribute("data-navigation-mode"),Q.configure(a,u),ht.configure(a,u),ie.configure(a,u),U.configure(a,u),et.configure(a,u),W.configure(a,u),P.configure(a,u),T.configure(a,u),we()}function ae(){window.addEventListener("resize",Be,!1),a.touch&&Dt.bind(),a.keyboard&&W.bind(),a.progress&&et.bind(),a.respondToHashChanges&&K.bind(),U.bind(),ht.bind(),c.slides.addEventListener("click",$e,!1),c.slides.addEventListener("transitionend",ze,!1),c.pauseOverlay.addEventListener("click",kt,!1),a.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",_e,!1)}function Et(){Dt.unbind(),ht.unbind(),W.unbind(),U.unbind(),et.unbind(),K.unbind(),window.removeEventListener("resize",Be,!1),c.slides.removeEventListener("click",$e,!1),c.slides.removeEventListener("transitionend",ze,!1),c.pauseOverlay.removeEventListener("click",kt,!1)}function re(l,u,v){h.addEventListener(l,u,v)}function oe(l,u,v){h.removeEventListener(l,u,v)}function qt(l){typeof l.layout=="string"&&(L.layout=l.layout),typeof l.overview=="string"&&(L.overview=l.overview),L.layout?lt(c.slides,L.layout+" "+L.overview):lt(c.slides,L.overview)}function Z({target:l=c.wrapper,type:u,data:v,bubbles:b=!0}){let w=document.createEvent("HTMLEvents",1,2);return w.initEvent(u,b,!0),bt(w,v),l.dispatchEvent(w),l===c.wrapper&&ce(u),w}function le(l){Z({type:"slidechanged",data:{indexh:n,indexv:i,previousSlide:r,currentSlide:s,origin:l}})}function ce(l,u){if(a.postMessageEvents&&window.parent!==window.self){let v={namespace:"reveal",eventName:l,state:Ne()};bt(v,u),window.parent.postMessage(JSON.stringify(v),"*")}}function de(l="a"){Array.from(c.wrapper.querySelectorAll(l)).forEach(u=>{/^(http|www)/gi.test(u.getAttribute("href"))&&u.addEventListener("click",De,!1)})}function Ot(l="a"){Array.from(c.wrapper.querySelectorAll(l)).forEach(u=>{/^(http|www)/gi.test(u.getAttribute("href"))&&u.removeEventListener("click",De,!1)})}function he(l){nt(),c.overlay=document.createElement("div"),c.overlay.classList.add("overlay"),c.overlay.classList.add("overlay-preview"),c.wrapper.appendChild(c.overlay),c.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${l}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${l}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,c.overlay.querySelector("iframe").addEventListener("load",u=>{c.overlay.classList.add("loaded")},!1),c.overlay.querySelector(".close").addEventListener("click",u=>{nt(),u.preventDefault()},!1),c.overlay.querySelector(".external").addEventListener("click",u=>{nt()},!1)}function ue(){if(a.help){nt(),c.overlay=document.createElement("div"),c.overlay.classList.add("overlay"),c.overlay.classList.add("overlay-help"),c.wrapper.appendChild(c.overlay);let l='<p class="title">Keyboard Shortcuts</p><br/>',u=W.getShortcuts(),v=W.getBindings();l+="<table><th>KEY</th><th>ACTION</th>";for(let b in u)l+=`<tr><td>${b}</td><td>${u[b]}</td></tr>`;for(let b in v)v[b].key&&v[b].description&&(l+=`<tr><td>${v[b].key}</td><td>${v[b].description}</td></tr>`);l+="</table>",c.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${l}</div>
				</div>
			`,c.overlay.querySelector(".close").addEventListener("click",b=>{nt(),b.preventDefault()},!1)}}function nt(){return!!c.overlay&&(c.overlay.parentNode.removeChild(c.overlay),c.overlay=null,!0)}function mt(){if(c.wrapper&&!C.isActive()){const l=c.viewport.offsetWidth,u=c.viewport.offsetHeight;if(!a.disableLayout){yt&&!a.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const v=f.isActive()?At(l,u):At(),b=y;ge(a.width,a.height),c.slides.style.width=v.width+"px",c.slides.style.height=v.height+"px",y=Math.min(v.presentationWidth/v.width,v.presentationHeight/v.height),y=Math.max(y,a.minScale),y=Math.min(y,a.maxScale),y===1||f.isActive()?(c.slides.style.zoom="",c.slides.style.left="",c.slides.style.top="",c.slides.style.bottom="",c.slides.style.right="",qt({layout:""})):(c.slides.style.zoom="",c.slides.style.left="50%",c.slides.style.top="50%",c.slides.style.bottom="auto",c.slides.style.right="auto",qt({layout:"translate(-50%, -50%) scale("+y+")"}));const w=Array.from(c.wrapper.querySelectorAll(gt));for(let N=0,z=w.length;N<z;N++){const _=w[N];_.style.display!=="none"&&(a.center||_.classList.contains("center")?_.classList.contains("stack")?_.style.top=0:_.style.top=Math.max((v.height-_.scrollHeight)/2,0)+"px":_.style.top="")}b!==y&&Z({type:"resize",data:{oldScale:b,scale:y,size:v}})}(function(){if(c.wrapper&&!a.disableLayout&&!C.isActive()&&typeof a.scrollActivationWidth=="number"&&a.view!=="scroll"){const v=At();v.presentationWidth>0&&v.presentationWidth<=a.scrollActivationWidth?f.isActive()||(I.create(),f.activate()):f.isActive()&&f.deactivate()}})(),c.viewport.style.setProperty("--slide-scale",y),c.viewport.style.setProperty("--viewport-width",l+"px"),c.viewport.style.setProperty("--viewport-height",u+"px"),f.layout(),et.update(),I.updateParallax(),$.isActive()&&$.update()}}function ge(l,u){x(c.slides,"section > .stretch, section > .r-stretch").forEach(v=>{let b=((w,N=0)=>{if(w){let z,_=w.style.height;return w.style.height="0px",w.parentNode.style.height="auto",z=N-w.parentNode.offsetHeight,w.style.height=_+"px",w.parentNode.style.removeProperty("height"),z}return N})(v,u);if(/(img|video)/gi.test(v.nodeName)){const w=v.naturalWidth||v.videoWidth,N=v.naturalHeight||v.videoHeight,z=Math.min(l/w,b/N);v.style.width=w*z+"px",v.style.height=N*z+"px"}else v.style.width=l+"px",v.style.height=b+"px"})}function At(l,u){let v=a.width,b=a.height;a.disableLayout&&(v=c.slides.offsetWidth,b=c.slides.offsetHeight);const w={width:v,height:b,presentationWidth:l||c.wrapper.offsetWidth,presentationHeight:u||c.wrapper.offsetHeight};return w.presentationWidth-=w.presentationWidth*a.margin,w.presentationHeight-=w.presentationHeight*a.margin,typeof w.width=="string"&&/%$/.test(w.width)&&(w.width=parseInt(w.width,10)/100*w.presentationWidth),typeof w.height=="string"&&/%$/.test(w.height)&&(w.height=parseInt(w.height,10)/100*w.presentationHeight),w}function pe(l,u){typeof l=="object"&&typeof l.setAttribute=="function"&&l.setAttribute("data-previous-indexv",u||0)}function me(l){if(typeof l=="object"&&typeof l.setAttribute=="function"&&l.classList.contains("stack")){const u=l.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(l.getAttribute(u)||0,10)}return 0}function wt(l=s){return l&&l.parentNode&&!!l.parentNode.nodeName.match(/section/i)}function fe(){return!(!s||!wt(s))&&!s.nextElementSibling}function ve(){return n===0&&i===0}function Ft(){return!!s&&!s.nextElementSibling&&(!wt(s)||!s.parentNode.nextElementSibling)}function be(){if(a.pause){const l=c.wrapper.classList.contains("paused");Rt(),c.wrapper.classList.add("paused"),l===!1&&Z({type:"paused"})}}function kt(){const l=c.wrapper.classList.contains("paused");c.wrapper.classList.remove("paused"),ft(),l&&Z({type:"resumed"})}function ye(l){typeof l=="boolean"?l?be():kt():St()?kt():be()}function St(){return c.wrapper.classList.contains("paused")}function tt(l,u,v,b){if(Z({type:"beforeslidechange",data:{indexh:l===void 0?n:l,indexv:u===void 0?i:u,origin:b}}).defaultPrevented)return;r=s;const w=c.wrapper.querySelectorAll(rt);if(f.isActive()){const J=f.getSlideByIndices(l,u);return void(J&&f.scrollToSlide(J))}if(w.length===0)return;u!==void 0||$.isActive()||(u=me(w[l])),r&&r.parentNode&&r.parentNode.classList.contains("stack")&&pe(r.parentNode,i);const N=p.concat();p.length=0;let z=n||0,_=i||0;n=ke(rt,l===void 0?n:l),i=ke(Oe,u===void 0?i:u);let st=n!==z||i!==_;st||(r=null);let ut=w[n],X=ut.querySelectorAll("section");h.classList.toggle("is-vertical-slide",X.length>1),s=X[i]||ut;let D=!1;st&&r&&s&&!$.isActive()&&(H="running",D=Ut(r,s,z,_),D&&c.slides.classList.add("disable-slide-transitions")),jt(),mt(),$.isActive()&&$.update(),v!==void 0&&P.goto(v),r&&r!==s&&(r.classList.remove("present"),r.setAttribute("aria-hidden","true"),ve()&&setTimeout(()=>{x(c.wrapper,rt+".stack").forEach(J=>{pe(J,0)})},0));t:for(let J=0,pn=p.length;J<pn;J++){for(let It=0;It<N.length;It++)if(N[It]===p[J]){N.splice(It,1);continue t}c.viewport.classList.add(p[J]),Z({type:p[J]})}for(;N.length;)c.viewport.classList.remove(N.pop());st&&le(b),!st&&r||(R.stopEmbeddedContent(r),R.startEmbeddedContent(s)),requestAnimationFrame(()=>{Ht(xt(s))}),et.update(),U.update(),Q.update(),I.update(),I.updateParallax(),T.update(),P.update(),K.writeURL(),ft(),D&&(setTimeout(()=>{c.slides.classList.remove("disable-slide-transitions")},0),a.autoAnimate&&F.run(r,s))}function Ut(l,u,v,b){return l.hasAttribute("data-auto-animate")&&u.hasAttribute("data-auto-animate")&&l.getAttribute("data-auto-animate-id")===u.getAttribute("data-auto-animate-id")&&!(n>v||i>b?u:l).hasAttribute("data-auto-animate-restart")}function we(){Et(),ae(),mt(),S=a.autoSlide,ft(),I.create(),K.writeURL(),a.sortFragmentsOnSync===!0&&P.sortAll(),U.update(),et.update(),jt(),Q.update(),Q.updateVisibility(),I.update(!0),T.update(),R.formatEmbeddedContent(),a.autoPlayMedia===!1?R.stopEmbeddedContent(s,{unloadIframes:!1}):R.startEmbeddedContent(s),$.isActive()&&$.layout()}function Wt(l=at()){l.forEach((u,v)=>{let b=l[Math.floor(Math.random()*l.length)];b.parentNode===u.parentNode&&u.parentNode.insertBefore(u,b);let w=u.querySelectorAll("section");w.length&&Wt(w)})}function ke(l,u){let v=x(c.wrapper,l),b=v.length,w=f.isActive()||C.isActive(),N=!1,z=!1;if(b){a.loop&&(u>=b&&(N=!0),(u%=b)<0&&(u=b+u,z=!0)),u=Math.max(Math.min(u,b-1),0);for(let X=0;X<b;X++){let D=v[X],J=a.rtl&&!wt(D);D.classList.remove("past"),D.classList.remove("present"),D.classList.remove("future"),D.setAttribute("hidden",""),D.setAttribute("aria-hidden","true"),D.querySelector("section")&&D.classList.add("stack"),w?D.classList.add("present"):X<u?(D.classList.add(J?"future":"past"),a.fragments&&Se(D)):X>u?(D.classList.add(J?"past":"future"),a.fragments&&xe(D)):X===u&&a.fragments&&(N?xe(D):z&&Se(D))}let _=v[u],st=_.classList.contains("present");_.classList.add("present"),_.removeAttribute("hidden"),_.removeAttribute("aria-hidden"),st||Z({target:_,type:"visible",bubbles:!1});let ut=_.getAttribute("data-state");ut&&(p=p.concat(ut.split(" ")))}else u=0;return u}function Se(l){x(l,".fragment").forEach(u=>{u.classList.add("visible"),u.classList.remove("current-fragment")})}function xe(l){x(l,".fragment.visible").forEach(u=>{u.classList.remove("visible","current-fragment")})}function jt(){let l,u,v=at(),b=v.length;if(b&&n!==void 0){let w=$.isActive()?10:a.viewDistance;yt&&(w=$.isActive()?6:a.mobileViewDistance),C.isActive()&&(w=Number.MAX_VALUE);for(let N=0;N<b;N++){let z=v[N],_=x(z,"section"),st=_.length;if(l=Math.abs((n||0)-N)||0,a.loop&&(l=Math.abs(((n||0)-N)%(b-w))||0),l<w?R.load(z):R.unload(z),st){let ut=me(z);for(let X=0;X<st;X++){let D=_[X];u=Math.abs(N===(n||0)?(i||0)-X:X-ut),l+u<w?R.load(D):R.unload(D)}}}Te()?c.wrapper.classList.add("has-vertical-slides"):c.wrapper.classList.remove("has-vertical-slides"),Le()?c.wrapper.classList.add("has-horizontal-slides"):c.wrapper.classList.remove("has-horizontal-slides")}}function it({includeFragments:l=!1}={}){let u=c.wrapper.querySelectorAll(rt),v=c.wrapper.querySelectorAll(Oe),b={left:n>0,right:n<u.length-1,up:i>0,down:i<v.length-1};if(a.loop&&(u.length>1&&(b.left=!0,b.right=!0),v.length>1&&(b.up=!0,b.down=!0)),u.length>1&&a.navigationMode==="linear"&&(b.right=b.right||b.down,b.left=b.left||b.up),l===!0){let w=P.availableRoutes();b.left=b.left||w.prev,b.up=b.up||w.prev,b.down=b.down||w.next,b.right=b.right||w.next}if(a.rtl){let w=b.left;b.left=b.right,b.right=w}return b}function Ee(l=s){let u=at(),v=0;t:for(let b=0;b<u.length;b++){let w=u[b],N=w.querySelectorAll("section");for(let z=0;z<N.length;z++){if(N[z]===l)break t;N[z].dataset.visibility!=="uncounted"&&v++}if(w===l)break;w.classList.contains("stack")===!1&&w.dataset.visibility!=="uncounted"&&v++}return v}function Ae(l){let u,v=n,b=i;if(l)if(f.isActive())v=parseInt(l.getAttribute("data-index-h"),10),l.getAttribute("data-index-v")&&(b=parseInt(l.getAttribute("data-index-v"),10));else{let w=wt(l),N=w?l.parentNode:l,z=at();v=Math.max(z.indexOf(N),0),b=void 0,w&&(b=Math.max(x(l.parentNode,"section").indexOf(l),0))}if(!l&&s&&s.querySelectorAll(".fragment").length>0){let w=s.querySelector(".current-fragment");u=w&&w.hasAttribute("data-fragment-index")?parseInt(w.getAttribute("data-fragment-index"),10):s.querySelectorAll(".fragment.visible").length-1}return{h:v,v:b,f:u}}function Vt(){return x(c.wrapper,gt+':not(.stack):not([data-visibility="uncounted"])')}function at(){return x(c.wrapper,rt)}function Re(){return x(c.wrapper,".slides>section>section")}function Le(){return at().length>1}function Te(){return Re().length>1}function Ce(){return Vt().length}function Pe(l,u){let v=at()[l],b=v&&v.querySelectorAll("section");return b&&b.length&&typeof u=="number"?b?b[u]:void 0:v}function Ne(){let l=Ae();return{indexh:l.h,indexv:l.v,indexf:l.f,paused:St(),overview:$.isActive()}}function ft(){if(Rt(),s&&a.autoSlide!==!1){let l=s.querySelector(".current-fragment[data-autoslide]"),u=l?l.getAttribute("data-autoslide"):null,v=s.parentNode?s.parentNode.getAttribute("data-autoslide"):null,b=s.getAttribute("data-autoslide");u?S=parseInt(u,10):b?S=parseInt(b,10):v?S=parseInt(v,10):(S=a.autoSlide,s.querySelectorAll(".fragment").length===0&&x(s,"video, audio").forEach(w=>{w.hasAttribute("data-autoplay")&&S&&1e3*w.duration/w.playbackRate>S&&(S=1e3*w.duration/w.playbackRate+1e3)})),!S||M||St()||$.isActive()||Ft()&&!P.availableRoutes().next&&a.loop!==!0||(q=setTimeout(()=>{typeof a.autoSlideMethod=="function"?a.autoSlideMethod():Yt(),ft()},S),Y=Date.now()),o&&o.setPlaying(q!==-1)}}function Rt(){clearTimeout(q),q=-1}function Lt(){S&&!M&&(M=!0,Z({type:"autoslidepaused"}),clearTimeout(q),o&&o.setPlaying(!1))}function Tt(){S&&M&&(M=!1,Z({type:"autoslideresumed"}),ft())}function Ct({skipFragments:l=!1}={}){if(d.hasNavigatedHorizontally=!0,f.isActive())return f.prev();a.rtl?($.isActive()||l||P.next()===!1)&&it().left&&tt(n+1,a.navigationMode==="grid"?i:void 0):($.isActive()||l||P.prev()===!1)&&it().left&&tt(n-1,a.navigationMode==="grid"?i:void 0)}function Pt({skipFragments:l=!1}={}){if(d.hasNavigatedHorizontally=!0,f.isActive())return f.next();a.rtl?($.isActive()||l||P.prev()===!1)&&it().right&&tt(n-1,a.navigationMode==="grid"?i:void 0):($.isActive()||l||P.next()===!1)&&it().right&&tt(n+1,a.navigationMode==="grid"?i:void 0)}function Kt({skipFragments:l=!1}={}){if(f.isActive())return f.prev();($.isActive()||l||P.prev()===!1)&&it().up&&tt(n,i-1)}function Xt({skipFragments:l=!1}={}){if(d.hasNavigatedVertically=!0,f.isActive())return f.next();($.isActive()||l||P.next()===!1)&&it().down&&tt(n,i+1)}function Ie({skipFragments:l=!1}={}){if(f.isActive())return f.prev();if(l||P.prev()===!1)if(it().up)Kt({skipFragments:l});else{let u;if(u=a.rtl?x(c.wrapper,rt+".future").pop():x(c.wrapper,rt+".past").pop(),u&&u.classList.contains("stack")){let v=u.querySelectorAll("section").length-1||void 0;tt(n-1,v)}else a.rtl?Pt({skipFragments:l}):Ct({skipFragments:l})}}function Yt({skipFragments:l=!1}={}){if(d.hasNavigatedHorizontally=!0,d.hasNavigatedVertically=!0,f.isActive())return f.next();if(l||P.next()===!1){let u=it();u.down&&u.right&&a.loop&&fe()&&(u.down=!1),u.down?Xt({skipFragments:l}):a.rtl?Ct({skipFragments:l}):Pt({skipFragments:l})}}function Me(l){let u=l.data;if(typeof u=="string"&&u.charAt(0)==="{"&&u.charAt(u.length-1)==="}"&&(u=JSON.parse(u),u.method&&typeof e[u.method]=="function"))if(wn.test(u.method)===!1){const v=e[u.method].apply(e,u.args);ce("callback",{method:u.method,result:v})}else console.warn('reveal.js: "'+u.method+'" is is blacklisted from the postMessage API')}function ze(l){H==="running"&&/section/gi.test(l.target.nodeName)&&(H="idle",Z({type:"slidetransitionend",data:{indexh:n,indexv:i,previousSlide:r,currentSlide:s}}))}function $e(l){const u=j(l.target,'a[href^="#"]');if(u){const v=u.getAttribute("href"),b=K.getIndicesFromHash(v);b&&(e.slide(b.h,b.v,b.f),l.preventDefault())}}function Be(l){mt()}function _e(l){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Nt(l){(document.fullscreenElement||document.webkitFullscreenElement)===c.wrapper&&(l.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function De(l){if(l.currentTarget&&l.currentTarget.hasAttribute("href")){let u=l.currentTarget.getAttribute("href");u&&(he(u),l.preventDefault())}}function gn(l){Ft()&&a.loop===!1?(tt(0,0),Tt()):M?Tt():Lt()}const He={VERSION:sn,initialize:function(l){if(!h)throw'Unable to find presentation root (<div class="reveal">).';if(m=!0,c.wrapper=h,c.slides=h.querySelector(".slides"),!c.slides)throw'Unable to find slides container (<div class="slides">).';return a={...Hn,...a,...t,...l,...qe()},/print-pdf/gi.test(window.location.search)&&(a.view="print"),function(){a.embedded===!0?c.viewport=j(h,".reveal-viewport")||h:(c.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),c.viewport.classList.add("reveal-viewport")}(),window.addEventListener("load",mt,!1),G.load(a.plugins,a.dependencies).then(un),new Promise(u=>e.on("ready",u))},configure:se,destroy:function(){m!==!1&&(Et(),Rt(),Ot(),Q.destroy(),ht.destroy(),G.destroy(),ie.destroy(),U.destroy(),et.destroy(),I.destroy(),T.destroy(),O.destroy(),document.removeEventListener("fullscreenchange",Nt),document.removeEventListener("webkitfullscreenchange",Nt),document.removeEventListener("visibilitychange",_e,!1),window.removeEventListener("message",Me,!1),window.removeEventListener("load",mt,!1),c.pauseOverlay&&c.pauseOverlay.remove(),c.statusElement&&c.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),c.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),c.wrapper.removeAttribute("data-transition-speed"),c.wrapper.removeAttribute("data-background-transition"),c.viewport.classList.remove("reveal-viewport"),c.viewport.style.removeProperty("--slide-width"),c.viewport.style.removeProperty("--slide-height"),c.slides.style.removeProperty("width"),c.slides.style.removeProperty("height"),c.slides.style.removeProperty("zoom"),c.slides.style.removeProperty("left"),c.slides.style.removeProperty("top"),c.slides.style.removeProperty("bottom"),c.slides.style.removeProperty("right"),c.slides.style.removeProperty("transform"),Array.from(c.wrapper.querySelectorAll(gt)).forEach(l=>{l.style.removeProperty("display"),l.style.removeProperty("top"),l.removeAttribute("hidden"),l.removeAttribute("aria-hidden")}))},sync:we,syncSlide:function(l=s){I.sync(l),P.sync(l),R.load(l),I.update(),Q.update()},syncFragments:P.sync.bind(P),slide:tt,left:Ct,right:Pt,up:Kt,down:Xt,prev:Ie,next:Yt,navigateLeft:Ct,navigateRight:Pt,navigateUp:Kt,navigateDown:Xt,navigatePrev:Ie,navigateNext:Yt,navigateFragment:P.goto.bind(P),prevFragment:P.prev.bind(P),nextFragment:P.next.bind(P),on:re,off:oe,addEventListener:re,removeEventListener:oe,layout:mt,shuffle:Wt,availableRoutes:it,availableFragments:P.availableRoutes.bind(P),toggleHelp:function(l){typeof l=="boolean"?l?ue():nt():c.overlay?nt():ue()},toggleOverview:$.toggle.bind($),toggleScrollView:f.toggle.bind(f),togglePause:ye,toggleAutoSlide:function(l){typeof l=="boolean"?l?Tt():Lt():M?Tt():Lt()},toggleJumpToSlide:function(l){typeof l=="boolean"?l?O.show():O.hide():O.isVisible()?O.hide():O.show()},isFirstSlide:ve,isLastSlide:Ft,isLastVerticalSlide:fe,isVerticalSlide:wt,isVerticalStack:function(l=s){return l.classList.contains(".stack")||l.querySelector("section")!==null},isPaused:St,isAutoSliding:function(){return!(!S||M)},isSpeakerNotes:Q.isSpeakerNotesWindow.bind(Q),isOverview:$.isActive.bind($),isFocused:ht.isFocused.bind(ht),isScrollView:f.isActive.bind(f),isPrintView:C.isActive.bind(C),isReady:()=>g,loadSlide:R.load.bind(R),unloadSlide:R.unload.bind(R),startEmbeddedContent:()=>R.startEmbeddedContent(s),stopEmbeddedContent:()=>R.stopEmbeddedContent(s,{unloadIframes:!1}),showPreview:he,hidePreview:nt,addEventListeners:ae,removeEventListeners:Et,dispatchEvent:Z,getState:Ne,setState:function(l){if(typeof l=="object"){tt(vt(l.indexh),vt(l.indexv),vt(l.indexf));let u=vt(l.paused),v=vt(l.overview);typeof u=="boolean"&&u!==St()&&ye(u),typeof v=="boolean"&&v!==$.isActive()&&$.toggle(v)}},getProgress:function(){let l=Ce(),u=Ee();if(s){let v=s.querySelectorAll(".fragment");v.length>0&&(u+=s.querySelectorAll(".fragment.visible").length/v.length*.9)}return Math.min(u/(l-1),1)},getIndices:Ae,getSlidesAttributes:function(){return Vt().map(l=>{let u={};for(let v=0;v<l.attributes.length;v++){let b=l.attributes[v];u[b.name]=b.value}return u})},getSlidePastCount:Ee,getTotalSlides:Ce,getSlide:Pe,getPreviousSlide:()=>r,getCurrentSlide:()=>s,getSlideBackground:function(l,u){let v=typeof l=="number"?Pe(l,u):l;if(v)return v.slideBackgroundElement},getSlideNotes:Q.getSlideNotes.bind(Q),getSlides:Vt,getHorizontalSlides:at,getVerticalSlides:Re,hasHorizontalSlides:Le,hasVerticalSlides:Te,hasNavigatedHorizontally:()=>d.hasNavigatedHorizontally,hasNavigatedVertically:()=>d.hasNavigatedVertically,shouldAutoAnimateBetween:Ut,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:At,setCurrentScrollPage:function(l,u,v){let b=n||0;n=u,i=v;const w=s!==l;r=s,s=l,s&&r&&a.autoAnimate&&Ut(r,s,b,i)&&F.run(r,s),w&&(r&&(R.stopEmbeddedContent(r),R.stopEmbeddedContent(r.slideBackgroundElement)),R.startEmbeddedContent(s),R.startEmbeddedContent(s.slideBackgroundElement)),requestAnimationFrame(()=>{Ht(xt(s))}),le()},getScale:()=>y,getConfig:()=>a,getQueryHash:qe,getSlidePath:K.getHash.bind(K),getRevealElement:()=>h,getSlidesElement:()=>c.slides,getViewportElement:()=>c.viewport,getBackgroundsElement:()=>I.element,registerPlugin:G.registerPlugin.bind(G),hasPlugin:G.hasPlugin.bind(G),getPlugin:G.getPlugin.bind(G),getPlugins:G.getRegisteredPlugins.bind(G)};return bt(e,{...He,announceStatus:Ht,getStatusText:xt,focus:ht,scroll:f,progress:et,controls:U,location:K,overview:$,fragments:P,backgrounds:I,slideContent:R,slideNumber:T,onUserInput:function(l){a.autoSlideStoppable&&Lt()},closeOverlay:nt,updateSlidesVisibility:jt,layoutSlideContents:ge,transformSlides:qt,cueAutoSlide:ft,cancelAutoSlide:Rt}),He}let ot=an,Ve=[];ot.initialize=h=>(Object.assign(ot,new an(document.querySelector(".reveal"),h)),Ve.map(t=>t(ot)),ot.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(h=>{ot[h]=(...t)=>{Ve.push(e=>e[h].call(null,...t))}}),ot.isReady=()=>!1,ot.VERSION=sn;function qn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let pt={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const rn=/[&<>"']/,On=new RegExp(rn.source,"g"),on=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fn=new RegExp(on.source,"g"),Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ke=h=>Un[h];function V(h,t){if(t){if(rn.test(h))return h.replace(On,Ke)}else if(on.test(h))return h.replace(Fn,Ke);return h}const Wn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function ln(h){return h.replace(Wn,(t,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")}const jn=/(^|[^\[])\^/g;function B(h,t){h=typeof h=="string"?h:h.source,t=t||"";const e={replace:(n,i)=>(i=(i=i.source||i).replace(jn,"$1"),h=h.replace(n,i),e),getRegex:()=>new RegExp(h,t)};return e}const Vn=/[^\w:]/g,Kn=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Xe(h,t,e){if(h){let n;try{n=decodeURIComponent(ln(e)).replace(Vn,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!Kn.test(e)&&(e=function(n,i){Mt[" "+n]||(Xn.test(n)?Mt[" "+n]=n+"/":Mt[" "+n]=zt(n,"/",!0)),n=Mt[" "+n];const r=n.indexOf(":")===-1;return i.substring(0,2)==="//"?r?i:n.replace(Yn,"$1")+i:i.charAt(0)==="/"?r?i:n.replace(Jn,"$1")+i:n+i}(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Mt={},Xn=/^[^:]+:\/*[^/]*$/,Yn=/^([^:]+:)[\s\S]*$/,Jn=/^([^:]+:\/*[^/]*)[\s\S]*$/,_t={exec:function(){}};function Ye(h,t){const e=h.replace(/\|/g,(i,r,s)=>{let o=!1,a=r;for(;--a>=0&&s[a]==="\\";)o=!o;return o?"|":" |"}).split(/ \|/);let n=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;n<e.length;n++)e[n]=e[n].trim().replace(/\\\|/g,"|");return e}function zt(h,t,e){const n=h.length;if(n===0)return"";let i=0;for(;i<n;){const r=h.charAt(n-i-1);if(r!==t||e){if(r===t||!e)break;i++}else i++}return h.slice(0,n-i)}function Je(h,t){if(t<1)return"";let e="";for(;t>1;)1&t&&(e+=h),t>>=1,h+=h;return e+h}function Ze(h,t,e,n){const i=t.href,r=t.title?V(t.title):null,s=h[1].replace(/\\([\[\]])/g,"$1");if(h[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:e,href:i,title:r,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,o}return{type:"image",raw:e,href:i,title:r,text:V(s)}}class ee{constructor(t){this.options=t||pt}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:zt(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=function(r,s){const o=r.match(/^(\s+)(?:```)/);if(o===null)return s;const a=o[1];return s.split(`
`).map(m=>{const g=m.match(/^\s+/);if(g===null)return m;const[d]=g;return d.length>=a.length?m.slice(a.length):m}).join(`
`)}(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const i=zt(n,"#");this.options.pedantic?n=i.trim():i&&!/ $/.test(i)||(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=e[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:r,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n,i,r,s,o,a,m,g,d,p,y,L,c=e[1].trim();const H=c.length>1,S={type:"list",raw:"",ordered:H,start:H?+c.slice(0,-1):"",loose:!1,items:[]};c=H?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=H?c:"[*+-]");const q=new RegExp(`^( {0,3}${c})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(L=!1,e=q.exec(t))&&!this.rules.block.hr.test(t);){if(n=e[0],t=t.substring(n.length),g=e[2].split(`
`,1)[0].replace(/^\t+/,M=>" ".repeat(3*M.length)),d=t.split(`
`,1)[0],this.options.pedantic?(s=2,y=g.trimLeft()):(s=e[2].search(/[^ ]/),s=s>4?1:s,y=g.slice(s),s+=e[1].length),a=!1,!g&&/^ *$/.test(d)&&(n+=d+`
`,t=t.substring(d.length+1),L=!0),!L){const M=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),R=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),O=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);for(;t&&(p=t.split(`
`,1)[0],d=p,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!T.test(d))&&!O.test(d)&&!M.test(d)&&!R.test(t);){if(d.search(/[^ ]/)>=s||!d.trim())y+=`
`+d.slice(s);else{if(a||g.search(/[^ ]/)>=4||T.test(g)||O.test(g)||R.test(g))break;y+=`
`+d}a||d.trim()||(a=!0),n+=p+`
`,t=t.substring(p.length+1),g=d.slice(s)}}S.loose||(m?S.loose=!0:/\n *\n *$/.test(n)&&(m=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(y),i&&(r=i[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),S.items.push({type:"list_item",raw:n,task:!!i,checked:r,loose:!1,text:y}),S.raw+=n}S.items[S.items.length-1].raw=n.trimRight(),S.items[S.items.length-1].text=y.trimRight(),S.raw=S.raw.trimRight();const Y=S.items.length;for(o=0;o<Y;o++)if(this.lexer.state.top=!1,S.items[o].tokens=this.lexer.blockTokens(S.items[o].text,[]),!S.loose){const M=S.items[o].tokens.filter(T=>T.type==="space"),R=M.length>0&&M.some(T=>/\n.*\n/.test(T.raw));S.loose=R}if(S.loose)for(o=0;o<Y;o++)S.items[o].loose=!0;return S}}html(t){const e=this.rules.block.html.exec(t);if(e){const n={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(e[0]):V(e[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){const e=this.rules.block.table.exec(t);if(e){const n={type:"table",header:Ye(e[1]).map(i=>({text:i})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=e[0];let i,r,s,o,a=n.align.length;for(i=0;i<a;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(a=n.rows.length,i=0;i<a;i++)n.rows[i]=Ye(n.rows[i],n.header.length).map(m=>({text:m}));for(a=n.header.length,r=0;r<a;r++)n.header[r].tokens=this.lexer.inline(n.header[r].text);for(a=n.rows.length,r=0;r<a;r++)for(o=n.rows[r],s=0;s<o.length;s++)o[s].tokens=this.lexer.inline(o[s].text);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:V(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):V(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=zt(n.slice(0,-1),"\\");if((n.length-s.length)%2==0)return}else{const s=function(o,a){if(o.indexOf(a[1])===-1)return-1;const m=o.length;let g=0,d=0;for(;d<m;d++)if(o[d]==="\\")d++;else if(o[d]===a[0])g++;else if(o[d]===a[1]&&(g--,g<0))return d;return-1}(e[2],"()");if(s>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(n)?i.slice(1):i.slice(1,-1)),Ze(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return Ze(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const r=i[1]||i[2]||"";if(!r||r&&(n===""||this.rules.inline.punctuation.exec(n))){const s=i[0].length-1;let o,a,m=s,g=0;const d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+s);(i=d.exec(e))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(a=o.length,i[3]||i[4]){m+=a;continue}if((i[5]||i[6])&&s%3&&!((s+a)%3)){g+=a;continue}if(m-=a,m>0)continue;a=Math.min(a,a+m+g);const p=t.slice(0,s+i.index+(i[0].length-o.length)+a);if(Math.min(s,a)%2){const L=p.slice(1,-1);return{type:"em",raw:p,text:L,tokens:this.lexer.inlineTokens(L)}}const y=p.slice(2,-2);return{type:"strong",raw:p,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=V(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t,e){const n=this.rules.inline.autolink.exec(t);if(n){let i,r;return n[2]==="@"?(i=V(this.options.mangle?e(n[1]):n[1]),r="mailto:"+i):(i=V(n[1]),r=i),{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(t,e){let n;if(n=this.rules.inline.url.exec(t)){let i,r;if(n[2]==="@")i=V(this.options.mangle?e(n[0]):n[0]),r="mailto:"+i;else{let s;do s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(s!==n[0]);i=V(n[0]),r=n[1]==="www."?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,e){const n=this.rules.inline.text.exec(t);if(n){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):V(n[0]):n[0]:V(this.options.smartypants?e(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const A={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:_t,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};A.def=B(A.def).replace("label",A._label).replace("title",A._title).getRegex(),A.bullet=/(?:[*+-]|\d{1,9}[.)])/,A.listItemStart=B(/^( *)(bull) */).replace("bull",A.bullet).getRegex(),A.list=B(A.list).replace(/bull/g,A.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+A.def.source+")").getRegex(),A._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",A._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,A.html=B(A.html,"i").replace("comment",A._comment).replace("tag",A._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),A.paragraph=B(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.blockquote=B(A.blockquote).replace("paragraph",A.paragraph).getRegex(),A.normal={...A},A.gfm={...A.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},A.gfm.table=B(A.gfm.table).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.gfm.paragraph=B(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",A.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex(),A.pedantic={...A.normal,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",A._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_t,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(A.normal._paragraph).replace("hr",A.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",A.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const k={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_t,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_t,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Zn(h){return h.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Qe(h){let t,e,n="";const i=h.length;for(t=0;t<i;t++)e=h.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n}k._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",k.punctuation=B(k.punctuation).replace(/punctuation/g,k._punctuation).getRegex(),k.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,k.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,k._comment=B(A._comment).replace("(?:-->|$)","-->").getRegex(),k.emStrong.lDelim=B(k.emStrong.lDelim).replace(/punct/g,k._punctuation).getRegex(),k.emStrong.rDelimAst=B(k.emStrong.rDelimAst,"g").replace(/punct/g,k._punctuation).getRegex(),k.emStrong.rDelimUnd=B(k.emStrong.rDelimUnd,"g").replace(/punct/g,k._punctuation).getRegex(),k._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,k._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,k._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,k.autolink=B(k.autolink).replace("scheme",k._scheme).replace("email",k._email).getRegex(),k._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,k.tag=B(k.tag).replace("comment",k._comment).replace("attribute",k._attribute).getRegex(),k._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,k._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,k._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,k.link=B(k.link).replace("label",k._label).replace("href",k._href).replace("title",k._title).getRegex(),k.reflink=B(k.reflink).replace("label",k._label).replace("ref",A._label).getRegex(),k.nolink=B(k.nolink).replace("ref",A._label).getRegex(),k.reflinkSearch=B(k.reflinkSearch,"g").replace("reflink",k.reflink).replace("nolink",k.nolink).getRegex(),k.normal={...k},k.pedantic={...k.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",k._label).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",k._label).getRegex()},k.gfm={...k.normal,escape:B(k.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},k.gfm.url=B(k.gfm.url,"i").replace("email",k.gfm._extended_email).getRegex(),k.breaks={...k.gfm,br:B(k.br).replace("{2,}","*").getRegex(),text:B(k.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class ct{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||pt,this.options.tokenizer=this.options.tokenizer||new ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:A.normal,inline:k.normal};this.options.pedantic?(e.block=A.pedantic,e.inline=k.pedantic):this.options.gfm&&(e.block=A.gfm,this.options.breaks?e.inline=k.breaks:e.inline=k.gfm),this.tokenizer.rules=e}static get rules(){return{block:A,inline:k}}static lex(t,e){return new ct(e).lex(t)}static lexInline(t,e){return new ct(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,i,r,s;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,(o,a,m)=>a+"    ".repeat(m.length));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>!!(n=o.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?e.push(n):(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(r=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const a=t.slice(1);let m;this.options.extensions.startBlock.forEach(function(g){m=g.call({lexer:this},a),typeof m=="number"&&m>=0&&(o=Math.min(o,m))}),o<1/0&&o>=0&&(r=t.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r)))i=e[e.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),s=r.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);else if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,i,r,s,o,a,m=t;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(m))!=null;)g.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(m=m.slice(0,s.index)+"["+Je("a",s[0].length-2)+"]"+m.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(m))!=null;)m=m.slice(0,s.index)+"["+Je("a",s[0].length-2)+"]"+m.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.escapedEmSt.exec(m))!=null;)m=m.slice(0,s.index+s[0].length-2)+"++"+m.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>!!(n=g.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,m,a))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t,Qe))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,Qe))){if(r=t,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const d=t.slice(1);let p;this.options.extensions.startInline.forEach(function(y){p=y.call({lexer:this},d),typeof p=="number"&&p>=0&&(g=Math.min(g,p))}),g<1/0&&g>=0&&(r=t.substring(0,g+1))}if(n=this.tokenizer.inlineText(r,Zn))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(a=n.raw.slice(-1)),o=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(t){const g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}throw new Error(g)}}else t=t.substring(n.raw.length),e.push(n);return e}}class ne{constructor(t){this.options=t||pt}code(t,e,n){const i=(e||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(t,i);r!=null&&r!==t&&(n=!0,t=r)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+V(i)+'">'+(n?t:V(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:V(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,e,n,i){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+i.slug(n)}">${t}</h${e}>
`:`<h${e}>${t}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,n){const i=e?"ol":"ul";return"<"+i+(e&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+i+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){if((t=Xe(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){if((t=Xe(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class cn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class dn{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let n=t,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[t];do i++,n=t+"-"+i;while(this.seen.hasOwnProperty(n))}return e||(this.seen[t]=i,this.seen[n]=0),n}slug(t,e={}){const n=this.serialize(t);return this.getNextSafeSlug(n,e.dryrun)}}class dt{constructor(t){this.options=t||pt,this.options.renderer=this.options.renderer||new ne,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new cn,this.slugger=new dn}static parse(t,e){return new dt(e).parse(t)}static parseInline(t,e){return new dt(e).parseInline(t)}parse(t,e=!0){let n,i,r,s,o,a,m,g,d,p,y,L,c,H,S,q,Y,M,R,T="";const O=t.length;for(n=0;n<O;n++)if(p=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(R=this.options.extensions.renderers[p.type].call({parser:this},p),R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))T+=R||"";else switch(p.type){case"space":continue;case"hr":T+=this.renderer.hr();continue;case"heading":T+=this.renderer.heading(this.parseInline(p.tokens),p.depth,ln(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":T+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(g="",m="",s=p.header.length,i=0;i<s;i++)m+=this.renderer.tablecell(this.parseInline(p.header[i].tokens),{header:!0,align:p.align[i]});for(g+=this.renderer.tablerow(m),d="",s=p.rows.length,i=0;i<s;i++){for(a=p.rows[i],m="",o=a.length,r=0;r<o;r++)m+=this.renderer.tablecell(this.parseInline(a[r].tokens),{header:!1,align:p.align[r]});d+=this.renderer.tablerow(m)}T+=this.renderer.table(g,d);continue;case"blockquote":d=this.parse(p.tokens),T+=this.renderer.blockquote(d);continue;case"list":for(y=p.ordered,L=p.start,c=p.loose,s=p.items.length,d="",i=0;i<s;i++)S=p.items[i],q=S.checked,Y=S.task,H="",S.task&&(M=this.renderer.checkbox(q),c?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=M+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=M+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:M}):H+=M),H+=this.parse(S.tokens,c),d+=this.renderer.listitem(H,Y,q);T+=this.renderer.list(d,y,L);continue;case"html":T+=this.renderer.html(p.text);continue;case"paragraph":T+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(d=p.tokens?this.parseInline(p.tokens):p.text;n+1<O&&t[n+1].type==="text";)p=t[++n],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);T+=e?this.renderer.paragraph(d):d;continue;default:{const F='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(F);throw new Error(F)}}return T}parseInline(t,e){e=e||this.renderer;let n,i,r,s="";const o=t.length;for(n=0;n<o;n++)if(i=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(r=this.options.extensions.renderers[i.type].call({parser:this},i),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))s+=r||"";else switch(i.type){case"escape":case"text":s+=e.text(i.text);break;case"html":s+=e.html(i.text);break;case"link":s+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break;case"image":s+=e.image(i.href,i.title,i.text);break;case"strong":s+=e.strong(this.parseInline(i.tokens,e));break;case"em":s+=e.em(this.parseInline(i.tokens,e));break;case"codespan":s+=e.codespan(i.text);break;case"br":s+=e.br();break;case"del":s+=e.del(this.parseInline(i.tokens,e));break;default:{const a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}}return s}}class $t{constructor(t){this.options=t||pt}preprocess(t){return t}postprocess(t){return t}}Jt($t,"passThroughHooks",new Set(["preprocess","postprocess"]));function hn(h,t){return(e,n,i)=>{typeof n=="function"&&(i=n,n=null);const r={...n},s=function(o,a,m){return g=>{if(g.message+=`
Please report this to https://github.com/markedjs/marked.`,o){const d="<p>An error occurred:</p><pre>"+V(g.message+"",!0)+"</pre>";return a?Promise.resolve(d):m?void m(null,d):d}if(a)return Promise.reject(g);if(!m)throw g;m(g)}}((n={...E.defaults,...r}).silent,n.async,i);if(e==null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(function(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(n),n.hooks&&(n.hooks.options=n),i){const o=n.highlight;let a;try{n.hooks&&(e=n.hooks.preprocess(e)),a=h(e,n)}catch(d){return s(d)}const m=function(d){let p;if(!d)try{n.walkTokens&&E.walkTokens(a,n.walkTokens),p=t(a,n),n.hooks&&(p=n.hooks.postprocess(p))}catch(y){d=y}return n.highlight=o,d?s(d):i(null,p)};if(!o||o.length<3||(delete n.highlight,!a.length))return m();let g=0;return E.walkTokens(a,function(d){d.type==="code"&&(g++,setTimeout(()=>{o(d.text,d.lang,function(p,y){if(p)return m(p);y!=null&&y!==d.text&&(d.text=y,d.escaped=!0),g--,g===0&&m()})},0))}),void(g===0&&m())}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(e):e).then(o=>h(o,n)).then(o=>n.walkTokens?Promise.all(E.walkTokens(o,n.walkTokens)).then(()=>o):o).then(o=>t(o,n)).then(o=>n.hooks?n.hooks.postprocess(o):o).catch(s);try{n.hooks&&(e=n.hooks.preprocess(e));const o=h(e,n);n.walkTokens&&E.walkTokens(o,n.walkTokens);let a=t(o,n);return n.hooks&&(a=n.hooks.postprocess(a)),a}catch(o){return s(o)}}}function E(h,t,e){return hn(ct.lex,dt.parse)(h,t,e)}E.options=E.setOptions=function(h){var t;return E.defaults={...E.defaults,...h},t=E.defaults,pt=t,E},E.getDefaults=qn,E.defaults=pt,E.use=function(...h){const t=E.defaults.extensions||{renderers:{},childTokens:{}};h.forEach(e=>{const n={...e};if(n.async=E.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const r=t.renderers[i.name];t.renderers[i.name]=r?function(...s){let o=i.renderer.apply(this,s);return o===!1&&(o=r.apply(this,s)),o}:i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),n.extensions=t),e.renderer){const i=E.defaults.renderer||new ne;for(const r in e.renderer){const s=i[r];i[r]=(...o)=>{let a=e.renderer[r].apply(i,o);return a===!1&&(a=s.apply(i,o)),a}}n.renderer=i}if(e.tokenizer){const i=E.defaults.tokenizer||new ee;for(const r in e.tokenizer){const s=i[r];i[r]=(...o)=>{let a=e.tokenizer[r].apply(i,o);return a===!1&&(a=s.apply(i,o)),a}}n.tokenizer=i}if(e.hooks){const i=E.defaults.hooks||new $t;for(const r in e.hooks){const s=i[r];$t.passThroughHooks.has(r)?i[r]=o=>{if(E.defaults.async)return Promise.resolve(e.hooks[r].call(i,o)).then(m=>s.call(i,m));const a=e.hooks[r].call(i,o);return s.call(i,a)}:i[r]=(...o)=>{let a=e.hooks[r].apply(i,o);return a===!1&&(a=s.apply(i,o)),a}}n.hooks=i}if(e.walkTokens){const i=E.defaults.walkTokens;n.walkTokens=function(r){let s=[];return s.push(e.walkTokens.call(this,r)),i&&(s=s.concat(i.call(this,r))),s}}E.setOptions(n)})},E.walkTokens=function(h,t){let e=[];for(const n of h)switch(e=e.concat(t.call(E,n)),n.type){case"table":for(const i of n.header)e=e.concat(E.walkTokens(i.tokens,t));for(const i of n.rows)for(const r of i)e=e.concat(E.walkTokens(r.tokens,t));break;case"list":e=e.concat(E.walkTokens(n.items,t));break;default:E.defaults.extensions&&E.defaults.extensions.childTokens&&E.defaults.extensions.childTokens[n.type]?E.defaults.extensions.childTokens[n.type].forEach(function(i){e=e.concat(E.walkTokens(n[i],t))}):n.tokens&&(e=e.concat(E.walkTokens(n.tokens,t)))}return e},E.parseInline=hn(ct.lexInline,dt.parseInline),E.Parser=dt,E.parser=dt.parse,E.Renderer=ne,E.TextRenderer=cn,E.Lexer=ct,E.lexer=ct.lex,E.Tokenizer=ee,E.Slugger=dn,E.Hooks=$t,E.parse=E,E.options,E.setOptions,E.use,E.walkTokens,E.parseInline,dt.parse,ct.lex;const Qn=()=>{let h,t,e=null;function n(){if(e&&!e.closed)e.focus();else{if(e=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),e.marked=E,e.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!e)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const o=t.getConfig().url,a=typeof o=="string"?o:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;h=setInterval(function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:t.getState(),url:a}),"*")},500),window.addEventListener("message",r)})()}}function i(o){let a=t.getCurrentSlide(),m=a.querySelectorAll("aside.notes"),g=a.querySelector(".current-fragment"),d={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:t.getState()};if(a.hasAttribute("data-notes")&&(d.notes=a.getAttribute("data-notes"),d.whitespace="pre-wrap"),g){let p=g.querySelector("aside.notes");p?(d.notes=p.innerHTML,d.markdown=typeof p.getAttribute("data-markdown")=="string",m=null):g.hasAttribute("data-notes")&&(d.notes=g.getAttribute("data-notes"),d.whitespace="pre-wrap",m=null)}m&&m.length&&(m=Array.from(m).filter(p=>p.closest(".fragment")===null),d.notes=m.map(p=>p.innerHTML).join(`
`),d.markdown=m[0]&&typeof m[0].getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(d),"*")}function r(o){if(function(a){try{return window.location.origin===a.source.location.origin}catch{return!1}}(o))try{let a=JSON.parse(o.data);a&&a.namespace==="reveal-notes"&&a.type==="connected"?(clearInterval(h),s()):a&&a.namespace==="reveal-notes"&&a.type==="call"&&function(m,g,d){let p=t[m].apply(t,g);e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:p,callId:d}),"*")}(a.methodName,a.arguments,a.callId)}catch{}}function s(){t.on("slidechanged",i),t.on("fragmentshown",i),t.on("fragmenthidden",i),t.on("overviewhidden",i),t.on("overviewshown",i),t.on("paused",i),t.on("resumed",i),i()}return{id:"notes",init:function(o){t=o,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?n():window.addEventListener("message",a=>{if(!e&&typeof a.data=="string"){let g;try{g=JSON.parse(a.data)}catch{}g&&g.namespace==="reveal-notes"&&g.type==="heartbeat"&&(m=a.source,e&&!e.closed?e.focus():(e=m,window.addEventListener("message",r),s()))}var m}),t.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){n()}))},open:n}},Ge=document.body.dataset.transition;ot.initialize({plugins:[Qn],transition:Ge,backgroundTransition:Ge,center:!1,controls:!0,maxScale:1,minScale:.45,hash:!0,hashOneBasedIndex:!0,width:1920,height:1080,display:"flex"});
