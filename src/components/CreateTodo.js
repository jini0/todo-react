import React from 'react';

//App3.js - 선생님이랑
const CreateTodo = ({ onChange, text, onCreate }) => {
    return (
        <div id="todoheader">
            <h2>to do list</h2>
            <div>
                <input type="text" id="todoInput" value={text} name="newlist" onChange={onChange}/>
                <button id="insertBtn" onClick={onCreate}>+</button>
            </div>
        </div>
    );
};
// const CreateTodo = ({ onChange, list, onCreate }) => {
//                                 //App2.js때문에 list-> newlist로 바꾼거
//     return (
//         <div id="todoheader">
//             <h2>to do list</h2>
//             {/* 1. */}
//             {/* <div> */}
//                 {/* input의 값을 입력(변경)했을 때 -> onChange */}
//                 {/* <input type="text" name="list" onChange={(e)=> onChange(e.target.value)}/>
//                 <button>+</button>
//             </div> */}
//             {/* 2. */}
//             <div>
//                 <input type="text" id="todoInput" value={list} name="newlist" onChange={onChange}/>
//                 <button id="insertBtn" onClick={onCreate}>+</button>

//                 {/* useReducer() 하려고 다시한거!-App2.js */}
//                 {/* <input type="text" id="todoInput" value={newlist} name="newlist" onChange={onChange}/>
//                 <button id="insertBtn" onClick={onCreate}>+</button> */}
//             </div>
//         </div>
//     );
// };

export default CreateTodo;