<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-header button-succes text-white text-center">
            <h4>correo electronico</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="password">Nueva contraseña</label>
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
              <div class="form-group">
                <label for="password">Confirme contraseña</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-lock"></i></span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Confirme la contraseña"
                    required
                  >
                </div>
              </div>
              <RouterLink :to="{name: 'login-login'}">
                <button type="submit" class="btn button-succes btn-block mt-4">
                Confirmar
              </button>
              </RouterLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div><br>
</template>
