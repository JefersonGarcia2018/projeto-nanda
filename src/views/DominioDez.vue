<template>
    <div class="viewDominioDez">
      <conteudo-central :numDominio="numDominio" />
    </div>
</template>

<script>
// @ is an alias to /src
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioDez',
  components:{ConteudoCentral},
  
  data() {
      return {
        numDominio: 10
      }
  }
}

</script>