import React from 'react';

const Form = (({addTodo, changeInputData})=>{
    return (
        <div>
            <form action="">
                <input type="text" name="" onChange={changeInputData}/>
                <button onClick={addTodo}>할 일 추가</button>
            </form>
        </div>
    )
})

export default Form