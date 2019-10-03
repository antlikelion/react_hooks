import { useState, useEffect } from 'react';

const useFetch = (callback, url) => {
    // 커스텀 hook을 만들 때에도 꼭 use로 시작하는 이름을 쓰자
    const [loading, setLoading] = useState();
    const fetchInitialData = async () => {
      setLoading(true);
      const response = await fetch()
      // 나한테는 없는 api ㅠㅠ 여기서 받는 정보가 객체 형태라 짱나네여
      const initialData = await response.json(url)
      callback(initialData)
      // 여기서 callback은 밑에서 useFetch에 첫번째 인자로 넘겨준 setTodos임
      setLoading(false);
    }
    useEffect(()=>{
      fetchInitialData();
      // 비동기 작업을 fetching할 때 useEffect에 직접 넣지 말고 해당 로직을 처리하는 함수를 호출하는 것이 좋다
    }, [])
    // 여기서 두 번째 인자로 빈 배열을 전달하지 않았을 때의 문제점
    // 1.useEffect로 data를 fetching함(setToto발동)
    // 2.setTodo로 인해 state가 업데이트 되면 다시 렌더링이 됨.
    // 3.렌더링이 되면 componentDidUpdate이기에 useEffect가 다시 발동
    // =>무한 순환
    // 따라서 이 useEffect에 dependency로 빈 배열을 전달해야 componentDidUpdate를 무시할 수 있음
  
    return loading
  }

export default useFetch