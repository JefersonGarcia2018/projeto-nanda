<template>
    <div class="viewDominioCinco">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioCinco',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 5
      }
  }
}

</script>