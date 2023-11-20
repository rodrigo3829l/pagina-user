<template>
  <div class="container">
    <div class="card">
      <div class="card-header bg-succes text-white">
        <!-- Barra de progreso en forma de círculos -->
        <div class="progress">
          <div class="progress-circle">1</div>
          <div class="progress-line"></div>
          <div class="progress-circle">2</div>
          <div class="progress-line"></div>
          <div class="progress-circle current">3</div>
        </div>
      </div>
      <div class="card-body">
        <!-- Formulario de registro - Sección 3: Datos de Usuario -->
        <form>
          <div class="registration-section">
            <h3>Sección 3: Datos de Usuario</h3>
            <div class="mb-3">
              <label for="userName" class="form-label">Nombre de Usuario</label>
              <input type="text" class="form-control" id="userName" v-model="formData.userName" placeholder="Ingrese su nombre de usuario" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" required placeholder="Ingrese su correo electronico">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" v-model="formData.password" required placeholder="Ingrese su contraseña">
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
              <input type="password" class="form-control" id="confirmPassword" v-model="formData.confirmPassword" required placeholder="Confirme su contraseña">
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <RouterLink :to="{ name: 'login-login' }">
          <button class="btn button-danger">Cancelar</button>
        </RouterLink>
        <RouterLink :to="{ name: 'profile-profile' }">
          <button class="btn button-succes">Continuar</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fechaNacimiento: '',
        sexo: 'masculino',
        ciudad: '',
        colonia: '',
        calle: '',
        numeroCasa: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Envía los datos del formulario de datos personales
      console.log(this.formData);
    },
    submitLocation() {
      // Envía los datos del formulario de datos de ubicación
      console.log(this.formData);
    },
    submitUser() {
      // Envía los datos del formulario de datos de usuario
      console.log(this.formData);
    },
    nextSection() {
      // Implementa la lógica para avanzar a la siguiente sección
    },
  },
};
</script>

<style scoped>
.card {
  margin: 50px auto;
  max-width: 600px;
}
.card-header{
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
  background-color: #ccc; /* Color de fondo de los círculos */
  border-radius: 50%;
  font-weight: bold;
}

.progress-circle.current {
  background-color: #ff0000; /* Color de fondo del círculo actual */
  color: #fff; /* Color del número en el círculo actual */
}

.progress-line {
  flex: 1;
  height: 2px;
  background-color: #ccc; /* Color de la línea */
}

.registration-section {
  margin-bottom: 20px;
}
</style>
