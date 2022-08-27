<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
      Diagnosticos de Enfermagem
      </router-link>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <input class="form-control w-100" type="text" placeholder="Pesquisar" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Pesquisar</a>
        </li>
      </ul>
    </nav>
</template>

<script>

export default {
  name: 'NavbarComponent'
}
</script>
