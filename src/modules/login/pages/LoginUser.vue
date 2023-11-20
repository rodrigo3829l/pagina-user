<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-header button-succes text-white text-center">
            <h4>Iniciar sesión</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="usuario">Correo o Usuario</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="usuario"
                    placeholder="Ingrese su correo o usuario"
                    required
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-lock"></i></span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    required
                  >
                </div>
              </div>
              <RouterLink :to="{name: 'home-home'}">
                <button type="submit" class="btn button-succes btn-block mt-4">
                Ingresar
              </button>
              </RouterLink>
            </form>
          </div>
          <div class="card-footer bg-light">
            <div class="text-center">
              <RouterLink :to="{name: 'login-personal'}">
                <p class="mb-0">¿No tienes una cuenta? <a href="#" class="">Regístrate</a></p>
              </RouterLink>
              <RouterLink :to="{name: 'login-mail'}">
                <p class="mb-0">¿Olvidaste la contraseña? <a href="#" class="">Recupérala aquí</a></p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><br>
</template>
