<template>
    <div class="viewDominioUm">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioUm',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 1
      }
  }
}

</script>