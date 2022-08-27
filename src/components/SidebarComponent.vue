<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioUm">
              <strong class="text-danger">Domínio 1</strong> Promoção da saúde
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioDois">
              <strong class="text-danger">Domínio 2</strong> Nutrição
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioTres">
              <strong class="text-danger">Domínio 3</strong> Eliminação e troca
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioQuatro">
              <strong class="text-danger">Domínio 4</strong> Atividade/repouso
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioCinco">
              <strong class="text-danger">Domínio 5</strong> Percepção/cognição
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioSeis">
              <strong class="text-danger">Domínio 6</strong> Autopercepção
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioSete">
              <strong class="text-danger">Domínio 7</strong> Papéis e relacionamentos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioOito">
              <strong class="text-danger">Domínio 8</strong> Sexualidade
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioNove">
              <strong class="text-danger">Domínio 9</strong> Enfrentamento/tolerância ao estresse
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioDez">
              <strong class="text-danger">Domínio 10</strong> Princípios da vida
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioOnze">
              <strong class="text-danger">Domínio 11</strong> Segurança/proteção
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioDoze">
              <strong class="text-danger">Domínio 12</strong> Conforto
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/DominioTreze">
              <strong class="text-danger">Domínio 13</strong> Crescimento/desenvolvimento
            </router-link>
          </li>
        </ul>

      </div>
    </nav>
</template>

<script>
export default {
  name: 'SidebarMenu'
}
</script>

<style scoped>
.active {
  background: #ccc;
}
</style>