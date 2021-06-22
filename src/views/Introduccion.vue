<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
        .col-auto
            img(src="@/assets/curso/images/tema1/intro.svg" alt="", style="width:700px; display:inline-block; margin: 0 auto;")

    p.mb-3 En el presente componente podrá conocer los conceptos referentes a los inventarios destinados para la venta, así mismo, le permite aplicar los sistemas de inventarios, sus correspondientes métodos de valuación; al igual que los instrumentos financieros utilizados en operaciones de compra y venta de inventarios, con la respectiva carga impositiva, de acuerdo con la normatividad y políticas contables vigentes.

    p Nota aclaratoria: las tablas que se toman como referencia en los ejemplos de cada uno de los temas desarrollados, elaboradas mediante el programa Excel son derivadas de estos ejercicios, la elaboración es propia del autor del presente componente, por lo tanto, no se numeran y no se establece un nombre específico.



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
