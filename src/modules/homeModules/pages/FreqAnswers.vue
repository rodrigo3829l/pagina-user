<template>
  <div class="faq-section">
    <h2 class="section-title">Preguntas Frecuentes</h2>
    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-content">
          <h3 class="faq-question">¿Cuáles son los servicios de diseño de jardines que ofrecen?</h3>
          <p class="faq-answer">Ofrecemos servicios de diseño de jardines personalizados, incluyendo planificación, selección de plantas, paisajismo y creación de áreas temáticas.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-content">
          <h3 class="faq-question">¿Cuál es el costo promedio del mantenimiento de jardines?</h3>
          <p class="faq-answer">El costo del mantenimiento de jardines varía según el tamaño y las necesidades del jardín. Contáctanos para un presupuesto personalizado.</p>
        </div>
      </div>
      <div class = "faq-item">
        <div class="faq-content">
          <h3 class="faq-question">¿Ofrecen servicios de instalación de sistemas de riego?</h3>
          <p class="faq-answer">Sí, ofrecemos servicios profesionales de instalación y mantenimiento de sistemas de riego para mantener sus plantas bien regadas.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-content">
          <h3 class="faq-question">¿Cómo puedo pagar por sus servicios?</h3>
          <p class="faq-answer">Aceptamos varios métodos de pago, incluyendo efectivo, tarjetas de crédito y transferencias bancarias. Contáctanos para más información.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-content">
          <h3 class="faq-question">¿Ofrecen contratos de mantenimiento a largo plazo?</h3>
          <p class="faq-answer">Sí, ofrecemos contratos de mantenimiento a largo plazo para asegurar que su jardín se mantenga en óptimas condiciones durante todo el año.</p>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-content">
          <h3 class="faq-question">¿Cuál es su política de garantía?</h3>
          <p class="faq-answer">Respaldamos nuestros servicios con una garantía de satisfacción. Si no está satisfecho, haremos todo lo posible para resolver cualquier problema.</p>
        </div>
      </div>
      <!-- Agrega más preguntas y respuestas aquí -->
    </div>
  </div>
</template>

<style scoped>
.faq-section {
  text-align: center;
  padding: 40px 0; /* Agrega márgenes superior e inferior */
}

.faq-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto; /* Centra el contenido */
  padding: 20px; /* Agrega márgenes alrededor del contenido */
  border: 0.1px solid #3E7347; /* Agrega un borde con color */
  border-radius: 15px; /* Agrega esquinas redondeadas */
}

.faq-item {
  margin: 20px 0; /* Agrega espacio entre preguntas y respuestas */
  background-color: #FFFFFF; /* Fondo de los elementos de FAQ */
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Agrega una ligera sombra */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.faq-content {
  width: 100%; /* Asegura que el contenido ocupe todo el ancho del elemento */
}

.faq-question {
  font-size: 20px; /* Aumenta el tamaño de la pregunta */
  font-weight: bold;
}

.faq-answer {
  font-size: 16px;
}
</style>
