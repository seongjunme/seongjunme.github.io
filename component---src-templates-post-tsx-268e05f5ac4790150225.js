(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[186],{7757:function(e,t,n){e.exports=n(5666)},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},5397:function(e,t,n){"use strict";n.d(t,{H:function(){return U},b:function(){return ke},c:function(){return ae},g:function(){return ie},h:function(){return B},p:function(){return R},r:function(){return Ee}});var r=n(5671),o=n(3144);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(9611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,n){return p=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,a.Z)(o,n.prototype),o},p.apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return p(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,a.Z)(r,e)},d(e)}var h=n(5861),m=n(2982);var $=n(181);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||(0,$.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=n(7757),v=n.n(y);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var w,x,k=!1,L="undefined"!=typeof window?window:{},S=L.document||{head:{}},E={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},R=function(e){return Promise.resolve(e)},P=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),_=function(e,t,n,r){n&&n.map((function(n){var r=g(n,3),o=r[0],i=r[1],a=r[2],l=T(e,o),c=O(t,a),s=j(o);E.ael(l,i,c,s),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return E.rel(l,i,c,s)}))}))},O=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){_e(r)}}},T=function(e,t){return 4&t?S:8&t?L:e},j=function(e){return 0!=(2&e)},Z="{visibility:hidden}.hydrated{visibility:inherit}",C="http://www.w3.org/1999/xlink",M=new WeakMap,N=function(e,t,n){var r=je.get(e);P&&n?(r=r||new CSSStyleSheet).replace(t):r=t,je.set(e,r)},A=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),i=function(e,t,n,r){var o=z(t),i=je.get(o);if(e=11===e.nodeType?e:S,i)if("string"==typeof i){e=e.head||e;var a,l=M.get(e);l||M.set(e,l=new Set),l.has(o)||((a=S.createElement("style")).innerHTML=i,e.insertBefore(a,e.querySelector("link")),l&&l.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[].concat((0,m.Z)(e.adoptedStyleSheets),[i]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},z=function(e,t){return"sc-"+e.$tagName$},I={},H=function(e){return"object"===(e=typeof e)||"function"===e},B=function(e,t){for(var n=null,r=null,o=!1,i=!1,a=[],l=function t(r){for(var l=0;l<r.length;l++)n=r[l],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!H(n))&&(n=String(n)),o&&i?a[a.length-1].$text$+=n:a.push(o?F(null,n):n),i=o)},c=arguments.length,s=new Array(c>2?c-2:0),u=2;u<c;u++)s[u-2]=arguments[u];if(l(s),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,a,D);var p=F(e,null);return p.$attrs$=t,a.length>0&&(p.$children$=a),p.$key$=r,p},F=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},U={},D={forEach:function(e,t){return e.map(q).forEach(t)},map:function(e,t){return e.map(q).map(t).map(G)}},q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},G=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),B.apply(void 0,[e.vtag,t].concat((0,m.Z)(e.vchildren||[])))}var n=F(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},V=function(e,t,n,r,o,i){if(n!==r){var a=Pe(e,t),l=t.toLowerCase();if("class"===t){var c=e.classList,s=Y(n),u=Y(r);c.remove.apply(c,(0,m.Z)(s.filter((function(e){return e&&!u.includes(e)})))),c.add.apply(c,(0,m.Z)(u.filter((function(e){return e&&!s.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var p in r)n&&r[p]===n[p]||(p.includes("-")?e.style.setProperty(p,r[p]):e.style[p]=r[p])}else if("key"===t);else if("ref"===t)r&&r(e);else if(a||"o"!==t[0]||"n"!==t[1]){var d=H(r);if((a||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var h=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==h||(e[t]=h)}}catch(g){}var $=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(t=l,$=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||($?e.removeAttributeNS(C,t):e.removeAttribute(t)):(!a||4&i||o)&&!d&&(r=!0===r?"":r,$?e.setAttributeNS(C,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Pe(L,l)?l.slice(2):l[2]+t.slice(3),n&&E.rel(e,t,n,!1),r&&E.ael(e,t,r,!1)}},W=/\s/,Y=function(e){return e?e.split(W):[]},X=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||I,a=t.$attrs$||I;for(r in i)r in a||V(o,r,i[r],void 0,n,t.$flags$);for(r in a)V(o,r,i[r],a[r],n,t.$flags$)},K=function e(t,n,r,o){var i,a,l=n.$children$[r],c=0;if(null!==l.$text$)i=l.$elm$=S.createTextNode(l.$text$);else if(i=l.$elm$=S.createElement(l.$tag$),X(null,l,false),null!=w&&i["s-si"]!==w&&i.classList.add(i["s-si"]=w),l.$children$)for(c=0;c<l.$children$.length;++c)(a=e(t,l,c))&&i.appendChild(a);return i},J=function(e,t,n,r,o,i){var a,l=e;for(l.shadowRoot&&l.tagName===x&&(l=l.shadowRoot);o<=i;++o)r[o]&&(a=K(null,n,o))&&(r[o].$elm$=a,l.insertBefore(a,t))},Q=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,re(r),o.remove())},ee=function(e,t,n,r){for(var o,i,a=0,l=0,c=0,s=0,u=t.length-1,f=t[0],p=t[u],d=r.length-1,h=r[0],m=r[d];a<=u&&l<=d;)if(null==f)f=t[++a];else if(null==p)p=t[--u];else if(null==h)h=r[++l];else if(null==m)m=r[--d];else if(te(f,h))ne(f,h),f=t[++a],h=r[++l];else if(te(p,m))ne(p,m),p=t[--u],m=r[--d];else if(te(f,m))ne(f,m),e.insertBefore(f.$elm$,p.$elm$.nextSibling),f=t[++a],m=r[--d];else if(te(p,h))ne(p,h),e.insertBefore(p.$elm$,f.$elm$),p=t[--u],h=r[++l];else{for(c=-1,s=a;s<=u;++s)if(t[s]&&null!==t[s].$key$&&t[s].$key$===h.$key$){c=s;break}c>=0?((i=t[c]).$tag$!==h.$tag$?o=K(t&&t[l],n,c):(ne(i,h),t[c]=void 0,o=i.$elm$),h=r[++l]):(o=K(t&&t[l],n,l),h=r[++l]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}a>u?J(e,null==r[d+1]?null:r[d+1].$elm$,n,r,l,d):l>d&&Q(t,a,u)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$tag$,a=t.$text$;null===a?("slot"===i||X(e,t,false),null!==r&&null!==o?ee(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),J(n,null,t,o,0,o.length-1)):null!==r&&Q(r,0,r.length-1)):e.$text$!==a&&(n.data=a)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},oe=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,i=e.$vnode$||F(null,null),a=(n=t)&&n.$tag$===U?t:B(null,null,t);x=r.tagName,o.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=g(e,2),n=t[0],o=t[1];return a.$attrs$[o]=r[n]}))),a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=i.$elm$=r.shadowRoot||r,w=r["s-sc"],ne(i,a)},ie=function(e){return Se(e).$hostElement$},ae=function(e,t,n){var r=ie(e);return{emit:function(e){return le(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},le=function(e,t,n){var r=E.ce(t,n);return e.dispatchEvent(r),r},ce=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},se=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ce(e,e.$ancestorComponent$);return Ie((function(){return ue(e,t)}))}e.$flags$|=512},ue=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=g(e,2),n=t[0],r=t[1];return me(o,n,r)})),e.$queuedListeners$=null),n=me(o,"componentWillLoad")),r(),$e(n,(function(){return fe(e,o,t)}))},fe=function(){var e=(0,h.Z)(v().mark((function e(t,n,r){var o,i,a,l,c,s;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,i=function(){},a=o["s-rc"],r&&A(t),t.$cmpMeta$.$tagName$,l=function(){},pe(t,n),a&&(a.map((function(e){return e()})),o["s-rc"]=void 0),l(),i(),c=o["s-p"],s=function(){return de(t)},0===c.length?s():(Promise.all(c).then(s),t.$flags$|=4,c.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),pe=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,oe(e,t)}catch(r){_e(r,e.$hostElement$)}return null},de=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(me(r,"componentDidUpdate"),n()):(e.$flags$|=64,ge(t),me(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||he()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&ze((function(){return se(e,!1)})),e.$flags$&=-517},he=function(e){ge(S.documentElement),ze((function(){return le(L,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},me=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){_e(r)}},$e=function(e,t){return e&&e.then?e.then(t):t()},ge=function(e){return e.classList.add("hydrated")},ye=function(e,t,n,r){var o,i,a=Se(e),l=a.$hostElement$,c=a.$instanceValues$.get(t),s=a.$flags$,u=a.$lazyInstance$;if(o=n,i=r.$members$[t][0],n=null==o||H(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o,!(8&s&&void 0!==c||n===c)&&(a.$instanceValues$.set(t,n),u)){if(r.$watchers$&&128&s){var f=r.$watchers$[t];f&&f.map((function(e){try{u[e](n,c,t)}catch(r){_e(r,l)}}))}2==(18&s)&&se(a,!1)}},ve=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=g(e,2),i=r[0],a=g(r[1],1)[0];31&a||2&n&&32&a?Object.defineProperty(o,i,{get:function(){return e=i,Se(this).$instanceValues$.get(e);var e},set:function(e){ye(this,i,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,i,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Se(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[i].apply(e,t)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;E.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=g(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=g(e,2),r=n[0],o=n[1],a=o[1]||r;return i.set(a,r),512&o[0]&&t.$attrsToReflect$.push([r,a]),a}))}}return e},be=function(){var e=(0,h.Z)(v().mark((function e(t,n,r,o,i){var a,l,c,s,u,f,p;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(i=Te(r)).then){e.next=9;break}return a=function(){},e.next=7,i;case 7:i=e.sent,a();case 9:i.isProxied||(r.$watchers$=i.watchers,ve(i,r,2),i.isProxied=!0),r.$tagName$,l=function(){},n.$flags$|=8;try{new i(n)}catch(t){_e(t)}n.$flags$&=-9,n.$flags$|=128,l(),i.style&&(c=i.style,s=z(r),je.has(s)||(r.$tagName$,u=function(){},N(s,c,!!(1&r.$flags$)),u()));case 17:f=n.$ancestorComponent$,p=function(){return se(n,!0)},f&&f["s-rc"]?f["s-rc"].push(p):p();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),we=function(e){if(0==(1&E.$flags$)){var t=Se(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)_(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ce(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=g(t,2),r=n[0];if(31&g(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),be(e,t,n)}r()}},xe=function(e){if(0==(1&E.$flags$)){var t=Se(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},ke=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(){},c=[],s=n.exclude||[],u=L.customElements,f=S.head,p=f.querySelector("meta[charset]"),h=S.createElement("style"),m=[],$=!0;Object.assign(E,n),E.$resourcesUrl$=new URL(n.resourcesUrl||"./",S.baseURI).href,e.map((function(e){e[1].map((function(n){var a={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};a.$members$=n[2],a.$listeners$=n[3],a.$attrsToReflect$=[],a.$watchers$={};var f=a.$tagName$,p=function(e){l(c,e);var n=b(c);function c(e){var t;return(0,r.Z)(this,c),e=i(t=n.call(this,e)),Re(e,a),1&a.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),$?m.push(this):E.jmp((function(){return we(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;E.jmp((function(){return xe(e)}))}},{key:"componentOnReady",value:function(){return Se(this).$onReadyPromise$}}]),c}(d(HTMLElement));a.$lazyBundleId$=e[0],s.includes(f)||u.get(f)||(c.push(f),u.define(f,ve(p,a,1)))}))})),h.innerHTML=c+Z,h.setAttribute("data-styles",""),f.insertBefore(h,p?p.nextSibling:f.firstChild),$=!1,m.length?m.map((function(e){return e.connectedCallback()})):E.jmp((function(){return t=setTimeout(he,30)})),a()},Le=new WeakMap,Se=function(e){return Le.get(e)},Ee=function(e,t){return Le.set(t.$lazyInstance$=e,t)},Re=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],_(e,n,t.$listeners$),Le.set(e,n)},Pe=function(e,t){return t in e},_e=function(e,t){return(0,console.error)(e,t)},Oe=new Map,Te=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,a=Oe.get(i);return a?a[o]:n(9047)("./".concat(i,".entry.js")).then((function(e){return Oe.set(i,e),e[o]}),_e)},je=new Map,Ze=[],Ce=[],Me=function(e,t){return function(n){e.push(n),k||(k=!0,t&&4&E.$flags$?ze(Ae):E.raf(Ae))}},Ne=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){_e(n)}e.length=0},Ae=function e(){Ne(Ze),Ne(Ce),(k=Ze.length>0)&&E.raf(e)},ze=function(e){return R().then(e)},Ie=Me(Ce,!0)},6771:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7462),o=n(7294),i=n.t(o,2),a=n(7548),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=(0,a.Z)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),s=n(4043),u=n(4660),f=n(4418),p=c,d=function(e){return"theme"!==e},h=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:d},m=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},$=i.useInsertionEffect?i.useInsertionEffect:function(e){e()};var g=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;(0,u.hC)(t,n,r);$((function(){return(0,u.My)(t,n,r)}));return null},y=function e(t,n){var i,a,l=t.__emotion_real===t,c=l&&t.__emotion_base||t;void 0!==n&&(i=n.label,a=n.target);var p=m(t,n,l),d=p||h(c),$=!d("as");return function(){var y=arguments,v=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&v.push("label:"+i+";"),null==y[0]||void 0===y[0].raw)v.push.apply(v,y);else{0,v.push(y[0][0]);for(var b=y.length,w=1;w<b;w++)v.push(y[w],y[0][w])}var x=(0,s.w)((function(e,t,n){var r=$&&e.as||c,i="",l=[],m=e;if(null==e.theme){for(var y in m={},e)m[y]=e[y];m.theme=(0,o.useContext)(s.T)}"string"==typeof e.className?i=(0,u.fp)(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var b=(0,f.O)(v.concat(l),t.registered,m);i+=t.key+"-"+b.name,void 0!==a&&(i+=" "+a);var w=$&&void 0===p?h(r):d,x={};for(var k in e)$&&"as"===k||w(k)&&(x[k]=e[k]);return x.className=i,x.ref=n,(0,o.createElement)(o.Fragment,null,(0,o.createElement)(g,{cache:t,serialized:b,isStringTag:"string"==typeof r}),(0,o.createElement)(r,x))}));return x.displayName=void 0!==i?i:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=c,x.__emotion_styles=v,x.__emotion_forwardProp=p,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,o){return e(t,(0,r.Z)({},n,o,{shouldForwardProp:m(x,o,!0)})).apply(void 0,v)},x}}},832:function(e,t,n){"use strict";var r=n(6771),o=(n(7294),n(3431));var i=(0,r.Z)("div",{target:"evi8j960"})({name:"jppgbf",styles:"display:grid;place-items:center;margin-top:auto;padding:3.125rem 0;font-size:0.9375rem;text-align:center;line-height:1.5"});t.Z=function(){return(0,o.tZ)(i,null,"Thank You for Visiting My Blog, Have a Good Day.",(0,o.tZ)("br",null),"@ 2022 Developer Jun, Powerd By Gatsby.")}},4878:function(e,t,n){"use strict";n(7294);var r=n(3431);var o={name:"1llifsc",styles:"@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,300);{}*{padding:0;margin:0;box-sizing:border-box;font-family:'Open Sans',Helvetica,sans-serif;font-weight:300;}html,body,#___gatsby{height:100%;}a,a:hover{color:inherit;text-decoration:none;cursor:pointer;}"};t.Z=function(){return(0,r.tZ)(r.xB,{styles:o})}},3008:function(e,t,n){"use strict";var r=n(6771),o=(n(7294),n(832)),i=n(4878),a=n(3431);t.Z=function(e){var t=e.children;return(0,a.tZ)(l,null,(0,a.tZ)(i.Z,null),t,(0,a.tZ)(o.Z,null))};var l=(0,r.Z)("div",{target:"ef79xez0"})({name:"8ugl6e",styles:"display:flex;flex-direction:column;min-height:100vh;background-color:#121212;color:white;&::-webkit-scrollbar-thumb{background-color:#ffffff;}"})},9622:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});n(7294);var r=n(3008),o=n(6771);var i=(0,o.Z)("div",{target:"evp6fv50"})({name:"z5i94e",styles:"position:relative;width:100%;height:350px"});var a,l=(0,o.Z)("div",{target:"e1x0sffc2"})("display:flex;flex-direction:column;width:",768,"px;height:100%;margin:0 auto;padding:60px 0;color:#ffffff;"),c=(0,o.Z)("div",{target:"e1x0sffc1"})({name:"1pr6csa",styles:"overflow:hidden;overflow-wrap:break-word;margin-top:auto;text-overflow:ellipsis;white-space:normal;font-size:45px;font-weight:800"}),s=(0,o.Z)("div",{target:"e1x0sffc0"})({name:"15xrm5i",styles:"display:flex;flex-direction:column;justify-content:flex-start;justify-content:space-between;font-size:18px;font-weight:700;div{margin-top:10px;}"}),u=n(3431),f=function(e){var t=e.title,n=e.date,r=e.categories;return(0,u.tZ)(l,null,(0,u.tZ)(c,null,t),(0,u.tZ)(s,null,(0,u.tZ)("div",null,n),(0,u.tZ)("div",null,r.join(" / "))))},p=function(e){var t=e.title,n=e.date,r=e.categories;return(0,u.tZ)(i,null,r&&(0,u.tZ)(f,{title:t,date:n,categories:r}))},d=(0,o.Z)("div",{target:"era8a5j0"})("display:flex;flex-direction:column;width:",768,"px;margin:0 auto;word-break:break-all;line-height:1.8;font-size:1.125rem;font-weight:400;color:#ececec;p{padding:3px 0;}h1,h2,h3,h4{margin:2.414rem 0 1rem;font-weight:inherit;line-height:1.42;}h1{font-size:3.598rem;}h2{font-size:2.827rem;}h3{font-size:1.999rem;}h4{font-size:1.414rem;}h5{font-size:1.121rem;}h6{font-size:0.88rem;}blockquote{margin:10px 0;border-left:5px solid #7a7a7a;font-style:italic;padding:5px 15px;text-align:left;background-color:#1e1e1e;}aside{background-color:#1e1e1e;margin:10px 0;}table{background-color:#22272e;border-collapse:collapse;th,td{padding:6px 13px;&:not(first-child){border:1px solid #444c56;}}}ol,ul{margin-left:20px;padding:10px 0;}hr{margin:30px 0;background:#4d4d4d;border:none;height:1px;width:100%;}a{&:link{text-decoration:none;text-shadow:0 0 24px;}&:hover{color:#4263eb;}}strong{font-weight:bold;}deckgo-highlight-code{font-size:14px;}"),h=function(e){var t=e.html;return(0,u.tZ)(d,{dangerouslySetInnerHTML:{__html:t}})},m=n(5397);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,m.p)().then((function(){return(0,m.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],a)}));var $=function(e){var t=e.data.allMarkdownRemark.edges[0].node,n=t.html,o=t.frontmatter,i=o.title,a=o.date,l=o.categories,c=o.thumbnail.childImageSharp.gatsbyImageData;return(0,u.tZ)(r.Z,null,(0,u.tZ)(p,{image:c,title:i,date:a,categories:l}),(0,u.tZ)(h,{html:n}))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof $?t:$,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=S(a,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=s;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function $(){}function g(){}function y(){}var v={};c(v,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==n&&r.call(w,i)&&(v=w);var x=y.prototype=$.prototype=Object.create(v);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,a,l){var c=u(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=y,c(x,"constructor",y),c(y,"constructor",g),g.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(L.prototype),c(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(x),c(x,l,"Generator"),c(x,i,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,c,"next",e)}function c(e){r(a,o,i,l,c,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-templates-post-tsx-268e05f5ac4790150225.js.map