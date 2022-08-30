<template>
    <div class="viewDominioTres">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioTres',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 3
      }
  }
}

</script>