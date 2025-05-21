<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgc-1.align-items-center.p-2.p-md-3
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-9.col-12(data-aos="fade-right")
              p En este componente se abordan las principales características de la carne como alimento, destacando su valor nutricional y su susceptibilidad a alteraciones durante la producción primaria. Se analizan los factores que pueden afectar su calidad, incluyendo la acción de microorganismos alterantes presentes en embutidos, carnes curadas y secas. Asimismo, se describen las etapas del proceso de faenado y las medidas higiénico-sanitarias que deben implementarse para prevenir la contaminación. Finalmente, se presentan las precauciones necesarias en la elaboración de productos cárnicos derivados, con el fin de garantizar su inocuidad y calidad durante el almacenamiento, transporte y consumo.
            .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/intro/1.svg', alt='')

          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-lg-12
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption #[b Video.] 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
