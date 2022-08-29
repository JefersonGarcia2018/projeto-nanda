export default {
//Os getters serão usados caso você deva manipular, fazer tratamento nos dados que estão em [state.js], antes 
//de serem usados nos Componentes.

    itemPesquisa: (state) => {
      return state.itemPesquisa;
    },

    arrayDiagnosticos: (state) => {
      return state.arrayDiagnosticos;
    },

    aguardarPesquisa: (state) => {
      return state.aguardarPesquisa;
    },
  
  };
  