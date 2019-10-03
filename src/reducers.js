export const todoReducer = (todos, {type, payload}) => {
    switch (type){
      case "ADD_TODO":
        console.log("ADD_TODO의 payload: ", payload)
        return [...todos, {'title':payload, 'id':todos.length, 'status': 'todo'}];
      case "SET_INIT_DATA":
        console.log("SET_INIT_DATA의 payload : ", payload)
        return payload;   
      case "CHANGE_TODO_STATUS":
        console.log("CHANGE_TODO_STATUS의 payload : ", payload)
        return todos.map(todo=>{
            if(todo.id === +payload){
              // 여기서 +id는 문자열로 넘어온 id값을 숫자로 바꿔주는 기능
              if(todo.status === "done") todo.status = "todo"
              else todo.status = "done"
            }
            return todo 
          })
          // 위의 과정으로 바뀐 todos(state)는 updateTodos를 통해야 비로소 재랜더링되므로 아래의 과정을 거쳐야 함
          // sestTodos(updateTodos)
      default:
        break;
    }
  }

