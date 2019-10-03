import React, {useContext} from 'react'
import "./Header.css"
import {TodoContext} from './TodoStore'

const Header = () => {
    const {todos} = useContext(TodoContext)
    return (
        <div>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="countInfo">
                해야할 일 : {todos.filter(i=>i.status==="todo").length}개가 있습니다
            </div>
        </div>
    )
}

export default Header