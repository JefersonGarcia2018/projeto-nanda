<template>
    <div class="viewDominioTreze">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioTreze',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 13
      }
  }
}

</script>