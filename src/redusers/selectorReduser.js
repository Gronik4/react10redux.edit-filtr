import { ALL_ELEMENTS, SELECT_ELEMENT, DELETE_ELEMENT} from "../actions/actions";
import { priseVlist } from "../utils/data";

const elements = priseVlist;
export default function selectorReduser(state = elements , action) {
  switch(action.type) {
    case ALL_ELEMENTS:
      return action.payload;
    case SELECT_ELEMENT:
      const { name } = action.payload;
      const new_V_list = elements.filter(item => item.name.startsWith(name));
      return new_V_list;
    case DELETE_ELEMENT:
      const { ide } = action.payload;
      const new_V_state = state.filter(item => item.id !== ide);
      state = new_V_state;
      return state;
    default:
      return state;
  }
}
