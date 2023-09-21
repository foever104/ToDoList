// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../slice/todoSlice";
// // console.log(todoReducer);
// export const store = configureStore({
//   reducer: {
//     todo: todoReducer
//   }
// });

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
