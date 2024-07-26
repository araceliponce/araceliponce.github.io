import { ScrollingPoint } from "./interfaces";

export const experiencia_laboral = [
  {

    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Bitbucket"
    ],
    from: "Feb. 2024",
    to: "Mar. 2024",
    role: "Desarrolladora Web Front End",
    company: "Onerami",
    summary: "Trabajé en el equipo encargado de crear una aplicación de tipo ERP.",
    did: [
      'Participé de la creación del sistema de diseño del proyecto (colores, íconos, estilos, etc.).',
      'Diseñé los flujos de usuarios, que permitieron la implementación de endpoints y páginas específicas en el back y front end, respectivamente.',
      'Implementé la librería de componentes funcionales en React, y usando CSS en JS.',
      'Redacté documentación técnica completa y concisa para detallar propiedades de los componentes y facilitar procesos como el build o la generación de archivos .tgz.',
      'Uno de mis componentes destacados fue la Tabla con sorting y renderizado personalizado de valores (strings, números, etc.) en fragmentos (checkboxes, botones, etc.).',
    ],
  },
  {
    stack: ['PHP', 'MySQL', 'JavaScript', 'JQuery', 'CSS3', 'GitLab', 'Linux'],
    from: "Sep. 2023",
    to: "Ene. 2024",
    role: "Desarrolladora Web Full Stack",
    company: "Fundación Calma",
    summary: "Trabajé en dos proyectos de la fundación, mi rol era corregir y agregar funcionalidades.",
    did: [
      'Implementé procesos CRUD considerando roles de usuario y permisos de acceso.',
      'Mejoré la UI de tareas multipasos, simplificando la navegación e indicaciones en inputs y modales.',
      'Implementé dashboards web interactivos con datos clave y gráficos interactivos, y la descarga de los reportes en formato PDF.',
      'Mejoré la responsividad en dispositivos móviles con CSS.',
      'Me encargué de enviar y verificar mis cambios en las ramas de testing a producción (servidores remotos).',
      'También maqueté algunos correos usando HTML'
    ],

  },

];
export const projects = [
  {
    cover: [
      {
        img: '/images_e/row-1-column-1.png',
      },
      {
        img: '/images_e/row-2-column-1.png',
      },
      {
        img: '/images_e/row-3-column-1.png',
      },
    ],
    videoUrl: '/demo_e.mp4',
    slug: 'charts',
    from: '2024',
    stack: ['React', 'CSS3', 'TypeScript'],
    title: 'Excel To Charts',
    url: 'https://excel-to-charts.vercel.app',
    desc: 'Generador online de visualizaciones de datos (gráficos), a partir de archivos de formato Excel.',
    did: [
      'Generador de gráficos al instante, a partir archivos .xlsx.',
      'Cuenta con visualizador para la(s) tabla(s), con botón para cambiar su visibilidad.',
      'Incluye 4 tipo de gráficos: de áreas, de barras, lineales y compuestos.',
      'Permite tener varias "Hojas".'
    ]
  },
  {
    cover: [
      {
        img: '/images_r/row-1-column-1.png',
      },
      {
        img: '/images_r/row-2-column-1.png',
      },
      {
        img: '/images_r/row-3-column-1.png',
      },
      {
        img: '/images_r/row-4-column-1.png',
      },
      {
        img: '/images_r/row-5-column-1.png',
      },
      {
        img: '/images_r/row-6-column-1.png',
      },
      {
        img: '/images_r/row-7-column-1.png',
      },
      {
        img: '/images_r/row-8-column-1.png',
      },
      {
        img: '/images_r/row-9-column-1.png',
      },
      {
        img: '/images_r/row-10-column-1.png',
      },
    ],
    videoUrl: '/demo_r.mp4',
    slug: 'rooster',
    from: '2023',
    stack: ['Vue', 'CSS3', 'Vuetify', 'JavaScript'],
    title: 'Rooster',
    url: 'https://araceliponce.github.io/rooster/',
    repo: 'https://github.com/araceliponce/rooster',
    desc: 'Landing page. Inspirada en la página de inicio de productores de café.',
    did: [
      'Landing page, basada en la página de inicio de: www.redroostercoffee.com.',
      'Modo oscuro y claro.',
      'Tiene menús laterales derecho e izquierdo, para la navegación y el carrito de compras',
      'Uso de grid (grillas) para layouts diferentes según el ancho de la ventana.',
    ]
  },
  {
    cover: [
      {
        img: '/images_n/1.png',
      },
      {
        img: '/images_n/2.png',
      },
      {
        img: '/images_n/3.png',
      },
      {
        img: '/images_n/4.png',
      },
    ],
    videoUrl: '/demo_n.mp4',
    slug: 'notenook',
    from: '2023',
    stack: ['React', 'CSS3', 'TypeScript'],
    title: 'Notenook',
    url: 'https://araceliponce.github.io/notenook/',
    repo: 'https://github.com/araceliponce/notenook',
    desc: 'Aplicación de notas para el navegador.',
    did: [
      'Permite crear notas, editarlas, eliminarlas, etiquetarlas, y luego encontrarlas por títulos y etiquetas',
      'Modo oscuro y claro.',
      'Permite eliminar múltiples etiquetas y notas a la vez.',
      'Layout masonry en Firefox Nightly (y layout de grilla para el resto de navegadores).',
      'Las notas se guardan en el navegador, y no necesitas iniciar sesión.'
    ]
  },


];




const EXCEL = {
  cover: [
    {
      img: '/images_e/row-1-column-1.png',
      caption: 'algo'
    },
    {
      img: '/images_e/row-2-column-1.png',
    },
    {
      img: '/images_e/row-3-column-1.png',
    },
  ],
  from: 2024,
  stack: ['React', 'CSS3', 'TypeScript'],
  title: 'Excel To Charts (2024)',
  url: 'https://excel-to-charts.vercel.app',
  did: [
    'Generador de gráficos al instante, a partir archivos .xlsx.',
    'Cuenta con visualizador para la(s) tabla(s), con botón para cambiar su visibilidad.',
    'Incluye 4 tipo de gráficos: de áreas, de barras, lineales y compuestos.',
    'Permite tener varias "Hojas".'
  ]
}
const NOTAS = {
  cover: [
    {
      img: '/images_n/1.png',
    },
    {
      img: '/images_n/2.png',
    },
    {
      img: '/images_n/3.png',
    },
    {
      img: '/images_n/4.png',
    },
  ],
  from: 2023,
  stack: ['React', 'CSS3', 'TypeScript'],
  title: 'Notenook (2023)',
  url: 'https://araceliponce.github.io/notenook/',
  repo: 'https://github.com/araceliponce/notenook',
  did: [
    'Permite crear notas, editarlas, eliminarlas, etiquetarlas, y luego encontrarlas por títulos y etiquetas',
    'Modo oscuro y claro.',
    'Permite eliminar múltiples etiquetas y notas a la vez.',
    'Layout masonry en Firefox Nightly (y layout de grilla para el resto de navegadores).',
    'Las notas se guardan en el navegador, y no necesitas iniciar sesión.'
  ]
}
const MAIN_PROJECTS = [EXCEL, NOTAS]


// export const MAIN_SECTIONS: ScrollingPoint[] = [
//   {
//     title: "Experiencia Laboral Reciente",
//     id: "experiencia-laboral",
//     content: professional_experience,
//   },
//   {
//     title: "Proyectos Destacados",
//     // subtitle: "¿Mis mejores proyectos del 2023 y 2024?",
//     id: "proyectos",
//     content: projects,
//   },
//   // {
//   //   title: EXCEL.title,
//   //   id: 'e',
//   //   type: 'collage',
//   //   cover: EXCEL.cover,
//   //   content: EXCEL.did
//   // }
// ];

// export const MAIN_SECTIONS_IDS = MAIN_SECTIONS.map(section => section.id);



export const ENLACES = {
  email: 'aponcesanga@gmail.com',
  linkedin: 'https://www.linkedin.com/in/araceliponcesanga/?ref=portfolio',
  github: 'https://github.com/araceliponce?ref=portfolio',
  npm: 'https://www.npmjs.com/package/@a_r_a_c_e_l_i/library'

}


