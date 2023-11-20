<template>
  <div class="small-card">
    <img :src="proyecto.img" class="card-image" />
    <div class="card-content">
      <p>
        {{ proyecto.descripcion }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proyecto: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.small-card {
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  /* Añadido para centrar el contenido verticalmente */
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 10px;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 10px;
}

.card-content p {
  font-size: 16px;
  margin: 0; /* Elimina el margen inferior predeterminado */
}
</style>
