import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../src/assets/todo_icon2.png'
import TodoItems from './TodoItems'
const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef= useRef();
  
  const add = ()=>{
    const inputText= inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value ="";

    
  }

  const deleteTodo = (id)=>{
    setTodoList((prvTodos)=>{
      return prvTodos.filter((todo) => todo.id !==id )
    })
  }

  const toggle = (id)=>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return{...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  },[todoList])

  return (
  
    <div className='bg-amber-500 place-self-center w-11/12 
    max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl'>
      <div className='flex items-center mt-2 gap-2' >
        <img className='w-10' src={todo_icon} alt="" />
        <h1 className='text-shadow-lg text-3xl text-[#E0E0E0] '>TO-DO LIST</h1>
      </div>

      <div className='my-7 flex items-center bg-[#3B3B3B] rounded-full hover:shadow-xl/15' >
        <input  ref={inputRef} className='text-[#FFFFFF] bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-[#C4C4C4]' type="text" placeholder='Add tasks...' />

        <button onClick={add} className='bg-[#1a1a1a] hover:bg-[#000000] h-14 w-32 border-0 outline-none rounded-full text-[#ffffff]'>Add +</button>
      </div>

      <div>
        {todoList.map((item, index)=>{
          return <TodoItems key={index} text={item.text} id={item.id} 
          isComplete={item.isComplete} deleteTodo={deleteTodo} 
          toggle={toggle}/>
        })}

      </div>
    </div>
  
  )
}

export default Todo
