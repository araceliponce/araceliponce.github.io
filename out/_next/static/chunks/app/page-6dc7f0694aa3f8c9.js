(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4075:function(e,t,s){Promise.resolve().then(s.bind(s,5296))},5296:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return R}});var r=s(7437),a=s(2265),i=s(4867),n=s(5772),o=s(2218),d=s(9354);let l=n.zt,c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.l_,{ref:t,className:(0,d.cn)("text-md fixed top-0 right-0 z-[100] flex max-h-screen w-[min(30rem,80vw)] flex-col-reverse p-4",s),...a})});c.displayName=n.l_.displayName;let u=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=a.forwardRef((e,t)=>{let{className:s,variant:a,...i}=e;return(0,r.jsx)(n.fC,{ref:t,className:(0,d.cn)(u({variant:a}),s),...i})});m.displayName=n.fC.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.aU,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-md font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})}).displayName=n.aU.displayName;let p=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.x8,{ref:t,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(i.Pxu,{className:"h-4 w-4"})})});p.displayName=n.x8.displayName;let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,d.cn)("text-md font-semibold [&+div]:text-sm",s),...a})});x.displayName=n.Dx.displayName;let f=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,d.cn)("text-7xl opacity-90",s),...a})});f.displayName=n.dk.displayName;let h=0,j=new Map,v=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),y({type:"REMOVE_TOAST",toastId:e})},1e6);j.set(e,t)},g=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?v(s):e.toasts.forEach(e=>{v(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},N=[],b={toasts:[]};function y(e){b=g(b,e),N.forEach(e=>{e(b)})}function w(e){let{...t}=e,s=(h=(h+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>y({type:"DISMISS_TOAST",toastId:s});return y({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>y({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function _(){let{toasts:e}=function(){let[e,t]=a.useState(b);return a.useEffect(()=>(N.push(t),()=>{let e=N.indexOf(t);e>-1&&N.splice(e,1)}),[e]),{...e,toast:w,dismiss:e=>y({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(l,{children:[e.map(function(e){let{id:t,title:s,description:a,action:i,...n}=e;return(0,r.jsxs)(m,{...n,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(x,{children:s}),a&&(0,r.jsx)(f,{children:a})]}),i,(0,r.jsx)(p,{})]},t)}),(0,r.jsx)(c,{})]})}var T=s(7374),S=s(1359),E=s(7138),A=s(361);function O(e){let{cover:t,videoUrl:s,slug:a="",from:i,url:n,desc:o,title:d}=e;return(0,r.jsx)("article",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:" changes-color",children:t&&t.length>0?(0,r.jsx)("div",{children:(0,r.jsx)(A.Z,{slides:t})}):null}),(0,r.jsxs)("div",{className:"project__text text-sm",children:[(0,r.jsx)("h3",{className:"",children:d}),(0,r.jsx)("div",{className:"desc",children:(0,r.jsx)("p",{children:o})}),(0,r.jsx)("time",{className:"tracking-tighter",children:i})]}),(0,r.jsxs)("div",{className:"project__footer gap-1",children:[(0,r.jsxs)("a",{href:n,className:"link-inline",children:[(0,r.jsx)("span",{children:"Ver online"}),(0,r.jsx)(S.JO,{icon:"solar:link-bold-duotone"})]}),(0,r.jsxs)(E.default,{href:"/project/".concat(a),className:"link-inline link-inline--secondary",children:[(0,r.jsx)("span",{children:"Ver detalles"}),(0,r.jsx)(S.JO,{icon:"solar:document-bold-duotone"})]})]})]})})}let k=(e,t)=>{if(!t||0===t.length)return e;let s=RegExp("(".concat(t.join("|"),")"),"gi"),a=e.split(s);return(0,r.jsx)(r.Fragment,{children:a.map((e,s)=>t.includes(e.toLowerCase())?(0,r.jsx)("b",{children:e},s):e)})};var D=function(){let e=["componentes funcionales","documentaci\xf3n t\xe9cnica","colaboraci\xf3n","sorting","renderizado personalizado de valores","sistema de dise\xf1o","flujos de usuarios","usabilidad","accesibilidad","crud","dashboards web interactivos","responsividad","correos usando html","ui de tareas multipasos","enviar cambios","producci\xf3n ","pdf","nuevo"];return(0,r.jsxs)("main",{children:[(0,r.jsxs)("section",{id:"proyectos",className:"pb-[10rem]",children:[(0,r.jsx)("h2",{children:"Proyectos"}),(0,r.jsx)("ul",{className:"projects-grid",children:T.q&&T.q.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(O,{cover:e.cover,videoUrl:e.videoUrl,stack:e.stack,from:e.from,url:e.url,repo:e.repo,slug:e.slug,title:e.title,desc:e.desc,did:e.did})},t))})]}),(0,r.jsxs)("section",{id:"experiencia-laboral",className:"",children:[(0,r.jsx)("h2",{children:"Experiencia-laboral"}),(0,r.jsx)("small",{className:"bg-gray-100/50 text-xs py-[.2em] px-[.4em] rounded-md mx-auto block w-fit",children:"(en construcci\xf3n)"}),(0,r.jsx)("ul",{className:"grid  lg:grid-cols-2 pt-[2rem]",children:T.$P&&T.$P.map((t,s)=>(0,r.jsx)("li",{className:"max-w-[60ch] ".concat(1==s?"ms-auto":""),children:(0,r.jsxs)("article",{className:" bg- grid grid-rows-[auto,1fr]",children:[(0,r.jsxs)("div",{className:"leading-none text-sm pb-1",children:[(0,r.jsx)("h3",{children:t.role}),(0,r.jsxs)("p",{children:["en ",t.company,", ",t.from," - ",t.to]}),t.summary&&(0,r.jsx)("p",{children:t.summary})]}),(0,r.jsx)("ul",{className:"list changes-color ",children:t.did.map((t,s)=>(0,r.jsx)("li",{children:k(t,e)},s))})]})},s))})]})]})},I=s(4108);function R(){return(0,a.useEffect)(()=>{let e=new I.Z,t=s=>{e.raf(s),requestAnimationFrame(t)};return requestAnimationFrame(t),()=>{}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(_,{})]})}}},function(e){e.O(0,[310,231,27,757,956,283,933,971,23,744],function(){return e(e.s=4075)}),_N_E=e.O()}]);