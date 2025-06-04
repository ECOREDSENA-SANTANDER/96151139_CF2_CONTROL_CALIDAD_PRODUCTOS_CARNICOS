<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Factores de contaminación de la carne en la cadena alimentaria

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/1.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p A lo largo de la cadena alimentaria, la carne puede estar expuesta a diversos factores que comprometen su calidad e inocuidad. A continuación, se explican algunos de los principales agentes contaminantes presentes desde la etapa de producción primaria, así como las medidas necesarias para su control efectivo.

    .row.bgc-2.align-items-center.p-3.p-lg-5.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-7
                  h4 Producción primaria
                  p En esta etapa inicial, la carne puede contaminarse tanto por agentes químicos como biológicos, los cuales representan riesgos significativos para la salud pública si no se aplican buenas prácticas pecuarias y controles veterinarios adecuados.
                .col-lg-4.col-md-6.col-9
                  img(src='@/assets/curso/temas/t2/slide1.png', alt='')
              .row.justify-content-center.align-items-center
                .col-lg-7
                  h4 Contaminación química
                  p Durante la crianza de los animales, pueden incorporarse sustancias químicas que persisten en los tejidos cárnicos. Los principales contaminantes químicos en esta fase son:
                  ul.lista-ul--color.fa-lista
                    li.mb-1
                      i.fas.fa-check-circle
                      | Residuos de medicamentos veterinarios (antibióticos, antiparasitarios).
                    li.mb-1
                      i.fas.fa-check-circle
                      | Hormonas y otros fármacos utilizados como promotores del crecimiento.
                    li.mb-1
                      i.fas.fa-check-circle
                      | Dioxinas, plaguicidas e insecticidas presentes en el ambiente o los alimentos del animal.
                    li.mb-1
                      i.fas.fa-check-circle
                      | Metales pesados (como plomo, mercurio o cadmio).
                    li
                      i.fas.fa-check-circle
                      | Nitrosaminas, compuestos potencialmente cancerígenos formados a partir de nitratos o nitritos mal gestionados.
                .col-lg-4.col-md-6.col-9
                  img(src='@/assets/curso/temas/t2/slide2.png', alt='')
              .row.justify-content-center.align-items-center
                .col-lg-7
                  h4 Contaminación biológica
                  p La carne es un alimento altamente perecedero debido a su elevado contenido de nutrientes, los cuales favorecen el crecimiento de microorganismos patógenos y alterantes, esta contaminación puede originarse en el propio animal o transmitirse por medio de vectores como roedores, moscas, utensilios contaminados, agua, forrajes, manipuladores o el ambiente en general.                                   
                .col-lg-4.col-md-6.col-9
                  img(src='@/assets/curso/temas/t2/slide3.png', alt='')

    p Entre los microorganismos más comunes asociados a la carne se encuentran:
    ul.lista-ul--color.fa-lista
      li.mb-0
        i.fas.fa-check-circle
        span.mb-0.fst-italic Salmonella spp.
      li.mb-0
        i.fas.fa-check-circle
        span.mb-0 #[em Escherichia colispan] (especialmente la cepa O157:H7).
      li.mb-0
        i.fas.fa-check-circle
        span.mb-0.fst-italic Listeria monocytogenes.
      li.mb-0
        i.fas.fa-check-circle
        span.mb-0.fst-italic Clostridium perfringens.
      li.mb-0
        i.fas.fa-check-circle
        span.mb-0.fst-italic Staphylococcus aureus.
      li
        i.fas.fa-check-circle
        span.mb-0 Hongos Levaduras contaminantes en condiciones inadecuadas de almacenamiento.
    p.mb-5 La aplicación de medidas de bioseguridad, vigilancia veterinaria, higiene del entorno y control de insumos es fundamental para prevenir estas contaminaciones desde el origen.    


    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-3.col-md-auto
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        .col-9.col-md-auto
          h3.mb-0.text-white Agentes patógenos en la producción primaria de carne

    p.mb-4 Durante la etapa de producción primaria, la carne puede contaminarse con diversos agentes patógenos, tanto parásitos como bacterias, que representan un riesgo para la salud del consumidor si no se implementan medidas de prevención adecuadas.

    .bg1.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-4
          h5 Parásitos comunes asociados a la carne:
          ul.lista-ul--color.fa-lista
            li.mb-1
              i.fas.fa-check-circle
              span.mb-0.fst-italic Trichinella spiralis.
            li.mb-1
              i.fas.fa-check-circle
              span.mb-0 #[em Taenia saginata] (conocida como “gusano de la carne de res”).
            li.mb-1
              i.fas.fa-check-circle
              span.mb-0 #[em Taenia solium] (gusano de la carne de cerdo).
            li.mb-1
              i.fas.fa-check-circle
              span.mb-0.fst-italic Giardia duodenalis.
            li
              i.fas.fa-check-circle
              span.mb-0.fst-italic Toxoplasma gondii.
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.svg', alt='')
        .col-lg-4
          h5 Bacterias frecuentemente encontradas en la carne:
          ul.lista-ul--color.fa-lista
            li
              i.fas.fa-check-circle
              span.mb-0.fst-italic Campylobacter spp.
            li
              i.fas.fa-check-circle
              span.mb-0 #[em Escherichia coli] (E. coli).
            li
              i.fas.fa-check-circle
              span.mb-0.fst-italic Salmonella spp.
            li
              i.fas.fa-check-circle
              span.mb-0.fst-italic Listeria monocytogenes.

    .row.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        p Medidas de control para prevenir la contaminación en la producción primaria:
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.fw-bold 1
            span.mb-0 Implementar campañas de saneamiento en las unidades ganaderas para reducir la carga microbiana y parasitaria.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold 2
            span.mb-0 Garantizar la higiene en la manipulación y almacenamiento de forrajes y pastos, evitando su contaminación con heces, roedores u otros vectores.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold 3
            span.mb-0 Aplicar de manera constante las buenas prácticas ganaderas (BPG), incluyendo el control sanitario, la trazabilidad y el bienestar animal.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold 4
            span.mb-0 Supervisar el manejo y calidad de los ensilajes, ya que un mal proceso de fermentación puede generar micotoxinas o favorecer el crecimiento microbiano.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold 5
            span.mb-0 Utilizar medicamentos veterinarios únicamente bajo prescripción profesional, respetando las dosis y los períodos de retiro antes del sacrificio.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold 6
            span.mb-0 Realizar el transporte al matadero de forma higiénica, segura y humanitaria, minimizando el estrés en los animales, ya que este influye directamente en la calidad microbiológica y fisicoquímica de la canal.
      .col-lg-6.col-md-7.col-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/3.png', alt='')


</template>

<script>
export default {
  name: 'Tema2',
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
