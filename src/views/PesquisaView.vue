<template>
  <div class="pesquisa mb-3">
    
  <div class="row my-3">
    <div class="col">
      Termo da pesquisa: <strong>{{itemPesquisa}}</strong>
    </div>
    <div class="col">
      Total encontrado: <strong>{{arrayDiagnosticos.length}}</strong>
    </div>
  </div>

  <div v-if="aguardarPesquisa">
  
    <div v-if="arrayDiagnosticos.length > 0">
      
      <div class="mb-3" v-for="(itemDiagnostico, index1) in arrayDiagnosticos" :key="`${index1}`">

          <b-button size="sm" variant="outline-primary" v-b-modal="`modal-diagnostico-${index1}`">{{itemDiagnostico[2].titulo_Diagnostico}}</b-button>
                  
          <!-- Modal -->
          <b-modal :id="`modal-diagnostico-${index1}`" scrollable size="lg" cancel-disabled>
            <template #modal-header>
              <div>
                <h3><strong>{{itemDiagnostico[2].titulo_Diagnostico}}</strong></h3>
                
                <strong class="text-info">DEFINIÇÃO:</strong> {{itemDiagnostico[2].definicao_Diagnostico}}<br>
              
                <strong class="text-danger">{{itemDiagnostico[0]}}</strong> - <strong class="text-info">Classe: </strong><strong>{{itemDiagnostico[1]}}</strong>
                </div>
            </template>

            <!-- v-if para renderizar o List-group de [ Fatores Relacionados ], se existir -->
            <div class="mb-3" v-if="itemDiagnostico[2].fatores_Relacionados.length > 0">
              <b-list-group>

                <b-list-group-item class="text-center bg-warning text-white">
                  <strong>Fatores Relacionados</strong> <b-badge class="bg-white text-dark" pill v-b-modal="`modal-secundario-detalhes-FRelacionados`">?</b-badge>
                  <br>
                  Causas ou fatores contribuintes para o problema. Sempre que possível, as <strong class="text-danger">intervenções</strong> <strong>de enfermagem</strong> devem voltar-se aos <strong>Fatores Relacionados</strong>.
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
                      <b-badge variant="primary" @click="pegarDetalheTermo(item)" pill v-b-modal="`modal-secundario-detalhes`">detalhes...</b-badge>
                    </b-list-group-item>

                    
                  </div>

                </div>

              </b-list-group>
            </div>

            <!-- v-if para renderizar o List-group de [ Fatores de Risco ], se existir -->
            <div class="mb-3" v-if="itemDiagnostico[2].fator_De_Risco.length > 0">
              <b-list-group>

                <b-list-group-item class="text-center bg-success text-white">
                  <strong>Fatores de Risco</strong> <b-badge class="bg-white text-dark" pill v-b-modal="`modal-secundario-detalhes-FRisco`">?</b-badge>
                  <br>
                  São influências que aumentam a vulnerabilidade de indivíduos, famílias, grupos ou comunidades a um evento não saudável (p. ex., ambiental, psicológico, genético).
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
                      <b-badge variant="primary" @click="pegarDetalheTermo(item)" pill v-b-modal="`modal-secundario-detalhes`">detalhes...</b-badge>
                    </b-list-group-item>

                    
                  </div>

                </div>

              </b-list-group>
            </div>

            <!-- v-if para renderizar o List-group de [ Condições Associadas ], se existir -->
            <div class="mb-3" v-if="itemDiagnostico[2].condicoes_Associadas.length > 0">
              <b-list-group>

                <b-list-group-item class="text-center bg-danger text-white">
                  <strong>Condições Associadas</strong> <b-badge class="bg-white text-dark" pill v-b-modal="`modal-secundario-detalhes-CA`">?</b-badge>
                  <br>
                  São indicadores para os quais os enfermeiros não podem intervir de forma independente.
                  <br>
                  São diagnósticos médicos, lesões, procedimentos, dispositivos médicos ou agentes farmacêuticos.
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
                      <b-badge variant="primary" @click="pegarDetalheTermo(item)" pill v-b-modal="`modal-secundario-detalhes`">detalhes...</b-badge>
                    </b-list-group-item>

                    
                  </div>

                </div>

              </b-list-group>
            </div>

            <!-- v-if para renderizar o List-group de [ Populações em Risco ], se existir -->
            <div class="mb-3" v-if="itemDiagnostico[2].populacoes_Em_Risco.length > 0">
              <b-list-group>

                <b-list-group-item class="text-center bg-primary text-white">
                  <strong>Populações em Risco</strong> <b-badge class="bg-white text-dark" pill v-b-modal="`modal-secundario-detalhes-PR`">?</b-badge>
                  <br>
                  São indicadores para os quais os enfermeiros não podem intervir de forma independente.
                  <br>
                  São grupos de pessoas que partilham alguma característica que faz cada membro ser suscetível a determinada resposta humana.
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
                      <b-badge variant="primary" @click="pegarDetalheTermo(item)" pill v-b-modal="`modal-secundario-detalhes`">detalhes...</b-badge>
                    </b-list-group-item>

                    
                  </div>

                </div>

              </b-list-group>
            </div>

            <!-- v-if para renderizar o List-group de [ Características Definidoras ], se existir -->
            <div class="mb-3" v-if="itemDiagnostico[2].caracteristicas_Definidoras.length > 0">
              <b-list-group>

                <b-list-group-item class="text-center bg-dark text-white">
                  <strong>Características Definidoras</strong> <b-badge class="bg-white text-dark" pill v-b-modal="`modal-secundario-detalhes-CD`">?</b-badge>
                  <br>
                  É aquilo que o enfermeiro é capaz de ver; e de inferir pela audição (p. ex., narradas pelo paciente/família), tato ou olfato. Sinal ou sintoma (indicadores objetivos ou subjetivos)
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
                      <b-badge variant="primary" @click="pegarDetalheTermo(item)" pill v-b-modal="`modal-secundario-detalhes`">detalhes...</b-badge>
                    </b-list-group-item>

                  </div>

                </div>

              </b-list-group>
            </div>

            <template #modal-footer="{close}">
              <b-button size="sm" variant="success" v-b-modal.modal-gerar-diagnostico @click="gerarDiagnostico(itemDiagnostico[2].titulo_Diagnostico)">
                Gerar
              </b-button>
              <b-button size="sm" variant="danger" @click="close()">
                Fechar
              </b-button>
            </template>
          </b-modal>


      </div>

      <!-- Modal Secundário: informa os detalhes sobre cada item -->
      <b-modal :id="`modal-secundario-detalhes`" ok-only>
        <template #modal-header>
            <strong>{{termo}}</strong>
        </template>
        <p v-if="detalheTermo !== ''" class="my-2">
          {{detalheTermo}}
        </p>
        <p v-else>
          Aqui adicionaremos uma breve explicação sobre este termo.
        </p>
        
        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="cancel()">
            OK
          </b-button>
        </template>
      </b-modal>
      
      <!-- Modal Gerar Diagnóstico -->
      <b-modal id="modal-gerar-diagnostico" title="Diagnóstico gerado" size="lg">
        <template #modal-header>
            <div>
              <strong>Enunciado do Diagnóstico</strong>
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

      <!-- Modal Explicação sobre Fatores Relacionados --> 
      <b-modal size="lg" :id="`modal-secundario-detalhes-FRelacionados`" ok-only>
        <template #modal-header>
          <div>
            Entendendo sobre <strong class="text-info">Fatores Relacionados</strong>
          </div>
        </template>
        <p class="my-2">Os "<strong class="text-info">Fatores Relacionados</strong>" são um componente que integra todos os <strong>Diagnósticos de Enfermagem</strong> com <strong>foco no problema</strong>.</p>
        <p>Causas ou fatores contribuintes para o problema(fatores etiológicos). Incluem etiologias, circunstâncias, fatos ou influências que têm certo tipo de relação com o <strong>Diagnósticos de Enfermagem</strong></p>
        <p>Uma análise da história do paciente costuma ser útil à identificação de <strong class="text-info">Fatores Relacionados</strong>.</p>
        <p>Sempre que possível, as ( <strong class="text-danger">intervenções</strong> <strong>de enfermagem</strong> ) devem voltar-se a esses <strong class="text-info">fatores</strong> etiológicos para a remoção da causa subjacente do <strong>Diagnósticos de Enfermagem</strong>.</p>
        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="cancel()">
            OK
          </b-button>
        </template>
      </b-modal>

      <!-- Modal Explicação sobre Fatores de Risco -->
      <b-modal size="lg" :id="`modal-secundario-detalhes-FRisco`" ok-only>
        <template #modal-header>
          <div>
            Entendendo sobre <strong class="text-info">Fatores de Risco</strong>
          </div>
        </template>
        São influências que aumentam a vulnerabilidade de indivíduos, famílias, grupos ou comunidades a um evento não saudável (p. ex., ambiental, psicológico, genético).
        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="cancel()">
            OK
          </b-button>
        </template>
      </b-modal>

      <!-- Modal Explicação sobre Condições Associadas -->
      <b-modal size="lg" :id="`modal-secundario-detalhes-CA`" ok-only>
        <template #modal-header>
          <div>
            Entendendo sobre <strong class="text-info">Condições Associadas</strong>
          </div>
        </template>
        <p class="my-2">"<strong class="text-info">Condições Associadas</strong>" é um termo empregado a partir do NANDA I 2018-2020</p>
        <p>Não são passíveis de <strong class="text-danger">intervenções</strong> de enfermagem independentes.</p>
        <p><strong class="text-info">Condições Associadas</strong> são diagnósticos médicos, lesões, procedimentos, dispositivos médicos ou agentes farmacêuticos. Essas condições não são independentemente modificáveis pelo enfermeiro, embora podem auxiliar o enfermeiro a analisar e confirmar diagnósticos potenciais.</p>
        <p>Ao separar esses indicadores, o enfermeiro consegue reconhecer mais rapidamente os <strong>"Fatores Relacionados"</strong> a serem alvos das <strong class="text-danger">intervenções</strong> ou as <strong>"Características Definidoras"</strong> que precisem de controle de sintomas.</p>
        <p>A intenção por trás dessa nova categoria é oferecer ao enfermeiro informações que apoiem o seu diagnóstico e também identifiquem, com clareza, aqueles dados da avaliação que ele pode e não pode influenciar diretamente.</p>
        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="cancel()">
            OK
          </b-button>
        </template>
      </b-modal>

      <!-- Modal Explicação sobre Populações em Risco -->
      <b-modal size="lg" :id="`modal-secundario-detalhes-PR`" ok-only>
        <template #modal-header>
          <div>
            Entendendo sobre <strong class="text-info">Populações em Risco</strong>
          </div>
        </template>
        <p class="my-2">"<strong class="text-info">Populações em Risco</strong>" é um termo empregado a partir do NANDA I 2018-2020</p>
        <p>Não são passíveis de <strong class="text-danger">intervenções</strong> de enfermagem independentes.</p>
        <p><strong class="text-info">Populações em Risco</strong> são grupos de pessoas que partilham alguma característica que faz cada membro ser suscetível a determinada resposta humana, como características demográficas, história de saúde/familiar, estágios de crescimento/desenvolvimento ou exposição a determinados eventos/experiências.</p>
        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="cancel()">
            OK
          </b-button>
        </template>
      </b-modal>

      <!-- Modal Explicação sobre Características Definidoras -->
      <b-modal size="lg" :id="`modal-secundario-detalhes-CD`" ok-only>
        <template #modal-header>
          <div>
            Entendendo sobre <strong class="text-info">Características Definidoras</strong>
          </div>
        </template>
        <p class="my-2">São <strong class="text-success">indicadores</strong>/<strong class="text-success">inferências</strong> observáveis pelo enfermeiro.</p>
        <p>Ou seja, é aquilo que o enfermeiro é capaz de ver; e de inferir pela audição (p. ex., narradas pelo paciente/família), tato ou olfato. Sinal ou sintoma (indicadores objetivos ou subjetivos).</p>      
        <p>Estão listadas em ordem alfabética. O objetivo final é identificar as <strong class="text-info">Características Definidoras</strong> <strong>críticas</strong>, que devem estar presentes para que seja definido o diagnóstico. Quando isso for possível, reorganizaremos esses <strong class="text-success">indicadores</strong> por ordem de importância.</p>
        <p>
          <strong>Quantas <span class="text-info">Características Definidoras</span> preciso identificar para definir determinado diagnóstico de enfermagem para um paciente?</strong>
          <ul>
            <li>Depende do diagnóstico.</li>
            <li>No caso de alguns diagnósticos, apenas uma <strong class="text-info">Característica Definidora</strong> é necessária; por exemplo, com os diagnósticos de <strong>promoção da saúde</strong>, o desejo expresso de um paciente de melhorar determinada resposta humana já é suficiente.</li>
            <li>Outros diagnósticos requerem um grupo de sintomas, possivelmente três ou quatro, para que o diagnóstico seja acurado. Futuramente, gostaríamos de limitar a quantidade de <strong class="text-success">indicadores</strong> diagnósticos oferecidos na NANDA-I, pois longas listas de sinais/sintomas não são tão úteis do ponto de vista clínico.</li>
          </ul>
        </p>
        <p>
          As <strong class="text-info">Características Definidoras</strong> estão presentes em três tipos de diagnóticos:
          <ul>
            <li>Diagnóstico com <strong>foco no problema</strong></li>
            <li>Diagnóstico de <strong>promoção da saúde</strong></li>
            <li>Diagnóstico de <strong>Síndrome</strong></li>
          </ul>
        </p>
        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="cancel()">
            OK
          </b-button>
        </template>
      </b-modal>

    </div>
    <div v-else>
        <p>Nenhum diagnóstico foi encontrado, conforme item pesquisado.</p>
    </div>
    
  </div>
  
  <div v-else class="text-primary">
    <div class="d-flex justify-content-center mb-3">
      <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
    </div>

    <div class="d-flex align-items-center">
      <strong variant="primary">Aguarde, pesquisando...</strong>
    </div>
  </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "@/http/configuracao.js";

export default {
  name: 'PesquisaView',

  data() {
    return {
      termoPesquisa: '',
      arrayClasses: [],
      objDominio: {},
      selectedCaracDefinidoras: [],
      selectedFatoresRelacionados: [],
      selectedFatoresRiscos: [],
      selectedCondAssociadas: [],
      selectedPopulacoesRisco: [],
      diagnosticoGerado: '',
      termo: '',
      detalheTermo: ''
    }
  },

  computed: {
    ...mapGetters({
      itemPesquisa: "itemPesquisa",
      arrayDiagnosticos: "arrayDiagnosticos",
      aguardarPesquisa: "aguardarPesquisa"
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
      //console.log(diagnostico);

      //Enunciado de Diagnóstico relacionado a Diagnósticos com Foco no Problema
      //[Título] + [Fatores Relacionados] + [Característica Definidoras].
      if(this.selectedFatoresRelacionados.length > 0) {
        let stringFatoresRelacionados = this.selectedFatoresRelacionados.join(', ');
        let stringCondAssociadas = (this.selectedCondAssociadas.length > 0) ? this.selectedCondAssociadas.join(', ')+',' : '';
        let stringPopulacoesRisco = (this.selectedPopulacoesRisco.length > 0) ? this.selectedPopulacoesRisco.join(', ')+',' : '';
        let stringCaracDefinidoras = (this.selectedCaracDefinidoras.length > 0) ? this.selectedCaracDefinidoras.join(', ') : '';

        (stringCaracDefinidoras !== '') ? 
        this.diagnosticoGerado = `${diagnostico} relacionado a ${stringFatoresRelacionados.toLowerCase()}, ${stringCondAssociadas.toLowerCase()} ${stringPopulacoesRisco.toLowerCase()} evidenciado por ${stringCaracDefinidoras.toLowerCase()}.` :
        this.diagnosticoGerado = `${diagnostico} relacionado a ${stringFatoresRelacionados.toLowerCase()}.`;
      }

      //Enunciado de Diagnóstico relacionado a Diagnósticos de Risco
      //[Título] + [Fatores de Risco] + [Condições Associadas] + [Populações em Risco].
      if((this.selectedFatoresRiscos.length > 0 || this.selectedCondAssociadas.length > 0 || this.selectedPopulacoesRisco.length > 0) && diagnostico.indexOf('Risco') !== -1 && this.selectedFatoresRelacionados.length == 0) {
        let stringFatoresRiscos = this.selectedFatoresRiscos.join(', ');
        let stringCondAssociadas = (this.selectedCondAssociadas.length > 0) ? this.selectedCondAssociadas.join(', ')+',' : '';
        let stringPopulacoesRisco = (this.selectedPopulacoesRisco.length > 0) ? this.selectedPopulacoesRisco.join(', ') : '';
        
        this.diagnosticoGerado = `${diagnostico} relacionado a ${stringFatoresRiscos.toLowerCase()}, ${stringCondAssociadas.toLowerCase()} ${stringPopulacoesRisco.toLowerCase()}.`;
      }

      //Enunciado de Diagnóstico relacionados a Promoção da Saúde
      //[Título] + [Característica Definidoras].
      if(this.selectedCaracDefinidoras.length > 0 && diagnostico.indexOf('Disposição') !== -1) {
        let stringCaracDefinidoras = this.selectedCaracDefinidoras.join(', ');

        this.diagnosticoGerado = `${diagnostico}, evidenciado por ${stringCaracDefinidoras.toLowerCase()}.`;
      }
   
    },

    copiarDiagnostico(){
      navigator.clipboard.writeText(this.diagnosticoGerado);
    },

    async pegarDetalheTermo(termo){

      this.detalheTermo = '';
      this.termo = termo;

      try {  
            let response = await http.get('/db_Dominios/detalhes_termos.json');

            if ( termo in response.data ) {
              this.detalheTermo = response.data[termo];
            }

      } catch(e) {
        console.error(e);
      }

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
        this.diagnosticoGerado = '';

      }
      
    })
  }
}
</script>
