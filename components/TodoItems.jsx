import not_tick from '../src/assets/H.png'
import delete_icon from '../src/assets/delete.png'
import tick from '../src/assets/H1.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {

  return (
    <div className='flex  items-center gap-2 my-2  hover:shadow-xl/10' >

      <img onClick={() => { toggle(id) }} className=' hover:shadow-xl/10 border-none 
         w-5 h-5 rounded-[20%] cursor-pointer ' src={isComplete ? tick : not_tick} alt="" />

      <div className='flex flex-1 items-center  
      cursor-pointer  break- words break-all'>
        <p className={`'flex-1  ml-2 text-[#ffffff]
         text-[17px] ' ${isComplete ? "line-through" : ""}`}> {text}</p>
      </div>
      <img onClick={() => deleteTodo(id)} className=' cursor-pointer w-6 h-6 ml-2 borders-none hover:shadow-md' src={delete_icon}
        alt="" />
    </div>
  )
}

export default TodoItems
