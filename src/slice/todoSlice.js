import { createSlice } from "@reduxjs/toolkit";
// let localStorage = require("localStorage");

const getInitialTodo = () => {
  // getting todo list
  const localTodoList = window.localStorage.getItem("todoList");
  console.log("list", localTodoList);
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", []);
  // console.log("null");
  return [];
};

const initialValue = {
  filterStatus: "all",
  todoList: getInitialTodo()
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      // action.payload就是
      // {id: 'c18e7c59-b050-4e5f-a9a7-f860595a72cf',
      // title: '8',
      // status: 'Incomplete',
      // time: '2023/9/5 下午4:51:11'}
      state.todoList.unshift(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.unshift({
          ...action.payload
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([
            {
              ...action.payload
            }
          ])
        );
      }
    },

    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
            todo.star = action.payload.star;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },

    // removeTodos: (state, action) => {
    //   return state.filter((item) => item.id !== action.payload);
    // },

    deleteTodo: (state, action) => {
      console.log(action.payload);

      //獲取當前localStorage內容
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        //將todoList內容轉化為json格式
        var todoListArr = JSON.parse(todoList);
        //逐一查看過todoArr內容，判斷id是否相同
        //要用 .filter() 來刪除 todo，因為 .filter() 會產生一個新的陣列，不會去改到原本的 todos 陣列
        todoListArr = todoListArr.filter((item) => item.id !== action.payload);

        // todoListArr.forEach((todo, index) => {
        //   if (todo.id === action.payload) {
        //     todoListArr.splice(index, 1); //splice: 從索引 = index 的位置開始，刪除 1 個元素
        //   }
        // });
        // 更新localStorage內容
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        //更新state的todoList內容
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    }
  }
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  updateFilterStatus
} = todoSlice.actions;
export default todoSlice.reducer;
