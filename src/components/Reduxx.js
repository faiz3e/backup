// import React, { Component } from 'react';

// export class Reduxx extends Component {
 
//   render() {
//     return (
//       <div >
//             sdsadsdasdasdasda
//      </div>
//     );
//   }
// }


 import React, { Component} from 'react';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
export class Reduxx extends Component {
    render() {

const mathReducer =(state={
    result :1,
    lastVlaues:[],
    
    },action)=>{
switch(action.type){
case "ADD":
state={
    ...state,
    result: state.result+action.payload,
    lastVlaues: [...state.lastVlaues,action.payload]
};

    break;
    case "SUB":
    state={
        ...state,
        result: state.result-action.payload,
        lastVlaues: [...state.lastVlaues,action.payload]
    };

    break;
}
return state;
};

const userReducer =(state={
    name:"max",
    age:27    
    },action)=>{
switch(action.type){
case "SET_NAME":
state={
    ...state,
    name:action.payload
};

    break;
    case "SET_AGE":
    state={
        ...state,
       age:action.payload
    };

    break;
}
return state;
};

const myLogger=(store) => (next)=> (action)=> {console.log("action ",action)
next(action);
};

const store=createStore(combineReducers({mathReducer,userReducer}),{},applyMiddleware(myLogger)); 

store.subscribe(()=>{
    //console.log(store.getState(),"store");
});
return (
          <div >
                sdsadsdasdasdasda
         </div>
        );
      }
    }
    