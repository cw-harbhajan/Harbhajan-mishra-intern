const redux = require('redux')
const createStore = redux.createStore
console.log('Redux demo index file');
const Buy_Cake = "buy_cake"
// action is an object with type property
// reducer define change in app state in response to action sent on store
//function which accepts State and action as argument and return new state
function buyCake(){
   return  {
        type : Buy_Cake,
        info: "hype"
    }
}

const initialState = {
    numOfCakes : 10
}

const reducer = (state=initialState,action) => {

    switch(action.type){
        case Buy_Cake : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default : return state
    }
}
const store= createStore(reducer);
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
//unsubscribe();