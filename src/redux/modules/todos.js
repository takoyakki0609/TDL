// import uuid from "react-uuid";
import shortid from "shortid";

/* 제성합니다 튜터님
  리덕스 왜이리 어렵죠
  이론들어보면 쉽다 해놓고 혼자쓰려니 못쓰겠습니다
  제발 저를 살려주세요 
*/

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    content: "",
    isDone: false,
  },
];

const ADD_TODO = 'todos/ADD_TODO'

const DELETE_TODO='todos/DELETE_TODO'

const SWITCH_TODO = 'todos/SWITCH_TODO'

export const addToto = (payload) => {
  return {type:ADD_TODO, payload}
}

export const deleteTodo = (payload) => {
  return {type:DELETE_TODO, payload}
}

export const switchTodo = (payload) => {
  return {type:SWITCH_TODO, payload}
}

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newAdd = action.payload;
      return [...state,newAdd]
      //TODO: 여기 작성

    case "DELETE_TODO":
      return;
      //TODO: 여기 작성

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
