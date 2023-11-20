<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    NavBar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/NavBar')),
    FooterComponent: defineAsyncComponent(() => import(/* webpackChunkName: "Footer" */ '@/modules/shared/components/FooterComponent')),
  }
}
</script>

<style scoped>
/* Establece un z-index alto para el NavBar para que se muestre encima del contenido */
#navBar {
  z-index: 1000;
}

/* Agrega otros estilos según sea necesario */
</style>
