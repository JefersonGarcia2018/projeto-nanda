<template>
    <div class="viewDominioQuatro">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioQuatro',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 4
      }
  }
}

</script>