import React, {Component, useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx'

const App = () =>{
  const [todos, setTodos] = useState(['js공부']);
  // useState는 배열을 반환하는데 배열의 첫번째 인자는 상태값,
  // 두번째 인자로는 메소드를 반환함
  // useState의 인자로 전달되는 값은 initialState값임
  // 결국 여기서 todos는 initialState로 전달된 'js공부'임
  // state값이 변경되면 렌더링이 다시 호출됨

  const [newTodo, setNewTodo]=useState();

  const changeInputData = (e)=>{
    setNewTodo(e.target.value);
    // setNewTodo는 newTodo정보를 갱신하는 역할을 함
  }
  const addTodo = (e) => {
    e.preventDefault()
    // 이 설정을 해주지 않으면 '할 일 추가'버튼을 눌러도 새로고침 되어서
    // 할 일 추가가 안 됨
    setTodos([...todos, newTodo])
  }
  useEffect(()=>{
    console.log("새롭군요", todos)
  }, [todos])
  // useEffect는 라이프사이클의 마무리단계인 렌더링 이후에 처리될 것을 다룸
  // 두 번째 인자로 todos를 전달해줬으니 todos가 변경될 때만 콜백 함수를 호출함
  return (
    <div>    
      <h1>todo 애플리케이션</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData}/>
        <button onClick={addTodo}>할 일 추가</button>
      </form>
      <List todos={todos}/>
      {/* 후자의 todos가 useState에서 반환된 todos임 */}
    </div>
  )
}



export default App;
