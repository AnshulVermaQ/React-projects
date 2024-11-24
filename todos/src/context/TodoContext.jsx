import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todo:[
        {
            id:1,
            todo:"todo",
            completed:false
        }
    ],
    addTodo:() =>{},
    updateTodo:(id,todo) =>{},
    deleteTodo:(id) =>{},
    toggleCompelete : (id) =>{}
});



export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;