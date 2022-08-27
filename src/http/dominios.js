import { http } from "./configuracoes";

export default {
  lista: () => { return http.get("/db_Dominios/Dominio1_NANDA_2018_2020.json");},
};
