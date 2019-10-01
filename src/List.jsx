import React from 'react'

const List = ({todos}) => {
    const todoList = todos.map((todo)=>{
        return <li>{todo}</li>
    })
    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List