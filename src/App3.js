import './App.css';
import { useRef, useReducer } from 'react';
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';
import './style.css';

//useReducer()로 바꾸기
// 쌤이랑 하기
const initialState = {
    text: "",
    todos: [
        {
            id:1,
            todotext: "리액트 공부하기",
            isDone: false,
        },
        {
            id:2,
            todotext: "타입스크립트 공부하기",
            isDone: false,
        },
        {
            id:3,
            todotext: "리덕스 공부하기",
            isDone: false,
        },
    ]
}
function reducer(state,action){
    switch(action.type){
        case "CHANGE_INPUT":
        // return state;        일단 이렇게 해놓고 함수 만들고! 밑에 처럼 다 바꿔줌!
        return {
            ...state,
            text: action.text
        };
        case "CREATE_TODO":
        // return state;
        return {
            text:"",
            todos:state.todos.concat(action.todo)
        };
        case "DELETE_TODO":
        // return state;
        return {
            ...state,
            // filter() 해당하는 조건만 반환
            todos: state.todos.filter(todo=> todo.id !== action.id) //todo.id와 action.id가 같지 않은 것만 return해주라!
        };
        case "ISDONE_TODO":
        // return state;
        return {
            ...state,
            todos: state.todos.map(todo=>
                todo.id === action.id ? {...todo, isDone: !todo.isDone } : todo)
                //todo.id와 action.id가 일치하면 todo를 뿌려주고 isDone을 원래있던거와 반대로 해줌(isDone이 true면->false로/false면->true로) // 같지 않다면 원래 todo로!
        };
        default:
        return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const { todos } = initialState;
    const { text, todos } = state;
    const onChange = (e)=>{
        dispatch({
            type:"CHANGE_INPUT",
            text: e.target.value,
        })
        // console.log(e.target.value);
        console.log(text);
    }
    const onCreate = ()=>{
        dispatch({
            //dispatch가 action을 통해서 여기것들을 전달해줄거임!
            type:"CREATE_TODO",
            todo: {
                id: nextId.current,
                todotext: text,
                isDone: false,
            }
        })
        nextId.current += 1;
    }
    const nextId = useRef(4);
    const onDelete = (id)=>{
        dispatch({
            type:"DELETE_TODO",
            id: id
        })
    }
    const onToggle = (id)=>{
        dispatch({
            type:"ISDONE_TODO",
            id: id
        })
    }
  return (
    <div className="App" id="wrap">
      <CreateTodo text={text} onChange={onChange} onCreate={onCreate} />
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
