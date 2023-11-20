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
                <label for="usuario">Correo registrado</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="correo"
                    placeholder="Ingrese el correo asociado a la cuenta"
                    required
                  >
                </div>
              </div>
              <RouterLink :to="{name: 'login-confirm'}">
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
