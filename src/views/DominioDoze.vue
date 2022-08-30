<template>
    <div class="viewDominioDoze">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioDoze',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 12
      }
  }
}

</script>