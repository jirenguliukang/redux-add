

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


let reducer = (state={number:0},action)=>{
    if(action === undefined) return state;
    switch(action.type){
        case INCREASE:
          return {number:state.number+action.amount};
        case DECREASE:
          return {number:state.number-action.amount};
        default:
          return state;
    }
}
// let store = createStore(reducer);
class Counter extends Component {
    constructor(props){
        super(props);
        this.state={list:store.getState().counter.number}

    }
    componentWillMount(){
        this.unSubscribe=store.subscribe(()=>{
            this.setState({
                list:store.getState().counter.number
            })
        })
    }

    componentWillUnmount(){
        this.unSubscribe()
    }
    render() {

        return (
            <div>
                <p>{store.getState().counter.number}</p>
                <button onClick={() => store.dispatch({ type: INCREASE, amount: 2 })}>+</button>
                <button onClick={() => store.dispatch({ type: DECREASE, amount: 2 })}>-</button>
            </div>
        )
    }
}
export default Counter;