<template>
  <div class="pesquisa mb-3">
    
  <p>Item pesquisado: <strong>{{itemPesquisa}}</strong></p>
  
  <div v-if="arrayDiagnosticos.length > 0">
    
    <div class="mb-3" v-for="(itemDiagnostico, index1) in arrayDiagnosticos" :key="`${index1}`">

        <b-button size="sm" variant="outline-primary" v-b-modal="`modal-diagnostico-${index1}`">{{itemDiagnostico[2].titulo_Diagnostico}}</b-button>
                
        <!-- Modal -->
        <b-modal :id="`modal-diagnostico-${index1}`" scrollable size="lg" cancel-disabled>
          <template #modal-header>
            <div>
              <h3><strong>{{itemDiagnostico[2].titulo_Diagnostico}}</strong></h3>
              
              <strong class="text-info">DEFINIÇÃO:</strong> {{itemDiagnostico[2].definicao_Diagnostico}}<br>
            
              <strong class="text-info">Classe: </strong><strong>{{itemDiagnostico[1]}}</strong> (<strong class="text-danger">{{itemDiagnostico[0]}}</strong>)
              </div>
          </template>

          <!-- v-if para renderizar o List-group de [ Características Definidoras ], se existir -->
          <div class="mb-3" v-if="itemDiagnostico[2].caracteristicas_Definidoras.length > 0">
            <b-list-group>

              <b-list-group-item class="text-center bg-dark text-white">
                <strong>Características Definidoras</strong>
              </b-list-group-item>
              
              <!-- v-for em [ Características Definidoras ]  para renderizar cada item -->
              <div v-for="(item, index2) in itemDiagnostico[2].caracteristicas_Definidoras" :key="`${index2}`">
                
                <div v-if="verificarItem(item, 'CaracterísticasDefinidoras')">
                  <b-list-group-item class="text-center bg-light text-danger">
                      <strong>{{item}}</strong>
                  </b-list-group-item>
                </div>

                <div v-else>
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                      <b-form-checkbox 
                      v-model="selectedCaracDefinidoras" 
                      :value="`${item}`"
                      >
                      {{item}}
                      </b-form-checkbox>
                    <b-badge variant="primary" pill v-b-modal="`modal-secundario-detalhes-CD-${index1}-${index2}`">detalhes...</b-badge>
                  </b-list-group-item>

                  <!-- Modal Secundário: informa os detalhes sobre cada item -->
                  <b-modal :id="`modal-secundario-detalhes-CD-${index1}-${index2}`" ok-only>
                    <template #modal-header>
                        {{item}}
                    </template>
                    <p class="my-2">Aqui adicionaremos uma breve explicação sobre este termo.</p>
                    <template #modal-footer="{ cancel }">
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button size="sm" variant="success" @click="cancel()">
                        OK
                      </b-button>
                    </template>
                  </b-modal>
                </div>

              </div>

            </b-list-group>
          </div>

          <!-- v-if para renderizar o List-group de [ Fatores Relacionados ], se existir -->
          <div class="mb-3" v-if="itemDiagnostico[2].fatores_Relacionados.length > 0">
            <b-list-group>

              <b-list-group-item class="text-center bg-warning text-white">
                <strong>Fatores Relacionados</strong>
              </b-list-group-item>
              <!-- v-for em [ Fatores Relacionados ]  para renderizar cada item -->
              <div v-for="(item, index2) in itemDiagnostico[2].fatores_Relacionados" :key="`${index2}`">
                
                <div v-if="verificarItem(item, 'FatoresRelacionados')">
                  <b-list-group-item class="text-center bg-light text-danger">
                      <strong>{{item}}</strong>
                  </b-list-group-item>
                </div>

                <div v-else>
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                      <b-form-checkbox 
                      v-model="selectedFatoresRelacionados" 
                      :value="`${item}`"
                      >
                      {{item}}
                      </b-form-checkbox>
                    <b-badge variant="primary" pill v-b-modal="`modal-secundario-detalhes-FRela-${index1}-${index2}`">detalhes...</b-badge>
                  </b-list-group-item>

                  <!-- Modal Secundário: informa os detalhes sobre cada item -->
                  <b-modal :id="`modal-secundario-detalhes-FRela-${index1}-${index2}`" ok-only>
                    <template #modal-header>
                        {{item}}
                    </template>
                    <p class="my-2">Aqui adicionaremos uma breve explicação sobre este termo.</p>
                    <template #modal-footer="{ cancel }">
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button size="sm" variant="success" @click="cancel()">
                        OK
                      </b-button>
                    </template>
                  </b-modal>
                </div>

              </div>

            </b-list-group>
          </div>

          <!-- v-if para renderizar o List-group de [ Condições Associadas ], se existir -->
          <div class="mb-3" v-if="itemDiagnostico[2].condicoes_Associadas.length > 0">
            <b-list-group>

              <b-list-group-item class="text-center bg-danger text-white">
                <strong>Condições Associadas</strong>
                <br>
                São indicadores para os quais os enfermeiros não podem intervir de forma independente
              </b-list-group-item>
              
              <!-- v-for em [ Condições Associadas ]  para renderizar cada item -->
              <div v-for="(item, index2) in itemDiagnostico[2].condicoes_Associadas" :key="`${index2}`">
                
                <div v-if="verificarItem(item, 'CondiçõesAssociadas')">
                  <b-list-group-item class="text-center bg-light text-danger">
                      <strong>{{item}}</strong>
                  </b-list-group-item>
                </div>

                <div v-else>
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                      <b-form-checkbox 
                      v-model="selectedCondAssociadas" 
                      :value="`${item}`"
                      >
                      {{item}}
                      </b-form-checkbox>
                    <b-badge variant="primary" pill v-b-modal="`modal-secundario-detalhes-CA-${index1}-${index2}`">detalhes...</b-badge>
                  </b-list-group-item>

                  <!-- Modal Secundário: informa os detalhes sobre cada item -->
                  <b-modal :id="`modal-secundario-detalhes-CA-${index1}-${index2}`" ok-only>
                    <template #modal-header>
                        {{item}}
                    </template>
                    <p class="my-2">Aqui adicionaremos uma breve explicação sobre este termo.</p>
                    <template #modal-footer="{ cancel }">
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button size="sm" variant="success" @click="cancel()">
                        OK
                      </b-button>
                    </template>
                  </b-modal>
                </div>

              </div>

            </b-list-group>
          </div>

          <!-- v-if para renderizar o List-group de [ Populações em Risco ], se existir -->
          <div class="mb-3" v-if="itemDiagnostico[2].populacoes_Em_Risco.length > 0">
            <b-list-group>

              <b-list-group-item class="text-center bg-primary text-white">
                <strong>Populações em Risco</strong>
                <br>
                São indicadores para os quais os enfermeiros não podem intervir de forma independente
              </b-list-group-item>
              
              <!-- v-for em [ Populações em Risco ]  para renderizar cada item -->
              <div v-for="(item, index2) in itemDiagnostico[2].populacoes_Em_Risco" :key="`${index2}`">
                
                <div v-if="verificarItem(item, 'PopulaçõesEmRisco')">
                  <b-list-group-item class="text-center bg-light text-danger">
                      <strong>{{item}}</strong>
                  </b-list-group-item>
                </div>

                <div v-else>
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                      <b-form-checkbox 
                      v-model="selectedPopulacoesRisco" 
                      :value="`${item}`"
                      >
                      {{item}}
                      </b-form-checkbox>
                    <b-badge variant="primary" pill v-b-modal="`modal-secundario-detalhes-PR-${index1}-${index2}`">detalhes...</b-badge>
                  </b-list-group-item>

                  <!-- Modal Secundário: informa os detalhes sobre cada item -->
                  <b-modal :id="`modal-secundario-detalhes-PR-${index1}-${index2}`" ok-only>
                    <template #modal-header>
                        {{item}}
                    </template>
                    <p class="my-2">Aqui adicionaremos uma breve explicação sobre este termo.</p>
                    <template #modal-footer="{ cancel }">
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button size="sm" variant="success" @click="cancel()">
                        OK
                      </b-button>
                    </template>
                  </b-modal>
                </div>

              </div>

            </b-list-group>
          </div>

          <!-- v-if para renderizar o List-group de [ Fatores de Risco ], se existir -->
          <div class="mb-3" v-if="itemDiagnostico[2].fator_De_Risco.length > 0">
            <b-list-group>

              <b-list-group-item class="text-center bg-success text-white">
                <strong>Fatores de Risco</strong>
              </b-list-group-item>
              <!-- v-for em [ Fatores de Risco ]  para renderizar cada ietem -->
              <div v-for="(item, index2) in itemDiagnostico[2].fator_De_Risco" :key="`${index2}`">
                
                <div v-if="verificarItem(item, 'FatoresDeRisco')">
                  <b-list-group-item class="text-center bg-light text-danger">
                      <strong>{{item}}</strong>
                  </b-list-group-item>
                </div>

                <div v-else>
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                      <b-form-checkbox 
                      v-model="selectedFatoresRiscos" 
                      :value="`${item}`"
                      >
                      {{item}}
                      </b-form-checkbox>
                    <b-badge variant="primary" pill v-b-modal="`modal-secundario-detalhes-FRisco-${index1}-${index2}`">detalhes...</b-badge>
                  </b-list-group-item>

                  <!-- Modal Secundário: informa os detalhes sobre cada item -->
                  <b-modal :id="`modal-secundario-detalhes-FRisco-${index1}-${index2}`" ok-only>
                    <template #modal-header>
                        {{item}}
                    </template>
                    <p class="my-2">Aqui adicionaremos uma breve explicação sobre este termo.</p>
                    <template #modal-footer="{ cancel }">
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button size="sm" variant="success" @click="cancel()">
                        OK
                      </b-button>
                    </template>
                  </b-modal>
                </div>

              </div>

            </b-list-group>
          </div>

          <template #modal-footer="{close}">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="success" v-b-modal.modal-gerar-diagnostico @click="gerarDiagnostico(itemDiagnostico[2].titulo_Diagnostico)">
              Gerar
            </b-button>
            <b-button size="sm" variant="danger" @click="close()">
              Fechar
            </b-button>
          </template>
        </b-modal>


    </div>
    

    <b-modal id="modal-gerar-diagnostico" title="Diagnóstico gerado" size="lg">
      <template #modal-header>
          <div>
            <strong>Diagnóstico gerado</strong>
            <br>
            Copie e modifique conforme sua necessidade.
          </div>
      </template>

      <strong class="text-info">{{diagnosticoGerado}}</strong>

      <template #modal-footer="{close}">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" v-b-modal.modal-gerar-diagnostico @click="copiarDiagnostico()">
                  Copiar
                </b-button>
                <b-button size="sm" variant="danger" @click="close()">
                  Fechar
                </b-button>
              </template>
    </b-modal>

  </div>

  <div v-else>
      <p>Nenhum diagnóstico foi encontrado, conforme item pesquisado.</p>
  </div>
    
  </div>
</template>

<script>
//import { http } from "@/http/configuracao.js";
import { mapGetters } from "vuex";

export default {
  name: 'PesquisaView',

  data() {
    return {
      termoPesquisa: '',
      arrayClasses: [],
      objDominio: {},
      //arrayDiagnosticos: [],
      selectedCaracDefinidoras: [],
      selectedFatoresRelacionados: [],
      selectedFatoresRiscos: [],
      selectedCondAssociadas: [],
      selectedPopulacoesRisco: [],
      diagnosticoGerado: ''
    }
  },

  computed: {
    ...mapGetters({
      itemPesquisa: "itemPesquisa",
      arrayDiagnosticos: "arrayDiagnosticos"
    })
  },

  methods: {
    
    verificarItem(item, grupo){

      let termos = [];
      
      switch (grupo) {
        case 'CaracterísticasDefinidoras': termos = ['Pesticidas','Produtos químicos','Agentes biológicos','Poluição','Resíduos','Radioatividade','No lactente ou na criança','Nos pais'];
          break;
        case 'FatoresRelacionados': termos = ['Externos','Internos','No lactente ou na criança','Nos pais'];
          break;
        case 'FatoresDeRisco': termos = ['No lactente ou na criança', 'Nos pais','Em crianças','Ambientais','Fisiológicos','Outros','Externos','Internos','Individuais','Ambientais'];
          break;
        case 'CondiçõesAssociadas': termos = ['No lactente ou na criança','Nos pais'];
          break;
        case 'PopulaçõesEmRisco': termos = ['No lactente ou na criança','Nos pais'];
          break;
      
        default:
          break;
      }
      
      //se diferente de -1, então o item está contido no Array
      return (termos.indexOf(item) !== -1) ? true : false;
    },

    gerarDiagnostico(diagnostico){

      let stringCaracDefinidoras = `${this.selectedCaracDefinidoras}`.toLowerCase();
      if(this.selectedCaracDefinidoras.length > 0) {
        this.diagnosticoGerado = `${diagnostico}, caracterizado por ${stringCaracDefinidoras}.`;
      }

      let stringFatoresRelacionados = `${this.selectedFatoresRelacionados}`.toLowerCase();
      if(this.selectedFatoresRelacionados.length > 0) {
        this.diagnosticoGerado = `${diagnostico}, caracterizado por ${stringCaracDefinidoras}, relacionado a ${stringFatoresRelacionados}.`;
      }

      let stringCondAssociadas = `${this.selectedCondAssociadas}`.toLowerCase();
      if(this.selectedCondAssociadas.length > 0) {
        if (this.selectedCaracDefinidoras.length > 0) {
          this.diagnosticoGerado = `${diagnostico}, caracterizado por ${stringCaracDefinidoras}, relacionado a ${stringCondAssociadas}.`;
        } else {
          this.diagnosticoGerado = `${diagnostico}, relacionado a ${stringCondAssociadas}.`;
        }
      }

      let stringPopulacoesRisco = `${this.selectedPopulacoesRisco}`.toLowerCase();
      if(this.selectedPopulacoesRisco.length > 0) {
        if (this.selectedCaracDefinidoras.length > 0) {
          this.diagnosticoGerado = `${diagnostico}, caracterizado por ${stringCaracDefinidoras}, relacionado a ${stringPopulacoesRisco}.`;
        } else {
          this.diagnosticoGerado = `${diagnostico}, relacionado a ${stringPopulacoesRisco}.`;
        }
        
      }
      
    },

    copiarDiagnostico(){
      navigator.clipboard.writeText(this.diagnosticoGerado);
    }

  },

 mounted() {

    this.$root.$on('bv::modal::show', (bvEvent, modalId) => {

      let valor = modalId.indexOf("modal-diagnostico");
      
      if(valor !== -1 ) {

        this.selectedCaracDefinidoras = [];
        this.selectedFatoresRelacionados = [];
        this.selectedFatoresRiscos = [];
        this.selectedCondAssociadas = [];
        this.selectedPopulacoesRisco = [];

      }
      
    })
  }
}
</script>
