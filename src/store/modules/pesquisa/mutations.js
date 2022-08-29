export default {

    SET_ITEM_PESQUISA: (state, dado) => {
      state.itemPesquisa = dado;
    },

    SET_DIAGNOSTICOS: (state, dado) => {
      state.arrayDiagnosticos.push(dado);
    },

    DEL_DIAGNOSTICOS: (state) => {
      //state.arrayDiagnosticos = [];
      for (let i = state.arrayDiagnosticos.length; i > 0; i--) {
        state.arrayDiagnosticos.pop();
      }
    },

  };
  