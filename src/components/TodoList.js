import React from 'react';
import './TodoStyle.css';
import './TodoList.css';

const TodoList = ({ todo, onDelete, onToggle }) => {
    return (
        <div id='listUl'>
            {/* App.js */}
            {/* 항목 하나하나 X삭제되게 해야하니까 이렇게! */}
                                     {/* 매개변수 있는 애는 바로 못줌 ->함수써서 줘야함 // cf.  onClick={()=> onDelete(todo.id) } :안에 중괄호는 하나라서 생략가능*/} 
                                     {/* App.js에서 onDelete함수를 보면 매개변수로 id를 줘서 여기서도 id를 불러줘야함!! */}
            {/* {todo.list}<button onClick={()=>{ onDelete(todo.id) }}>X</button> */}



            {/* App3.js 쌤이랑 하는거 다시하려고!(useReducer()) */}
            {/* {todo.todotext}<button onClick={()=>{ onDelete(todo.id) }}>X</button>            */}
            {/* 1>논리연산자 */}
            {/* <span className={todo.isDone && 'isDone'}
            onClick={()=>onToggle(todo.id)}>
                {todo.todotext}
            </span>
            <button onClick={()=>{ onDelete(todo.id) }}>X</button>   
                     */}
            
            {/* 2> 삼항연산자 */}
            <span className={todo.isDone ? 'isDone' : ''}
            onClick={()=>onToggle(todo.id)}>
                {todo.todotext}
            </span>
            <button onClick={()=>{ onDelete(todo.id) }}>X</button>           
            

            {/* useReducer()하려고 다시 해본거 -> App2.js 때문에! */}
            {/* {todo.newlist}<button onClick={()=>{ onDelete(todo.id) }}>X</button> */}
        </div>
    );
};

export default TodoList;