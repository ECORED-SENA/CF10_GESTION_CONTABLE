<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Gastos

    p.mb-3 Hace parte de este componente formativo el tema de los gastos asociados a las ventas, el cual tradicionalmente se conoce como costo de venta.

    p.mb-3 El gasto corresponde decrementos en los beneficios económicos, producidos a lo largo del período contable, en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos que dan como resultado decrementos en el patrimonio.

    p.mb-3 Los gastos incluyen tanto las pérdidas como las erogaciones que surgen en las actividades ordinarias de la entidad, para lograr el desarrollo de su objeto social:


    .row.justify-content-center.align-items-center.mt-5
        .col-12.col-lg-6
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Los gastos que surgen de la actividad ordinaria incluyen entre otros el costo de las ventas, los salarios y la depreciación; usualmente, toman la forma de una salida o disminución del valor de los activos, tales como efectivo y equivalente al efectivo, inventarios o propiedades, planta y equipo. 
            li 
              i.fas.fa-check
              | El costo de venta no desaparece con la entrada en vigencia de la NIIF y pese a que las traducciones de los estándares internacionales no incorporan la palabra “Costo” y si utiliza la palabra “Gasto”, esto solo obedece a una interpretación lingüística de la palabra original del idioma inglés “Expense”, que puede traducirse como consumo o gasto y frente a los inventarios debe entender como consumo o gasto de los inventarios destinados para la venta, que no es otra cosa que el tradicional “Costo de Venta”. 
            li
              i.fas.fa-check
              | Las pérdidas también cumplen la definición de gastos y pueden surgir en el curso de las actividades ordinarias de la entidad. Si las pérdidas se reconocen en el estado del resultado integral, habitualmente se presentan por separado, puesto que el conocimiento de estas es útil para la toma de decisiones económicas. 

        .col-12.col-lg-6
            img(src="@/assets/curso/images/tema5/img_23.svg" alt="", style="width:450px; display:block; margin: 0 auto;")

    p.mb-5 A continuación, se muestra un ejercicio de reconocimiento de diferentes tipos de gastos.

    LineaTiempoD.color-secundario.mb-5
      .row.tarjeta-fondo-paso(numero="1" titulo="Causa nómina del Auxiliar Contable así: Básico:")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-12
            p $1.000.000, Días trabajados: 30, H.E.D.O: 15. Descuento por libranza $100.000, Arl nivel: I
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 510506 Sueldo
                    td.text-center  1.000.000
                    td.text-center
                  tr.th-4
                    td.text-center 510527 Auxilio transporte
                    td.text-center 1.000.000 
                    td.text-center 
                  tr.th-3
                    td.text-center 510515 Horas extras
                    td.text-center 78.125 
                    td.text-center
                  tr.th-4
                    td.text-center 237005 Aportes salud
                    td.text-center 
                    td.text-center 43.125 
                  tr.th-3
                    td.text-center 238030 Aportes pensión
                    td.text-center 
                    td.text-center 43.125 
                  tr.th-4
                    td.text-center 237030 Libranzas
                    td.text-center 
                    td.text-center 100.000 
                  tr.th-3
                    td.text-center 250505 Salarios por pagar
                    td.text-center  
                    td.text-center 1.000.129 
                  tr.th-4
                    td.text-center 510570 Aportes pensión
                    td.text-center 129.375 
                    td.text-center 
                  tr.th-3
                    td.text-center 510568 Aportes ARL
                    td.text-center 5.628 
                    td.text-center
                  tr.th-4
                    td.text-center 510572 Aportes CCF
                    td.text-center 43.125 
                    td.text-center 
                  tr.th-3
                    td.text-center 238030 Aportes PENSIÓN
                    td.text-center 
                    td.text-center 129.375 
                  tr.th-4
                    td.text-center 237006 Aportes ARL
                    td.text-center 
                    td.text-center 5.628 
                  tr.th-3
                    td.text-center 237010 Aportes parafiscales
                    td.text-center  
                    td.text-center 43.125 
                  tr.th-4
                    td.text-center 510530 Cesantías
                    td.text-center 98.825 
                    td.text-center 
                  tr.th-3
                    td.text-center 510506 Sueldo
                    td.text-center  1.000.000
                    td.text-center
                  tr.th-4
                    td.text-center 510533 Intereses cesantías
                    td.text-center 11.864 
                    td.text-center 
                  tr.th-3
                    td.text-center 510536 Prima servicios
                    td.text-center 98.825 
                    td.text-center
                  tr.th-4
                    td.text-center 510539 Vacaciones
                    td.text-center 49.472 
                    td.text-center 
                  tr.th-3
                    td.text-center 251010 Cesantías
                    td.text-center 
                    td.text-center 98.825 
                  tr.th-4
                    td.text-center 251515 Intereses cesantías
                    td.text-center 
                    td.text-center 11.864 
                  tr.th-3
                    td.text-center 252020 Prima servicios
                    td.text-center  
                    td.text-center 98.825 
                  tr.th-4
                    td.text-center 252525 Vacaciones
                    td.text-center 
                    td.text-center 49.472 
                  tr.th-3
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>1.623.493 </b>
                    td.text-center <b>1.623.493 </b>

              
      .row.tarjeta-fondo-paso(numero="2" titulo="Causa honorarios de Abogado por $1.500.000, menos retefuente 10%.")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 511030 Asesoría jurídica
                    td.text-center 1.500.000 
                    td.text-center
                  tr.th-4
                    td.text-center 236515 Retefuente honorarios
                    td.text-center  
                    td.text-center 150.000 
                  tr.th-3
                    td.text-center 233525 Honorarios
                    td.text-center 
                    td.text-center 1.350.000 
                  tr.th-4
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>1.500.000</b>
                    td.text-center <b>1.500.000</b>

      .row.tarjeta-fondo-paso(numero="3" titulo="Causa el impuesto de Industria y Comercio por $1.850.000, menos retenciones que le practicaron por $620.000.")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 511505 Industria y comercio
                    td.text-center 1.850.000 
                    td.text-center
                  tr.th-4
                    td.text-center 135518 ICA Retenido
                    td.text-center  
                    td.text-center 620.000 
                  tr.th-3
                    td.text-center 241205 Impuesto ICA
                    td.text-center 
                    td.text-center 1.230.000 
                  tr.th-4
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>1.850.000 </b>
                    td.text-center <b>1.850.000 </b>

          
      .row.tarjeta-fondo-paso(numero="4" titulo="Causa alquiler de equipos industriales por $2.000.000, menos retefuente 4% y reteica 1%")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 512015 Maquinaria y equipo
                    td.text-center 2.000.000 
                    td.text-center
                  tr.th-4
                    td.text-center 236525 Retefuente servicios
                    td.text-center  
                    td.text-center 80.000  
                  tr.th-3
                    td.text-center 236805 Reteica servicios
                    td.text-center 
                    td.text-center 20.000 
                  tr.th-4
                    td.text-center 233540 Arrendamientos
                    td.text-center 
                    td.text-center 1.900.000 
                  tr.th-3
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>2.000.000</b>
                    td.text-center <b>2.000.000</b>

       
      .row.tarjeta-fondo-paso(numero="5" titulo="Paga fletes por transportes de materiales por $1.000.000, menos     retefuente 1%")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 513550 Transportes fletes
                    td.text-center 1.000.000
                    td.text-center
                  tr.th-4
                    td.text-center 236525 Retefuente servicios
                    td.text-center  
                    td.text-center 10.000
                  tr.th-3
                    td.text-center 233545 Transportes fletes
                    td.text-center 
                    td.text-center 990.000
                  tr.th-4
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>1.000.000</b>
                    td.text-center <b>1.000.000</b>


      .row.tarjeta-fondo-paso(numero="6" titulo=" Causa mantenimiento de equipos de cómputo por $500.000, menos retefuente 6% y reteica 1%")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 514525 Equipos computación
                    td.text-center 500.000
                    td.text-ccenter
                  tr.th-4
                    td.text-center 236525 Retefuente servicios
                    td.text-center  
                    td.text-center 30.000
                  tr.th-3
                    td.text-center 236805 Reteica servicios
                    td.text-center 
                    td.text-center 5.000
                  tr.th-4
                    td.text-center 233535 Servicio mantenimiento
                    td.text-center 
                    td.text-center 465.000
                  tr.th-3
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>500.000</b>
                    td.text-center <b>500.000</b>

      .row.tarjeta-fondo-paso(numero="7" titulo="Legaliza anticipo para peajes por $500.000, soportados en $350.000")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 515595 Otros - peajes
                    td.text-center 350.000
                    td.text-center
                  tr.th-4
                    td.text-center 110505 Caja general
                    td.text-center  150.000
                    td.text-center 
                  tr.th-3
                    td.text-center 133015 Anticipo a trabajadores
                    td.text-center 
                    td.text-center 500.000
                  tr.th-4
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>500.000</b>
                    td.text-center <b>500.000</b>

      .row.tarjeta-fondo-paso(numero="8" titulo="Deprecia el primer mes por línea recta, computadores adquiridos en $5.000.000;  con un tiempo estimado de vida útil de 2 años, sin cuota de salvamento")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 516020 Equipos de computo
                    td.text-center 208.333
                    td.text-center
                  tr.th-4
                    td.text-center 159220 Depreciación Eq.computo
                    td.text-center  
                    td.text-center 208.333
                  tr.th-3
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>208.333</b>
                    td.text-center <b>208.333</b>


      .row.tarjeta-fondo-paso(numero="9" titulo="Reembolsa la caja menor, así: $60.000 en Servicio de acueducto, $50.000 en elementos de aseo y $40.000 en papelería")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 513525 Acueducto y alcantarillado
                    td.text-center 60.000
                    td.text-center
                  tr.th-4
                    td.text-center 519525 Elementos de aseo
                    td.text-center 50.000
                    td.text-center 
                  tr.th-3
                    td.text-center 519530 Útiles papelería fotocopias
                    td.text-center 40.000
                    td.text-center 
                  tr.th-4
                    td.text-center 111005 Bancos moneda nacional
                    td.text-center 
                    td.text-center 150.000
                  tr.th-3
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>150.000</b>
                    td.text-center <b>150.000</b>


      .row.tarjeta-fondo-paso(numero="10" titulo="Paga publicidad radial por $450.000")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center 520560 Publicidad, propaganda
                    td.text-center 450.000
                    td.text-center
                  tr.th-4
                    td.text-center 111005 Bancos moneda nacional
                    td.text-center  
                    td.text-center 450.000
                  tr.th-3
                    td.text-center <b>SUMAS IGUALES</b>
                    td.text-center <b>450.000</b>
                    td.text-center <b>450.000</b>

    Separador

    #t_5_1.titulo-segundo
      .h2 5.1 Política contable 

    p.mb-3 Para la incorporación de las políticas contables de los gastos la entidad debe fundamentarse en la hipótesis del devengo. De conformidad con la sección 2 de NIIF para Pymes (2009), la base contable de acumulación o devengo establece que: 


    .row.justify-content-center.align-items-center.mt-5
        .col-12.col-lg-6
          p.mb-3 Una entidad elaborará sus estados financieros, excepto en lo relacionado con la información sobre flujos de efectivo, utilizando la base contable de acumulación (o devengo). 
          p.mb-3 De acuerdo con la base contable de acumulación (o devengo), las partidas se reconocerán como gastos cuando satisfagan las definiciones de dicha partida.
          p.mb-3 Por otro lado, las políticas contables establecen que el reconocimiento de los gastos procede directamente del reconocimiento y la medición de activos y pasivos. 
          p.mb-3 Una entidad reconocerá gastos en el estado del resultado cuando haya surgido un decremento en los beneficios económicos futuros, relacionado con un decremento en un activo o un incremento en un pasivo que pueda medirse con fiabilidad.

        .col-12.col-lg-6
            img(src="@/assets/curso/images/tema5/img_24.svg" alt="", style="width:450px; display:block; margin: 0 auto;")

    Separador

    #t_5_2.titulo-segundo
      .h2 5.2 Presentación y revelación

    p.mb-3 Al igual que los ingresos, los gastos serán presentados en el Estado de Resultados de conformidad con lo establecido por la sección 5 de NIIF para Pymes (2009).

    p.mb-5 Una entidad presentará un desglose de gastos, utilizando una clasificación basada en la naturaleza o en la función de los gastos dentro de la entidad, lo que proporcione una información que sea fiable y más relevante. 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema5/ico_1.svg', alt="", style="width:100px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta-1
            .p-2
              h2 Desglose por naturaleza de los gastos:
              p Según este método de clasificación los gastos se agrupan en el estado del resultado integral de acuerdo con su naturaleza (por ejemplo, depreciación, compras de materiales, costos de transporte. beneficios a los empleados y costos de publicidad) y no los redistribuirá entre las diferentes funciones dentro de la entidad. 

      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema5/ico_2.svg', alt="", style="width:100px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta-1
            .p-2
              h2 Desglose por función de los gastos:
              p  Según este método de clasificación, los gastos se agruparán de acuerdo con su función como parte del Costo de las ventas o, por ejemplo, de los costos de actividades de distribución o administración. Como mínimo una entidad revelará, según este método, su costo de ventas de forma separada de otros gastos.

    p Por otro lado, la entidad revelará en notas a los estados financieros las políticas contables adoptadas para el reconocimiento de los gastos incurridos para actividades ordinarias, mostrándolos de forma separada de aquellos gastos incurridos de forma extraordinaria.








    










</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
