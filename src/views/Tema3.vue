<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Microorganismos alterantes en los embutido

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Los embutidos se elaboran a partir de mezclas de carne, grasa, condimentos y aditivos, lo que implica el uso de múltiples ingredientes que pueden introducir microorganismos si no se manipulan bajo condiciones higiénicas adecuadas. Cuando estos productos se almacenan en ambientes con alta humedad relativa y temperaturas inadecuadas, son susceptibles a la proliferación de bacterias y levaduras, lo que puede comprometer su calidad y seguridad.
        p En general, los mohos tienden a desarrollarse en la superficie externa de embutidos con corteza seca o expuesta al ambiente, especialmente si no cuentan con una protección adecuada durante el almacenamiento, las alteraciones más comunes que pueden presentarse en los embutidos son de tres tipos:
      .col-lg-5.col-md-9.col-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/1.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-9(data-aos="fade-left")
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta bg-color-primario")
          .row.justify-content-center.text-white(titulo="Alteración bacteriana")
            .col-md-11.col-12
              p.mb-0 Causada por bacterias contaminantes que pueden generar olores desagradables, cambios en la textura y deterioro acelerado del producto.  
          .row.justify-content-center.text-white(titulo="Alteración por levaduras")
            .col-md-11.col-12
              p.mb-0 Afecta el sabor, produce fermentaciones indeseadas y genera gas, hinchazón o ablandamiento anormal.
          .row.justify-content-center.text-white(titulo="Alteración por mohos")
            .col-md-11.col-12
              p.mb-0 Generalmente visible en la superficie, puede cambiar el color del embutido y, en algunos casos, producir micotoxinas si no se controla adecuadamente.
        p El control de estos riesgos depende de una adecuada higiene en la elaboración, almacenamiento en condiciones controladas de temperatura y humedad, y aplicación de buenas prácticas de manufactura (BPM); la alteración de estos alimentos es por lo general de tres tipos:      


    //.titulo-sexto.color-acento-contenido
      h5 Figura 2. 
      span Alteraciones de los alimentos

    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t3/tarj1.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Viscosidad
            p.mb-0 Se manifiesta en la superficie externa de las tripas donde se embute la carne molida o picada. Esta alteración se produce por la actividad bacteriana que genera una textura pegajosa y brillante, especialmente en condiciones de almacenamiento inadecuado.
      .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t3/tarj2.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Agriado
            p.mb-0 Ocurre en el interior de las tripas, donde se fermenta la carne debido al crecimiento de bacterias ácido-lácticas como #[em lactobacillus] y #[em enterococcus]. Esta alteración es favorecida por la presencia de azúcares fermentables como lactosa, utilizados comúnmente como ingredientes en la formulación.
      .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.tarjeta
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t3/tarj3.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Enverdecimiento
            p.mb-0 Es una alteración que aparece en productos cárnicos después de haber sido conservados adecuadamente y luego expuestos al aire. El cambio de color se debe al desarrollo de microorganismos como #[em lactobacillus viridescens, leuconostoc spp] y #[em enterococcus spp], los cuales interactúan con los pigmentos naturales de la carne. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-7.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/1.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p Los microorganismos desempeñan un papel fundamental en la calidad e inocuidad de los productos cárnicos. Si bien algunos son utilizados de forma controlada en procesos de fermentación o maduración, la mayoría representan un riesgo sanitario cuando se desarrollan de manera no deseada durante la producción, almacenamiento o comercialización, su presencia puede provocar alteraciones en el sabor, olor, textura y color de la carne, además de generar enfermedades transmitidas por alimentos. Por ello, es esencial conocer los principales tipos de microorganismos involucrados y las condiciones que favorecen su crecimiento, con el fin de implementar medidas preventivas eficaces a lo largo de la cadena alimentaria.

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-7.pe-lg-0
        .p-4.px-lg-5.bg5.h-100
          h4.bg-color-acento-contenido.text-white.px-2.w-fit Microorganismos alterantes en carnes secas
          p.mb-0 La estabilidad microbiológica de las carnes secas está directamente relacionada con su actividad de agua (aW). Cuando estas carnes absorben humedad del entorno durante el almacenamiento, pueden desarrollarse mohos y levaduras, afectando su textura, sabor y aspecto visual. Un control estricto de la humedad relativa del ambiente y del empaque es clave para prevenir su alteración.
      .col-lg-5.ps-lg-0.grad-t3--1
        img(src="@/assets/curso/temas/t3/3.jpg", alt="")

    .row.justify-content-center(data-aos="fade")
      .col-lg-5.pe-lg-0.grad-t3--2
        img(src="@/assets/curso/temas/t3/4.jpg", alt="")
      .col-lg-7.ps-lg-0
        .p-4.px-lg-5.bg5.h-100
          h4.bg-color-acento-contenido.text-white.px-2.w-fit Microorganismos alterantes en carnes curadas
          p.mb-0 En las carnes curadas, la contaminación bacteriana puede surgir en las primeras etapas del proceso, antes de que el producto alcance niveles bajos de PH y actividad de agua que impidan el crecimiento microbiano, el desarrollo de mohos sobre el producto final no solo afecta su apariencia, sino que también puede generar olores y sabores indeseables; para evitarlo, se recomienda el empaque al vacío o el uso de atmósferas modificadas. En productos como los jamones crudos, la falta de concentración adecuada de sal y temperaturas de curado insuficientemente bajas pueden favorecer el desarrollo de patógenos peligrosos como #[em clostridium botulinum] y diversas enterobacterias, estas condiciones subóptimas pueden comprometer seriamente la seguridad del alimento.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
