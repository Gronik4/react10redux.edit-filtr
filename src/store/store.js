import { combineReducers, compose, legacy_createStore } from "redux";
import formReducer from "../redusers/formReducer";
import listReducer from "../redusers/listReducer";
import selectorReduser from "../redusers/selectorReduser";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configStore() {
  return legacy_createStore(
    combineReducers({
      changeform: formReducer,
      changelist: listReducer,
      selectorlist: selectorReduser
    }),
    undefined,
    compose(ReactReduxDevTools)
  )
}

export default configStore;
