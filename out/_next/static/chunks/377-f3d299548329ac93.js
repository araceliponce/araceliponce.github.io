"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{9910:function(e,a,r){var o=r(7437),i=r(7374),n=r(1359);r(2265),a.Z=function(){return(0,o.jsx)("footer",{children:(0,o.jsxs)("div",{className:"grid justify-center py-[5rem] text-sm",children:[(0,o.jsxs)("div",{className:"text-center pb-3 grid gap-1",children:[(0,o.jsx)("p",{className:"",children:"Dise\xf1ado y desarrollado por m\xed"}),(0,o.jsx)("p",{className:"text-xs",children:"en construcci\xf3n al 28/07/24"})]}),(0,o.jsxs)("div",{className:"flex flex-wrap justify-center gap-2",children:[(0,o.jsx)("a",{className:"button",href:"mailto:".concat(i.gN.email),children:i.gN.email}),(0,o.jsxs)("a",{className:"button",href:i.gN.github,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)("span",{children:"Github"}),(0,o.jsx)(n.JO,{icon:"solar:incognito-bold-duotone"})]}),(0,o.jsxs)("a",{className:"button",href:i.gN.linkedin,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)("span",{children:"LinkedIn"}),(0,o.jsx)(n.JO,{icon:"solar:suitcase-bold-duotone"})]})]})]})})}},361:function(e,a,r){r.d(a,{Z:function(){return y}});var o=r(7437),i=r(2265),n=r(4867),s=r(4300),t=r(9354),l=r(1538);let c=(0,r(2218).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,a)=>{let{className:r,variant:i,size:n,asChild:s=!1,...d}=e,u=s?l.g7:"button";return(0,o.jsx)(u,{className:(0,t.cn)(c({variant:i,size:n,className:r})),ref:a,...d})});d.displayName="Button";let u=i.createContext(null);function m(){let e=i.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let p=i.forwardRef((e,a)=>{let{orientation:r="horizontal",opts:n,setApi:l,plugins:c,className:d,children:m,...p}=e,[g,f]=(0,s.Z)({...n,axis:"horizontal"===r?"x":"y"},c),[h,v]=i.useState(!1),[x,y]=i.useState(!1),b=i.useCallback(e=>{e&&(v(e.canScrollPrev()),y(e.canScrollNext()))},[]),w=i.useCallback(()=>{null==f||f.scrollPrev()},[f]),j=i.useCallback(()=>{null==f||f.scrollNext()},[f]),N=i.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),w()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[w,j]);return i.useEffect(()=>{f&&l&&l(f)},[f,l]),i.useEffect(()=>{if(f)return b(f),f.on("reInit",b),f.on("select",b),()=>{null==f||f.off("select",b)}},[f,b]),(0,o.jsx)(u.Provider,{value:{carouselRef:g,api:f,opts:n,orientation:r||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:w,scrollNext:j,canScrollPrev:h,canScrollNext:x},children:(0,o.jsx)("div",{ref:a,onKeyDownCapture:N,className:(0,t.cn)("carousel relative",d),role:"region","aria-roledescription":"carousel",...p,children:m})})});p.displayName="Carousel";let g=i.forwardRef((e,a)=>{let{className:r,...i}=e,{carouselRef:n,orientation:s}=m();return(0,o.jsx)("div",{ref:n,className:"carousel__content overflow-hidden",children:(0,o.jsx)("div",{ref:a,className:(0,t.cn)("flex","horizontal"===s?"":"flex-col",r),...i})})});g.displayName="CarouselContent";let f=i.forwardRef((e,a)=>{let{className:r,...i}=e,{orientation:n}=m();return(0,o.jsx)("div",{ref:a,role:"group","aria-roledescription":"slide",className:(0,t.cn)("carousel__item min-w-0 shrink-0 grow-0 basis-full","",r),...i})});f.displayName="CarouselItem";let h=i.forwardRef((e,a)=>{let{className:r,variant:i="default",size:s="icon",...l}=e,{orientation:c,scrollPrev:u,canScrollPrev:p}=m();return(0,o.jsxs)(d,{ref:a,variant:i,size:s,className:(0,t.cn)(" grid size-10 rounded-[.3rem]",r),disabled:!p,onClick:u,...l,children:["horizontal"===c?(0,o.jsx)(n.Y4O,{className:"size-5"}):(0,o.jsx)(n.Hf3,{className:"size-5"}),(0,o.jsx)("span",{className:"sr-only",children:"Ir a diapositiva anterior"})]})});h.displayName="CarouselPrevious";let v=i.forwardRef((e,a)=>{let{className:r,variant:i="default",size:s="icon",...l}=e,{orientation:c,scrollNext:u,canScrollNext:p}=m();return(0,o.jsxs)(d,{ref:a,variant:i,size:s,className:(0,t.cn)("grid size-10 rounded-[.3rem]",r),disabled:!p,onClick:u,...l,children:["horizontal"===c?(0,o.jsx)(n.LZ3,{className:"size-5"}):(0,o.jsx)(n.veu,{className:"size-5"}),(0,o.jsx)("span",{className:"sr-only",children:"Siguiente diapositiva"})]})});v.displayName="CarouselNext";var x=r(3224);function y(e){let{slides:a,containerClassName:r=""}=e;return(0,o.jsx)("div",{className:r,children:(0,o.jsxs)(p,{opts:{align:"start"},orientation:"vertical",className:"max-w-[300px]",children:[(0,o.jsx)(g,{className:"carousel-ratio-wrapper",children:a.map((e,a)=>(0,o.jsx)(f,{children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)(x.Ee,{src:e.img,alt:"Imagen ".concat(a),ratio:1.4,loading:"lazy"}),e.content&&(0,o.jsx)("p",{className:"content",children:e.content})]})},a))}),(0,o.jsxs)("div",{className:"flex gap-1 grid justify-end absolute bottom-0 right-0 p-1",children:[(0,o.jsx)(h,{title:"Diapositiva anterior"}),(0,o.jsx)(v,{title:"Siguiente diapositiva"})]})]})})}},7374:function(e,a,r){r.d(a,{$P:function(){return o},gN:function(){return n},q:function(){return i}});let o=[{stack:["React","TypeScript","TailwindCSS","Bitbucket"],from:"Feb. 2024",to:"Mar. 2024",role:"Desarrolladora Web Front End",company:"Onerami",summary:"Trabaj\xe9 en el equipo encargado de dise\xf1ar y desarrollar una aplicaci\xf3n de tipo ERP.",did:["Particip\xe9 de la creaci\xf3n del sistema de dise\xf1o del proyecto (colores, \xedconos, estilos, etc.).","Dise\xf1\xe9 los flujos de usuarios, que permitieron la implementaci\xf3n de endpoints y p\xe1ginas espec\xedficas en el back y front end, respectivamente.","Implement\xe9 la librer\xeda de componentes funcionales en React, y usando CSS en JS.","Redact\xe9 documentaci\xf3n t\xe9cnica completa y concisa para detallar propiedades de los componentes y facilitar procesos como el build o la generaci\xf3n de archivos .tgz.","Uno de mis componentes destacados fue: la tabla con renderizado personalizado de valores (strings, n\xfameros, etc.) en fragmentos (checkboxes, botones, etc.)."]},{stack:["PHP","MySQL","JavaScript","JQuery","CSS3","GitLab","Linux"],from:"Sep. 2023",to:"Ene. 2024",role:"Desarrolladora Web Full Stack",company:"Fundaci\xf3n Calma",summary:"Trabaj\xe9 en dos proyectos de la fundaci\xf3n. Corrigiendo y agregando funcionalidades.",did:["Implement\xe9 procesos CRUD considerando roles de usuario y permisos de acceso.","Mejor\xe9 la UI de tareas multipasos, simplificando la navegaci\xf3n e indicaciones en inputs y modales.","Implement\xe9 dashboards web interactivos con datos clave y gr\xe1ficos, y la descarga de los reportes en formato PDF.","Mejor\xe9 la responsividad en dispositivos m\xf3viles con CSS.","Me encargu\xe9 de enviar y verificar mis cambios en las ramas de testing a producci\xf3n (servidores remotos).","Tambi\xe9n maquet\xe9 algunos correos usando HTML"]}],i=[{cover:[{img:"/images_e/row-1-column-1.png"},{img:"/images_e/row-2-column-1.png"},{img:"/images_e/row-3-column-1.png"}],videoUrl:"/demo_e.mp4",slug:"charts",from:"2024",stack:["React","CSS3","TypeScript"],title:"Excel To Charts",url:"https://excel-to-charts.vercel.app",desc:"Generador online de visualizaciones de datos (gr\xe1ficos), a partir de archivos de formato Excel.",did:["Generador de gr\xe1ficos al instante, a partir archivos .xlsx.","Cuenta con visualizador para la(s) tabla(s), con bot\xf3n para cambiar su visibilidad.","Incluye 4 tipo de gr\xe1ficos: de \xe1reas, de barras, lineales y compuestos.",'Permite tener varias "Hojas".']},{cover:[{img:"/images_r/row-1-column-1.png"},{img:"/images_r/row-2-column-1.png"},{img:"/images_r/row-3-column-1.png"},{img:"/images_r/row-4-column-1.png"},{img:"/images_r/row-5-column-1.png"},{img:"/images_r/row-6-column-1.png"},{img:"/images_r/row-7-column-1.png"},{img:"/images_r/row-8-column-1.png"},{img:"/images_r/row-9-column-1.png"},{img:"/images_r/row-10-column-1.png"}],videoUrl:"/demo_r.mp4",slug:"rooster",from:"2023",stack:["Vue","CSS3","Vuetify","JavaScript"],title:"Rooster",url:"https://araceliponce.github.io/rooster/",repo:"https://github.com/araceliponce/rooster",desc:"Landing page. Inspirada en la p\xe1gina de inicio de productores de caf\xe9.",did:["Landing page, basada en la p\xe1gina de inicio de: www.redroostercoffee.com.","Modo oscuro y claro.","Tiene men\xfas laterales derecho e izquierdo, para la navegaci\xf3n y el carrito de compras","Uso de grid (grillas) para layouts diferentes seg\xfan el ancho de la ventana."]},{cover:[{img:"/images_n/1.png"},{img:"/images_n/2.png"},{img:"/images_n/3.png"},{img:"/images_n/4.png"}],videoUrl:"/demo_n.mp4",slug:"notenook",from:"2023",stack:["React","CSS3","TypeScript"],title:"Notenook",url:"https://araceliponce.github.io/notenook/",repo:"https://github.com/araceliponce/notenook",desc:"Aplicaci\xf3n de notas para el navegador.",did:["Permite crear notas, editarlas, eliminarlas, etiquetarlas, y luego encontrarlas por t\xedtulos y etiquetas","Modo oscuro y claro.","Permite eliminar m\xfaltiples etiquetas y notas a la vez.","Layout masonry en Firefox Nightly (y layout de grilla para el resto de navegadores).","Las notas se guardan en el navegador, y no necesitas iniciar sesi\xf3n."]}],n={email:"aponcesanga@gmail.com",linkedin:"https://www.linkedin.com/in/araceliponcesanga/?ref=portfolio",github:"https://github.com/araceliponce?ref=portfolio",npm:"https://www.npmjs.com/package/@a_r_a_c_e_l_i/library"}},9354:function(e,a,r){r.d(a,{cn:function(){return n}});var o=r(4839),i=r(6164);function n(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,i.m6)((0,o.W)(a))}}}]);