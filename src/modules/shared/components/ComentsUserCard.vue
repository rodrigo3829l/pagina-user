<template>
    <div class="comment">
      <!-- Sección Superior - Imagen y Nombre -->
      <div class="comment-top">
        <img class="user-avatar" :src="userAvatar" alt="Avatar">
        <span class="user-name">{{ userName }}</span>
      </div>
  
      <!-- Sección Central - Comentario -->
      <div class="comment-middle">
        <p>{{ commentText }}</p>
      </div>
  
      <!-- Sección Inferior - Calificación -->
      <div class="comment-bottom">
        <div class="star-ratings">
          <span v-for="star in 5" :key="star" :class="{ 'filled-star': star <= rating }">★</span>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      userAvatar: String,
      userName: String,
      commentText: String,
      rating: Number, // Valor entre 0 y 5 para la calificación
    },
  };
  </script>
  
  <style scoped>
  .comment {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
  }
  
  .comment-top {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-name {
    font-weight: bold;
  }
  
  .comment-middle {
    margin-bottom: 10px;
  }
  
  .comment-middle p {
    font-size: 16px;
  }
  
  .comment-bottom {
    display: flex;
    align-items: center;
  }
  
  .star-ratings {
    font-size: 24px;
    margin-top: 5px;
  }
  
  .filled-star {
    color: #f39c12; /* Color de la estrella rellena */
  }
  </style>
  