<template>
    <div class="componenteConteudoCentral">

        <div v-if="objDominio.tituloDominio">
            <head-slot :tituloDominio="`${objDominio.tituloDominio}`" :descricaoDominio="`${objDominio.descricaoDominio}`" />
        </div>
        <div v-else>
            <head-slot tituloDominio="Domínio" descricaoDominio="Descrição" />
        </div>
        

        <div v-if="arrayClasses.length > 0" class="accordion" role="tablist">

          <!-- v-for em [arrayClasses] para gerar os elementos <accordion> -->
          <b-card no-body class="mb-1" v-for="(classe, index1) in arrayClasses" :key="classe.id">

            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="`accordion-${index1}`" variant="info" class="text-left">Classe {{index1+1}}: {{classe.tituloClasse}}</b-button>
            </b-card-header>
            <b-collapse :id="`accordion-${index1}`" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p><strong>Diagnósticos:</strong></p>
                
                <!-- v-for em [classe.diagnosticos] para gerar os Buttons-Modal e os seus respectivos Modais -->
                <b-card-text v-for="(diagnostico, index2) in classe.diagnosticos" :key="diagnostico.id">
                <div v-if="diagnostico.titulo_Diagnostico !== ''">
                  <b-button size="sm" variant="outline-primary" v-b-modal="`modal-${index1}-${index2}`">{{diagnostico.titulo_Diagnostico}}</b-button>
                 
                 <!-- Modal -->
                  <b-modal :id="`modal-${index1}-${index2}`" scrollable size="lg" cancel-disabled>
                    <template #modal-header>
                      <div>
                        <h3><strong>{{diagnostico.titulo_Diagnostico}}</strong></h3>
                        
                        <strong class="text-info">DEFINIÇÃO:</strong> {{diagnostico.definicao_Diagnostico}}
                        </div>
                    </template>

                    <!-- v-if para renderizar o List-group de [ Fatores Relacionados ], se existir -->
                    <div class="mb-3" v-if="diagnostico.fatores_Relacionados.length > 0">
                      <b-list-group>

                        <b-list-group-item class="text-center bg-warning text-white">
                         <strong>Fatores Relacionados</strong>
                        </b-list-group-item>
                        <!-- v-for em [ Fatores Relacionados ]  para renderizar cada item -->
                        <div v-for="(item, index3) in diagnostico.fatores_Relacionados" :key="`${index3}`">
                          
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
                              <b-badge variant="primary" pill v-b-modal="`modal-secundario-FRela-${index1}-${index2}-${index3}`">detalhes...</b-badge>
                            </b-list-group-item>

                            <!-- Modal Secundário: informa os detalhes sobre cada item -->
                            <b-modal :id="`modal-secundario-FRela-${index1}-${index2}-${index3}`" ok-only>
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
                    
                    <!-- v-if para renderizar o List-group de [ Características Definidoras ], se existir -->
                    <div class="mb-3" v-if="diagnostico.caracteristicas_Definidoras.length > 0">
                      <b-list-group>

                        <b-list-group-item class="text-center bg-dark text-white">
                          <strong>Características Definidoras</strong>
                        </b-list-group-item>
                        
                        <!-- v-for em [ Características Definidoras ]  para renderizar cada item -->
                        <div v-for="(item, index3) in diagnostico.caracteristicas_Definidoras" :key="`${index3}`">
                          
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
                              <b-badge variant="primary" pill v-b-modal="`modal-secundario-CD-${index1}-${index2}-${index3}`">detalhes...</b-badge>
                            </b-list-group-item>

                            <!-- Modal Secundário: informa os detalhes sobre cada item -->
                            <b-modal :id="`modal-secundario-CD-${index1}-${index2}-${index3}`" ok-only>
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
                    <div class="mb-3" v-if="diagnostico.fator_De_Risco.length > 0">
                      <b-list-group>

                        <b-list-group-item class="text-center bg-success text-white">
                         <strong>Fatores de Risco</strong>
                        </b-list-group-item>
                        <!-- v-for em [ Fatores de Risco ]  para renderizar cada ietem -->
                        <div v-for="(item, index3) in diagnostico.fator_De_Risco" :key="`${index3}`">
                          
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
                              <b-badge variant="primary" pill v-b-modal="`modal-secundario-FRisco-${index1}-${index2}-${index3}`">detalhes...</b-badge>
                            </b-list-group-item>

                            <!-- Modal Secundário: informa os detalhes sobre cada item -->
                            <b-modal :id="`modal-secundario-FRisco-${index1}-${index2}-${index3}`" ok-only>
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
                    <div class="mb-3" v-if="diagnostico.condicoes_Associadas.length > 0">
                      <b-list-group>

                        <b-list-group-item class="text-center bg-danger text-white">
                         <strong>Condições Associadas</strong>
                         <br>
                         São indicadores para os quais os enfermeiros não podem intervir de forma independente
                        </b-list-group-item>
                        
                        <!-- v-for em [ Condições Associadas ]  para renderizar cada item -->
                        <div v-for="(item, index3) in diagnostico.condicoes_Associadas" :key="`${index3}`">
                          
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
                              <b-badge variant="primary" pill v-b-modal="`modal-secundario-CA-${index1}-${index2}-${index3}`">detalhes...</b-badge>
                            </b-list-group-item>

                            <!-- Modal Secundário: informa os detalhes sobre cada item -->
                            <b-modal :id="`modal-secundario-CA-${index1}-${index2}-${index3}`" ok-only>
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
                    <div class="mb-3" v-if="diagnostico.populacoes_Em_Risco.length > 0">
                      <b-list-group>

                        <b-list-group-item class="text-center bg-primary text-white">
                         <strong>Populações em Risco</strong>
                         <br>
                         São indicadores para os quais os enfermeiros não podem intervir de forma independente
                        </b-list-group-item>
                        
                        <!-- v-for em [ Populações em Risco ]  para renderizar cada item -->
                        <div v-for="(item, index3) in diagnostico.populacoes_Em_Risco" :key="`${index3}`">
                          
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
                              <b-badge variant="primary" pill v-b-modal="`modal-secundario-PR-${index1}-${index2}-${index3}`">detalhes...</b-badge>
                            </b-list-group-item>

                            <!-- Modal Secundário: informa os detalhes sobre cada item -->
                            <b-modal :id="`modal-secundario-PR-${index1}-${index2}-${index3}`" ok-only>
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

                    <template #modal-footer>
                      <!-- Emulate built in modal footer ok and cancel button actions -->
                      <b-button size="sm" variant="success" @click="salvarDiagnostico(diagnostico.titulo_Diagnostico)">
                        Salvar
                      </b-button>
                      <b-button size="sm" variant="danger" @click="fechaModelDiagnostico()">
                        Fechar
                      </b-button>
                    </template>
                  </b-modal>

                </div>
                <div v-else>
                    <p>Esta classe não contém nenhum diagnóstico no momento.</p>
                </div>
                </b-card-text>
                
              </b-card-body>
            </b-collapse>

          </b-card>
          
        </div>

        <div v-else class="text-primary">
          <div class="d-flex justify-content-center mb-3">
            <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
          </div>

          <div class="d-flex align-items-center">
            <strong variant="primary">Carregando...</strong>
          </div>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import HeadSlot from '@/slots/HeadSlot.vue'

export default {
  name: 'ComponenteConteudoCentral',
  components:{HeadSlot},

  data() {
      return {
        selectedCaracDefinidoras: [],
        selectedFatoresRelacionados: [],
        selectedFatoresRiscos: [],
        selectedCondAssociadas: [],
        selectedPopulacoesRisco: []
      }
  },
  
  props:{
    objDominio: {required: true, type:Object},
    arrayClasses: {required: true, type:Array}
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

    salvarDiagnostico(diagnostico){

      console.log(diagnostico);
    },

    fechaModelDiagnostico(){
      this.selectedCaracDefinidoras = [];
      this.selectedFatoresRelacionados = [];
      this.selectedFatoresRiscos = [];
      this.selectedCondAssociadas = [];
      this.selectedPopulacoesRisco = [];
    }
  },
}
</script>