<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Instrumentos financieros – Cuentas por pagar

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qA4BYCJMyKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           

    separador    

    #t_2_1.titulo-segundo
      h2 2.1 Política contable

    p.mb-3 Dentro del manual de políticas contables se deben establecer los lineamientos para la medición, reconocimiento, presentación y revelación de las cuentas comerciales por pagar a proveedores como un instrumento financiero.

    p.mb-3 La NIC 8 (2018), determina que las políticas contables son los principios, bases, acuerdos, reglas y procedimientos específicos adoptados por la entidad en la elaboración y presentación de sus estados financieros. 

    p.mb-3 Un cambio en una estimación contable es un ajuste en el importe en libros de un activo o de un pasivo, o en el importe del consumo periódico de un activo, que se produce tras la evaluación de la situación actual del elemento, así como de los beneficios futuros esperados y de las obligaciones asociadas con los activos y pasivos correspondientes. 

    p.mb-3La La aplicación prospectiva de un cambio en una política contable y del reconocimiento del efecto de un cambio en una estimación contable consiste, respectivamente, en: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/img_13.svg', alt="", style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta
            .p-4              
              p La aplicación de la nueva política contable a las transacciones, otros sucesos y condiciones ocurridos tras la fecha en que se cambió la política.

      .col-md-7.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema2/img_14.svg', alt="", style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta
            .p-4              
              p El reconocimiento del efecto del cambio en la estimación contable para el período corriente y los períodos futuros afectados por dicho cambio.

    p Una entidad seleccionará y aplicará sus políticas contables de manera uniforme para transacciones, otros eventos y condiciones que sean similares.
    p.mb-5 La entidad cambiará una política contable solo si tal cambio:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6
        .cajon.color-custom.p-4
            .col-sm  
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Se requiere por una NIIF
                li.mb-0 
                  i.fas.fa-check
                  | Lleva a que los estados financieros suministren información fiable y más relevante sobre los efectos de las transacciones, que afecten a la situación financiera, el rendimiento financiero o los flujos de efectivo de la entidad.
          
    p.mb-3 De acuerdo con la sección 11 de NIIF para Pymes, (2009), dentro de la elección de la política contable se consideran entre los instrumentos financieros de deuda, las cuentas de origen comercial, pagarés, préstamo por pagar y préstamos de bancos o terceros.

    p.mb-3 La entidad revelará, en el resumen de las políticas contables, la base de medición utilizada para instrumentos financieros de cuentas comerciales por pagar a proveedores, que sean relevantes para la comprensión de los estados financieros.

    Separador 

    #t_2_2.titulo-segundo
      .h2 2.2  Medición y reconocimiento

    p.mb-3 Al reconocer inicialmente un pasivo financiero, la entidad lo medirá al precio de la transacción, incluyendo los costos de transacción. 

    .row.justify-content-center.align-items-center.mt-5
        .col-12.col-lg-6
              p.mb-3  Un acuerdo constituye una transacción de financiación si el pago se aplaza más allá de los términos comerciales normales, por ejemplo, por la venta de bienes sin interés o a una tasa de interés por debajo del mercado. 

              p.mb-3 Si el acuerdo constituye una transacción de financiación, la entidad medirá el activo financiero o pasivo financiero al valor presente de los pagos futuros descontados a una tasa de interés de mercado para un instrumento de deuda similar determinado en el reconocimiento inicial.

              p.mb-3 La sección 11 de NIIF para Pymes (2009), presenta como ejemplo de pasivos financieros, los que se generan a partir de los bienes comprados a un proveedor a crédito a corto plazo, reconociendo una cuenta por pagar al importe debido al proveedor, que normalmente es el precio de la factura.

              p La entidad solo reconocerá un pasivo financiero generado en una operación de compra con proveedores, cuando se hagan efectivas las condiciones contractuales del instrumento financiero.             

        .col-12.col-lg-6
            img(src="@/assets/curso/images/tema2/img_15.svg" alt="", style="width:450px; display:block; margin: 0 auto;")

    p A continuación, se muestra un ejercicio de reconocimiento de las cuentas por pagar como instrumento financiero.

    p 1. Compra a crédito inventarios para la venta por $10.100.000, más IVA 19%  menos retefuente 2,5% y reteica 0,6%.
    .row.justify-content-center.align-items-center
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
                    td.text-center AC
                    td.text-center Inventarios para la venta
                    td.text-center 10.100.000
                    td.text-center 
                  tr.th-4
                    td.text-center PS
                    td.text-center IVA Descontable
                    td.text-center 1.919.000
                    td.text-center 
                  tr.th-3
                    td.text-center PS
                    td.text-center Retefuente 2,5%
                    td.text-center 
                    td.text-center 252.500
                  tr.th-4
                    td.text-center PS
                    td.text-center Reteica 0,6%
                    td.text-center 
                    td.text-center 60.600
                  tr.th-3
                    td.text-center PS
                    td.text-center Cuentas por Pagar - Proveedores
                    td.text-center 
                    td.text-center 11.705.900

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
                    td.text-center PS
                    td.text-center Cuentas por Pagar - Proveedores
                    td.text-center 3.511.770
                    td.text-center 
                  tr.th-4
                    td.text-center AC
                    td.text-center Efectivo
                    td.text-center 
                    td.text-center 3.511.770
    Separador 

    #t_2_3.titulo-segundo
      .h2 2.3 Presentación y revelación

    p.mb-3 Las entidades que solo tienen instrumentos financieros básicos, como las cuentas por pagar de corto plazo a proveedores no tendrán ningún pasivo financiero medido al valor razonable y por lo tanto, en notas a los estados financieros se limitarán a detallar la identificación de los proveedores, las facturas, los vencimientos y los saldos.


   


































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
