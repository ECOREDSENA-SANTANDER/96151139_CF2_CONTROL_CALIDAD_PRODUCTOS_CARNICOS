<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 La producción de alimentos cárnicos seguros requiere controlar desde las características de la carne hasta su transformación final. Es clave prevenir la contaminación por agentes patógenos en la cadena alimentaria y controlar los microorganismos alterantes, especialmente en embutidos. La higiene en el faenado, la manipulación, el uso correcto de equipos y utensilios, y el cumplimiento de requisitos sanitarios en elaboración, almacenamiento y distribución son esenciales para garantizar productos cárnicos inocuos y de calidad.
    
    .tarjeta.tarjeta--gris.mb-5
      .row.justify-content-center
        .col-lg-11.p-4.pb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Diagrama temático titulado “Más allá del sabor: prevención y seguridad en productos cárnicos”, que organiza en seis columnas los aspectos clave del proceso cárnico: características de la carne, factores de contaminación, microorganismos alterantes, manipulación en el faenado, requisitos higiénicos y prácticas higiénicas en el área de proceso.")
    
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
