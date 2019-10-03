import React from 'react'
import "./Header.css"
import {TodoContext} from './App'

const Header = () => {
    return (
        <TodoContext.Consumer>
            {
                // todos를 디스트럭쳐링해서 받은것임
                ({todos})=>(
                    <div>
                        <h1>HELLO TODO 애플리케이션</h1>
                        <div className="countInfo">
                            해야할 일 : {todos.filter(i=>i.status==="todo").length}개가 있습니다
                        </div>
                    </div>
                )
            }
        </TodoContext.Consumer>

    )
}

export default Header