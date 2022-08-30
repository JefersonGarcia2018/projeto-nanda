<template>
    <div class="viewDominioNove">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioNove',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 9
      }
  }
}

</script>