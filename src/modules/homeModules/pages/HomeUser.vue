<template>
  <div>
    <!-- Sección de encabezado con imagen y título -->
    <div class="header-section">
      <div class="image-overlay">
        <img src="https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990267/logos/nhqsptfuorp4dkmutlcm.jpg" alt="Encabezado" class="header-image">
        <div class="green-tint"></div> <!-- Nuevo div para el tinte verde -->
        <div class="text-content">
          <h1 class="company-name">My Garden LLC</h1>
          <p class="subtitle">Servicios de jardinería, mantenimiento y construcción</p>
          <router-link :to="{name: 'services-services'}">
            <button class="explore-button button-succes">Explora nuestros servicios</button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Resto del contenido... -->
    <div class="container">
      <!-- Título "Nuestra empresa" -->
      <h2 class="section-title">Nuestra empresa</h2>

      <!-- Sección de Misión -->
      <div class="mission-section">
        <div class="mission-content">
          <img class="imageHomew" src="https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990490/logos/ftedhdtlugyi9dcg3op9.jpg" alt="Misión">
          <div class="mission-text">
            <h3>Misión</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam laborum dignissimos quod corporis voluptates, perspiciatis aliquid tempora architecto ad quia numquam quisquam optio ipsam delectus, atque odio id earum.
              Quidem, maiores numquam aliquid id quae ea vel? Eaque quas voluptate doloribus et non dolorem, voluptatem praesentium amet delectus aspernatur impedit laborum unde deserunt in exercitationem dolor? Architecto, laudantium repellat?
              <!-- Agrega aquí el texto de 150 palabras para la visión -->
            </p>
          </div>
        </div>

        <!-- Sección de Visión -->
        <div class="vision-content">
          <div class="vision-text">
            <h3>Visión</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam laborum dignissimos quod corporis voluptates, perspiciatis aliquid tempora architecto ad quia numquam quisquam optio ipsam delectus, atque odio id earum.
              Quidem, maiores numquam aliquid id quae ea vel? Eaque quas voluptate doloribus et non dolorem, voluptatem praesentium amet delectus aspernatur impedit laborum unde deserunt in exercitationem dolor? Architecto, laudantium repellat?
              <!-- Agrega aquí el texto de 150 palabras para la visión -->
            </p>
          </div>
          <img src="https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990498/logos/p3xyl9xetmmg6vlamwkt.jpg" class="imageHomew" alt="Visión">
        </div>
      </div>

        <!-- Título "Proyectos" -->
        <!-- Título "Proyectos" -->
      <h2>Proyectos</h2>
      <div class="swiper-container">
        <!-- Contenedor para las flechas de navegación -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <Swiper :options="swiperOptions">
          <SwiperSlide v-for="proyecto in proyectos" :key="proyecto.descripcion" style="max-width: 400px;">
            <ProyectsCard :proyecto="proyecto" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Título "Comentarios" -->
      <h2>Comentarios</h2>
      <div class="swiper-container">
        <!-- Contenedor para las flechas de navegación -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <Swiper :options="swiperOptions">
          <SwiperSlide v-for="comentario in Comentarios" :key="comentario.userName" style="max-width: 400px;">
            <ComentsUserCard
              :userAvatar="comentario.userAvatar"
              :userName="comentario.userName"
              :commentText="comentario.commentText"
              :rating="comentario.rating"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
    </div>
    
</template>

<script>
import { defineAsyncComponent } from 'vue'

import {Swiper, SwiperSlide} from 'swiper/vue'

import "swiper/css"
export default {
  data() {
    return {
      proyectos: [
        {img: 'https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990498/logos/p3xyl9xetmmg6vlamwkt.jpg', descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore impedit temporibus minima dolor? Totam obcaecati porro hic adipisci molestiae amet, delectus animi nisi omnis maiores, reiciendis officia id minima!'},
        {img: 'https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990498/logos/p3xyl9xetmmg6vlamwkt.jpg', descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore impedit temporibus minima dolor? Totam obcaecati porro hic adipisci molestiae amet, delectus animi nisi omnis maiores, reiciendis officia id minima!'},
        {img: 'https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990498/logos/p3xyl9xetmmg6vlamwkt.jpg', descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore impedit temporibus minima dolor? Totam obcaecati porro hic adipisci molestiae amet, delectus animi nisi omnis maiores, reiciendis officia id minima!'},
        {img: 'https://res.cloudinary.com/dui4i9f4e/image/upload/v1697990498/logos/p3xyl9xetmmg6vlamwkt.jpg', descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore impedit temporibus minima dolor? Totam obcaecati porro hic adipisci molestiae amet, delectus animi nisi omnis maiores, reiciendis officia id minima!'},
      ],
      Comentarios : [
        {
          userAvatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
          userName: 'Rodrigo Del Angel Gerardo',
          commentText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure doloremque omnis, consequuntur voluptate laborum aspernatur excepturi velit aliquid suscipit! Maxime laudantium molestiae',
          rating: 4, 
        },
        {
          userAvatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
          userName: 'Avelina Hernandez Hernandez',
          commentText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure doloremque omnis, consequuntur voluptate laborum aspernatur excepturi velit aliquid suscipit! Maxime laudantium molestiae',
          rating: 5, 
        },
        {
          userAvatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
          userName: 'Juan perez Hernandez Hernandez',
          commentText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure doloremque omnis, consequuntur voluptate laborum aspernatur excepturi velit aliquid suscipit! Maxime laudantium molestiae',
          rating: 3, 
        },
        {
          userAvatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
          userName: 'Josue Hernandez Guzman',
          commentText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure doloremque omnis, consequuntur voluptate laborum aspernatur excepturi velit aliquid suscipit! Maxime laudantium molestiae',
          rating: 4, 
        }
      ],
      swiperOptions: {
        slidesPerView: 3, // Número de diapositivas visibles
        loop: true, // Habilita el bucle infinito
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Otras opciones de Swiper...
      },
    }
  },
  components: {
      ProyectsCard: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/ProyectsCard.vue')),
      Swiper,
      SwiperSlide,
      ComentsUserCard: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/ComentsUserCard.vue')),
  }
};
</script>

<style scoped>
.header-section {
  position: relative;
}

.image-overlay {
  position: relative;
  height: 500px;
}


.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
.imageHomew {
  height: 330px;
  margin: 80px 80px 10px 80px;
  border-radius: 15px;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
}


.subtitle {
  font-size: 18px;
  margin-top: 10px;
}

.explore-button {
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.explore-button:hover {
  background-color: #1c882f;
}

.section-title {
  text-align: center;
  margin: 20px 0;
}

.mission-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.mission-content,
.vision-content {
  display: flex;
  align-items: center;
}

.mission-text,
.vision-text {
  flex: 1;
}

.mission-text h3,
.vision-text h3 {
  font-size: 24px;
}

.swiper {
  width: 100%;
  height: 500px;
}
.swiper-wrapper {
  display: flex;
  transition: transform 0.3s; /* Agrega una transición suave al desplazamiento */
}
.swiper-slide {
  flex: 0 0 100%; /* Evita que los elementos del carrusel se desborden horizontalmente */
  max-width: 400px; /* Establece el ancho máximo de cada elemento del carrusel */
  margin: 0 10px; /* Añade un margen entre los elementos para una apariencia espaciada */
}
/* Estilos de las imágenes, tamaños y otros estilos según tu preferencia */
</style>