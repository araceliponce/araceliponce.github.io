import { ScrollingPoint } from "./interfaces";

const professional_experience = [
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
    did: [
      'Participé de la creación de un sistema de diseño completo.',
      'Desarrollé historias de usuarios y diseñé interfaces en flujos paso a paso.',
      'Implementé la librería de componentes con React, TypeScript y styled-components.',
      'Redacté documentación técnica para facilitar la colaboración y el mantenimiento del código.',
      'Uno de mis componentes destacados fue la Tabla con funcionalidades de sorting y renderizado personalizado de valores (strings, números, etc.) en fragmentos (checkboxes, botones, etc.).',
    ],
  },
  {
    stack: ['PHP', 'MySQL', 'JavaScript', 'JQuery', 'CSS3', 'GitLab', 'Linux'],
    from: "Sep. 2023",
    to: "Ene. 2024",
    role: "Desarrolladora Web Full Stack",
    company: "Fundación Calma",
    did: [
      'Implementé procesos CRUD considerando roles de usuario y permisos de acceso.',
      'Optimicé tareas multipasos, mejorando la usabilidad, accesibilidad por teclado.',
      'Desarrollé dashboards web interactivos, con datos clave y gráficos interactivos.',
      'Reduje peticiones externas (CDN) en un 20% y mejoré la responsividad en dispositivos móviles.',
      'Maqueté correos usando HTML.',
      'Me encargué de enviar cambios en las ramas de testing a producción en servidores remotos. Y de verificar su funcionamiento.',
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


export const MAIN_SECTIONS: ScrollingPoint[] = [
  {
    title: "Experiencia Laboral Reciente",
    id: "experiencia-laboral",
    content: professional_experience,
  },
  {
    title: "Proyectos Destacados",
    // subtitle: "¿Mis mejores proyectos del 2023 y 2024?",
    id: "proyectos",
    content: projects,
  },
  // {
  //   title: EXCEL.title,
  //   id: 'e',
  //   type: 'collage',
  //   cover: EXCEL.cover,
  //   content: EXCEL.did
  // }
];

export const MAIN_SECTIONS_IDS = MAIN_SECTIONS.map(section => section.id);



export const ENLACES = {
  email: 'aponcesanga@gmail.com',
  linkedin: 'https://www.linkedin.com/in/araceliponcesanga/?ref=portfolio',
  github: 'https://github.com/araceliponce?ref=portfolio',
  npm: 'https://www.npmjs.com/package/@a_r_a_c_e_l_i/library'

}


