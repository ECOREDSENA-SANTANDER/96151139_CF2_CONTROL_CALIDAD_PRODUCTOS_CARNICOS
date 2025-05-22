<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 La carne como alimento
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          p La carne es un alimento de alto valor nutricional, fundamental en la dieta humana por su aporte significativo de proteínas de alta calidad, hierro, zinc, fósforo y vitaminas del complejo B, especialmente B12. Su valor biológico y digestibilidad la convierten en una fuente eficiente de nutrientes esenciales, no obstante, debido a su composición rica en agua y nutrientes, es altamente perecedera, por lo que requiere un manejo higiénico riguroso desde la producción primaria hasta el consumo para evitar alteraciones microbiológicas y garantizar su inocuidad y calidad.

      .subt.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-3.col-md-auto
            img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          .col-9.col-md-auto
            h3.mb-0.text-white Característica de la carne como alimento

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9(data-aos="fade-right")
          p La carne destaca por su densidad nutricional, siendo una fuente importante de energía y nutrientes esenciales que favorecen el crecimiento, la regeneración celular y el mantenimiento de funciones vitales. Aporta aminoácidos indispensables que el cuerpo no puede sintetizar por sí mismo, además de minerales clave para la oxigenación de los tejidos y el sistema inmunológico, su composición y frescura están directamente relacionadas con su origen, tipo de corte y condiciones de procesamiento, lo que influye en su sabor, textura y vida útil; por ello, es fundamental aplicar buenas prácticas de manejo para preservar su calidad y evitar riesgos para la salud.
        .col-lg-3.col-md-6.col-8(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/2.svg', alt='')

      .subt.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-3.col-md-auto
            img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          .col-9.col-md-auto
            h3.mb-0.text-white Alteraciones de la carne

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7(data-aos="fade-right")
          p Las alteraciones de la carne ocurren como resultado de diversos cambios físicos, químicos y biológicos que afectan su calidad, frescura y seguridad para el consumo. Factores como la temperatura inadecuada, la exposición prolongada a la luz o al aire, y la humedad ambiental favorecen procesos como la oxidación, el enmohecimiento y la putrefacción, estos fenómenos se intensifican cuando no se aplican prácticas adecuadas de conservación y manipulación.
          p Además, la carne puede contaminarse en cualquier punto de la cadena alimentaria, desde la producción primaria hasta el consumo por agentes físicos (como fragmentos de metal o plástico), químicos (residuos de medicamentos veterinarios o productos de limpieza), y biológicos (bacterias, virus, parásitos y hongos). Por esta razón, es fundamental establecer controles rigurosos en cada etapa del proceso y capacitar al personal en buenas prácticas de manipulación, garantizando así la inocuidad y calidad del producto.
        .col-lg-5.col-md-8.col-10(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/3.png', alt='')

      .row.justify-content-center.mb-5(data-aos='fade-down')
        .col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1. 
            span Diagrama de flujo de cómo se puede contaminar la carne
        .col-lg-5.col-md-9.mb-3
          figure
            img(src='@/assets/curso/temas/t1/fig1.svg', alt='Diagrama de flujo que muestra las etapas en las que la carne puede contaminarse: desde la producción primaria, matadero, transporte, sala de despiece o carnicería, hasta el almacenamiento, elaboración, exposición y venta.')
        .col-12
          figcaption Fuente: (Gobierno principado de Asturias, 2005)

      .tarjeta.color-primario.p-3(data-aos='fade')
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/t1/pdf.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-0.ct-1 Para fortalecer el tema anteriormente plasmado, se recomienda revisar el siguiente documento:
              .col-auto.mb-3.mb-sm-0
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Evaluacion_calidad_carnes_frescas.pdf')" target="_blank" type="application/pdf")
                  span Descargar 
                  i.fas.fa-file-download

  </template>

<script>
export default {
  name: 'Tema1',
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
