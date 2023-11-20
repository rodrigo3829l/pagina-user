<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <div class="progress">
          <div class="progress-circle current">1</div>
          <div class="progress-line"></div>
          <div class="progress-circle">2</div>
          <div class="progress-line"></div>
          <div class="progress-circle">3</div>
        </div>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="registration-section">
            <h3>Sección 1: Datos Personales</h3>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre o nombres" v-model="formData.nombre" required>
            </div>
            <div class="mb-3">
              <label for="apellidoPaterno" class="form-label">Apellido Paterno</label>
              <input type="text" class="form-control" id="apellidoPaterno" placeholder="Ingrese su apellido paterno" v-model="formData.apellidoPaterno" required>
            </div>
            <div class="mb-3">
              <label for="apellidoMaterno" class="form-label">Apellido Materno</label>
              <input type="text" class="form-control" id="apellidoMaterno" v-model="formData.apellidoMaterno" required placeholder="Ingrese su apellido materno">
            </div>
            <div class="mb-3">
              <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento</label>
              <input type="date" class="form-control" id="fechaNacimiento" v-model="formData.fechaNacimiento" required>
            </div>
            <div class="mb-3">
              <label for="sexo" class="form-label">Seleccione su sexo</label>
              <select class="form-control" id="sexo" v-model="formData.sexo" required>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="service-image">
        <div class="image-input">
          <div class="custom-file">
            <label for="foto-perfil" class="form-label"></label>
            <input type="file" class="custom-file-input" id="imagen" @change="handleImageUpload" accept="image/*">
            <label class="custom-file-label" for="imagen">Seleccione foto de perfil</label>
          </div>
        </div>
        <div class="image-preview">
          <img v-if="formData.imagen" :src="formData.imagen" alt="Imagen seleccionada">
          <div v-else class="image-placeholder">Imagen seleccionada</div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <router-link :to="{ name: 'login-login' }">
          <button class="btn button-danger">Cancelar</button>
        </router-link>
        <router-link :to="{ name: 'login-location' }">
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
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fechaNacimiento: '',
        sexo: 'masculino',
        imagen: null,
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formData.imagen = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 50px auto;
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

.service-image {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 20px 20px 20px;
}

.image-preview {
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.image-preview img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
}

.image-placeholder {
  font-size: 14px;
  color: #666;
  position: absolute;
  z-index: 1;
  user-select: none;
}

.image-input {
  flex-grow: 1;
}
@media screen and (max-width: 992px) {
  .image-preview {
    height: 145px;
  }
}
</style>
