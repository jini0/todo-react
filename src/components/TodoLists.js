//rsc  / 버전이 달라서 rfc해도 됨!
import React from 'react';
import TodoList from './TodoList';
import './TodoStyle.css';
//여기에 TodoList 를 만들어줘도 됨! -> 그치만 우린 따로 빼줄거임!

const TodoLists = ({todos, onDelete, onToggle}) => {
                //❤props는 객체로 받음!! (props가 아닌 a b 이런 이름도 상관 없음) / todos가 담겨있는 객체를 받음(❤속성값을 객체로 받음❤)
                //props는 통으로 옴! 자식요소에 보내는 것들이 통으로 객체로 전달됨!
    //<설명>
    // let props = {            
    //     todos: [{id:1,list:"해야할일1",isDone:false},{},{}], name: "abc"     //이런게 담겨있을거임
    // }
    //props.todos   / props.name 으로 받을 수 있음!
    //todos라는 이름의 배열을 받은거!
    // 객체 구조분해할당 -> const { todos, name } = props   -> const todos = props.todos / const name = props.name 과 같음
    // console.log(props);     //이거 해주려면 화살표함수에 (props) => {} 적어줘야함
    // console.log(todos);     //({todos})
    return (
        <div id="todolist">
            {/* 객체라서 .(dot)으로 접근가능! -> todos배열의 0번째 index~~~ */}
            {/* <div>{todos[0].list}</div>
            <div>{todos[1].list}</div>
            <div>{todos[2].list}</div> */}
            {/* map() 배열의 형태를 변경해줘서 return해주는 애 -> 형태가 바뀌니까(div형태로 바꼈음) map으로! */}

            {/* {todos.map(todo=><div>{todo.list}</div>)} */}
            {todos.map(todo=><TodoList todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle} /> )}
        </div>
    );
};

export default TodoLists;