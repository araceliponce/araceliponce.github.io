(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4075:function(e,a,r){Promise.resolve().then(r.bind(r,6404))},6404:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return G}});var t=r(7437),s=r(2265),i=r(4867),o=r(5772),n=r(2218),l=r(9354);let c=o.zt,d=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,t.jsx)(o.l_,{ref:a,className:(0,l.cn)("text-md fixed top-0 right-0 z-[100] flex max-h-screen w-[min(30rem,80vw)] flex-col-reverse p-4",r),...s})});d.displayName=o.l_.displayName;let u=(0,n.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=s.forwardRef((e,a)=>{let{className:r,variant:s,...i}=e;return(0,t.jsx)(o.fC,{ref:a,className:(0,l.cn)(u({variant:s}),r),...i})});m.displayName=o.fC.displayName,s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,t.jsx)(o.aU,{ref:a,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-md font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...s})}).displayName=o.aU.displayName;let p=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,t.jsx)(o.x8,{ref:a,className:(0,l.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...s,children:(0,t.jsx)(i.Pxu,{className:"h-4 w-4"})})});p.displayName=o.x8.displayName;let f=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,t.jsx)(o.Dx,{ref:a,className:(0,l.cn)("text-md font-semibold [&+div]:text-sm",r),...s})});f.displayName=o.Dx.displayName;let g=s.forwardRef((e,a)=>{let{className:r,...s}=e;return(0,t.jsx)(o.dk,{ref:a,className:(0,l.cn)("text-7xl opacity-90",r),...s})});g.displayName=o.dk.displayName;let x=0,v=new Map,h=e=>{if(v.has(e))return;let a=setTimeout(()=>{v.delete(e),w({type:"REMOVE_TOAST",toastId:e})},1e6);v.set(e,a)},y=(e,a)=>{switch(a.type){case"ADD_TOAST":return{...e,toasts:[a.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===a.toast.id?{...e,...a.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=a;return r?h(r):e.toasts.forEach(e=>{h(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===a.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==a.toastId)}}},b=[],j={toasts:[]};function w(e){j=y(j,e),b.forEach(e=>{e(j)})}function N(e){let{...a}=e,r=(x=(x+1)%Number.MAX_SAFE_INTEGER).toString(),t=()=>w({type:"DISMISS_TOAST",toastId:r});return w({type:"ADD_TOAST",toast:{...a,id:r,open:!0,onOpenChange:e=>{e||t()}}}),{id:r,dismiss:t,update:e=>w({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function _(){let{toasts:e}=function(){let[e,a]=s.useState(j);return s.useEffect(()=>(b.push(a),()=>{let e=b.indexOf(a);e>-1&&b.splice(e,1)}),[e]),{...e,toast:N,dismiss:e=>w({type:"DISMISS_TOAST",toastId:e})}}();return(0,t.jsxs)(c,{children:[e.map(function(e){let{id:a,title:r,description:s,action:i,...o}=e;return(0,t.jsxs)(m,{...o,children:[(0,t.jsxs)("div",{className:"grid gap-1",children:[r&&(0,t.jsx)(f,{children:r}),s&&(0,t.jsx)(g,{children:s})]}),i,(0,t.jsx)(p,{})]},a)}),(0,t.jsx)(d,{})]})}var S=r(7374),k=r(7138),C=r(1359),T=r(4300),z=r(1538);let E=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),R=s.forwardRef((e,a)=>{let{className:r,variant:s,size:i,asChild:o=!1,...n}=e,c=o?z.g7:"button";return(0,t.jsx)(c,{className:(0,l.cn)(E({variant:s,size:i,className:r})),ref:a,...n})});R.displayName="Button";let D=s.createContext(null);function A(){let e=s.useContext(D);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let O=s.forwardRef((e,a)=>{let{orientation:r="horizontal",opts:i,setApi:o,plugins:n,className:c,children:d,...u}=e,[m,p]=(0,T.Z)({...i,axis:"horizontal"===r?"x":"y"},n),[f,g]=s.useState(!1),[x,v]=s.useState(!1),h=s.useCallback(e=>{e&&(g(e.canScrollPrev()),v(e.canScrollNext()))},[]),y=s.useCallback(()=>{null==p||p.scrollPrev()},[p]),b=s.useCallback(()=>{null==p||p.scrollNext()},[p]),j=s.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),b())},[y,b]);return s.useEffect(()=>{p&&o&&o(p)},[p,o]),s.useEffect(()=>{if(p)return h(p),p.on("reInit",h),p.on("select",h),()=>{null==p||p.off("select",h)}},[p,h]),(0,t.jsx)(D.Provider,{value:{carouselRef:m,api:p,opts:i,orientation:r||((null==i?void 0:i.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:b,canScrollPrev:f,canScrollNext:x},children:(0,t.jsx)("div",{ref:a,onKeyDownCapture:j,className:(0,l.cn)("carousel relative",c),role:"region","aria-roledescription":"carousel",...u,children:d})})});O.displayName="Carousel";let I=s.forwardRef((e,a)=>{let{className:r,...s}=e,{carouselRef:i,orientation:o}=A();return(0,t.jsx)("div",{ref:i,className:"carousel__content overflow-hidden",children:(0,t.jsx)("div",{ref:a,className:(0,l.cn)("flex","horizontal"===o?"":"flex-col",r),...s})})});I.displayName="CarouselContent";let P=s.forwardRef((e,a)=>{let{className:r,...s}=e,{orientation:i}=A();return(0,t.jsx)("div",{ref:a,role:"group","aria-roledescription":"slide",className:(0,l.cn)("carousel__item min-w-0 shrink-0 grow-0 basis-full","",r),...s})});P.displayName="CarouselItem";let M=s.forwardRef((e,a)=>{let{className:r,variant:s="default",size:o="icon",...n}=e,{orientation:c,scrollPrev:d,canScrollPrev:u}=A();return(0,t.jsxs)(R,{ref:a,variant:s,size:o,className:(0,l.cn)(" grid size-10 rounded-[.3rem]",r),disabled:!u,onClick:d,...n,children:["horizontal"===c?(0,t.jsx)(i.Y4O,{className:"size-5"}):(0,t.jsx)(i.Hf3,{className:"size-5"}),(0,t.jsx)("span",{className:"sr-only",children:"Ir a diapositiva anterior"})]})});M.displayName="CarouselPrevious";let L=s.forwardRef((e,a)=>{let{className:r,variant:s="default",size:o="icon",...n}=e,{orientation:c,scrollNext:d,canScrollNext:u}=A();return(0,t.jsxs)(R,{ref:a,variant:s,size:o,className:(0,l.cn)("grid size-10 rounded-[.3rem]",r),disabled:!u,onClick:d,...n,children:["horizontal"===c?(0,t.jsx)(i.LZ3,{className:"size-5"}):(0,t.jsx)(i.veu,{className:"size-5"}),(0,t.jsx)("span",{className:"sr-only",children:"Siguiente diapositiva"})]})});L.displayName="CarouselNext";var q=r(3224);function F(e){let{slides:a,containerClassName:r=""}=e;return(0,t.jsx)("div",{className:r,children:(0,t.jsxs)(O,{opts:{align:"start"},orientation:"vertical",className:"max-w-[300px]",children:[(0,t.jsx)(I,{className:"carousel-ratio-wrapper",children:a.map((e,a)=>(0,t.jsx)(P,{children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(q.Ee,{src:e.img,alt:"Imagen ".concat(a),ratio:1.4,loading:"lazy"}),e.content&&(0,t.jsx)("p",{className:"content",children:e.content})]})},a))}),(0,t.jsxs)("div",{className:"flex gap-1 grid justify-end absolute bottom-0 right-0 p-1",children:[(0,t.jsx)(M,{title:"Diapositiva anterior"}),(0,t.jsx)(L,{title:"Siguiente diapositiva"})]})]})})}function V(e){let{cover:a,slug:r="",from:s,to:i,url:o,repo:n,stack:l,desc:c,did:d,title:u}=e;return(0,t.jsx)("article",{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"project__carousel-wrapper changes-color",children:a&&a.length>0?(0,t.jsx)("div",{children:(0,t.jsx)(F,{slides:a})}):null}),(0,t.jsxs)("div",{className:"project__text text-sm",children:[(0,t.jsx)("h3",{className:"",children:u}),(0,t.jsx)("div",{className:"desc",children:(0,t.jsx)("p",{children:c})}),(0,t.jsx)("time",{className:"tracking-tighter",children:s})]}),(0,t.jsxs)("div",{className:"project__footer gap-1",children:[(0,t.jsxs)("a",{href:o,className:"link-inline",children:[(0,t.jsx)("span",{children:"Ver online"}),(0,t.jsx)(C.JO,{icon:"solar:link-bold-duotone"})]}),(0,t.jsxs)(k.default,{href:"/project/".concat(r),className:"link-inline link-inline--secondary",children:[(0,t.jsx)("span",{children:"Ver detalles"}),(0,t.jsx)(C.JO,{icon:"solar:document-bold-duotone"})]})]})]})})}var U=function(){return(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{id:"proyectos",children:[(0,t.jsx)("h2",{children:"Proyectos"}),(0,t.jsx)("ul",{className:"projects-grid",children:S.q&&S.q.map((e,a)=>(0,t.jsx)("li",{children:(0,t.jsx)(V,{cover:e.cover,stack:e.stack,from:e.from,url:e.url,repo:e.repo,slug:e.slug,title:e.title,desc:e.desc,did:e.did})},a))})]}),(0,t.jsx)("section",{id:"extras"})]})},J=r(4108);function G(){return(0,s.useEffect)(()=>{let e=new J.Z,a=r=>{e.raf(r),requestAnimationFrame(a)};return requestAnimationFrame(a),()=>{}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U,{}),(0,t.jsx)(_,{})]})}},7374:function(e,a,r){"use strict";r.d(a,{gN:function(){return s},q:function(){return t}});let t=[{cover:[{img:"/images_e/row-1-column-1.png"},{img:"/images_e/row-2-column-1.png"},{img:"/images_e/row-3-column-1.png"}],slug:"charts",from:"2024",stack:["React","CSS3","TypeScript"],title:"Excel To Charts",url:"https://excel-to-charts.vercel.app",desc:"Generador online de visualizaciones de datos (gr\xe1ficos), a partir de archivos de formato Excel.",did:["Generador de gr\xe1ficos al instante, a partir archivos .xlsx.","Cuenta con visualizador para la(s) tabla(s), con bot\xf3n para cambiar su visibilidad.","Incluye 4 tipo de gr\xe1ficos: de \xe1reas, de barras, lineales y compuestos.",'Permite tener varias "Hojas".']},{cover:[{img:"/images_r/row-1-column-1.png"},{img:"/images_r/row-2-column-1.png"},{img:"/images_r/row-3-column-1.png"},{img:"/images_r/row-4-column-1.png"},{img:"/images_r/row-5-column-1.png"},{img:"/images_r/row-6-column-1.png"},{img:"/images_r/row-7-column-1.png"},{img:"/images_r/row-8-column-1.png"},{img:"/images_r/row-9-column-1.png"},{img:"/images_r/row-10-column-1.png"}],slug:"rooster",from:"2023",stack:["Vue","CSS3","Vuetify","JavaScript"],title:"Rooster",url:"https://araceliponce.github.io/rooster/",repo:"https://github.com/araceliponce/rooster",desc:"Landing page. Inspirada en la p\xe1gina de inicio de productores de caf\xe9.",did:["Landing page, basada en la p\xe1gina de inicio de: www.redroostercoffee.com.","Modo oscuro y claro.","Tiene men\xfas laterales derecho e izquierdo, para la navegaci\xf3n y el carrito de compras","Uso de grid (grillas) para layouts diferentes seg\xfan el ancho de la ventana."]},{cover:[{img:"/images_n/1.png"},{img:"/images_n/2.png"},{img:"/images_n/3.png"},{img:"/images_n/4.png"}],slug:"notenook",from:"2023",stack:["React","CSS3","TypeScript"],title:"Notenook",url:"https://araceliponce.github.io/notenook/",repo:"https://github.com/araceliponce/notenook",desc:"Aplicaci\xf3n de notas para el navegador.",did:["Permite crear notas, editarlas, eliminarlas, etiquetarlas, y luego encontrarlas por t\xedtulos y etiquetas","Modo oscuro y claro.","Permite eliminar m\xfaltiples etiquetas y notas a la vez.","Layout masonry en Firefox Nightly (y layout de grilla para el resto de navegadores).","Las notas se guardan en el navegador, y no necesitas iniciar sesi\xf3n."]}];[{title:"Experiencia Laboral Reciente",id:"experiencia-laboral",content:[{stack:["React","TypeScript","TailwindCSS","Bitbucket"],from:"Feb. 2024",to:"Mar. 2024",role:"Desarrolladora Web Front End",company:"Onerami",did:["Particip\xe9 de la creaci\xf3n de un sistema de dise\xf1o completo.","Desarroll\xe9 historias de usuarios y dise\xf1\xe9 interfaces en flujos paso a paso.","Implement\xe9 la librer\xeda de componentes con React, TypeScript y styled-components.","Redact\xe9 documentaci\xf3n t\xe9cnica para facilitar la colaboraci\xf3n y el mantenimiento del c\xf3digo.","Uno de mis componentes destacados fue la Tabla con funcionalidades de sorting y renderizado personalizado de valores (strings, n\xfameros, etc.) en fragmentos (checkboxes, botones, etc.)."]},{stack:["PHP","MySQL","JavaScript","JQuery","CSS3","GitLab","Linux"],from:"Sep. 2023",to:"Ene. 2024",role:"Desarrolladora Web Full Stack",company:"Fundaci\xf3n Calma",did:["Implement\xe9 procesos CRUD considerando roles de usuario y permisos de acceso.","Optimic\xe9 tareas multipasos, mejorando la usabilidad, accesibilidad por teclado.","Desarroll\xe9 dashboards web interactivos, con datos clave y gr\xe1ficos interactivos.","Reduje peticiones externas (CDN) en un 20% y mejor\xe9 la responsividad en dispositivos m\xf3viles.","Maquet\xe9 correos usando HTML.","Me encargu\xe9 de enviar cambios en las ramas de testing a producci\xf3n en servidores remotos. Y de verificar su funcionamiento."]}]},{title:"Proyectos Destacados",id:"proyectos",content:t}].map(e=>e.id);let s={email:"aponcesanga@gmail.com",linkedin:"https://www.linkedin.com/in/araceliponcesanga/?ref=portfolio",github:"https://github.com/araceliponce?ref=portfolio",npm:"https://www.npmjs.com/package/@a_r_a_c_e_l_i/library"}},9354:function(e,a,r){"use strict";r.d(a,{cn:function(){return i}});var t=r(4839),s=r(6164);function i(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,s.m6)((0,t.W)(a))}}},function(e){e.O(0,[310,231,359,180,224,729,971,23,744],function(){return e(e.s=4075)}),_N_E=e.O()}]);