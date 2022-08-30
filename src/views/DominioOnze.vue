<template>
    <div class="viewDominioOnze">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioOnze',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 11
      }
  }
}

</script>