<template>
    <div class="viewDominioOito">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioOito',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 8
      }
  }
}

</script>