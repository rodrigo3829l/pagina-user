<template>
  <div class="container">
    
    <div class="contact-card">
      <div class="row align-items-center">
        <div class="col-md-6">
          <!-- Sección de información de contacto -->
          <div class="contact-info">
            <h2 class="mb-4">Información de Contacto</h2>
            <ul class="list-unstyled">
              <li><i class="fas fa-phone fa-lg mr-2"></i> +1 123 456 789</li>
              <li><i class="fas fa-map-marker-alt fa-lg mr-2"></i> 123 Main St, Ciudad, País</li>
              <li><i class="far fa-clock fa-lg mr-2"></i> Lunes a Viernes: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <!-- Sección del formulario de contacto en un Card con sombra -->
          <div class="card shadow">
            <div class="card-body">
              <h2 class="mb-4">Contacto</h2>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                  <label for = "email" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="mb-3">
                  <label for="subject" class="form-label">Asunto</label>
                  <input type="text" class="form-control" id="subject" name="subject" required>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Mensaje</label>
                  <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn form-control button-action">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos personalizados para centrar la información de contacto */
.contact-card {
  text-align: left; /* Alinea el contenido a la izquierda */
}

.contact-info {
  font-size: 18px; /* Aumenta el tamaño de la fuente */
}

.contact-info ul {
  padding: 0; /* Elimina el relleno de la lista no deseado */
}

/* Estilos para los íconos */
.fa-lg {
  font-size: 24px; /* Aumenta el tamaño de los íconos */
}

/* Estilos para centrar el formulario en el Card con sombra */
.card.shadow {
  margin-top: 20px; /* Agrega margen superior para centrar verticalmente */
  margin-bottom: 20px; /* Agrega margen inferior para centrar verticalmente */
}
</style>
