import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch'
import {todoReducer} from './reducers'

export const TodoContext = React.createContext();
// 상위의 스토어 역할을 함

const TodoStore = (props) =>{
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (InitData) =>{
    dispatch({type:"SET_INIT_DATA", payload:InitData})
  }

  // const loading = useFetch(setInitData, 'http://localhost:8000/todo')

  useEffect(()=>{
    console.log("새롭군요", todos)
  }, [todos])
  // useEffect는 라이프사이클의 마무리단계인 렌더링 이후에 처리될 것을 다룸
  // 두 번째 인자로 todos를 전달해줬으니 todos가 변경될 때만 콜백 함수를 호출함
  // componentDidMount나 componentDidUpdate와 같은 렌더링 이후의 사이드이펙트 관련 처리
  
  return (
      <TodoContext.Provider value={{todos, /*loading,*/ dispatch}}>
        {/* value로 객체를 전달 */}
        {props.children}
      </TodoContext.Provider> 
  )
}



export default TodoStore;
