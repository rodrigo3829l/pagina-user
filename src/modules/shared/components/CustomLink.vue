<template>
    <li class="nav-item">
      <router-link
        :to="{ name: link.to }"
        v-slot="{ isActive }"
        @click="closeMobileMenu"
      >
        <a :class="isActive ? 'is-active nav-link' : 'normal-link nav-link'">
          {{ link.name }}
        </a>
      </router-link>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      link: {
        type: Object,
        required: true,
      },
    },
    methods: {
      closeMobileMenu() {
        // Cierra el menú en dispositivos móviles
        const navBar = document.getElementById('navbarNav');
        const toggleButton = document.querySelector('.navbar-toggler');
        if (navBar.classList.contains('show')) {
          navBar.classList.remove('show');
          toggleButton.setAttribute('aria-expanded', 'false');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  a {
    color: #c6c5c5;
  }
  .is-active {
    color: #33d165;
  }
  .normal-link {
    color: #c6c5c5;
  }
  </style>
  