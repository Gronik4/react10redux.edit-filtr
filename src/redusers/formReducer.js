import { CHANGE_INPUT } from "../actions/actions";

const startState = {
  name: '',
  prise: '',
  id: ''
}

function formReducer(state = startState, action) {
  switch(action.type) {
    case CHANGE_INPUT:
      const {name, prise, id} = action.payload;
      return {...state, name, prise, id};
    default:
      return state; 
  }
}

export default formReducer;
