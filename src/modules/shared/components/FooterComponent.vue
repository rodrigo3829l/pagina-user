<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="company-info">
            <h3 class="footer-title">My Garden LLC</h3>
            <p class="footer-description">Servicios de jardinería, mantenimiento y construcción</p>
            <ul class="contact-list list-unstyled abn">
              <li><router-link class="text-white" :to="{name: 'privacity'}">Politicas de privacidad</router-link></li> 
              <li><router-link class="text-white" :to="{name: 'cookies'}">Politicas de cookies</router-link></li> 
              <li><router-link class="text-white" :to="{name: 'terms'}">Terminso y condiciones</router-link></li> 
              <li><router-link class="text-white" :to="{name: 'bina'}">Datos de la bina</router-link></li> 
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <h4 class="footer-title">Nuestro Horario</h4>
          <ul class="office-hours list-unstyled">
            <li>Lunes - Viernes: 9:00 AM - 5:00 PM</li>
            <li>Sábado: 10:00 AM - 2:00 PM</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footer-title">Contacto</h4>
          <ul class="contact-list list-unstyled">
            <li><i class="fa fa-map-marker-alt"></i> Dirección: 123 Calle Principal, Ciudad</li>
            <li><i class="fa fa-phone"></i> Teléfono: +001 (470) 234-1526</li>
            <li><i class="fa fa-envelope"></i> Email: imygarden1526@gmail.com</li>
          </ul>
        </div>
        <div class="col-md-3">
          <div class="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.721079772485!2d-83.97655204990384!3d34.12066818059001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5930a75dfedaf%3A0xee111c14c9f9e19d!2s2879%20Pebblebrook%20Dr%2C%20Buford%2C%20GA%2030518%2C%20EE.%20UU.!5e0!3m2!1sen!2sus!4v1646111597671!5m2!1sen!2sus"
              width="100%"
              height="200"
              style="border: 0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="social-icons text-center my-4">
            <a href="#" class="social-link text-white mx-2"><i class="fa fa-facebook"></i></a>
            <a href="#" class="social-link text-white mx-2"><i class="fa fa-twitter"></i></a>
            <a href="#" class="social-link text-white mx-2"><i class="fa fa-instagram"></i></a>
            <a href="#" class="social-link text-white mx-2"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.social-link{
  font-size: 30px;
}
</style>
