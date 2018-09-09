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
 export default reducer;