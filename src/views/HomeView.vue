<template>
  <div class="home text-center">
    
    <div class="row mt-5">
      <div class="col">
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Diagnósticos de Enfermagem">
                  <b-card-text>
                   <p>Projeto desenvolvido como Trabalho de Conclusão de Curso.</p>
                   <p>Com o objetivo de auxiliar os estudantes e profissionias de enfermagem na consulta e entendimento sobre os Diagnósticos de Enfermagem conforme a Terminologia e Taxonomia NANDA-I 2018-2020.</p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
      </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <div>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/tErs-ej5ZQg"
            allowfullscreen
          ></b-embed>
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
