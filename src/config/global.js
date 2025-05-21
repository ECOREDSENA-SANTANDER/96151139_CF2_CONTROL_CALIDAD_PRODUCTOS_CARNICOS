export default {
  global: {
    Name: 'Más allá del sabor: prevención y seguridad en productos cárnicos',
    Description:
      'En este componente se exploran las características de la carne como alimento y los factores que afectan su calidad, incluyendo alteraciones microbiológicas. También se abordan los cuidados necesarios durante el faenado y la elaboración de derivados cárnicos, con énfasis en las prácticas higiénico-sanitarias que previenen la contaminación y garantizan la seguridad del producto final.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La carne como alimento',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Factores de contaminación de la carne en la cadena alimentaria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Microorganismos alterantes en los embutidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manipulación en el faenado',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Requisitos higiénicos en el proceso de elaboración de productos cárnicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Prácticas higiénicas en áreas de proceso',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Requisitos higiénicos en el proceso de elaboración de productos cárnicos. ',
      referencia:
        'Onega Pagador, M. E. (2003). Evaluación de la calidad de carnes frescas: Aplicación de técnicas analíticas, instrumentales y sensoriales (Tesis doctoral). Universidad Complutense de Madrid. ',
      tipo: 'Documento',
      descarga: 'downloads/Evaluacion_calidad_carnes_frescas.pdf',
    },
    {
      tema: 'Prácticas higiénicas en áreas de proceso. ',
      referencia:
        'FAO. (2007). Buenas prácticas para la industria de la carne. Organización de las Naciones Unidas para la Agricultura y la Alimentación.',
      tipo: 'Documento',
      descarga: 'downloads/Buenas_practicas_industria_carne.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Inocuidad',
      significado:
        'condición que asegura que un alimento es seguro para el consumo humano.',
    },
    {
      termino: 'Contaminación',
      significado:
        'presencia de agentes físicos, químicos o biológicos que afectan la seguridad del alimento. ',
    },
    {
      termino: 'Faenado',
      significado:
        'proceso de sacrificio y preparación inicial del animal para consumo. ',
    },
    {
      termino: 'Refrigeración',
      significado:
        'método de conservación a baja temperatura que retarda el crecimiento microbiano. ',
    },
    {
      termino: 'Congelación',
      significado:
        'proceso de conservación que reduce la temperatura del alimento por debajo de 0 °C, deteniendo la actividad microbiana. ',
    },
    {
      termino: 'Pasteurización',
      significado:
        'tratamiento térmico que elimina microorganismos patógenos sin alterar significativamente el alimento. ',
    },
    {
      termino: 'Curado',
      significado: 'método de conservación mediante sal, nitritos o nitratos. ',
    },
    {
      termino: 'Aditivo',
      significado:
        'sustancia permitida que se incorpora a los alimentos para mejorar su conservación, sabor o textura. ',
    },
    {
      termino: 'Despiece',
      significado: 'separación de la canal en cortes comerciales. ',
    },
    {
      termino: 'Eviscerado',
      significado: 'extracción de las vísceras del animal durante el faenado. ',
    },
    {
      termino: 'Maduración',
      significado:
        'proceso controlado que mejora el sabor, aroma y textura de algunos productos cárnicos. ',
    },
    {
      termino: 'Oxidación',
      significado:
        'reacción química que puede deteriorar las grasas y proteínas de la carne, afectando su calidad. ',
    },
    {
      termino: 'Putrefacción',
      significado:
        'descomposición de la carne por acción microbiana, generando mal olor y toxicidad. ',
    },
    {
      termino: 'Humedad',
      significado:
        'presencia de agua en el ambiente o en el alimento que puede favorecer el crecimiento microbiano. ',
    },
    {
      termino: 'Viscosidad',
      significado:
        'alteración superficial de la carne o embutido que produce una textura pegajosa, generalmente causada por bacterias. ',
    },
  ],
  referencias: [
    {
      referencia: 'Mosquera, A. (s f.). Unidad 3 carnicos. Scribd.',
      link: 'https://es.scribd.com/document/425610108/UNIDAD-3-CARNICOS',
    },
    {
      referencia:
        'Gomez, M. B. (s. f.). Tematico8.Asturias.es export sites default Consumo SeguridadAlimentaria Seguridad-Alimentaria-Documentos FICHAS AUTOCONTROL xPDFx. Scribd.',
      link:
        'https://es.scribd.com/document/177531101/Tematico8-Asturias-es-Export-Sites-Default-Consumo-SeguridadAlimentaria-Seguridad-Alimentaria-documentos-FICHAS-AUTOCONTROL-xPDFx',
    },
    {
      referencia:
        'Guerrero, I. y Rosmini, M. (2012). Ciencia y tecnología de la carne. México, D. F., México: Noriega Editores.  ',
    },
    {
      referencia:
        'Onega, M. (2003). Evaluación de la calidad fresca: Aplicación de técnicas analíticas, instrumentales y sensoriales. Madrid, España: Universidad Complutense de Madrid.  ',
    },
    {
      referencia:
        'Restrepo, D., Arango, C., Amézquita, A. y Restrepo, R. (2001). Industria de carne. Medellín, Colombia: Universidad Nacional de Colombia.  ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática ',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez ',
          cargo: 'Guionista – Línea de producción',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocío Reyes Acevedo',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
