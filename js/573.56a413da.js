(self["webpackChunkportofolio"]=self["webpackChunkportofolio"]||[]).push([[573],{10:function(e,t,o){"use strict";o.d(t,{iv:function(){return l},sb:function(){return i}});var n=o(237);function l(e,t){const o=e.style;for(const n in t)o[n]=t[n]}function i(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(o){return}const t=(0,n.SU)(e);return t?t.$el||t:void 0}},287:function(e,t,o){"use strict";o.d(t,{L:function(){return i},f:function(){return r}});var n=o(237),l=o(269);const i=e=>(0,n.Xl)((0,l.aZ)(e)),r=e=>(0,n.Xl)(e)},168:function(e,t,o){"use strict";o.d(t,{Bl:function(){return i},Jl:function(){return u},KR:function(){return l},pf:function(){return a},vs:function(){return r}});var n=o(269);function l(e,t){return void 0!==e&&e()||t}function i(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function r(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function u(e,t,o,l,i,r){t.key=l+i;const a=(0,n.h)(e,t,o);return!0===i?(0,n.wy)(a,r()):a}},410:function(e){e.exports=function(e,t,o){const n=void 0!==e.__vccOpts?e.__vccOpts:e,l=n[t];if(void 0===l)n[t]=o;else for(var i in o)void 0===l[i]&&(l[i]=o[i])}},573:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Z}});var n=o(269);const l=(0,n._)("p",{class:"text-center"},"Made with Vue 3 + Quasar UI Framework",-1);function i(e,t,o,i,r,a){const u=(0,n.up)("TheHeader"),s=(0,n.up)("router-view"),c=(0,n.up)("q-page-container"),d=(0,n.up)("q-footer"),f=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(f,{view:"hHh lpR fFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(u),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s)])),_:1}),(0,n.Wm)(d,{class:"q-pa-md"},{default:(0,n.w5)((()=>[l])),_:1})])),_:1})}const r=e=>((0,n.dD)("data-v-c83f3f86"),e=e(),(0,n.Cn)(),e),a={class:"row"},u=r((()=>(0,n._)("div",{class:"col header-logo"},[(0,n._)("b",null,"Failasuf")],-1))),s={class:"col",align:"right"},c={class:"header-menu"},d=r((()=>(0,n._)("li",null,"Home",-1))),f=r((()=>(0,n._)("li",null,"About",-1))),v=r((()=>(0,n._)("li",null,"Projects",-1))),h=r((()=>(0,n._)("li",null,"Contact",-1)));function p(e,t){const o=(0,n.up)("router-link"),l=(0,n.up)("q-header");return(0,n.wg)(),(0,n.j4)(l,{class:"header bg-white text-black"},{default:(0,n.w5)((()=>[(0,n._)("div",a,[u,(0,n._)("div",s,[(0,n._)("ul",c,[(0,n.Wm)(o,{to:"#hero-section"},{default:(0,n.w5)((()=>[d])),_:1}),(0,n.Wm)(o,{to:"#about-section"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(o,{to:"#projects-section"},{default:(0,n.w5)((()=>[v])),_:1}),(0,n.Wm)(o,{to:"#contact-section"},{default:(0,n.w5)((()=>[h])),_:1})])])])])),_:1})}var m=o(617),g=o(237),b=o(8);function w(){const e=(0,g.iH)(!b.uX.value);return!1===e.value&&(0,n.bv)((()=>{e.value=!0})),e}var y=o(287),q=o(471);const F="undefined"!==typeof ResizeObserver,x=!0===F?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var z=(0,y.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let o,l=null,i={width:-1,height:-1};function r(t){!0===t||0===e.debounce||"0"===e.debounce?a():null===l&&(l=setTimeout(a,e.debounce))}function a(){if(null!==l&&(clearTimeout(l),l=null),o){const{offsetWidth:e,offsetHeight:n}=o;e===i.width&&n===i.height||(i={width:e,height:n},t("resize",i))}}const{proxy:u}=(0,n.FN)();if(!0===F){let s;const c=e=>{o=u.$el.parentNode,o?(s=new ResizeObserver(r),s.observe(o),a()):!0!==e&&(0,n.Y3)((()=>{c(!0)}))};return(0,n.bv)((()=>{c()})),(0,n.Jd)((()=>{null!==l&&clearTimeout(l),void 0!==s&&(void 0!==s.disconnect?s.disconnect():o&&s.unobserve(o))})),q.ZT}{const d=w();let f;function v(){null!==l&&(clearTimeout(l),l=null),void 0!==f&&(void 0!==f.removeEventListener&&f.removeEventListener("resize",r,q.rU.passive),f=void 0)}function h(){v(),o&&o.contentDocument&&(f=o.contentDocument.defaultView,f.addEventListener("resize",r,q.rU.passive),a())}return(0,n.bv)((()=>{(0,n.Y3)((()=>{o=u.$el,o&&h()}))})),(0,n.Jd)(v),u.trigger=r,()=>{if(!0===d.value)return(0,n.h)("object",{style:x.style,tabindex:-1,type:"text/html",data:x.url,"aria-hidden":"true",onLoad:h})}}}}),H=o(168),_=o(622),L=(0,y.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=(0,n.FN)(),i=(0,n.f3)(_.YE,_.qO);if(i===_.qO)return console.error("QHeader needs to be child of QLayout"),_.qO;const r=(0,g.iH)(parseInt(e.heightHint,10)),a=(0,g.iH)(!0),u=(0,n.Fl)((()=>!0===e.reveal||i.view.value.indexOf("H")>-1||l.platform.is.ios&&!0===i.isContainer.value)),s=(0,n.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===u.value)return!0===a.value?r.value:0;const t=r.value-i.scroll.value.position;return t>0?t:0})),c=(0,n.Fl)((()=>!0!==e.modelValue||!0===u.value&&!0!==a.value)),d=(0,n.Fl)((()=>!0===e.modelValue&&!0===c.value&&!0===e.reveal)),f=(0,n.Fl)((()=>"q-header q-layout__section--marginal "+(!0===u.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===c.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,n.Fl)((()=>{const e=i.rows.value.top,t={};return"l"===e[0]&&!0===i.left.space&&(t[!0===l.lang.rtl?"right":"left"]=`${i.left.size}px`),"r"===e[2]&&!0===i.right.space&&(t[!0===l.lang.rtl?"left":"right"]=`${i.right.size}px`),t}));function h(e,t){i.update("header",e,t)}function p(e,t){e.value!==t&&(e.value=t)}function m({height:e}){p(r,e),h("size",e)}function b(e){!0===d.value&&p(a,!0),o("focusin",e)}(0,n.YP)((()=>e.modelValue),(e=>{h("space",e),p(a,!0),i.animate()})),(0,n.YP)(s,(e=>{h("offset",e)})),(0,n.YP)((()=>e.reveal),(t=>{!1===t&&p(a,e.modelValue)})),(0,n.YP)(a,(e=>{i.animate(),o("reveal",e)})),(0,n.YP)(i.scroll,(t=>{!0===e.reveal&&p(a,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const w={};return i.instances.header=w,!0===e.modelValue&&h("size",r.value),h("space",e.modelValue),h("offset",s.value),(0,n.Jd)((()=>{i.instances.header===w&&(i.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))})),()=>{const o=(0,H.Bl)(t.default,[]);return!0===e.elevated&&o.push((0,n.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push((0,n.h)(z,{debounce:0,onResize:m})),(0,n.h)("header",{class:f.value,style:v.value,onFocusin:b},o)}}}),P=o(410),C=o.n(P);const O={},Y=(0,m.Z)(O,[["render",p],["__scopeId","data-v-c83f3f86"]]);var $=Y;C()(O,"components",{QHeader:L});var T={components:{TheHeader:$}},V=o(10);const Q=[null,document,document.body,document.scrollingElement,document.documentElement];function R(e,t){let o=(0,V.sb)(t);if(void 0===o){if(void 0===e||null===e)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Q.includes(o)?window:o}function S(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function E(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let W;function N(){if(void 0!==W)return W;const e=document.createElement("p"),t=document.createElement("div");(0,V.iv)(e,{width:"100%",height:"200px"}),(0,V.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),W=o-n,W}const{passive:B}=q.rU,j=["both","horizontal","vertical"];var k=(0,y.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>j.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l,i,r=null;function a(){null!==r&&r();const n=Math.max(0,S(l)),i=E(l),a={top:n-o.position.top,left:i-o.position.left};if("vertical"===e.axis&&0===a.top||"horizontal"===e.axis&&0===a.left)return;const u=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";o.position={top:n,left:i},o.directionChanged=o.direction!==u,o.delta=a,!0===o.directionChanged&&(o.direction=u,o.inflectionPoint=o.position),t("scroll",{...o})}function u(){l=R(i,e.scrollTarget),l.addEventListener("scroll",c,B),c(!0)}function s(){void 0!==l&&(l.removeEventListener("scroll",c,B),l=void 0)}function c(t){if(!0===t||0===e.debounce||"0"===e.debounce)a();else if(null===r){const[t,o]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];r=()=>{o(t),r=null}}}(0,n.YP)((()=>e.scrollTarget),(()=>{s(),u()}));const{proxy:d}=(0,n.FN)();return(0,n.YP)((()=>d.$q.lang.rtl),a),(0,n.bv)((()=>{i=d.$el.parentNode,u()})),(0,n.Jd)((()=>{null!==r&&r(),s()})),Object.assign(d,{trigger:c,getPosition:()=>o}),q.ZT}}),J=(0,y.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=(0,n.FN)(),i=(0,g.iH)(null),r=(0,g.iH)(l.screen.height),a=(0,g.iH)(!0===e.container?0:l.screen.width),u=(0,g.iH)({position:0,direction:"down",inflectionPoint:0}),s=(0,g.iH)(0),c=(0,g.iH)(!0===b.uX.value?0:N()),d=(0,n.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),f=(0,n.Fl)((()=>!1===e.container?{minHeight:l.screen.height+"px"}:null)),v=(0,n.Fl)((()=>0!==c.value?{[!0===l.lang.rtl?"left":"right"]:`${c.value}px`}:null)),h=(0,n.Fl)((()=>0!==c.value?{[!0===l.lang.rtl?"right":"left"]:0,[!0===l.lang.rtl?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null));function p(t){if(!0===e.container||!0!==document.qScrollPrevented){const n={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};u.value=n,void 0!==e.onScroll&&o("scroll",n)}}function m(t){const{height:n,width:l}=t;let i=!1;r.value!==n&&(i=!0,r.value=n,void 0!==e.onScrollHeight&&o("scrollHeight",n),y()),a.value!==l&&(i=!0,a.value=l),!0===i&&void 0!==e.onResize&&o("resize",t)}function w({height:e}){s.value!==e&&(s.value=e,y())}function y(){if(!0===e.container){const e=r.value>s.value?N():0;c.value!==e&&(c.value=e)}}let q=null;const F={instances:{},view:(0,n.Fl)((()=>e.view)),isContainer:(0,n.Fl)((()=>e.container)),rootRef:i,height:r,containerHeight:s,scrollbarWidth:c,totalWidth:(0,n.Fl)((()=>a.value+c.value)),rows:(0,n.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,g.qj)({size:0,offset:0,space:!1}),right:(0,g.qj)({size:300,offset:0,space:!1}),footer:(0,g.qj)({size:0,offset:0,space:!1}),left:(0,g.qj)({size:300,offset:0,space:!1}),scroll:u,animate(){null!==q?clearTimeout(q):document.body.classList.add("q-body--layout-animate"),q=setTimeout((()=>{q=null,document.body.classList.remove("q-body--layout-animate")}),155)},update(e,t,o){F[e][t]=o}};if((0,n.JJ)(_.YE,F),N()>0){let x=null;const L=document.body;function P(){x=null,L.classList.remove("hide-scrollbar")}function C(){if(null===x){if(L.scrollHeight>l.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(x);x=setTimeout(P,300)}function O(e){null!==x&&"remove"===e&&(clearTimeout(x),P()),window[`${e}EventListener`]("resize",C)}(0,n.YP)((()=>!0!==e.container?"add":"remove"),O),!0!==e.container&&O("add"),(0,n.Ah)((()=>{O("remove")}))}return()=>{const o=(0,H.vs)(t.default,[(0,n.h)(k,{onScroll:p}),(0,n.h)(z,{onResize:m})]),l=(0,n.h)("div",{class:d.value,style:f.value,ref:!0===e.container?void 0:i,tabindex:-1},o);return!0===e.container?(0,n.h)("div",{class:"q-layout-container overflow-hidden",ref:i},[(0,n.h)(z,{onResize:w}),(0,n.h)("div",{class:"absolute-full",style:v.value},[(0,n.h)("div",{class:"scroll",style:h.value},[l])])]):l}}}),X=(0,y.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:o}}=(0,n.FN)(),l=(0,n.f3)(_.YE,_.qO);if(l===_.qO)return console.error("QPageContainer needs to be child of QLayout"),_.qO;(0,n.JJ)(_.Mw,!0);const i=(0,n.Fl)((()=>{const e={};return!0===l.header.space&&(e.paddingTop=`${l.header.size}px`),!0===l.right.space&&(e["padding"+(!0===o.lang.rtl?"Left":"Right")]=`${l.right.size}px`),!0===l.footer.space&&(e.paddingBottom=`${l.footer.size}px`),!0===l.left.space&&(e["padding"+(!0===o.lang.rtl?"Right":"Left")]=`${l.left.size}px`),e}));return()=>(0,n.h)("div",{class:"q-page-container",style:i.value},(0,H.KR)(t.default))}}),M=(0,y.L)({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=(0,n.FN)(),i=(0,n.f3)(_.YE,_.qO);if(i===_.qO)return console.error("QFooter needs to be child of QLayout"),_.qO;const r=(0,g.iH)(parseInt(e.heightHint,10)),a=(0,g.iH)(!0),u=(0,g.iH)(!0===b.uX.value||!0===i.isContainer.value?0:window.innerHeight),s=(0,n.Fl)((()=>!0===e.reveal||i.view.value.indexOf("F")>-1||l.platform.is.ios&&!0===i.isContainer.value)),c=(0,n.Fl)((()=>!0===i.isContainer.value?i.containerHeight.value:u.value)),d=(0,n.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===s.value)return!0===a.value?r.value:0;const t=i.scroll.value.position+c.value+r.value-i.height.value;return t>0?t:0})),f=(0,n.Fl)((()=>!0!==e.modelValue||!0===s.value&&!0!==a.value)),v=(0,n.Fl)((()=>!0===e.modelValue&&!0===f.value&&!0===e.reveal)),h=(0,n.Fl)((()=>"q-footer q-layout__section--marginal "+(!0===s.value?"fixed":"absolute")+"-bottom"+(!0===e.bordered?" q-footer--bordered":"")+(!0===f.value?" q-footer--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus"+(!0!==s.value?" hidden":""):""))),p=(0,n.Fl)((()=>{const e=i.rows.value.bottom,t={};return"l"===e[0]&&!0===i.left.space&&(t[!0===l.lang.rtl?"right":"left"]=`${i.left.size}px`),"r"===e[2]&&!0===i.right.space&&(t[!0===l.lang.rtl?"left":"right"]=`${i.right.size}px`),t}));function m(e,t){i.update("footer",e,t)}function w(e,t){e.value!==t&&(e.value=t)}function y({height:e}){w(r,e),m("size",e)}function q(){if(!0!==e.reveal)return;const{direction:t,position:o,inflectionPoint:n}=i.scroll.value;w(a,"up"===t||o-n<100||i.height.value-c.value-o-r.value<300)}function F(e){!0===v.value&&w(a,!0),o("focusin",e)}(0,n.YP)((()=>e.modelValue),(e=>{m("space",e),w(a,!0),i.animate()})),(0,n.YP)(d,(e=>{m("offset",e)})),(0,n.YP)((()=>e.reveal),(t=>{!1===t&&w(a,e.modelValue)})),(0,n.YP)(a,(e=>{i.animate(),o("reveal",e)})),(0,n.YP)([r,i.scroll,i.height],q),(0,n.YP)((()=>l.screen.height),(e=>{!0!==i.isContainer.value&&w(u,e)}));const x={};return i.instances.footer=x,!0===e.modelValue&&m("size",r.value),m("space",e.modelValue),m("offset",d.value),(0,n.Jd)((()=>{i.instances.footer===x&&(i.instances.footer=void 0,m("size",0),m("offset",0),m("space",!1))})),()=>{const o=(0,H.vs)(t.default,[(0,n.h)(z,{debounce:0,onResize:y})]);return!0===e.elevated&&o.push((0,n.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),(0,n.h)("footer",{class:h.value,style:p.value,onFocusin:F},o)}}});const U=(0,m.Z)(T,[["render",i]]);var Z=U;C()(T,"components",{QLayout:J,QPageContainer:X,QFooter:M})}}]);
//# sourceMappingURL=573.56a413da.js.map