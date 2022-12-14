import { ADD_ELEMENT, DELETE_ELEMENT } from "../actions/actions";
import { priseVlist } from "../utils/data";
import { nanoid } from 'nanoid';

const startList = priseVlist; 

function listReducer(state = startList, action) {
  switch(action.type) {
    case ADD_ELEMENT:
      const el = action.payload;
      const { name, prise, id } = el;
      if(id) {
        state.forEach((item) => {
          if(item.id === id) {item.name = name; item.prise = prise;}
        });
      } else {
        el.id = nanoid(4);
        state.push(el);
      } 
      return state
    case DELETE_ELEMENT:
      const { ide } = action.payload;
      const new_V_state = state.filter(item => item.id !== ide);
      state = new_V_state;
      return state;
    default:
      return state;
  }
}
 export default listReducer;
