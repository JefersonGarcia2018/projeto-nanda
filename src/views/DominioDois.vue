<template>
    <div class="viewDominioDois">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioDois',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 2
      }
  }
}

</script>