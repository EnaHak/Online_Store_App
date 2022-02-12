import { RECEPTI } from "../../data/test-podaci";
import {PROMJENA_FAVORITA} from "../actions/recepti"
import {PROMJENA_KOSARICA} from "../actions/recepti"
import {PROMJENAUkloni_KOSARICA} from "../actions/recepti"
import {POSTAVI_CIJENU_KOLICINU} from "../actions/recepti"


const pocetnoStanje = {
  recepti: RECEPTI,
  favoritRecepti: [],
  proizvodiUKosarici: [],
  ukupnaCijena: 0,
}
 
const receptReducer = (state = pocetnoStanje, action) => {
    switch (action.type) {
        case PROMJENA_FAVORITA:
        const oznacen = state.favoritRecepti.findIndex(
          (recept) => recept.id === action.idRecepta);
        if (oznacen >= 0) {
          const noviFavoriti = [...state.favoritRecepti];
          noviFavoriti.splice(oznacen, 1);
          return { ...state, favoritRecepti: noviFavoriti };
        } else {
          const recept = state.recepti.find((r) => r.id === action.idRecepta);
          return {
            ...state,
            favoritRecepti: state.favoritRecepti.concat(recept),
          };
        };
        case PROMJENA_KOSARICA:
          const dodaniProizvod = state.recepti.find(
            (recept) => recept.id === action.idRecepta);
          const proizvodUKosarici = state.proizvodiUKosarici.find(
            (recept) => action.idRecepta === recept.id
          );
          if (proizvodUKosarici >=0 ) {
            return {
              ...state,
              ukupnaCijena: state.ukupnaCijena + dodaniProizvod.novac,
            };
          } else {
  
            return {
              ...state,
              proizvodiUKosarici: [...state.proizvodiUKosarici, dodaniProizvod],
              ukupnaCijena: state.ukupnaCijena + dodaniProizvod.novac,
            };
          }
         
      default:
        return state;
    }
  };
export default receptReducer;