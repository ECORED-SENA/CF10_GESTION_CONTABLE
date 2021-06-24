<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Ingresos

    p.mb-3 El término de ingresos puede tener diferentes interpretaciones, las cuales coinciden en que generan un incremento patrimonial, como consecuencia de incrementos de activos y/o disminución de pasivos.

    p De conformidad con la NIIF 15 (2009), es fundamental tener presente en la política contable los siguientes aspectos, frente a la presentación de los ingresos en los estados financieros:

    .row.justify-content-center.align-items-center.mb-5
        .col-auto
            img(src="@/assets/curso/images/tema3/img_15.svg" alt="", style="width:500px; display:inline-block; margin: 0 auto;")
    PasosA.color-acento-contenido.mb-5(tipo="n")
      div
        h3
        p Cuando una de las partes de un contrato haya cumplido, una entidad presentará el contrato en el estado de situación financiera como un activo del contrato o un pasivo del contrato.

      div
        h3 
        p Si un cliente paga una contraprestación, o una entidad tiene un derecho incondicional a recibir un importe como contraprestación antes de que la entidad transfiera un bien o servicio al cliente, la entidad presentará el contrato como un pasivo del contrato cuando el pago se realice o sea exigible. 

      div
        h3 
        p Si una entidad realiza el desempeño mediante la transferencia de bienes o servicios al cliente antes de que el cliente pague la contraprestación o antes de que sea exigible el pago, la entidad presentará el contrato como un activo del contrato, excluyendo de esta partida los importes presentados como cuentas por cobrar.

      div
        h3 
        p Una cuenta por cobrar es el derecho incondicional de una entidad a recibir una contraprestación.

    p.mb-3 Como un elemento de los estados financieros los ingresos incluyen tanto los generados por actividades ordinarias como los de actividades extraordinarias.

    p.mb-3 Para el tema en estudio, los ingresos de actividades ordinarias surgen en el curso de las del desarrollo del objeto social principal de la empresa y adoptan una gran variedad de nombres, tales como ventas, comisiones, intereses, dividendos, regalías y alquileres. 

    Separador 

    #t_3_1.titulo-segundo
      .h2 3.1 Política contable

    p.mb-3 En el manual de políticas contables correspondiente a los ingresos, la empresa identifica aquellos generados por actividades ordinarias, estableciendo los lineamientos para su reconocimiento en las diferentes formas y medios de pago.

    p.mb-3 De igual forma las políticas contables en torno a los ingresos, establecen la presentación de los mismos en los estados financieros reflejando de forma separada los de operaciones ordinarias, de aquellos de operaciones extraordinarias.

    Separador 

    #t_3_2.titulo-segundo
      .h2 3.2 Medición, reconocimiento con impuestos y retenciones.

    p.mb-3 La entidad medirá los ingresos de actividades ordinarias al valor razonable de la contraprestación recibida o por recibir, el cual tiene en cuenta el importe de descuentos comerciales, descuentos por pronto pago y rebajas por volumen de ventas que sean practicados por la entidad.

    p.mb-3 Se incluirá en los ingresos por actividades ordinarias solamente las entradas brutas de beneficios económicos recibidos y por recibir por parte de la entidad, actuando por cuenta propia. 

    p.mb-3 No se incluirá en los ingresos por actividades ordinarias, los importes recibidos por cuenta de terceras ni el impuesto sobre las ventas.

    p.mb-3 La entidad reconocerá ingresos por actividades ordinarias procedentes de la venta de inventarios, cuando se cumplan las siguientes condiciones:

    .row.justify-content-center.align-items-center.mt-5
          .col-6.col-md-8.col-lg-6.mb-5
              img(src="@/assets/curso/images/tema3/img_16.svg" alt="", style="width:400px; display:block; margin: 0 auto;")    
          .col-sm.mt-3   
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | La entidad ha transferido al comprador los riesgos y ventajas, derivados de la propiedad de los bienes.
                li
                  i.fas.fa-check
                  | La entidad no conserva ninguna restricción sobre la propiedad y el control de los bienes vendidos.
                li
                  i.fas.fa-check
                  | El importe de los ingresos de actividades ordinarias puede medirse con fiabilidad. 
                li 
                  i.fas.fa-check
                  | Sea probable que la entidad obtenga los beneficios económicos asociados con la transacción. 
                li 
                  i.fas.fa-check
                  | Los costos incurridos, o por incurrir, en relación con la transacción pueden ser medidos con fiabilidad. 
                
    p.mb-3 El impuesto al valor agregado, generado en la operación de venta en actividades ordinarias se medirá sobre la base del precio de venta aceptado por el cliente, en la tarifa establecida por la norma fiscal vigente.

    p.mb-3 En cuanto a los anticipos por retenciones en la fuente sobre los impuestos a la renta, a las ventas y a industria y comercio; que aplique o aplicará el cliente de acuerdo con su condición fiscal, se medirán de forma independiente sobre las bases establecidas por la norma fiscal.

    p.mb-3 A continuación, se muestra un ejercicio de reconocimiento de los ingresos por actividades ordinarias:

    p.mb-3 1. Vende inventarios de contado por un valor de $12.900.000 incluido IVA 19%, menos: retefuente 2,5% y reteica 0,6%.  (60% Gasto de Venta).

    .row.justify-content-center.align-items-center.mb-5
      .col-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th ELE
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center IN
                    td.text-center Venta de inventarios
                    td.text-center 
                    td.text-center 10.840.336 
                  tr.th-4
                    td.text-center PS
                    td.text-center IVA Generado
                    td.text-center 
                    td.text-center 2.059.664 
                  tr.th-3
                    td.text-center AC
                    td.text-center Anticipo Retefuente 2,5%
                    td.text-center 271.008 
                    td.text-center  
                  tr.th-4
                    td.text-center AC
                    td.text-center Anticipo Reteica 0,6%
                    td.text-center 65.042 
                    td.text-center 
                  tr.th-3
                    td.text-center AC
                    td.text-center Cuentas  por cobrar Clientes
                    td.text-center 12.563.950 
                    td.text-center 
                  tr.th-4
                    td.text-center AC
                    td.text-center Cuentas por cobrar Clientes
                    td.text-center 
                    td.text-center 12.563.950 
                  tr.th-3
                    td.text-center AC
                    td.text-center 12.563.950 
                    td.text-center 
                    td.text-center 
                  tr.th-4
                    td.text-center.color-text GA
                    td.text-center.color-text  Gasto de venta
                    td.text-center.color-text  6.504.202 
                    td.text-center 
                  tr.th-3
                    td.text-center.color-text AC
                    td.text-center.color-text  Inventarios para la venta
                    td.text-center 
                    td.text-center.color-text  6.504.202 
                

    p.mb-3 2.  Su cliente le devuelve inventarios por $1.000.000 más IVA. (60% Gasto Devolución de Venta)

    .row.justify-content-center.align-items-center.mb-5
      .col-10
            .tabla-a.color-acento-contenido.mt-5
              table
                thead
                  tr.th-1.text-center
                    th ELE
                    th CUENTA
                    th DEBE
                    th HABER
                tbody
                  tr.th-3
                    td.text-center IN
                    td.text-center Devoluciones en Venta
                    td.text-center 1.000.000 
                    td.text-center 
                  tr.th-4
                    td.text-center PS
                    td.text-center IVA Generado
                    td.text-center 190.000
                    td.text-center 
                  tr.th-3
                    td.text-center AC
                    td.text-center Anticipo Retefuente 2,5%
                    td.text-center 
                    td.text-center 25.000 
                  tr.th-4
                    td.text-center AC
                    td.text-center Anticipo Reteica 0,6%
                    td.text-center 
                    td.text-center 6.000 
                  tr.th-3
                    td.text-center AC
                    td.text-center Efectivo y equivalentes al efectivo
                    td.text-center 
                    td.text-center 1.159.000 
                  tr.th-4
                    td.text-center.color-text AC
                    td.text-center.color-text Gasto de venta
                    td.text-center 
                    td.text-center 600.000 
                  tr.th-3
                    td.text-center.color-text AC
                    td.text-center.color-text Inventarios para la venta
                    td.text-center.color-text 600.000 
                    td.text-center 
    Separador 

    #t_3_3.titulo-segundo
      .h2 3.3  Presentación y revelación    
    
    p.mb-3 Los estados financieros deben reflejar de forma separada los ingresos por operaciones de actividades ordinarias, de aquellos originados por actividades extraordinarias.

    p.mb-3 De igual forma los estados financieros reflejarán por separado aquellas operaciones que disminuyen el valor de ingresos, como es el caso de las devoluciones en ventas.

    p.mb-3 Por otro lado, la entidad revelará en notas a los estados financieros las políticas contables adoptadas para el reconocimiento de los ingresos de actividades ordinarias, mostrándolas de forma separada de aquellas actividades extraordinarias.













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
