export default {
  global: {
    componenteFormativo: 'Registro de compras y ventas',
    descripcionCurso:
      'Este componente formativo tiene como objetivo afianzar los conocimientos de identificación y registro contable de las operaciones de compra y venta de inventarios, aplicando la normatividad vigente, así mismo, permite reconocer y aplicar los sistemas de inventarios, sus correspondientes métodos de valuación; al igual que los instrumentos financieros utilizados en operaciones de compra y venta de inventarios, con la respectiva carga impositiva, de acuerdo con la normatividad y políticas contables vigentes.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política contable',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto, tipos de inventario, valuación de inventarios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Medición, reconocimiento con impuestos y retenciones',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Presentación y revelación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instrumentos financieros – Cuentas por pagar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Política contable',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medición y reconocimiento',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: ' Presentación y revelación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ingresos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Política contable',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medición, reconocimiento con impuestos y retenciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Presentación y revelación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Instrumentos Financieros – Clientes y otras cuentas por cobrar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Política contable',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manejo de cartera fiscal',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Deterioro de cuentas por cobrar',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gastos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Política contable',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Presentación y revelación',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //nombreRuta: 'complementario',
      //icono: 'far fa-folder-open',
      //titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Actualícese (2018) Decreto 2483 de 2018: Anexo Técnico Compilatorio No.2 de la Normas Internacionales de Información Financiera NIIF para Pymes Grupo 2: Secciones 2, 5, 11, 13 y 27 ',
      link:
        'https://cdn.actualicese.com/normatividad/2018/Decretos/Anexo-2-D2483-18.pdf',
    },
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Coral D., y Guidiño D., y Henao H. (2014). Contabilidad: Plus. Mc. Graw Hill.',
    },
    {
      referencia:
        'Cuellar D., Vargas R., y Castro L. (2012). Contabilidad: un enfoque práctico. Alfaomega.  ',
      link: '',
    },
    {
      referencia:
        'Cuaspa, C. (2013). Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud. Ediciones Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'Estatuto Tributario Nacional (2019) Deducción de deudas de dudoso o difícil cobro: Artículo 145 del Estatuto Tributario',
      link: 'https://estatuto.co/?e=1126',
    },
    {
      referencia: 'Gerencie (16 de diciembre de 2020). Provisión de Cartera',
      link: 'https://www.gerencie.com/provision-de-cartera.html',
    },
    {
      referencia:
        'Ministerio de Industria Comercio y Turismo (2016) Norma Internacional de Contabilidad 2: Inventarios',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/9%20ES_RedBV2016_IAS02_PartA.pdf',
    },
    {
      referencia:
        'Ministerio de Industria Comercio y Turismo (2016) Norma Internacional de Contabilidad 8: Políticas Contables  ',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/11%20ES_RedBV2016_IAS08_PartA.pdf',
    },
    {
      referencia:
        'Ministerio de Industria Comercio y Turismo (2016) Norma Internacional de Información Financiera 7: Instrumentos Financieros.',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/52%20ES_RedBV2016_IFRS07_PartA.pdf',
    },
    {
      referencia:
        'Ministerio de Industria Comercio y Turismo (2016) Norma Internacional de Información Financiera 9: Instrumentos Financieros.',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/54%20ES_RedBV2016_IFRS09_PartA.pdf',
    },
    {
      referencia:
        'Ministerio de Industria Comercio y Turismo (2016) Norma Internacional de Información Financiera 15: Ingresos de Actividades ordinarias.',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/60%20ES_RedBV2016_IFRS15_PartA.pdf',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para organizaciones. Mc Graw Hill.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cartera de clientes',
      significado:
        'Registro que permite ordenar y clasificar a los clientes de una empresa, teniendo en cuenta entre otros aspectos, la ubicación, las facturas de venta, la cuantía y los vencimientos.',
    },
    {
      termino: 'Deterioro de cartera',
      significado:
        'Reconocimiento anticipado de la probable pérdida del valor de las cuentas por cobrar a clientes por el no pago de la misma.',
    },
    {
      termino: 'Devengo',
      significado:
        'Decrementos en los beneficios económicos, producidos a lo largo del período contable, en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos que dan como resultado decrementos en el patrimonio.',
    },
    {
      termino: 'Gastos',
      significado:
        'en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos.',
    },
    {
      termino: 'Ingresos',
      significado:
        'Incrementos en los beneficios económicos, producidos a lo largo del periodo contable, en forma de entradas o incrementos de valor de los activos, o bien como decrementos de los pasivos, que dan como resultado aumentos del patrimonio',
    },
    {
      termino: 'Instrumentos financieros',
      significado:
        'Contrato que da lugar a un activo financiero en una empresa y simultáneamente a un pasivo financiero o a un instrumento de patrimonio en otra empresa. Activos Financieros: efectivo, cartera de clientes, inversiones, entre otros. Pasivos Financieros: Proveedores, obligaciones emitidas.',
    },
    {
      termino: 'Inventarios para la venta',
      significado:
        'Activos, bienes corporales, destinados para la venta en la operación de comercialización, al igual que aquellos insumos y materiales utilizados en el proceso productivo para las empresas industriales.',
    },
    {
      termino: 'Kardex',
      significado:
        'Conocido como auxiliar de inventarios o almacén, es un documento que por cada referencia de inventario muestra cronológicamente sus movimientos de entradas, salidas y saldos, tanto de unidades como de costos unitarios y totales.',
    },
    {
      termino: 'Proveedores',
      significado:
        'Persona o una empresa que abastece los bienes o suministros, requeridos para la transformación y venta o que directamente se compran para su venta.',
    },
    {
      termino: 'Valuación de inventarios',
      significado:
        'Asignación de valor a los inventarios destinados para la venta con el fin de hallar tanto el costo de venta como el costo de existencia, utilizando un método de valuación como promedio ponderado o primeras en entrar y primeras en salir',
    },
    {
      termino: 'Venta',
      significado:
        'Operación que se caracteriza por la entrega del bien al cliente, transfiriéndole beneficios y riesgos, que generan ingresos para la empresa.',
    },
  ],
  //complementario: [
  //{
  //texto: '',
  //tipo: '',
  //link: '',
  //},
  //],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte Organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arévalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },

  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
