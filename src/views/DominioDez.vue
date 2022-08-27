<template>
    <div class="viewDominioDez">
      <conteudo-central :objDominio="objDominio" :arrayClasses="arrayClasses" />
    </div>
</template>

<script>
// @ is an alias to /src
import { http } from "@/http/configuracao.js";
import ConteudoCentral from '@/components/ConteudoCentral.vue'

export default {
  name: 'ViewDominioDez',
  components:{ConteudoCentral},
  data() {
      return {
        arrayClasses: [],
        objDominio: {},
      }
  },

  methods: {
    getDados(dados){
      this.arrayClasses = dados[0].arrayClasses;
      this.objDominio = dados[0].arrayDominio[0]; 
    },
  },

  mounted() {
   http.get("/db_Dominios/Dominio10_NANDA_2018_2020.json")
        .then( (dado) => (  this.getDados(dado.data) ) );
  },
}
</script>