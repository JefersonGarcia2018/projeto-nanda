<template>
      <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div class="row">
          <div class="col-12 col-sm-4">
            <h1 class="h4 text-center">{{tituloDominio}} </h1>
          </div>
          <div class="col-12 col-sm-8">
            <h1 class="h3 text-center text-info">{{descricaoDominio}}</h1>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: 'ManSlot',
  props: ['tituloDominio', 'descricaoDominio']
}
</script>