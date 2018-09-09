import {createStore} from './redux';
import todo from './reducers/todo';
import counter from './reducers/counter'

let combineReducers =(reducers) =>
        (state={counter:{number:0},todo:{list:[]}},action)=>{
            let newState={};
            if(action === undefined) return state;
            for(var key in reducers){
                newState[key]=reducers[key](state[key],action)

            }
            return newState;

        }
let reducer = combineReducers({
    counter,
    todo
})
let store = createStore(reducer);

export {store}

