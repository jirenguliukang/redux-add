import React, { Component } from 'react';
import {store} from './store';
const ADD_TODO='ADD_TODO';
const DELETE_TODO='DELETE_TODO';

let reducer=(state={list:[]},action)=>{
    if(action===undefined) return state;
    switch (action.type) {
        case ADD_TODO:
            return { list: [...state.list, action.text] };
        case DELETE_TODO:
            let list = state.list;
            list.splice(action.index,1);
            //每次都应该返回一个新的对象
            return { list: [...list] }
        default:
            return state;
    }

}


// let store = createStore(reducer);
class Todo extends Component {
    constructor(props){
        super(props);
        this.state={list:store.getState().todo.list}

    }

    keyDown=(event)=>{
         if(event.target.value.length>0 &&event.keyCode===13){
         
             store.dispatch({
                 type:ADD_TODO,
                 text:event.target.value
             });
             event.target.value='';
        // this.state.list.push(event.target.value);
        //      this.setState(this.state.list);
        //      event.target.value='';
         }
    }
    deleteTodo=(index)=>{
        store.dispatch({
            type:DELETE_TODO,
            index
        });
    }
    //订阅
    componentWillMount(){
        this.unSubscribe=store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
    }

    componentWillUnmount(){
        this.unSubscribe()
    }

    render() {
        return (
            <div id="container">
                <input type="text" onKeyDown={this.keyDown} />
                <ul id="content" > 
                    {
                        this.state.list.map((todo, index) => (
                            <li key={index}>{todo}<button onClick={()=>this.deleteTodo(index)}>-</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};
export default Todo;