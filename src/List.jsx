import React, {useContext} from 'react'
import Item from'./Item.jsx'
import {TodoContext} from './TodoStore'

const List = () => {

    const {todos, loading} = useContext(TodoContext)

    let todoList =<div>loading...</div>
    if(!loading){
    todoList = todos.map((todo)=>{
        return (
            <Item key={todo.id} todo={todo} />
        )
    }
    )
    } 
    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List