<template>
  <div id="app">

    <navbar-component />

    <div class="container-fluid">
      <div class="row">

        <sidebar-component />

        <main role="main" class="col-md-12 ml-sm-auto col-lg-10 px-md-4">
          <router-view/>
        </main>

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,SidebarComponent
  }
}
</script>

<style>

</style>
