// import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';
import './style.css';

// 쌤이랑 하기
function App() {
  // ex>
  // const name = "abc"

  //❤input이 name= list 하나라서 그냥 초기값 "" 이렇게 주면 됨 -> 객체일 필요가 없음!(하나니까!!!!)
  const [ list, setList ] = useState("");       //list를 state로 만든거!
  //1. 이렇게 해줘도 되고 -> CreateTodo.js에서 onChange={(e)=> onChange(e.target.value)}
  // const onChange = (list)=>{
  //                   //여기 list는 매개변수이름 -> abc 면
  //   //-input의 값을 입력할 때(input의 value가 변경될 때) 
  //   //-onChange 함수를 실행
  //   //-state인 list값을 input의 value값으로 업데이트
  //   //*onChange함수 : list의 값[list]을 바꿔줌 -> 받아온 애로!
  //   //[list]는 바로 변경 안됨 -> setList로만 수정 가능! (state로 만들어진 애는 set함수로만 수정가능✔)     / setList: input값 관리하는 애
  //   //setList(list)의 괄호 안에 담긴 값(list)으로 저기 위에 [list]를 변경해주겠다.
  //   setList(list);  //여기 list도 저기 위에 쓴 변수이름 -> abc
  //   console.log(list);      //[list]값이 바뀌는지 
  // }
  //2.  onChange={onChange}
  const onChange = (e)=>{
    const { value } = e.target;         //value값만 필요하니까!
    setList(value);  
    // console.log(e.target);           //event객체의 target은  -> input
    // console.log(e);                     //event객체
    // console.log(list);                  //input의 값을 바꿀 때마다 list가 변경됨
  }

  //**CreateTodo컴포넌트에서 +버튼을 클릭하면
  //todos배열에 할 일 객체가 추가됨
  const onCreate = ()=>{
    //[todos]는 그냥 변경할 수 없고 set함수 이용해서 변경해야함
    const listobj = {
      // id:4,           //id값 계속 새로 생길 때마다 변경되어야함 ->useRef이용
      id: nextId.current,
      list:list,        //앞 list-글자이름, key임!(string) : 뒤 list([list]임)
      isDone: false,
    }
    setTodos([...todos,listobj]);     //스프레드구문사용한거 /-> concat이용해서 합쳐도 됨!
    nextId.current += 1;              //계속해서 1씩 더해주겠다..!
    setList("");                      //input에 입력하고 +하면 -> input값이 비워지게 하는거!
  }
  const [ todos, setTodos ] = useState([                  //초기값으로 todos를 만든거(안에 {내용들!})
    {
      id:1,
      list:"해야할일1",
      isDone: false,
    },
    {
      id:2,
      list:"해야할일2",
      isDone: false,
    },
    {
      id:3,
      list:"해야할일3",
      isDone: false,
    },
  ])
  const nextId = useRef(todos.length+1);        //todos.length+1을 해줘야 원래 길이에서 1가 추가되어 새로 생긴애가 4부터가 됨!

  //**항목삭제 -> filter()이용
  //삭제 클릭시 id값을 인수로 받아서 
  //todos배열에서 id값이 다른 객체만 업데이트
  const onDelete = (id)=>{
                    //매개변수 id
    //onDelete함수는 삭제를 클릭할 때 전달되어야함  -> TodoLists는 중간애고 -> 실제로 전달할 애는 TodoList에 있음!
    //-> 그래서 TodoLists.js에서 onDelete를 먼저 불러주고 -> 그 다음 TodoList.js가서 onDelete해줌!
    //todos의 배열변경 -> set함수 : setTodos 이용
    setTodos(todos.filter(todo=> id !== todo.id));
  }
  return (
    <div className="App" id="wrap">
      {/* todos라는 배열자체를 담음 */}
      {/* <TodoLists todos={todos} name={name} /> */}
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate} />
      <TodoLists todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
