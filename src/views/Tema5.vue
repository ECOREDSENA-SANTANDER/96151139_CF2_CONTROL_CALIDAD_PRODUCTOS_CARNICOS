<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-md-0.pb-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Requisitos higiénicos en el proceso de elaboración de productos cárnicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p Las industrias cárnicas pueden clasificarse según el tipo de producto que elaboran, algunas se especializan en productos frescos, otras en productos curados y algunas en productos cocidos, aunque los procesos varían según el tipo de elaboración, todas comparten etapas comunes como la recepción de materias primas, almacenamiento, procesamiento, transporte y distribución del producto terminado, en cada una de estas fases, es fundamental aplicar criterios técnicos y sanitarios que garanticen la calidad e inocuidad del producto final.
        p A continuación, se presentan recomendaciones clave para el manejo de materias primas en el procesamiento de productos cárnicos:
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/2.png', alt='') 
      .col-lg-8.col-md-11(data-aos="fade-left")
        SlyderF.circl-arrow(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-2.w-75.m-auto.mb-3 Verificar el origen de las carnes
            p.text-center.mb-0 Deben ser de alta calidad y proceder de centros de sacrificio autorizados por las autoridades sanitarias competentes.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1 Recepción en condiciones adecuadas
            p.text-center.mb-0 Las materias primas deben recibirse en condiciones higiénicas y de temperatura controlada, para evitar alteraciones o contaminación.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-2.w-75.m-auto.mb-3 Contar con fichas técnicas
            p.text-center.mb-0 Toda materia prima debe estar acompañada de documentación técnica que detalle sus características, condiciones de uso y conservación.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-2.w-75.m-auto.mb-3 Realizar inspección de calidad
            p.text-center.mb-0 Antes de su uso, las materias primas deben ser sometidas a inspecciones visuales y documentales para confirmar que cumplen con los requisitos establecidos en los protocolos de calidad del proceso.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-2.w-75.m-auto.mb-3 Uso adecuado de aditivos
            p.text-center.mb-0 Los aditivos deben estar autorizados por normativas nacionales (como la Resolución 2652 de 2004 en Colombia) y utilizarse únicamente en las concentraciones permitidas para evitar efectos adversos en la salud del consumidor.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-3.w-75.m-auto.mb-3 Descongelación segura
            p.text-center.mb-0 Las materias primas congeladas deben descongelarse con métodos controlados (refrigeración o microondas industriales), evitando la exposición a temperaturas peligrosas. Una vez descongeladas, no deben volver a congelar.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-2.w-75.m-auto.mb-3 Almacenamiento higiénico
            p.text-center.mb-0 Las materias primas e insumos deben almacenarse en condiciones que eviten cualquier riesgo de contaminación, ya sea física, química o biológica.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-3.w-75.m-auto.mb-3 Separación de productos
            p.text-center.mb-0 Es obligatorio almacenar materias primas y productos terminados en áreas diferentes, con el fin de evitar contaminación cruzada.
          .tarjeta.bg-white.p-4.py-lg-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-md-3.col-5.col-4
                img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
            h4.bg-color-acento-contenido.text-center.text-white.py-1.px-3.w-75.m-auto.mb-3 Zonificación adecuada
            p.text-center.mb-0 Las áreas de recepción de materias primas deben estar físicamente separadas de las zonas de producción, garantizando un flujo unidireccional y seguro dentro de la planta.


    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-3.col-md-auto
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        .col-9.col-md-auto
          h3.mb-0.text-white Fabricación de productos cárnicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Las operaciones de fabricación deben cumplir con lo siguiente:
        p Las operaciones de fabricación en la industria cárnica deben desarrollarse bajo estrictos estándares de higiene y control de procesos, especialmente durante las etapas de envasado y almacenamiento, ya que estas son críticas para evitar la proliferación de microorganismos y el deterioro del alimento, para ello, es fundamental mantener condiciones óptimas de humedad relativa, temperatura y pH, que permitan preservar la calidad e inocuidad del producto.
        p Cuando se aplican tratamientos térmicos como la pasteurización o la esterilización, se debe verificar rigurosamente el tiempo y la temperatura de exposición, por ejemplo, la temperatura mínima en el centro del producto debe alcanzar al menos 65 °C para asegurar la destrucción de microorganismos patógenos.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg4.p-4.h-100.d-flex.align-items-center
          p.mb-0 Si se implementan métodos de conservación como la refrigeración, deshidratación, tratamiento térmico o acidificación, es indispensable monitorear continuamente que no existan fluctuaciones de temperatura, ya que estos cambios pueden generar condiciones propicias para la contaminación microbiana o la alteración del producto; tras someter el producto cárnico a un tratamiento térmico, este debe ser enfriado de inmediato, utilizando sistemas que garanticen un rápido descenso de temperatura para evitar el crecimiento de bacterias termófilas o mesófilas.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/4.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/5.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p En procesos como el secado y maduración, es igualmente necesario controlar el tiempo y la temperatura, ya que de ello depende la inhibición del crecimiento microbiano y la correcta fermentación del producto, Además, los productos devueltos al área de proceso por problemas de inocuidad o vencimiento no deben, Bajo ninguna circunstancia se deben envasar nuevamente ni reprocesar los productos, ya que ello representa un riesgo sanitario para el consumidor final y afecta la integridad del sistema de calidad.

    p.mb-5 El cumplimiento de estas medidas no solo responde a exigencias normativas, sino que constituye un pilar fundamental para asegurar alimentos seguros, estables y de alta calidad en toda la cadena de producción.


    .row.bgc-3.align-items-center.p-2.p-md-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-start.mb-4(data-aos="fade-right")
            .subt
              .row.align-items-center
                .col-3.col-md-auto
                  img(src='@/assets/curso/temas/t1/subt.svg', alt='')
                .col-9.col-md-auto
                  h3.mb-0.text-white Almacenamiento, distribución y venta

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Las operaciones de almacenamiento, distribución y venta de productos cárnicos deben cumplir con condiciones estrictas que garanticen la inocuidad, calidad y trazabilidad del alimento, estas etapas son fundamentales para preservar la integridad del producto final hasta que llegue al consumidor.
              p El almacenamiento de productos terminados debe realizarse de manera que se minimice el deterioro y se evite cualquier riesgo sanitario, para ello, es obligatorio llevar registros actualizados que incluyan información sobre el uso previsto, procedencia, fecha de elaboración, ciclo de vida, salidas y control de calidad del producto.
              p Los productos deben ser almacenados en estibas o tarimas sanitarias, manteniendo una separación mínima de 60 cm con respecto a las paredes y una elevación de al menos 15 cm del suelo, lo cual facilita la ventilación, inspección y limpieza de las áreas.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/temas/t5/6.png', alt='')

          .row.justify-content-center.mb-5
            .col-lg-5
              p Los espacios destinados al almacenamiento deben ser de uso exclusivo para alimentos, sin permitir actividades ajenas que comprometan su seguridad, en caso de productos devueltos por vencimiento o no conformidad, se debe destinar un área específica, claramente señalizada, donde se registre la fecha de elaboración, salidas parciales o totales, y destino final, bajo ninguna circunstancia estos productos deben ser reprocesados o nuevamente envasados, ya que representan un riesgo para la salud pública.
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/7.png', alt='')
            .col-lg-4
              p La distribución de productos cárnicos debe realizarse en condiciones sanitarias óptimas, utilizando vehículos habilitados que mantengan las temperaturas de conservación adecuadas según el tipo de producto (refrigerado o congelado), garantizando así la continuidad de la cadena de frío durante todo el trayecto.



</template>

<script>
export default {
  name: 'Tema5',
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
