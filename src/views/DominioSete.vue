<template>
    <div class="viewDominioSete">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioSete',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 7
      }
  }
}

</script>