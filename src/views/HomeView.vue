<template>
  <div class="home text-center">
    
    <div class="row mt-5">
      <div class="col">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 1500px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="/assets/enfermagem.png" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Diagnósticos de Enfermagem">
                  <b-card-text>
                   <dir class="text-left">
                    <p>Projeto desenvolvido com o objetivo de auxiliar os estudantes de enfermagem na consulta e entendimento sobre os Diagnósticos de Enfermagem conforme a Terminologia e Taxonomia da NANDA-I 2018-2020.</p>
                    <p>A Taxonomia da NANDA-I oferece uma maneira de classificar e categorizar áreas de preocupação de um enfermeiro.</p> 
                    <p>São <strong>244 Diagnósticos de Enfermagem</strong>, agrupados em <strong class="text-danger">13 domínios</strong> e <strong class="text-info">47 classes</strong>.</p>
                    Os 4 principais tipos de Diagnósticos são:
                    <ul>
                      <li>Diagnóstico com foco no problema</li>
                      <li>Diagnóstico de risco</li>
                      <li>Diagnóstico de promoção de saúde</li>
                      <li>Diagnóstico de síndrome</li>
                    </ul>
                    <p>
                      O <strong>Diagnóstico de Enfermagem</strong> nada mais é do que uma frase padrão descritiva sobre o estado de saúde de um paciente. Oficializada após a criação da Associação Americana de Diagnóstico de Enfermagem, conhecida como NANDA International, ela criou um padrão a ser seguido pelos profissionais.
                    </p>
                   </dir>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>
