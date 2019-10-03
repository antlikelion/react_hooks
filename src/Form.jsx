import React, {useContext,useRef} from 'react';
import {TodoContext} from './TodoStore'

const Form = (()=>{
    const inputRef = useRef(false)
    const {addTodo} = useContext(TodoContext)

    const addTodoData = e =>{
        e.preventDefault()
        addTodo(inputRef.current.value)
    }

    return (
        <div>
            <form action="">
                <input type="text" ref={inputRef}/>
                <button onClick={addTodoData}>할 일 추가</button>
            </form>
        </div>
    )
})

export default Form