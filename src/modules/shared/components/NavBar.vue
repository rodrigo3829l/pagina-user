<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-nav" :class="{ 'bg-green': !scrolled, 'bg-green': scrolled }">
    <div class="container">
      <a class="navbar-brand" href="#">
        <div class="d-flex align-items-center">
          <img src="https://res.cloudinary.com/dui4i9f4e/image/upload/v1697989916/logos/jgkamjqwy97zkb0hfsye.png" alt="Logo" class="logo">
          <div class="d-md-none d-lg-block">
            <p class="company-name">My Garden LLC</p>
            <p class="subtitle">Servicios de Jardinería y más</p>
          </div>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      links: [
        { to: 'home-home', name: 'Home' },
        { to: 'login-login', name: 'Login' },
        { to: 'profile-profile', name: 'Perfil' },
        { to: 'services-services', name: 'Servicios' },
        { to: 'proyects-view', name: 'Proyectos' },
        { to: 'home-contact', name: 'Contacto' },
        { to: 'home-answers', name: 'Preguntas frecuentes' },
      ],
      scrolled: false,
      prevScrollPosition: 0,
    };
  },

  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > this.prevScrollPosition) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }

      this.prevScrollPosition = currentScrollPosition;

      const navBar = document.querySelector('.navbar');

      if (this.scrolled) {
        navBar.classList.add('fixed-nav');
      } else {
        navBar.classList.remove('fixed-nav');
      }
    },
    closeMobileMenu() {
      // Este método cierra el menú en dispositivos móviles
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
.navbar {
  padding: 10px 0;
  transition: background-color 0.5s;
}

.logo {
  width: 120px;
  margin-right: 10px;
}

.company-name {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  color: #efe9e9;
}

.subtitle {
  font-size: 14px;
  margin: 0;
  color: #efe9e9;
}

.bg-transparent {
  background-color: #3E7347;
}

.bg-green {
  background-color: #3E7347;
}

.fixed-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.5s;
}

.nav-link {
  color: #c6c5c5;
  padding: 0.5rem 1rem;
}

.is-active {
  color: #ffffff;
}
</style> -->


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-green">
    <div class="container">
      <a class="navbar-brand" href="#">
        <div class="d-flex align-items-center">
          <img src="https://res.cloudinary.com/dui4i9f4e/image/upload/v1697989916/logos/jgkamjqwy97zkb0hfsye.png" alt="Logo" class="logo">
          <div class="d-md-none d-lg-block">
            <p class="company-name">My Garden LLC</p>
            <p class="subtitle">Servicios de Jardinería y más</p>
          </div>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      links: [
        { to: 'home-home', name: 'Home' },
        { to: 'login-login', name: 'Login' },
        { to: 'profile-profile', name: 'Perfil' },
        { to: 'services-services', name: 'Servicios' },
        { to: 'proyects-view', name: 'Proyectos' },
        { to: 'home-contact', name: 'Contacto' },
        { to: 'home-answers', name: 'Preguntas frecuentes' },
      ],
      scrolled: false,
      prevScrollPosition: 0,
    };
  },

  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
  },
};
</script>

<style scoped>
.navbar {
  padding: 10px 0;
  transition: background-color 0.5s;
}

.logo {
  width: 120px;
  margin-right: 10px;
}

.company-name {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  color: #efe9e9;
}

.subtitle {
  font-size: 14px;
  margin: 0;
  color: #efe9e9;
}

.bg-transparent {
  background-color: #3E7347;
}

.bg-green {
  background-color: #3E7347;
}

.fixed-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.5s;
}

.nav-link {
  color: #c6c5c5;
  padding: 0.5rem 1rem;
}

.is-active {
  color: #ffffff;
}
</style>
