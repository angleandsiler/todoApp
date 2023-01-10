import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';


//해야할 것. Todo List 만들기
//1. input창이 나오고, 입력 기능 넣기(반복창을 컴포넌트로 하고)
//2. 삭제 버튼 누르면 삭제 되는 것
//3. 큰 컴포넌트 하나 만들고, 아이템들이 들어가게끔 하고, 입력창도 컴포넌트화 시켜보자.


function App() {
  const [inputValue,setInputValue] =useState('')
  const [todoList,setTodoList] =useState([])
  const addItem=()=> {
    console.log("im herere!",inputValue)
    setTodoList([...todoList,inputValue])
  }

  return (
    <div >
   <main>
    <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
    <button onClick={addItem}>할일</button>
    
    <TodoBoard todoList={todoList}/>
   </main>

    </div>
  );
}

export default App;
