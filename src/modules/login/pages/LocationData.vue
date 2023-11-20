<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <!-- Barra de progreso en forma de círculos -->
        <div class="progress">
          <div class="progress-circle">1</div>
          <div class="progress-line"></div>
          <div class="progress-circle current">2</div>
          <div class="progress-line"></div>
          <div class="progress-circle">3</div>
        </div>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitLocation">
          <div class="registration-section">
            <h3>Sección 2: Datos de Ubicación</h3>
            <div class="mb-3">
              <label for="ciudad" class="form-label">Ciudad</label>
              <input type="text" class="form-control" id="ciudad" v-model="formData.ciudad" placeholder="Ingrese la ciudad" required>
            </div>
            <div class="mb-3">
              <label for="colonia" class="form-label">Colonia</label>
              <input type="text" class="form-control" id="colonia" v-model="formData.colonia" placeholder="Ingrese su colonia" required>
            </div>
            <div class="mb-3">
              <label for="calle" class="form-label">Calle</label>
              <input type="text" class="form-control" id="calle" v-model="formData.calle" placeholder="Ingrese su calle" required>
            </div>
            <div class="mb-3">
              <label for="numeroCasa" class="form-label">Número de Casa</label>
              <input type="number" class="form-control" id="numeroCasa" v-model="formData.numeroCasa" placeholder="Ingrese su numeor de casa" required>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <router-link :to="{ name: 'login-login' }">
          <button class="btn button-danger">Cancelar</button>
        </router-link>
        <router-link :to="{ name: 'login-userdata' }">
          <button class="btn button-succes">Continuar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        ciudad: '',
        colonia: '',
        calle: '',
        numeroCasa: '',
      },
    };
  },
  methods: {
    submitLocation() {
      // Envía los datos del formulario de datos de ubicación
      console.log(this.formData);
    },
  },
};
</script>
<style scoped>
.card {
  margin: 50px 20px;
  max-width: 600px;
}

.card-header {
  background-color: #3E7347;
}

.progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.progress-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  font-weight: bold;
}

.progress-circle.current {
  background-color: #ff0000;
  color: #fff;
}

.progress-line {
  flex: 1;
  height: 2px;
  background-color: #ccc;
}

.registration-section {
  margin-bottom: 20px;
}

</style>
