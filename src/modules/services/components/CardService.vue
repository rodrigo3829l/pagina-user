<template>
  <div class="container mt-4">
    <div class="service-card row">
      <div class="service-image col-md-4">
        <img :src="servicio.image" alt="Servicio" class="img-fluid">
      </div>
      <div class="service-info col-md-5">
        <h3 class="title">{{ servicio.name }}</h3>
        <p class="description">{{ servicio.description }}</p>
      </div>
      <div class="service-rating col-md-3 text-center">
        <div class="stars">
          <span v-for="star in 5" :key="star" :class="{ 'filled-star': star <= servicio.rating }">★</span>
        </div>
        <router-link :to="{ name: 'services-Schedule' }">
          <button class="btn button-action">Agendar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    servicio: Object,
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  margin: 0;
}

.description {
  font-size: 18px;
  margin: 10px 0;
}

.stars {
  font-size: 30px;
  margin: 10px 0;
}

.filled-star {
  color: #FFD700;
}
</style>
