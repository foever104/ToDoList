import React, { useState, useEffect } from "react";
import Button from "./Button";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slice/todoSlice";
import toast from "react-hot-toast";
// import style from '../styles/modules/title.module.scss';
import "../styles/model.css";
import "../styles/button.css";
import { MdOutlineClose } from "react-icons/md";

function nowTime() {
  const date = new Date();
  let finalDate =
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }) +
    " " +
    date.toLocaleDateString();
  return finalDate;
}

function TodoModel({ type, todo, modelOpen, setModelOpen }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  // const [star, setStar] = useState("normal");

  //useEffect 設定欄位預設值
  useEffect(() => {
    if (type === "update") {
      //在更新資料的時候，在欄位填入原本的資料
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      //在新增資料的時候，清空欄位
      setTitle("");
      setStatus("incomplete");
    }
    //modelOpen 改變就是有視窗彈跳出來的時候
  }, [type, todo, modelOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status) {
      console.log(title, status);
      if (type === "add") {
        // console.log(star);
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: nowTime(),
            star: "normal"
            // time: new Date().toLocaleString()
          })
        );
        toast.success("Task added successfully");
      }
      // else {
      //   toast.error("Title should not be empty!");
      // }

      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task Updated successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModelOpen(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(title, status);
  // };
  return (
    <div>
      {modelOpen && (
        <div className="wrapper">
          <div className="model_container">
            <div
              className="closeButton"
              onClick={() => setModelOpen(false)}
              onKeyDown={() => setModelOpen(false)}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="formTitle">
                {type === "add" ? "Add " : "Update "} Task
              </h1>
              <label className="form_label" htmlFor="title">
                Title
                <input
                  className="form_input"
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="type">
                Status
                <select
                  className="form_select"
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>

              <div className="buttonContainer">
                {/* <Button type="submit" variant="primary">
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button> */}

                <Button type="submit" className="button_primary">
                  {type === "add" ? "Add Task" : "Update Task"}
                </Button>
                <Button
                  // type="submit"
                  className="button_secondary"
                  onClick={() => setModelOpen(false)}
                  // onKeyDown={() => setModelOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoModel;
