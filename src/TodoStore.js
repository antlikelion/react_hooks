import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx'
import useFetch from './useFetch'
import Header from './Header'
import Form from './Form'

export const TodoContext = React.createContext();
// 상위의 스토어 역할을 함

const TodoStore = () =>{
  const [todos, setTodos] = useState([]);
  // useState는 배열을 반환하는데 배열의 첫번째 인자는 상태값,
  // 두번째 인자로는 메소드를 반환함
  // useState의 인자로 전달되는 값은 initialState값임
  // 결국 여기서 todos는 initialState로 전달된 'js공부'임
  // state값이 변경되면 렌더링이 다시 호출됨

  const [newTodo, setNewTodo] = useState();

  // const loading = useFetch(setTodos, 'http://localhost:8000/todo')

  const changeInputData = (e)=>{
    setNewTodo(e.target.value);
    // setNewTodo는 newTodo정보를 갱신하는 역할을 함
  }
  const addTodo = (e) => {
    e.preventDefault()
    // 이 설정을 해주지 않으면 '할 일 추가'버튼을 눌러도 새로고침 되어서
    // 할 일 추가가 안 됨
    setTodos([...todos, {'title':newTodo, 'id':todos.length, 'status': 'todo'}])
    // todos가 배열이라 분해해서 원소를 다 꺼낸 뒤 뒤에 객체 형태의 새todo를 받아 모두 배열로 묶어주는 작업
  }

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo=>{
      if(todo.id === +id){
        // 여기서 +id는 문자열로 넘어온 id값을 숫자로 바꿔주는 기능
        if(todo.status === "done") todo.status = "todo"
        else todo.status = "done"
      }
      return todo 
    })
    // 위의 과정으로 바뀐 todos(state)는 updateTodos를 통해야 비로소 재랜더링되므로 아래의 과정을 거쳐야 함
    setTodos(updateTodos)
  }

  useEffect(()=>{
    console.log("새롭군요", todos)
  }, [todos])
  // useEffect는 라이프사이클의 마무리단계인 렌더링 이후에 처리될 것을 다룸
  // 두 번째 인자로 todos를 전달해줬으니 todos가 변경될 때만 콜백 함수를 호출함
  // componentDidMount나 componentDidUpdate와 같은 렌더링 이후의 사이드이펙트 관련 처리
  
  return (
      <TodoContext.Provider value={{todos, addTodo, changeInputData, /*loading,*/ changeTodoStatus}}>
        {/* value로 객체를 전달 */}
        <Header />
        <Form />
        <List />
        {/* 후자의 todos가 useState에서 반환된 todos임 */}
      </TodoContext.Provider> 
  )
}



export default TodoStore;
