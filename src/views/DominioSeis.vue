<template>
    <div class="viewDominioSeis">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioSeis',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 6
      }
  }
}

</script>