(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4075:function(e,t,s){Promise.resolve().then(s.bind(s,9304))},9304:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return P}});var r=s(7437),a=s(2265),i=s(4867),n=s(5772),l=s(2218),o=s(9354);let d=n.zt,c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.l_,{ref:t,className:(0,o.cn)("text-md fixed top-0 right-0 z-[100] flex max-h-screen w-[min(30rem,80vw)] flex-col-reverse p-4",s),...a})});c.displayName=n.l_.displayName;let u=(0,l.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),h=a.forwardRef((e,t)=>{let{className:s,variant:a,...i}=e;return(0,r.jsx)(n.fC,{ref:t,className:(0,o.cn)(u({variant:a}),s),...i})});h.displayName=n.fC.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.aU,{ref:t,className:(0,o.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-md font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})}).displayName=n.aU.displayName;let m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.x8,{ref:t,className:(0,o.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(i.Pxu,{className:"h-4 w-4"})})});m.displayName=n.x8.displayName;let f=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-md font-semibold [&+div]:text-sm",s),...a})});f.displayName=n.Dx.displayName;let p=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-7xl opacity-90",s),...a})});p.displayName=n.dk.displayName;let x=0,g=new Map,v=e=>{if(g.has(e))return;let t=setTimeout(()=>{g.delete(e),b({type:"REMOVE_TOAST",toastId:e})},1e6);g.set(e,t)},j=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?v(s):e.toasts.forEach(e=>{v(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},w=[],N={toasts:[]};function b(e){N=j(N,e),w.forEach(e=>{e(N)})}function y(e){let{...t}=e,s=(x=(x+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>b({type:"DISMISS_TOAST",toastId:s});return b({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>b({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function S(){let{toasts:e}=function(){let[e,t]=a.useState(N);return a.useEffect(()=>(w.push(t),()=>{let e=w.indexOf(t);e>-1&&w.splice(e,1)}),[e]),{...e,toast:y,dismiss:e=>b({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(d,{children:[e.map(function(e){let{id:t,title:s,description:a,action:i,...n}=e;return(0,r.jsxs)(h,{...n,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(f,{children:s}),a&&(0,r.jsx)(p,{children:a})]}),i,(0,r.jsx)(m,{})]},t)}),(0,r.jsx)(c,{})]})}var E=s(7374),_=s(1359),T=s(7138),O=s(361);function A(e){let{cover:t,videoUrl:s,slug:a="",from:i,url:n,desc:l,title:o}=e;return(0,r.jsx)("article",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:" changes-color-container",children:t&&t.length>0?(0,r.jsx)("div",{children:(0,r.jsx)(O.Z,{slides:t})}):null}),(0,r.jsxs)("div",{className:"project__text text-sm",children:[(0,r.jsx)("h3",{className:"",children:o}),(0,r.jsx)("div",{className:"desc",children:(0,r.jsx)("p",{children:l})}),(0,r.jsx)("time",{className:"tracking-tighter",children:i})]}),(0,r.jsxs)("div",{className:"project__footer gap-1",children:[(0,r.jsxs)("a",{href:n,className:"link-inline",children:[(0,r.jsx)("span",{children:"Ver online"}),(0,r.jsx)(_.JO,{icon:"solar:link-bold-duotone"})]}),(0,r.jsxs)(T.default,{href:"/project/".concat(a),className:"link-inline link-inline--secondary",children:[(0,r.jsx)("span",{children:"Ver detalles"}),(0,r.jsx)(_.JO,{icon:"solar:document-bold-duotone"})]})]})]})})}let R=(e,t)=>{if(!t||0===t.length)return e;let s=RegExp("(".concat(t.join("|"),")"),"gi"),a=e.split(s);return(0,r.jsx)(r.Fragment,{children:a.map((e,s)=>t.includes(e.toLowerCase())?(0,r.jsx)("b",{children:e},s):e)})};var k=e=>{let[t,s]=(0,a.useState)({width:0,height:0}),r=()=>{let t="string"==typeof e?document.querySelector(e):e;if(!t)return;let r=t.getBoundingClientRect();s({width:r.width,height:r.height})};return(0,a.useEffect)(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[e]),{dimension:t}};function I(e){let{container:t,children:s,className:i="",...n}=e,{dimension:l}=k(".".concat(t)),o=(0,a.useRef)(null),d=(0,a.useRef)(null),[c,u]=(0,a.useState)(null),h="white";(0,a.useEffect)(()=>{l.width>0&&l.height>0&&(console.log(l,"dimension"),c?g(c):m())},[l]);let m=()=>{var e;let t=null===(e=o.current)||void 0===e?void 0:e.getContext("2d");t&&(t.fillStyle=h,t.fillRect(0,0,l.width,l.height),t.globalCompositeOperation="destination-out")},f=(e,t,s)=>e*(1-s)+t*s,p=(e,t,s)=>{var r;let a=null===(r=o.current)||void 0===r?void 0:r.getContext("2d");a&&(a.beginPath(),a.arc(e,t,s,0,2*Math.PI),a.fill())},x=()=>{var e;console.log("SAVING?");let t=null===(e=o.current)||void 0===e?void 0:e.getContext("2d");t&&o.current&&u(t.getImageData(0,0,o.current.width,o.current.height))},g=e=>{var t;let s=null===(t=o.current)||void 0===t?void 0:t.getContext("2d");s&&o.current&&(o.current.width=l.width,o.current.height=l.height,s.fillStyle=h,s.fillRect(0,0,l.width,l.height),s.putImageData(e,0,0),s.globalCompositeOperation="destination-out")};return(0,a.useEffect)(()=>{let e=()=>{x()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,r.jsxs)(r.Fragment,{children:[s,(0,r.jsxs)("div",{className:"canvas-wrapper absolute inset-0 w-full h-full ".concat(i),...n,children:[0==l.width&&(0,r.jsx)("div",{className:"absolute w-full h-full bg-white"}),(0,r.jsx)("canvas",{ref:o,onMouseMove:e=>{let{clientX:t,clientY:s,movementX:r,movementY:a}=e,i=o.current;if(!i)return;let n=i.getBoundingClientRect(),l=t-n.left,c=s-n.top,u=Math.max(Math.abs(r),Math.abs(a))/10;if(null!=d.current){let{x:e,y:t}=d.current;for(let s=0;s<u;s++)p(f(e,l,1/u*s),f(t,c,1/u*s),40)}d.current={x:l,y:c}},height:l.height,width:l.width,className:"h-full w-full"})]})]})}var C=function(){let e=["creaci\xf3n","sistema de dise\xf1o","flujos de usuarios","componentes funcionales","documentaci\xf3n t\xe9cnica","tabla con renderizado personalizado","procesos crud","dashboards","interactivos","responsividad","correos usando html","ui de tareas multipasos","enviar","cambios","reportes en formato pdf"],[t,s]=(0,a.useState)("");return(0,r.jsxs)("main",{children:[(0,r.jsxs)("section",{id:"proyectos",className:"pb-[10rem]","aria-labelledby":"ph",children:[(0,r.jsx)("h2",{className:"main-heading",id:"ph",children:"Proyectos"}),(0,r.jsx)("ul",{className:"projects-grid",children:E.q&&E.q.map((e,t)=>(0,r.jsx)("li",{className:"colors".concat(t+1),children:(0,r.jsx)(A,{cover:e.cover,videoUrl:e.videoUrl,stack:e.stack,from:e.from,url:e.url,repo:e.repo,slug:e.slug,title:e.title,desc:e.desc,did:e.did})},t))})]}),(0,r.jsxs)("section",{id:"experiencia-laboral",className:"","aria-labelledby":"eh",children:[(0,r.jsx)("h2",{className:"main-heading",id:"eh",children:"Experiencia laboral"}),(0,r.jsx)("ul",{className:"grid  lg:grid-cols-2 text-sm",children:E.$P&&E.$P.map((t,s)=>(0,r.jsx)("li",{className:"max-w-[60ch] pb-[5rem] ".concat(1==s?"ms-auto":""),children:(0,r.jsxs)("article",{className:" bg- grid grid-rows-[auto,1fr]",children:[(0,r.jsxs)("div",{className:"pb-1",children:[(0,r.jsx)("h3",{children:t.role}),(0,r.jsxs)("p",{children:["en ",(0,r.jsx)("span",{className:"border-b border-dashed",children:t.company}),", ",t.from," - ",t.to]}),t.summary&&(0,r.jsx)("p",{className:"pt-[.5rem] text-sm opacity-85 show-on-hover",children:t.summary})]}),(0,r.jsxs)("div",{className:"aa relative changes-color-container border text-sm text-to-read colors".concat(s+5),children:[(0,r.jsx)(I,{container:"aa",children:(0,r.jsx)("div",{children:(0,r.jsx)("ul",{className:"list",children:t.did.map((t,s)=>(0,r.jsx)("li",{children:R(t,e)},s))})})}),(0,r.jsx)("div",{className:"main-words-only","aria-hidden":"true",children:(0,r.jsx)("ul",{className:"list ",children:t.did.map((t,s)=>(0,r.jsx)("li",{children:R(t,e)},s))})})]})]})},s))})]})]})},D=s(4108),M=s(9910);function P(){return(0,a.useEffect)(()=>{let e=new D.Z,t=s=>{e.raf(s),requestAnimationFrame(t)};return requestAnimationFrame(t),()=>{}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(M.Z,{}),(0,r.jsx)(S,{})]})}}},function(e){e.O(0,[310,231,27,757,956,283,377,971,23,744],function(){return e(e.s=4075)}),_N_E=e.O()}]);