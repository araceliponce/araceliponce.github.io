(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4075:function(e,t,a){Promise.resolve().then(a.bind(a,6404))},6404:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return G}});var r=a(7437),s=a(2265),i=a(4867),o=a(5772),n=a(2218),l=a(9354);let c=o.zt,d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(o.l_,{ref:t,className:(0,l.cn)("text-md fixed top-0 right-0 z-[100] flex max-h-screen w-[min(30rem,80vw)] flex-col-reverse p-4",a),...s})});d.displayName=o.l_.displayName;let u=(0,n.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=s.forwardRef((e,t)=>{let{className:a,variant:s,...i}=e;return(0,r.jsx)(o.fC,{ref:t,className:(0,l.cn)(u({variant:s}),a),...i})});m.displayName=o.fC.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(o.aU,{ref:t,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-md font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",a),...s})}).displayName=o.aU.displayName;let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(o.x8,{ref:t,className:(0,l.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",a),"toast-close":"",...s,children:(0,r.jsx)(i.Pxu,{className:"h-4 w-4"})})});p.displayName=o.x8.displayName;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(o.Dx,{ref:t,className:(0,l.cn)("text-md font-semibold [&+div]:text-sm",a),...s})});f.displayName=o.Dx.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(o.dk,{ref:t,className:(0,l.cn)("text-7xl opacity-90",a),...s})});g.displayName=o.dk.displayName;let x=0,v=new Map,h=e=>{if(v.has(e))return;let t=setTimeout(()=>{v.delete(e),w({type:"REMOVE_TOAST",toastId:e})},1e6);v.set(e,t)},y=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?h(a):e.toasts.forEach(e=>{h(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},b=[],j={toasts:[]};function w(e){j=y(j,e),b.forEach(e=>{e(j)})}function N(e){let{...t}=e,a=(x=(x+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>w({type:"DISMISS_TOAST",toastId:a});return w({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||r()}}}),{id:a,dismiss:r,update:e=>w({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function _(){let{toasts:e}=function(){let[e,t]=s.useState(j);return s.useEffect(()=>(b.push(t),()=>{let e=b.indexOf(t);e>-1&&b.splice(e,1)}),[e]),{...e,toast:N,dismiss:e=>w({type:"DISMISS_TOAST",toastId:e})}}();return(0,r.jsxs)(c,{children:[e.map(function(e){let{id:t,title:a,description:s,action:i,...o}=e;return(0,r.jsxs)(m,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[a&&(0,r.jsx)(f,{children:a}),s&&(0,r.jsx)(g,{children:s})]}),i,(0,r.jsx)(p,{})]},t)}),(0,r.jsx)(d,{})]})}var S=a(7374),k=a(7138),C=a(1359),T=a(4300),z=a(1538);let E=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),R=s.forwardRef((e,t)=>{let{className:a,variant:s,size:i,asChild:o=!1,...n}=e,c=o?z.g7:"button";return(0,r.jsx)(c,{className:(0,l.cn)(E({variant:s,size:i,className:a})),ref:t,...n})});R.displayName="Button";let D=s.createContext(null);function A(){let e=s.useContext(D);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let O=s.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:i,setApi:o,plugins:n,className:c,children:d,...u}=e,[m,p]=(0,T.Z)({...i,axis:"horizontal"===a?"x":"y"},n),[f,g]=s.useState(!1),[x,v]=s.useState(!1),h=s.useCallback(e=>{e&&(g(e.canScrollPrev()),v(e.canScrollNext()))},[]),y=s.useCallback(()=>{null==p||p.scrollPrev()},[p]),b=s.useCallback(()=>{null==p||p.scrollNext()},[p]),j=s.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),b())},[y,b]);return s.useEffect(()=>{p&&o&&o(p)},[p,o]),s.useEffect(()=>{if(p)return h(p),p.on("reInit",h),p.on("select",h),()=>{null==p||p.off("select",h)}},[p,h]),(0,r.jsx)(D.Provider,{value:{carouselRef:m,api:p,opts:i,orientation:a||((null==i?void 0:i.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:b,canScrollPrev:f,canScrollNext:x},children:(0,r.jsx)("div",{ref:t,onKeyDownCapture:j,className:(0,l.cn)("carousel relative",c),role:"region","aria-roledescription":"carousel",...u,children:d})})});O.displayName="Carousel";let I=s.forwardRef((e,t)=>{let{className:a,...s}=e,{carouselRef:i,orientation:o}=A();return(0,r.jsx)("div",{ref:i,className:"carousel__content overflow-hidden",children:(0,r.jsx)("div",{ref:t,className:(0,l.cn)("flex","horizontal"===o?"":"flex-col",a),...s})})});I.displayName="CarouselContent";let P=s.forwardRef((e,t)=>{let{className:a,...s}=e,{orientation:i}=A();return(0,r.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,l.cn)("carousel__item min-w-0 shrink-0 grow-0 basis-full","",a),...s})});P.displayName="CarouselItem";let M=s.forwardRef((e,t)=>{let{className:a,variant:s="default",size:o="icon",...n}=e,{orientation:c,scrollPrev:d,canScrollPrev:u}=A();return(0,r.jsxs)(R,{ref:t,variant:s,size:o,className:(0,l.cn)(" grid size-10 rounded-[.3rem]",a),disabled:!u,onClick:d,...n,children:["horizontal"===c?(0,r.jsx)(i.Y4O,{className:"size-5"}):(0,r.jsx)(i.Hf3,{className:"size-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Ir a diapositiva anterior"})]})});M.displayName="CarouselPrevious";let L=s.forwardRef((e,t)=>{let{className:a,variant:s="default",size:o="icon",...n}=e,{orientation:c,scrollNext:d,canScrollNext:u}=A();return(0,r.jsxs)(R,{ref:t,variant:s,size:o,className:(0,l.cn)("grid size-10 rounded-[.3rem]",a),disabled:!u,onClick:d,...n,children:["horizontal"===c?(0,r.jsx)(i.LZ3,{className:"size-5"}):(0,r.jsx)(i.veu,{className:"size-5"}),(0,r.jsx)("span",{className:"sr-only",children:"Siguiente diapositiva"})]})});L.displayName="CarouselNext";var q=a(3224);function F(e){let{slides:t,containerClassName:a=""}=e;return(0,r.jsx)("div",{className:a,children:(0,r.jsxs)(O,{opts:{align:"start"},orientation:"vertical",className:"max-w-[300px]",children:[(0,r.jsx)(I,{className:"carousel-ratio-wrapper",children:t.map((e,t)=>(0,r.jsx)(P,{children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)(q.Ee,{src:e.img,alt:"Imagen ".concat(t),ratio:1.4,loading:"lazy"}),e.content&&(0,r.jsx)("p",{className:"content",children:e.content})]})},t))}),(0,r.jsxs)("div",{className:"flex gap-1 grid justify-end absolute bottom-0 right-0 p-1",children:[(0,r.jsx)(M,{title:"Diapositiva anterior"}),(0,r.jsx)(L,{title:"Siguiente diapositiva"})]})]})})}function V(e){let{cover:t,slug:a="",from:s,to:i,url:o,repo:n,stack:l,desc:c,did:d,title:u}=e;return(0,r.jsx)("article",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"project__carousel-wrapper",children:t&&t.length>0?(0,r.jsx)("div",{children:(0,r.jsx)(F,{slides:t})}):null}),(0,r.jsxs)("div",{className:"project__text text-sm",children:[(0,r.jsx)("h3",{className:"tracking-tighter",children:u}),(0,r.jsx)("div",{className:"desc",children:(0,r.jsx)("p",{children:c})}),(0,r.jsx)("time",{className:"",children:s})]}),(0,r.jsxs)("div",{className:"project__footer gap-1",children:[(0,r.jsxs)("a",{href:o,className:"link-inline",children:[(0,r.jsx)("span",{children:"Ver online"}),(0,r.jsx)(C.JO,{icon:"solar:link-bold-duotone"})]}),(0,r.jsxs)(k.default,{href:"/project/".concat(a),className:"link-inline link-inline--secondary",children:[(0,r.jsx)("span",{children:"Ver detalles"}),(0,r.jsx)(C.JO,{icon:"solar:document-bold-duotone"})]})]})]})})}var U=function(){return(0,r.jsxs)("main",{children:[(0,r.jsxs)("section",{id:"proyectos",children:[(0,r.jsx)("h2",{children:"Proyectos"}),(0,r.jsx)("ul",{className:"projects-grid",children:S.q&&S.q.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(V,{cover:e.cover,stack:e.stack,from:e.from,url:e.url,repo:e.repo,slug:e.slug,title:e.title,desc:e.desc,did:e.did})},t))})]}),(0,r.jsx)("section",{id:"extras"})]})},J=a(4108);function G(){return(0,s.useEffect)(()=>{let e=new J.Z,t=a=>{e.raf(a),requestAnimationFrame(t)};return requestAnimationFrame(t),()=>{}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{}),(0,r.jsx)(_,{})]})}},7374:function(e,t,a){"use strict";a.d(t,{gN:function(){return s},q:function(){return r}});let r=[{cover:[{img:"/images_e/row-1-column-1.png"},{img:"/images_e/row-2-column-1.png"},{img:"/images_e/row-3-column-1.png"}],slug:"charts",from:"2024",stack:["React","CSS3","TypeScript"],title:"Excel To Charts",url:"https://excel-to-charts.vercel.app",desc:"Generador online de visualizaciones de datos (gr\xe1ficos), a partir de archivos de formato Excel.",did:["Generador de gr\xe1ficos al instante, a partir archivos .xlsx.","Cuenta con visualizador para la(s) tabla(s), con bot\xf3n para cambiar su visibilidad.","Incluye 4 tipo de gr\xe1ficos: de \xe1reas, de barras, lineales y compuestos.",'Permite tener varias "Hojas".']},{cover:[{img:"/images_r/row-1-column-1.png"},{img:"/images_r/row-2-column-1.png"},{img:"/images_r/row-3-column-1.png"},{img:"/images_r/row-4-column-1.png"},{img:"/images_r/row-5-column-1.png"},{img:"/images_r/row-6-column-1.png"},{img:"/images_r/row-7-column-1.png"},{img:"/images_r/row-8-column-1.png"},{img:"/images_r/row-9-column-1.png"},{img:"/images_r/row-10-column-1.png"}],slug:"rooster",from:"2023",stack:["Vue","CSS3","Vuetify","JavaScript"],title:"Rooster",url:"https://araceliponce.github.io/rooster/",repo:"https://github.com/araceliponce/rooster",desc:"Landing page. Inspirada en la p\xe1gina de inicio de productores de caf\xe9.",did:["Landing page, basada en la p\xe1gina de inicio de: www.redroostercoffee.com.","Modo oscuro y claro.","Tiene men\xfas laterales derecho e izquierdo, para la navegaci\xf3n y el carrito de compras","Uso de grid (grillas) para layouts diferentes seg\xfan el ancho de la ventana."]},{cover:[{img:"/images_n/1.png"},{img:"/images_n/2.png"},{img:"/images_n/3.png"},{img:"/images_n/4.png"}],slug:"notenook",from:"2023",stack:["React","CSS3","TypeScript"],title:"Notenook",url:"https://araceliponce.github.io/notenook/",repo:"https://github.com/araceliponce/notenook",desc:"Aplicaci\xf3n de notas para el navegador.",did:["Permite crear notas, editarlas, eliminarlas, etiquetarlas, y luego encontrarlas por t\xedtulos y etiquetas","Modo oscuro y claro.","Permite eliminar m\xfaltiples etiquetas y notas a la vez.","Layout masonry en Firefox Nightly (y layout de grilla para el resto de navegadores).","Las notas se guardan en el navegador, y no necesitas iniciar sesi\xf3n."]}];[{title:"Experiencia Laboral Reciente",id:"experiencia-laboral",content:[{stack:["React","TypeScript","TailwindCSS","Bitbucket"],from:"Feb. 2024",to:"Mar. 2024",role:"Desarrolladora Web Front End",company:"Onerami",did:["Particip\xe9 de la creaci\xf3n de un sistema de dise\xf1o completo.","Desarroll\xe9 historias de usuarios y dise\xf1\xe9 interfaces en flujos paso a paso.","Implement\xe9 la librer\xeda de componentes con React, TypeScript y styled-components.","Redact\xe9 documentaci\xf3n t\xe9cnica para facilitar la colaboraci\xf3n y el mantenimiento del c\xf3digo.","Uno de mis componentes destacados fue la Tabla con funcionalidades de sorting y renderizado personalizado de valores (strings, n\xfameros, etc.) en fragmentos (checkboxes, botones, etc.)."]},{stack:["PHP","MySQL","JavaScript","JQuery","CSS3","GitLab","Linux"],from:"Sep. 2023",to:"Ene. 2024",role:"Desarrolladora Web Full Stack",company:"Fundaci\xf3n Calma",did:["Implement\xe9 procesos CRUD considerando roles de usuario y permisos de acceso.","Optimic\xe9 tareas multipasos, mejorando la usabilidad, accesibilidad por teclado.","Desarroll\xe9 dashboards web interactivos, con datos clave y gr\xe1ficos interactivos.","Reduje peticiones externas (CDN) en un 20% y mejor\xe9 la responsividad en dispositivos m\xf3viles.","Maquet\xe9 correos usando HTML.","Me encargu\xe9 de enviar cambios en las ramas de testing a producci\xf3n en servidores remotos. Y de verificar su funcionamiento."]}]},{title:"Proyectos Destacados",id:"proyectos",content:r}].map(e=>e.id);let s={email:"aponcesanga@gmail.com",linkedin:"https://www.linkedin.com/in/araceliponcesanga/?ref=portfolio",github:"https://github.com/araceliponce?ref=portfolio",npm:"https://www.npmjs.com/package/@a_r_a_c_e_l_i/library"}},9354:function(e,t,a){"use strict";a.d(t,{cn:function(){return i}});var r=a(4839),s=a(6164);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}}},function(e){e.O(0,[310,231,359,180,224,729,971,23,744],function(){return e(e.s=4075)}),_N_E=e.O()}]);