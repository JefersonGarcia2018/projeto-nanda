<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
      Diagnosticos de Enfermagem
      </router-link>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <b-form v-if="desabilitar == false" class="w-100" @submit="onSubmit">
      <input class="form-control w-100" v-model="form.itemPesquisa" type="text" placeholder="Pesquisar Diagnóstico" aria-label="Search" required>
      </b-form>
      <b-form v-else class="w-100" @submit="onSubmit">
      <div class="ml-2 mx-2 text-primary">
        <b-spinner style="width: 1rem; height: 1rem;"></b-spinner> <strong class="ml-2 h5">Pesquisando...</strong>
      </div>
      </b-form>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <button v-if="desabilitar == false" class="nav-link btn btn-link" @click="onSubmit">Pesquisar</button>
          <button v-else disabled class="nav-link btn btn-link" @click="onSubmit">Pesquisar</button>
        </li>
      </ul>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex'
//import axios from 'axios'
import { http } from "@/http/configuracao.js";

export default {
  name: 'NavbarComponent',

  data() {
    return {
      form: {
        itemPesquisa: '',
      },

      desabilitar: false,

      arrayClasses: [],
      objDominio: {}
    }
  },

   methods: {
      ...mapMutations({
        setItemPesquisa: 'SET_ITEM_PESQUISA',
        setDiagnosticos: 'SET_DIAGNOSTICOS',
        delDiagnosticos: 'DEL_DIAGNOSTICOS',
        setAguardarPesquisa: 'SET_AGUARDAR_PESQUISA'
      }),

      realizaPesquisa(data){

          for (const classe of data[0].arrayClasses) {

            for (const diagnostico of classe.diagnosticos) {

              if (diagnostico.titulo_Diagnostico !== '') {

                let itemPesquisa =  this.form.itemPesquisa.toLowerCase();
                let titulo_Diagnostico = diagnostico.titulo_Diagnostico.toLowerCase();
                

                if (titulo_Diagnostico.indexOf(itemPesquisa) !== -1) {
                      
                  this.setDiagnosticos([data[0].arrayDominio[0].tituloDominio, classe.tituloClasse, diagnostico]);

                }
                
              }

            }
            
          }
      },

    async capturarDados(){

        try {
            
            let numeroDoDominio = 1;

            while (numeroDoDominio <= 13) {
              
              let response = await http.get(`/db_Dominios/Dominio${numeroDoDominio}_NANDA_2018_2020.json`);
              
              this.realizaPesquisa(response.data)

              numeroDoDominio++;
            }

        } catch(e) {
          console.error(e);
        }

      },
        
     async onSubmit(event) {
        event.preventDefault();

        let itemPesquisa = this.form.itemPesquisa.trim();

        if(itemPesquisa !== '')
        {
            this.desabilitar = true;

            this.setAguardarPesquisa(false);
            this.delDiagnosticos();
            this.setItemPesquisa(itemPesquisa);

           await this.capturarDados();
        
          
           this.$router.push({ name: 'ComponenteIntermediarioPesquisa' });

           this.form.itemPesquisa = '';
           this.setAguardarPesquisa(true);
           this.desabilitar = false;
        } else {
           this.form.itemPesquisa = '';
        }
            
      }
    }
}
</script>
